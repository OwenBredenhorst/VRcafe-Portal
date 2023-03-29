import React from 'react';
import './Filter.css';

function Filter() {
    return (

        <div className='App'>
            <div className="grid-container">
                    <div className="grid-item">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Logo's</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn-icons-png.flaticon.com/512/656/656857.png"/></a>
                            </div>
                        </div>
                        <div className="item-preview">
                            <a target="_blank" rel="noopener noreferrer">
                                <img
                                    src={'https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png'}
                                    a/>
                            </a>


                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Documents</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn-icons-png.flaticon.com/512/656/656857.png"/></a>
                            </div>
                        </div>
                        <div className="item-preview">
                            <a target="_blank" rel="noopener noreferrer">
                                <img
                                    src={'https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png'}
                                    a/>
                            </a>


                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Video's</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn-icons-png.flaticon.com/512/656/656857.png"/></a>
                            </div>
                        </div>
                        <div className="item-preview">
                            <a target="_blank" rel="noopener noreferrer">
                                <img
                                    src={'https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png'}
                                    a/>
                            </a>


                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="item-header">
                            <div className="item-header-left">
                                <h3>Icons</h3>
                            </div>
                            <div className="item-header-right">
                                <a><img className={"item-icon"}
                                        src="https://cdn-icons-png.flaticon.com/512/656/656857.png"/></a>
                            </div>
                        </div>
                        <div className="item-preview">
                            <a target="_blank" rel="noopener noreferrer">
                                <img
                                    src={'https://cdn.pixabay.com/photo/2016/09/28/02/14/cardboard-1699630__340.png'}
                                    a/>
                            </a>


                        </div>
                    </div>
            </div>
        </div>


    );
}

export default Filter;
