import React, {useEffect, useState} from 'react';
import './Content.css';
import '../../Styling/Globalstyling.css';
import Navbar from '../../containers/Navbar/Navbar';
import Filter from '../../containers/Filter/Filter';
import {Document, Page, pdfjs} from 'react-pdf';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {getStorage, ref, listAll, getDownloadURL} from "firebase/storage";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
let test = true
let items = [];



const GridItem = ({item}) => (

    <div className="grid-item">
        <div className="item-header">
            <FontAwesomeIcon icon={[items.icon]}/>
            <h3>{item.title}</h3>
        </div>
        <div className="item-preview">
            {item.type === 'image' && <img src={item.preview} alt={item.preview}/>}
            {item.type === 'video' && (
                <video controls>
                    <source src={item.preview} type="video/mp4"/>
                </video>
            )}
            {item.type === 'document' && (
                <img
                    src="https://cdn2.iconfinder.com/data/icons/adobe-acrobat-pdf/512/download-pdf-file-folder-storage-512.png"
                    alt={item.title}/>
            )}
        </div>
    </div>
);


const Grid = ({items}) => (
    <div className="grid-container">
        {items.map(item => (
            <GridItem key={item.id} item={item}/>
        ))}
    </div>
);
const Content = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storage = getStorage();
        const listRef = ref(storage);



        listAll(listRef)
            .then(res => {
                const promises = res.items.map(itemRef => {
                    return getDownloadURL(itemRef).then(url => {

                        const newItem = {
                            id: itemRef.name,
                            type: 'image',
                            title: itemRef.name,
                            preview: url,
                            icon: 'fa fa-camera'
                        };
                        return newItem;
                    });
                });

                Promise.all(promises).then(newItems => {
                    if (items.length < res.items.length) {
                        setItems(items => [...items, ...newItems.slice(0, res.items.length - items.length)]);
                    }
                });
            })
            .catch(error => {
                console.error(error);
            });

        test = false
    }, []);



    return (
        <div>
            <Navbar/>
            <Filter/>

            <div className="App">
                <Grid items={items}/>
            </div>

            {/*<Footer />*/}
        </div>
    );
};

export default Content;