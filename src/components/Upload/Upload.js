import React, { useState, useEffect } from 'react';
import '../../Styling/Globalstyling.css';
import Navbar from '../../containers/Navbar/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import checkSession from "../../functions/CheckSession";



const Upload = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const authenticated = checkSession();
        setIsLoading(false);
        if (!authenticated) {
            window.location.href = "/login";
        }
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Navbar />

            <div className="four-cards-container">

            </div>

            {/*<Footer />*/}
        </div>
    );
};



export default Upload;
