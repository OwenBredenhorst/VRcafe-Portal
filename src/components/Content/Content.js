import React from 'react';
import './Content.css';
import {Link} from 'react-router-dom';
import Navbar from '../../containers/Navbar/Navbar';
import Filter from '../../containers/Filter/Filter';
import Footer from '../../containers/Footer/Footer';
import { Document, Page, pdfjs } from 'react-pdf';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faVideo } from '@fortawesome/free-solid-svg-icons';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const items = [
    {
        id: 1,
        type: 'image',
        title: 'My vacation photo',
        preview: 'https://www.vrcafehaarlem.nl/wp-content/uploads/2021/05/cropped-cropped-logo.png',
        icon: 'faVideo',
    },
    {
        id: 2,
        type: 'video',
        title: 'My favorite song',
        preview: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        icon: 'fa fa-music',
    },
    {
        id: 3,
        type: 'document',
        title: 'My resume',
        preview: 'https://www.orimi.com/pdf-test.pdf',
        icon: 'fa fa-file',
    },
    {
        id: 1,
        type: 'image',
        title: 'My vacation photo',
        preview: 'https://i0.wp.com/www.vrcafehaarlem.nl/wp-content/uploads/2022/09/lasergamen-in-vrcafe-1.png?fit=800%2C582&ssl=1',
        icon: 'fa fa-camera',
    },
    {
        id: 3,
        type: 'document',
        title: 'My resume',
        preview: 'https://example.com/my-resume.pdf',
        icon: 'fa fa-file',
    },
    {
        id: 1,
        type: 'image',
        title: 'My vacation photo',
        preview: 'https://i0.wp.com/www.vrcafehaarlem.nl/wp-content/uploads/2023/01/6FA82D5B-7D8F-4823-8E54-1239F8EC6C88-e1674210161496.png?resize=911%2C1024&ssl=1',
        icon: 'fa fa-camera',
    },

    {
        id: 3,
        type: 'document',
        title: 'My resume',
        preview: 'https://example.com/my-resume.pdf',
        icon: 'fa fa-file',
    },
    {
        id: 1,
        type: 'image',
        title: 'icons',
        preview: 'https://i0.wp.com/www.vrcafehaarlem.nl/wp-content/uploads/2021/06/VR@HOME-HOME-1.png?fit=1920%2C1080&ssl=1',
        icon: 'faVideo',
    },


];
const GridItem = ({ item }) => (
    <div className="grid-item">
        <div className="item-header">
            <FontAwesomeIcon icon={[items.icon]} />
            <h3>{item.title}</h3>
        </div>
        <div className="item-preview">
            {item.type === 'image' && <img src={item.preview} alt={item.title} />}
            {item.type === 'video' && (
                <video controls>
                    <source src={item.preview} type="video/mp4" />
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
    return (
        <div>
            <Navbar />
            <Filter />

            <div className="App">
                <Grid items={items} />
            </div>

            <Footer />
        </div>
    );
};

export default Content;