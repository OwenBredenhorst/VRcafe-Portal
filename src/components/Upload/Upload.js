import React, {useState, useEffect} from 'react';
import '../../Styling/Globalstyling.css';
import Navbar from '../../containers/Navbar/Navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import checkSession from "../../functions/CheckSession";
import './Upload.css';
import {getStorage, ref, uploadBytes} from "firebase/storage";

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

        const imagesRef = ref(storageRef, type);
        const fileRef = ref(imagesRef, file.name);
        if (!file) return;
        setUploading(true);

        uploadBytes(fileRef, file)
            .then((snapshot) => {
                console.log('Uploaded a blob or file!');
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

    return (
        <div>
            <Navbar/>

            {/*<div className="container">*/}
            {/*    <form action="#" method="post" encType="multipart/form-data">*/}
            {/*        <label htmlFor="file-upload"><span>Choose file</span></label>*/}
            {/*        <input type="file" onChange={handleFileChange} />*/}
            {/*        <button onClick={handleUpload} disabled={!file || uploading}>*/}
            {/*            {uploading ? 'Uploading...' : 'Upload'}*/}
            {/*        </button>*/}
            {/*    </form>*/}
            {/*</div>*/}
            <div>
                <input type="file" onChange={handleFileChange}/>
                <button onClick={handleUpload} disabled={!file || uploading}>
                    {uploading ? 'Uploading...' : 'Upload'}
                </button>
            </div>


            {/*<Footer />*/}
        </div>
    );
};


export default Upload;
