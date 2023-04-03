import React, {useState, useEffect} from 'react';
import '../../Styling/Globalstyling.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import checkSession from "../../functions/CheckSession";
import './Upload.css';
import {getStorage, ref, uploadBytes} from "firebase/storage";
import toast from 'react-hot-toast';
import ImageResizer from 'react-image-file-resizer';
import {selectOptions} from "@testing-library/user-event/dist/select-options";

let type = ""

const Upload = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [selectedOption, setSelectedOption] = useState('logo');

    const storage = getStorage();
    const storageRef = ref(storage);


    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };


    const handleUpload = async () => {


        if (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/webp" || file.type === "image/jpeg") {
            type = "image";
        } else if (file.type === "application/pdf") {
            type = "document";
        } else if (file.type === "video/mp4") {
            type = "video";
        } else {
            toast.error("Unrecognized file type: " + file.type);
            return;
        }



        const imagesRef = ref(storageRef, selectedOption);
        const fileRef = ref(imagesRef, file.name);
        if (!file) return;
        setUploading(true);


        if (type === "image") {

            const blob = await new Promise((resolve) => {
                ImageResizer.imageFileResizer(
                    file,
                    200,
                    200,
                    'png',
                    30,
                    0,
                    (dataUrl) => {
                        const byteString = atob(dataUrl.split(',')[1]);
                        const ab = new ArrayBuffer(byteString.length);
                        const ia = new Uint8Array(ab);
                        for (let i = 0; i < byteString.length; i++) {
                            ia[i] = byteString.charCodeAt(i);
                        }
                        const blob = new Blob([ab], {type: 'image/jpeg'});
                        resolve(blob);
                    },
                    'base64'
                );
            });


            // Upload the Blob to Firebase Storage
            const thumbnailRef = ref(imagesRef, 'thumbnails/' + file.name);
            console.log(thumbnailRef)
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
                        // window.location.reload();
                    }, 1000);
                    setUploading(false);
                })
                .catch((error) => {
                    console.error(error);
                    toast.error(error);
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
                toast.error(error);
                console.error(error);
                setUploading(false);
            });
    };


    /* This is a hook that is called when the component is mounted. It checks if the user is authenticated and if not,
    redirects to the login page. */
    useEffect(() => {
        const authenticated = checkSession();
        setIsLoading(false);
        if (!authenticated) {
            window.location.href = "/login";
        }
    }, []);


    /* This is a hook that is called when the component is mounted. It checks if the user is authenticated and if not,
    redirects to the login page. */
    if (isLoading) {
        return <div>Loading...</div>;
    }


    const handleChange = (event) => {
        setSelectedOption(event.target.value);

        console.log(event.target.value);
    }


    return (
        <div>


            <div className="upload-container">
                <div className="upload-form">
                    <label htmlFor="file" className="file-label">
                        <span>Select File</span>
                        <input type="file" name="file" id="file" onChange={handleFileChange} className="input-file"/>
                    </label>
                    <button className={"upload-new"} onClick={handleUpload} disabled={!file || uploading}>
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>


                    <div className="dropdown">
                        <select value={selectedOption} onChange={handleChange} name="content-type">
                            <option value="logo">Logo</option>
                            <option value="image">Image</option>
                            <option value="video">Video</option>
                            <option value="banner">Banner</option>
                            <option value="document">Document</option>
                            <option value="icon">Icon</option>
                        </select>
                    </div>
                </div>
            </div>


            {/*<Footer />*/}
        </div>
    );
};


export default Upload;
