import React, { useState, useEffect } from 'react';
import './Information.css';
import '../../Styling/Globalstyling.css';
import Navbar from '../../containers/Navbar/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Toaster} from "react-hot-toast";



const Information = () => {


    useEffect(() => {

    }, []);



    return (
        <div>
            <Navbar />
            <Toaster />

            <div className="help-page">
                <h1 className="help-page__title">Login pagina</h1>
                <div className="help-page__content">
                    <div className="help-page__image">
                        <img src="https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/info%2Flogin.png?alt=media&token=18b5b1a4-f4ba-4ea5-aa5f-418f46d2e2e9" alt="Website Usage" />
                    </div>
                    <div className="help-page__description">
                        <h2 className="help-page__step">Stap 1: Ga naar de login-pagina van de website.</h2>
                        <p className="help-page__text">
                            Als werknemer kun je inloggen door te klikken op de "Inloggen" knop. Voer je gebruikersnaam en wachtwoord in en klik op "Inloggen" om toegang te krijgen tot het volledige account met alle rechten.
                        </p>
                        <h2 className="help-page__step">Stap 2: Inloggen zonder account</h2>
                        <p className="help-page__text">
                            Als je een bedrijf bent en geen account hebt, kun je onderaan de pagina klikken op "Login zonder account". Hiermee kun je de website gebruiken, maar met beperkte rechten en functionaliteiten.
                            Nadat je hebt gekozen voor "Login zonder account", kun je nog steeds gebruikmaken van bepaalde functies en informatie op de website, maar sommige specifieke rechten zijn mogelijk niet beschikbaar.
                        </p>
                        <h2 className="help-page__step">Stap 3: Let op!</h2>
                        <p className="help-page__text">
                            Opmerking: Zorg ervoor dat je de juiste inloggegevens gebruikt en volg de instructies op de login-pagina om een soepele toegang tot de website te garanderen.
                        </p>
                    </div>
                </div>
            </div>

            <div className="help-page">
                <h1 className="help-page__title">Navigatiebalk</h1>
                <div className="help-page__content">
                    <div className="help-page__image">
                        <img src="https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/info%2FNavbar.png?alt=media&token=dd97ebc7-b2ec-41fe-8121-406fc12049a0" alt="Website Usage" />
                    </div>
                    <div className="help-page__description">
                        <h2 className="help-page__step">Stap 1: Content</h2>
                        <p className="help-page__text">
                            Als je snel terug wilt naar de startpagina, klik dan op het VRcafe-logo. Dit brengt je direct naar de homepagina.                        </p>
                        <h2 className="help-page__step">Stap 2: Info</h2>
                        <p className="help-page__text">
                            Klik op de tweede optie genaamd "Info" om alle informatie over de website te bekijken
                        </p>
                        <h2 className="help-page__step">Stap 3: Logout</h2>
                        <p className="help-page__text">
                            Klik op de derde optie genaamd "Logout" om uit te loggen. Hierdoor wordt je naar het inlogscherm gebracht.                        </p>

                        <h2 className="help-page__step">Stap 3: Files</h2>
                        <p className="help-page__text">
                            Klik op de eerste optie genaamd "Files" om toegang te krijgen tot de locatie waar we alle afbeeldingen, video's en documenten opslaan.                        </p>
                    </div>
                </div>
            </div>

            <div className="help-page">
                <h1 className="help-page__title">Landing pagina</h1>
                <div className="help-page__content">
                    <div className="help-page__image">
                        <img src="https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/info%2Fcontent.png?alt=media&token=03ee1aa5-e91b-4b12-87de-3afb6ee9252b" alt="Website Usage" />
                    </div>
                    <div className="help-page__description">
                        <h2 className="help-page__step">Stap 1: Content</h2>
                        <p className="help-page__text">
                            Als je nog niet bent ingelogd, zie je drie opties op de pagina.
                        </p>
                            <h2 className="help-page__step">Stap 2: Files</h2>
                        <p className="help-page__text">
                            Klik op de eerste optie genaamd "Files" om toegang te krijgen tot de locatie waar we alle afbeeldingen, video's en documenten opslaan.                        </p>

                        <h2 className="help-page__step">Stap 3: Google drive</h2>
                        <p className="help-page__text">
                            Als je op zoek bent naar specifieke content, zoals video's, afbeeldingen en documenten, kun je ook optie 2 gebruiken. Deze optie is een link naar de Google Drive van VRcafe Haarlem, waar alle content wordt bewaard. Als je geen toegang hebt tot de drive, neem dan contact op met info@vrcafehaarlem.nl voor verdere ondersteuning.
                        </p>
                        <h2 className="help-page__step">Stap 3: VRcafe</h2>
                        <p className="help-page__text">
                            een derde optie die leidt naar de website van VRcafe Haarlem. Deze link biedt algemene informatie en details over het café en de diensten die zij aanbieden.
                        </p>
                    </div>
                </div>
            </div>


            <div className="help-page">
                <h1 className="help-page__title">VRcafe Drive</h1>
                <div className="help-page__content">
                    <div className="help-page__image">
                        <img src="https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/info%2Ffilter%20content.png?alt=media&token=e7d6e5fe-29b9-4680-86d3-19cd2ff20d37" alt="Website Usage" />
                    </div>
                    <div className="help-page__description">
                        <h2 className="help-page__step">Stap 1: Content</h2>
                        <p className="help-page__text">
                            Zodra je op de pagina bent, zie je een preset-filter met isometrische content. Scroll naar beneden om alle items in deze categorie te zien. </p>
                        <h2 className="help-page__step">Stap 2: Afbeeldingen</h2>
                        <p className="help-page__text">
                            Klik op het gewenste item om een foto met goede kwaliteit te bekijken.
                        </p>
                    </div>
                </div>
            </div>



            <div className="help-page">
                <h1 className="help-page__title">Filter</h1>
                <div className="help-page__content">
                    <div className="help-page__image">
                        <img src="https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/info%2Ffilter.png?alt=media&token=935412c7-46f4-4a15-be20-f1eeef90ed1d" alt="Website Usage" />
                    </div>
                    <div className="help-page__description">
                        <h2 className="help-page__step">Stap 1: Filteren</h2>
                        <p className="help-page__text">
                            Als je andere content wilt zien, maak dan gebruik van de filters op de pagina.  Selecteer een optie binnen het mapje om de content te bekijken die bij die optie hoort.</p>
                    </div>
                </div>
            </div>

        </div>
    );

};



export default Information;
