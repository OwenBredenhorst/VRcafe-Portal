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

let items = [];


const loggedIn = isLoggedIn();

const GridItem = ({item}) => {
    const isImage = item.type === 'image';
    const isVideo = item.type === 'video';
    const isDocument = item.type === 'document';


    // TODO Mogelijk komt hier dan alle tags zoals / 1080p \ icon /  banner \ en meer

    const handleClick = () => {

        console.log(item.type + '/' + item.title);
        const storage = getStorage();


        const desertRef = ref(storage, item.type + '/' + item.title);

        // Delete the file
        deleteObject(desertRef).then(() => {
            toast.success("deleted file")


            setTimeout(() => {
                window.location.reload();
            }, 1000);

        }).catch((error) => {
            // Uh-oh, an error occurred!
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
        const storage = getStorage();
        const listRefImages = ref(storage, 'image');
        const listRefVideo = ref(storage, 'video');
        const listRefDocument = ref(storage, 'document');

        Promise.all([
            listAll(listRefImages),
            listAll(listRefVideo),
            listAll(listRefDocument),
        ])
            .then(([resImages, resVideo, resDocument]) => {
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
                        };
                        return newItem;
                    });
                });

                Promise.all([...promisesImages, ...promisesVideo, ...promisesDocument]).then(
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


    const toggleUploadVisibility = () => {
        setIsUploadVisible(!isUploadVisible);
    };

    const reload = () => {

        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    return (
        <div>

            <Toaster/>
            <Navbar/>
            <div className="upload-container upload-visible">
                {loggedIn && isUploadVisible && <Upload/>}
            </div>
            <nav className="navbar">
                <div className="checkbox-container">

                    <Link onClick={reload} to="/FilteredContent#icons">
                        <li className="navbar-item-filter">Icons</li>
                    </Link>
                    <Link onClick={reload} to="/FilteredContent#video">
                        <li className="navbar-item-filter">Videos</li>
                    </Link>
                    <Link onClick={reload} to="/FilteredContent#document">
                        <li className="navbar-item-filter">Documents</li>
                    </Link>
                    <Link onClick={reload} to="/FilteredContent#image">
                        <li className="navbar-item-filter">Banners</li>
                    </Link>
                    <Link onClick={reload} to="/FilteredContent#Flyers">
                        <li className="navbar-item-filter">Flyers</li>
                    </Link>

                    <div className="upload-indicator-container">
                        {loggedIn && <button className="upload-indicator" onClick={toggleUploadVisibility}>Upload</button>}

                    </div>

                </div>
            </nav>
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
                    <Filter />
                    <Grid items={items}/>

                </div>
            )}
            {/*<Footer />*/}
        </div>
    );
};

export default Content;