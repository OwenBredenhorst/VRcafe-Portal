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


        const desertRef = ref(storage, item.folder + '/' + item.title);

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
                    {loggedIn &&  <a onClick={handleClick}><img className={"item-icon"}
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
                            src="https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/temp%2Fpdf-2127829_960_720.png?alt=media&token=64de39ae-04f0-4bad-b596-683cd286bcdf"
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


    useEffect(() => {
        const storage = getStorage();
        const listRefImages = ref(storage, 'image');
        const listRefVideo = ref(storage, 'video');
        const listRefDocument = ref(storage, 'document');

        const listRefBanner = ref(storage, 'banner');
        const listRefLogo= ref(storage, 'logo');
        const listRefIcon= ref(storage, 'icon');

        Promise.all([
            listAll(listRefImages),
            listAll(listRefVideo),
            listAll(listRefDocument),
            listAll(listRefBanner),
            listAll(listRefLogo),
            listAll(listRefIcon),
        ])
            .then(([resImages, resVideo, resDocument, resBanner,resLogo,resIcon]) => {
                const promisesImages = resImages.items.map((itemRef) => {
                    const thumbnailRef = ref(storage, `image/thumbnails/${itemRef.name}`);

                    return Promise.all([getDownloadURL(itemRef), getDownloadURL(thumbnailRef)]).then(([url, thumbnailUrl]) => {
                        console.log(thumbnailUrl)
                        const newItem = {
                            id: itemRef.name,
                            type: 'image',
                            title: itemRef.name,
                            preview: url,
                            thumbnail: thumbnailUrl, // add thumbnail URL
                            icon: 'p',
                            folder: 'image',
                        };
                        return newItem;
                    });
                });

                const promisesBanner = resBanner.items.map((itemRef) => {
                    const thumbnailRef = ref(storage, `banner/thumbnails/${itemRef.name}`);

                    return Promise.all([getDownloadURL(itemRef), getDownloadURL(thumbnailRef)]).then(([url, thumbnailUrl]) => {
                        console.log(thumbnailUrl)
                        const newItem = {
                            id: itemRef.name,
                            type: 'image',
                            title: itemRef.name,
                            preview: url,
                            thumbnail: thumbnailUrl,
                            icon: 'p',
                            folder: 'banner',
                        };
                        return newItem;
                    });
                });


                const promisesIcon = resIcon.items.map((itemRef) => {
                    const thumbnailRef = ref(storage, `icon/thumbnails/${itemRef.name}`);

                    return Promise.all([getDownloadURL(itemRef), getDownloadURL(thumbnailRef)]).then(([url, thumbnailUrl]) => {
                        console.log(thumbnailUrl)
                        const newItem = {
                            id: itemRef.name,
                            type: 'image',
                            title: itemRef.name,
                            preview: url,
                            thumbnail: thumbnailUrl,
                            icon: 'p',
                            folder: 'icon',
                        };
                        return newItem;
                    });
                });


                const promisesLogo = resLogo.items.map((itemRef) => {
                    const thumbnailRef = ref(storage, `logo/thumbnails/${itemRef.name}`);

                    return Promise.all([getDownloadURL(itemRef), getDownloadURL(thumbnailRef)]).then(([url, thumbnailUrl]) => {
                        console.log(thumbnailUrl)
                        const newItem = {
                            id: itemRef.name,
                            type: 'image',
                            title: itemRef.name,
                            preview: url,
                            thumbnail: thumbnailUrl,
                            icon: 'p',
                            folder: 'logo',
                        };
                        return newItem;
                    });
                });



                const promisesVideo = resVideo.items.map((itemRef) => {
                    return getDownloadURL(itemRef).then((url) => {
                        const newItem = {
                            id: itemRef.name,
                            type: 'video',
                            title: itemRef.name,
                            preview: url,
                            icon: 'v',
                            folder: 'video',
                        };
                        return newItem;
                    });
                });

                const promisesDocument = resDocument.items.map((itemRef) => {
                    return getDownloadURL(itemRef).then((url) => {
                        const newItem = {
                            id: itemRef.name,
                            type: 'document',
                            title: itemRef.name,
                            preview: url,
                            icon: 'd',
                            folder: 'document',
                        };
                        return newItem;
                    });
                });



                Promise.all([...promisesImages, ...promisesBanner, ...promisesLogo, ...promisesIcon, ...promisesVideo, ...promisesDocument]).then(
                    (newItems) => {
                        setItems(newItems);
                        setIsLoading(false);
                    }
                );
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);




    return (
        <div>

            <Toaster/>
            <Navbar/>

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
            {/*<Footer />*/}
        </div>
    );
};

export default Content;