import React from 'react';
import './Welcome.css';
import '../../Styling/Globalstyling.css';
import {Link} from 'react-router-dom';
import Navbar from '../../containers/Navbar/Navbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const cardsData = [
    {
        id: 1,
        title: 'Files',
        image: 'https://imageio.forbes.com/specials-images/imageserve/985895696/Datacenter/960x0.jpg',
        link: '/Content'
    },
    {
        id: 2,
        title: 'Google drive',
        image: 'https://blogthinkbig.com/wp-content/uploads/sites/4/2020/01/Google-Drive-Empresa-Fondo.jpg?fit=1500%2C1000',
        link: 'https://drive.google.com/drive/u/2/folders/11I9OZaxcLIU4OoyNdm4y0Ltu-LhudIMU'
    },
    {
        id: 3,
        title: 'VRcafe Website',
        image: 'https://www.vrcafehaarlem.nl/wp-content/uploads/2023/03/VRcafe-gevel-banne-1r.jpg',
        link: 'https://www.vrcafehaarlem.nl/'
    },
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

const WelcomeBedrijf = () => {
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

export default WelcomeBedrijf;