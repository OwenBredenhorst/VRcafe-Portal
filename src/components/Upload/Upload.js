import React, {useState, useEffect} from 'react';
import '../../Styling/Globalstyling.css';
import Navbar from '../../containers/Navbar/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import checkSession from "../../functions/CheckSession";
import './Upload.css';
import {getStorage, ref, uploadBytes} from "firebase/storage";
import toast, { Toaster } from 'react-hot-toast';
import ImageResizer from 'react-image-file-resizer';
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


    const handleUpload = async () => {


        if (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/webp") {
            type = "image";

        }
        if (file.type === "application/pdf") {
            type = "document";
        }
        if (file.type === "video/mp4") {
            type = "video";
        }


        const imagesRef = ref(storageRef, type);
        const fileRef = ref(imagesRef, file.name);
        if (!file) return;
        setUploading(true);



    if (type === "image"){

        const blob = await new Promise((resolve) => {
            ImageResizer.imageFileResizer(
                file,
                100, // new width
                100, // new height
                'JPEG', // image type
                100, // quality
                0, // rotation
                (dataUrl) => {
                    const byteString = atob(dataUrl.split(',')[1]);
                    const ab = new ArrayBuffer(byteString.length);
                    const ia = new Uint8Array(ab);
                    for (let i = 0; i < byteString.length; i++) {
                        ia[i] = byteString.charCodeAt(i);
                    }
                    const blob = new Blob([ab], { type: 'image/jpeg' });
                    resolve(blob);
                },
                'base64' // output type
            );
        });


        // Upload the Blob to Firebase Storage
        const thumbnailRef = ref(imagesRef, 'thumbnails/' + file.name);
        uploadBytes(thumbnailRef, blob)
            .then((snapshot) => {
                toast.success('Low resolution uploaded: ' + file.name, {
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
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
                setUploading(false);
            })
            .catch((error) => {
                console.error(error);
                setUploading(false);
            });

    }



        uploadBytes(fileRef, file)
            .then((snapshot) => {
                toast.success('File Uploaded: ' + file.name, {
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
                setTimeout(() => {
                    window.location.reload();
                }, 1000);


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


            <div className="upload-container">
                <form className="upload-form">
                    <label htmlFor="file" className="file-label">
                        <span>Select File</span>
                        <input type="file" name="file" id="file" onChange={handleFileChange} className="input-file" />
                    </label>
                            <button onClick={handleUpload} disabled={!file || uploading}>
                                {uploading ? 'Uploading...' : 'Upload'}
                            </button>
                </form>
            </div>




            {/*<Footer />*/}
        </div>
    );
};


export default Upload;
