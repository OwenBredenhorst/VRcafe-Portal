import React from 'react';
import './Filter.css';

function Filter() {
    return (
        <nav className="navbar">
            <div className="checkbox-container">
                <input type="checkbox" id="Icons-checkbox"/>
                <label htmlFor="Icons-checkbox">Icons</label>

                <input type="checkbox" id="Video-checkbox"/>
                <label htmlFor="Video-checkbox">Video's</label>

                <input type="checkbox" id="Document-checkbox"/>
                <label htmlFor="Document-checkbox">Document's</label>

                <input type="checkbox" id="Logo-checkbox"/>
                <label htmlFor="Logo-checkbox">Logo's</label>


            </div>
        </nav>
    );
}

export default Filter;
