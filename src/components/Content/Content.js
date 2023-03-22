import React, {useEffect, useState} from 'react';
import './Content.css';
import '../../Styling/Globalstyling.css';
import Navbar from '../../containers/Navbar/Navbar';
import Filter from '../../containers/Filter/Filter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {getStorage, ref, listAll, getDownloadURL} from "firebase/storage";

let test = true
let items = [];


const GridItem = ({ item }) => {
    const isImage = item.type === 'image';
    const isVideo = item.type === 'video';
    const isDocument = item.type === 'document';

    return (
        <div className="grid-item">
            <div className="item-header">
                <h3>{item.title}</h3>
            </div>
            <div className="item-preview">
                {isImage && (
                    <a href={item.preview} target="_blank" rel="noopener noreferrer">
                        <img src={item.preview} alt={item.title} />
                    </a>
                )}
                {isVideo && (
                    <video controls>
                        <source src={item.preview} type="video/mp4" />
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

    useEffect(() => {
        const storage = getStorage();
        const listRefImages = ref(storage, "images");
        const listRefVideo = ref(storage, "video");
        const listRefDocument= ref(storage, "document");

        Promise.all([
            listAll(listRefImages),
            listAll(listRefVideo),
            listAll(listRefDocument)
        ])
            .then(([resImages, resVideo, resDocument]) => {
                const promisesImages = resImages.items.map(itemRef => {
                    return getDownloadURL(itemRef).then(url => {
                        const newItem = {
                            id: itemRef.name,
                            type: 'image',
                            title: itemRef.name,
                            preview: url,
                            icon: 'p'
                        };
                        return newItem;
                    });
                });

                const promisesVideo = resVideo.items.map(itemRef => {
                    return getDownloadURL(itemRef).then(url => {
                        const newItem = {
                            id: itemRef.name,
                            type: 'video',
                            title: itemRef.name,
                            preview: url,
                            icon: 'v'
                        };
                        return newItem;
                    });
                });

                const promisesDocument = resDocument.items.map(itemRef => {
                    return getDownloadURL(itemRef).then(url => {
                        const newItem = {
                            id: itemRef.name,
                            type: 'document',
                            title: itemRef.name,
                            preview: url,
                            icon: 'd'
                        };
                        return newItem;
                    });
                });

                Promise.all([...promisesImages, ...promisesVideo, ...promisesDocument]).then(newItems => {
                    setItems(newItems);
                    setIsLoading(false);
                });
            })
            .catch(error => {
                console.error(error);
            });

    }, []);




    return (
        <div>
            <Navbar/>
            <Filter/>
            {isLoading ? (
                <div className="loading-animation">
                    <div className="loadingio-spinner-dual-ball-3v8tqe2smu4">
                        <div className="ldio-lips0vs5tu">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            ) : (
            <div className="App">
                <Grid items={items}/>
            </div>
            )}
            {/*<Footer />*/}
        </div>
    );
};

export default Content;