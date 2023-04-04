import React, { useState, useEffect } from 'react';
import './Welcome.css';
import '../../Styling/Globalstyling.css';
import {Link} from 'react-router-dom';
import Navbar from '../../containers/Navbar/Navbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import checkSession from "../../functions/CheckSession";
import isLoggedIn from "../../functions/Session";
import {Toaster} from "react-hot-toast";

const cardsData = [
    {
        id: 1,
        title: 'Mijn loonstrook',
        image: 'https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/temp%2Fback.png?alt=media&token=e19c480b-3c7f-4b6c-ba14-fb97ac955bb1',
        link: '/'
    },
    {
        id: 2,
        title: 'Mijn Gegevenes',
        image: 'https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/temp%2Fback.png?alt=media&token=e19c480b-3c7f-4b6c-ba14-fb97ac955bb1',
        link: '/'
    },
    {
        id: 3,
        title: 'Mijn jaaropgaven',
        image: 'https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/temp%2Fback.png?alt=media&token=e19c480b-3c7f-4b6c-ba14-fb97ac955bb1',
        link: '/'
    },
    {
        id: 4,
        title: 'Files',
        image: 'https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/temp%2Fback.png?alt=media&token=e19c480b-3c7f-4b6c-ba14-fb97ac955bb1',
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
}



const Welcome = () => {
    const loggedIn = isLoggedIn();


    useEffect(() => {
        const authenticated = checkSession();
        if (!authenticated) {
            window.location.href = "/login";
        }
    }, []);



    return (
        <div>
            <Navbar />
            <Toaster />


            {loggedIn && <div className="four-cards-container">
                    {cardsData.map((card) => (
                        <Card key={card.id} {...card} />
                    ))}
                </div>}

            {/*<Footer />*/}
        </div>
    );

};



export default Welcome;
