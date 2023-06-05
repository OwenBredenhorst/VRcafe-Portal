import React, {useState} from 'react';
import './Filter.css';
import {Link} from "react-router-dom";
import Upload from "../../components/Upload/Upload";
import isLoggedIn from "../../functions/Session";

const loggedIn = isLoggedIn();

function Filter() {
    const [isUploadVisible, setIsUploadVisible] = useState(false);

    const toggleUploadVisibility = () => {
        setIsUploadVisible(!isUploadVisible);
    };


    const reload = () => {

        setTimeout(() => {
            window.location.reload();
        }, 100);
    };

    return (

        <div className='App'>
            <div className="upload-container upload-visible">
                {loggedIn && isUploadVisible && <Upload/>}
            </div>
            <div className="grid-container">

                <Link onClick={reload} to="/Content">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>All</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.iconscout.com/icon/free/png-256/back-arrow-1767523-1502427.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#logo">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Logo's</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#document">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Documents</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#video">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Video's</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#icon">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Icons</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#image">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Image</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#banner">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Banner</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#giftcard">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Giftcard</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#vormgeving">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Vormgeving</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#illustraties">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Illustraties</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#picelpictogram">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Pixelpictogram</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#headset">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Headset</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#vrcafe">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>VRcafe</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link onClick={reload} to="/FilteredContent#airhocky">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Airhocky</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link onClick={reload} to="/FilteredContent#arcade">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Arcade</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#aanbod">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Aanbod</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link onClick={reload} to="/FilteredContent#bedrijfsuitje">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Bedrijfsuitje</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#escapeRoom">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>EscapeRoom</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link onClick={reload} to="/FilteredContent#experience">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Experience</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link onClick={reload} to="/FilteredContent#kinderfeestje">
                    <div className="grid-item-folder">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Kinderfeestje</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png"/></a>
                            </div>
                        </div>
                    </div>
                </Link>

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
        </div>


    );
}

export default Filter;
