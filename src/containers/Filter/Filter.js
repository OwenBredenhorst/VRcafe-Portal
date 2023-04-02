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

                {  loggedIn && <Link onClick={toggleUploadVisibility}>
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
