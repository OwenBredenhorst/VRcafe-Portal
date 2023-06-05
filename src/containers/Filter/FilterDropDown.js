import React, {useState} from 'react';
import './Filter.css';
import {Link} from "react-router-dom";
import Upload from "../../components/Upload/Upload";
import isLoggedIn from "../../functions/Session";

const loggedIn = isLoggedIn();

function FilterDropDown() {

    const [isUploadVisible, setIsUploadVisible] = useState(false);

    const toggleUploadVisibility = () => {
        setIsUploadVisible(!isUploadVisible);
    };
    const reload = () => {

        setTimeout(() => {
            window.location.reload();
        }, 100);
    };


    const folderItems = [
        {
            id: 1,
            title: 'Logo',
            icon: 'https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png',
            link: '',
            menuItems: [
                {id: 1, title: 'Logo Achtergrond', link: '/FilteredContent#logo'},
                {id: 2, title: 'Logo Slogan', link: '/FilteredContent#logo'},
                {id: 3, title: 'Logo Sterren', link: '/FilteredContent#logo'},
            ],
        },
        {
            id: 2,
            title: 'Vormgeving',
            icon: 'https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png',
            link: '',
            menuItems: [
                {id: 1, title: 'Design', link: '/FilteredContent#design'},
                {id: 2, title: 'Isomerty', link: '/FilteredContent#isomerty'},
                {id: 3, title: 'Picelpictogram', link: '/FilteredContent#picelpictogram'},
                {id: 4, title: 'Illustraties', link: '/FilteredContent#illustraties'},
                {id: 4, title: 'Video', link: '/FilteredContent#video'},
            ],
        },

        {
            id: 3,
            title: 'VR Aanbod',
            icon: 'https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png',
            link: '',
            menuItems: [
                {id: 1, title: 'VR Bedrijfsuitje', link: '/FilteredContent#bedrijfsuitje'},
                {id: 2, title: 'VR Escaperoom', link: '/FilteredContent#escapeRoom'},
                {id: 3, title: 'VR Experience', link: '/FilteredContent#experience'},
                {id: 4, title: 'VR Kinderfeestje', link: '/FilteredContent#kinderfeestje'},
                {id: 5, title: 'VR lasergamen', link: '/FilteredContent#lasergamen'},
                {id: 6, title: 'VR Op locatie', link: '/FilteredContent#oplocatie'},
                {id: 7, title: 'VR Racen', link: '/FilteredContent#racen'},
                {id: 8, title: 'VR @HOME', link: '/FilteredContent#home'},
            ],
        },
        {
            id: 4,
            title: 'Seizoenen & Feestdagen',
            icon: 'https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png',
            link: '',
            menuItems: [
                {id: 1, title: 'Herfst ', link: '/FilteredContent#herfst'},
                {id: 2, title: 'Kerst ', link: '/FilteredContent#kerst'},
                {id: 3, title: 'Lente ', link: '/FilteredContent#lente'},
                {id: 4, title: 'Sinterklaas ', link: '/FilteredContent#sinterklaas'},
                {id: 5, title: 'Valtentijnsdag  ', link: '/FilteredContent#valtentijnsdag'},
            ],
        },
        {
            id: 5,
            title: 'Toernooi',
            icon: 'https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png',
            link: '',
            menuItems: [
                {id: 1, title: 'Super Smash ', link: '/FilteredContent#supersmash'},
            ],
        },
        {
            id: 6,
            title: 'Fotografie',
            icon: 'https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png',
            link: '',
            menuItems: [
                {id: 1, title: 'Headset ', link: '/FilteredContent#headset'},
                {id: 2, title: 'Consumptie ', link: '/FilteredContent#consumptie'},
                {id: 3, title: 'Giftcard ', link: '/FilteredContent#giftcard'},
                {id: 4, title: 'Airhocky ', link: '/FilteredContent#airhocky'},
                {id: 5, title: 'Arcade   ', link: '/FilteredContent#arcade'},
                {id: 6, title: 'VRcafe   ', link: '/FilteredContent#vrcafe'},
                {id: 7, title: 'Personeel', link: '/FilteredContent#personeel'},
            ],
        },

    ];

    const [openItemId, setOpenItemId] = useState(null);

    const toggleMenu = (itemId) => {
        setOpenItemId(openItemId === itemId ? null : itemId);
    };

    const handleMenuClick = () => {
        // Perform any additional logic before navigating
        setOpenItemId(null); // Close the menu after clicking a menu item
    };

    return (
        <>
            <div className="upload-container upload-visible">
                {loggedIn && isUploadVisible && <Upload/>}
            </div>
            <div className="grid-container">

                {folderItems.map((folderItem) => (
                    <div key={folderItem.id}>
                        <Link onClick={() => toggleMenu(folderItem.id)} to={folderItem.link}>
                            <div className="grid-item-folder">
                                <div className="item-header">
                                    <div className="item-header-left">
                                        <h3>{folderItem.title}</h3>
                                    </div>
                                    <div className="item-header-right">
                                        <a>
                                            <img
                                                className="item-icon"
                                                src={folderItem.icon}
                                                alt="Folder Icon"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        {openItemId === folderItem.id && (
                            <div>
                                <ul>
                                    {folderItem.menuItems.map((menuItem) => (
                                        <Link to={menuItem.link}>
                                            <div onClick={reload} className="item-header">
                                                <div className="item-header-left">
                                                    <h3>{menuItem.title}</h3>
                                                </div>
                                                <div className="item-header-right">
                                                    <a>
                                                        <img
                                                            className="item-icon"
                                                            src="https://firebasestorage.googleapis.com/v0/b/vrcafeportal-1f687.appspot.com/o/picelpictogram%2Fbenodigdheden(checklijst).png?alt=media&token=c36c8133-0ed0-4206-ab9a-837ac670203a"
                                                            alt="Folder Icon"/>
                                                    </a>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}

                {loggedIn && <Link onClick={toggleUploadVisibility}>
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Upload</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>}

            </div>
        </>


    );
}

export default FilterDropDown;
