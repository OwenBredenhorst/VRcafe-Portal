import React, {useEffect} from 'react';
import './Welcome.css';
import '../../Styling/Globalstyling.css';
import {Link} from 'react-router-dom';
import Navbar from '../../containers/Navbar/Navbar';
import {checkSession} from "../../functions/CheckSession";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const cardsData = [
    {
        id: 1,
        title: 'Mijn loonstrook',
        image: 'https://media.istockphoto.com/id/629170532/photo/coins-on-a-wooden-table-and-brown-gradient-background.jpg?s=612x612&w=0&k=20&c=gCiDIOvasiHXLkgqMGobcOQ_iwXefwgVVV8IGWXtRbk=',
        link: '/'
    },
    {
        id: 2,
        title: 'Mijn Gegevenes',
        image: 'https://www.emerce.nl/content/uploads/2020/09/digid-app-ingelogd.jpg',
        link: '/'
    },
    {
        id: 3,
        title: 'Mijn jaaropgaven',
        image: 'https://t3.ftcdn.net/jpg/04/22/96/52/360_F_422965230_WnyQ93M3iTjgpS0AiWlhBoL3dGqGC0IZ.jpg',
        link: '/'
    },
    {
        id: 4,
        title: 'Files',
        image: 'https://imageio.forbes.com/specials-images/imageserve/985895696/Datacenter/960x0.jpg',
        link: 'https://drive.google.com/drive/u/2/folders/11I9OZaxcLIU4OoyNdm4y0Ltu-LhudIMU'
    },

    // add more cards here
];


const Card = ({ id, title, image, link }) => {
    return (
        <div className="four-cards-card">
            <Link to={link}>
                <img src={image} alt={`Image ${id}`} />
                <h2>{title}</h2>
            </Link>
        </div>
    );
};

const Welcome = () => {

    useEffect(() => {
        checkSession();
    }, []);

    return (
        <div>
            <Navbar />

            <div className="four-cards-container">
                {cardsData.map(card => (
                    <Card key={card.id} {...card} />
                ))}
            </div>

            {/*<Footer />*/}
        </div>
    );
};

export default Welcome;