import React, {useState, useEffect} from 'react';
import '../../Styling/Globalstyling.css';
import Navbar from '../../containers/Navbar/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import checkSession from "../../functions/CheckSession";
import './Upload.css';
import {getStorage, ref, uploadBytes} from "firebase/storage";
import toast, { Toaster } from 'react-hot-toast';

let type = ""

const Upload = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);

    const storage = getStorage();
    const storageRef = ref(storage);


    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleUpload = () => {


        if (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/webp") {
            type = "images";
        }
        if (file.type === "application/pdf") {
            type = "document";
        }
        if (file.type === "video/mp4") {
            type = "video";
        }


        const myButton = document.querySelector("#myButton");
        const myPopup = document.querySelector("#myPopup");

        myButton.addEventListener("click", () => {
            myPopup.style.display = "block";
        });

        myPopup.addEventListener("click", (event) => {
            if (event.target === myPopup) {
                myPopup.style.display = "none";
            }
        });




        const imagesRef = ref(storageRef, type);
        const fileRef = ref(imagesRef, file.name);
        if (!file) return;
        setUploading(true);

        uploadBytes(fileRef, file)
            .then((snapshot) => {
                toast.success('File Uploaded: ' + file.name , {
                    style: {
                        border: '1px solid #713200',
                        padding: '16px',
                        backgroundColor: '#2D2A2F',
                        color: 'white',
                    },
                    iconTheme: {
                        primary: '#FD3E81',
                        secondary: 'white',
                    },
                });

                setUploading(false);
            })
            .catch((error) => {
                console.error(error);
                setUploading(false);
            });
    };

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
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];

        const reader = new FileReader();
        reader.onload = (e) => {
            const fileContents = e.target.result;
            // Pass the file contents to a callback function that will handle the upload
        };
        reader.readAsText(file);
    };


    return (
        <div>
            <Navbar/>


                <div className="upload-container">
                    <h1>Upload a file</h1>
                    <div className="upload-form">
                        <input placeholder={"Document name"}/>
                        <button id="myButton">Click me!</button>

                        <div id="myPopup">
                            <p>This is my pop-up content.</p>
                        </div>

                        <input type="file" onChange={handleFileChange} />
                        <button onClick={handleUpload} disabled={!file || uploading}>
                            {uploading ? 'Uploading...' : 'Upload'}
                        </button>
                    </div>
                </div>
                <Toaster />

            {/*<Footer />*/}
        </div>
    );
};


export default Upload;
