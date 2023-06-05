import React, {useEffect, useState} from 'react';
import './Content.css';
import '../../Styling/Globalstyling.css';
import Navbar from '../../containers/Navbar/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {getStorage, ref, listAll, getDownloadURL, deleteObject} from "firebase/storage";
import Upload from "../Upload/Upload";
import isLoggedIn from "../../functions/Session";
import toast, {Toaster} from "react-hot-toast";
import {Link} from "react-router-dom";
import Filter from "../../containers/Filter/Filter";
import FilterDropDown from "../../containers/Filter/FilterDropDown";

let items = [];

const hash = window.location.hash.substr(1);

const loggedIn = isLoggedIn();

const GridItem = ({item}) => {
    const isImage = item.type === 'image';
    const isVideo = item.type === 'video';
    const isDocument = item.type === 'document';


    /**
     * It deletes the file from the storage bucket
     */
    const handleClick = () => {
        const storage = getStorage();
        const desertRef = ref(storage, hash + '/' + item.title);

        // Delete the file
        deleteObject(desertRef).then(() => {
            toast.success("deleted file")


            setTimeout(() => {
                window.location.reload();
            }, 1000);

        }).catch((error) => {
            toast.error("Error deleting file: " + error)
        });
    };




    return (
        <div className="grid-item">
            <div className="item-header">
                <div className="item-header-left">
                    <h3>{item.title}</h3>
                </div>
                <div className="item-header-right">
                    {loggedIn && <a onClick={handleClick}><img className={"item-icon"}
                                                               src="https://cdn-icons-png.flaticon.com/512/656/656857.png"/></a>}
                </div>
            </div>
            <div className="item-preview">
                {isImage && (
                    <a href={item.preview} target="_blank" rel="noopener noreferrer">
                        <img src={item.thumbnail} alt={item.title}/>
                    </a>
                )}
                {isVideo && (
                    <video controls>
                        <source src={item.preview} type="video/mp4"/>
                    </video>
                )}
                {isDocument && (
                    <a href={item.preview} target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/adobe-acrobat-pdf/512/download-pdf-file-folder-storage-512.png"
                            alt={item.title}
                        />
                    </a>
                )}
            </div>
        </div>
    );
};


const Grid = ({items}) => (
    <div className="grid-container">
        {items.map(item => (
            <GridItem key={item.id} item={item}/>
        ))}
    </div>
);
const Content = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isUploadVisible, setIsUploadVisible] = useState(false);

    useEffect(() => {
        loadContent();
        loadContent();
    }, []);

    const loadContent = () => {

        const hash = window.location.hash.substr(1);
        const storage = getStorage();
        const listRefImages = ref(storage, hash);


        Promise.all([
            listAll(listRefImages),
        ])
            .then(([resImages]) => {
                const promisesImages = resImages.items
                    .map((itemRef) => {

                        let thumbnailRef;
                        const commonHashes = [
                            "image",
                            "logo",
                            "banner",
                            "icon",
                            "giftcard",
                            "vormgeving",
                            "picelpictogram",
                            "logo",
                            "design",
                            "isomerty",
                            "picelpictogram",
                            "illustraties",
                            "bedrijfsuitje",
                            "escapeRoom",
                            "experience",
                            "kinderfeestje",
                            "lasergamen",
                            "oplocatie",
                            "racen",
                            "home",
                            "herfst",
                            "kerst",
                            "lente",
                            "sinterklaas",
                            "valtentijnsdag",
                            "supersmash",
                            "headset",
                            "consumptie",
                            "giftcard",
                            "airhocky",
                            "arcade",
                            "vrcafe",
                            "personeel"
                        ];

                        const allowedExtensions = ['.mp4', '.avi', '.mov', '.wmv'];
                        const fileExtension = itemRef.fullPath.substring(itemRef.fullPath.lastIndexOf('.'));

                        const isVideo = allowedExtensions.includes(fileExtension);

                        const allowedFileExtensions = ['.pdf'];
                        const PDFExtension = itemRef.fullPath.substring(itemRef.fullPath.lastIndexOf('.'));

                        const isPDF = allowedFileExtensions.includes(PDFExtension);


                        if (isVideo) {
                            thumbnailRef = ref(storage, "temp/videoTemp.png");
                        } else if (isPDF) {
                            thumbnailRef = ref(storage, "temp/pdf-2127829_960_720.png");
                        } else {
                            try {
                                if (commonHashes.includes(hash)) {
                                    thumbnailRef = ref(storage, `${hash}/thumbnails/${itemRef.name}`);
                                } else {
                                    thumbnailRef = ref(storage, "temp/error.png");
                                }
                            } catch (error) {
                             console.log(error);
                            }
                        }


                        return Promise.all([getDownloadURL(itemRef), getDownloadURL(thumbnailRef)])
                            .then(([url, thumbnailUrl]) => {
                                const newItem = {
                                    id: itemRef.name,
                                    type: "image",
                                    title: itemRef.name,
                                    preview: url,
                                    thumbnail: thumbnailUrl,
                                    icon: "p",
                                    folder: `${hash}`,
                                };
                                return newItem;
                            });

                    });


                Promise.all([...promisesImages])
                    .then((newItems) => {
                        setItems(newItems);
                        setIsLoading(false);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    }



    return (
        <div>

            <Toaster/>
            <Navbar/>
            <div className="upload-container upload-visible">
                {loggedIn && isUploadVisible && <Upload/>}
            </div>

            {isLoading ? (
                <div className='loading-animation'>
                    <div className='loadingio-spinner-dual-ball-3v8tqe2smu4'>
                        <div className='ldio-lips0vs5tu'>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='App'>
                    <FilterDropDown />
                    <Grid items={items}/>
                </div>
            )}
        </div>
    );
};

export default Content;