import React, {useEffect} from 'react';
import './Content.css';
import '../../Styling/Globalstyling.css';
import Navbar from '../../containers/Navbar/Navbar';
import Filter from '../../containers/Filter/Filter';
import { Document, Page, pdfjs } from 'react-pdf';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getStorage, ref, listAll } from "firebase/storage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import checkSession from "../../functions/CheckSession";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

let items = [];
const GridItem = ({ item }) => (
    <div className="grid-item">
        <div className="item-header">
            <FontAwesomeIcon icon={[items.icon]} />
            <h3>{item.title}</h3>
        </div>
        <div className="item-preview">
            {item.type === 'image' && <img src={item.name} alt={item.name} />}
            {item.type === 'video' && (
                <video controls>
                    <source src={item.name} type="video/mp4" />
                </video>
            )}
            {item.type === 'document' && (
                <img src="https://cdn2.iconfinder.com/data/icons/adobe-acrobat-pdf/512/download-pdf-file-folder-storage-512.png" alt={item.title} />
            )}
        </div>
    </div>
);


const Grid = ({ items }) => (
    <div className="grid-container">
        {items.map(item => (
            <GridItem key={item.id} item={item} />
        ))}
    </div>
);

const Content = () => {
    const storage = getStorage();
    const storageRef = ref(storage);

    useEffect(() => {
        listAll(storageRef)
            .then((res) => {
                let images = res.items.filter((item) => {
                    return true;
                });
                console.log(images.map((image) => image.name)); // log the names of images
                items = images;

                console.log(items.name)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <Filter />

            <div className="App">
                <Grid items={items} />
            </div>

            {/*<Footer />*/}
        </div>
    );
};

export default Content;