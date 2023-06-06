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
    const [filetest, setFiletest] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [selectedOption, setSelectedOption] = useState('video');
    const [compressedImage, setCompressedImage] = useState(null);
    const storage = getStorage();
    const storageRef = ref(storage);



    const handleFileChange = (event) => {
        setFile(Array.from(event.target.files));
    };


    const handleUpload = async () => {

        for (const file1 of file) {
            switch (file1.type) {
                case "image/png":
                case "image/jpg":
                case "image/webp":
                case "image/jpeg":
                    type = "image";
                    break;
                case "application/pdf":
                    type = "document";
                    break;
                case "video/mp4":
                    type = "video";
                    break;
                default:
                    toast.error("Unrecognized file type: " + file1.type);
                    continue;
            }


            const imagesRef = ref(storageRef, selectedOption);
            const fileRef = ref(imagesRef, file1.name);
            if (!file1) continue;
            setUploading(true);


            if (type === "image") {



                // test
                if (file1) {
                    setUploading(true);

                    const image = new Image();
                    image.src = URL.createObjectURL(file1);

                    image.onload = async () => {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        canvas.width = 720;
                        canvas.height = 404;

                        ctx.drawImage(image, 0, 0, 720, 404);

                        const dataUrl = canvas.toDataURL('image/jpeg', 0.3);

                        // Convert data URL to Blob
                        const response = await fetch(dataUrl);
                        const blob = await response.blob();

                        setCompressedImage(blob);
                        uploadToFirebase(blob);
                        setUploading(false);
                    };
                }

                const uploadToFirebase = (imageBlob) => {
                    // Upload the Blob to Firebase Storage
                    const thumbnailRef = ref(imagesRef, 'thumbnails/' + file1.name);
                    console.log(thumbnailRef)
                    uploadBytes(thumbnailRef, imageBlob)
                        .then((snapshot) => {
                            setUploading(false);
                        })
                        .catch((error) => {
                            console.error(error);
                            toast.error(error);
                            setUploading(false);
                        });

                }

            }


            uploadBytes(fileRef, file1)
                .then((snapshot) => {

                    setUploading(false);
                })
                .catch((error) => {
                    toast.error(error);
                    console.error(error);
                    setUploading(false);
                });

            toast.success('Successfully uploaded all files ', {
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

        }




        console.log("Done uploading")
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
                        <input type="file" name="file" id="file" onChange={handleFileChange} className="input-file" multiple />
                    </label>
                    <button className="upload-new" onClick={handleUpload} disabled={!file || uploading}>
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>


                    <div className="dropdown">
                        <select value={selectedOption} onChange={handleChange} name="content-type">
                            <option value="logo">Logo</option>
                            <option value="giftcard">Giftcard</option>
                            <option value="video">Video</option>
                            <option value="vormgeving">Vormgeving</option>
                            <option value="document">Document</option>
                            <option value="icon">Icon</option>
                            <option value="picelpictogram">Picelpictogram</option>
                            <option value="illustraties">Illustraties</option>
                            <option value="headset">Headset</option>
                            <option value="vrcafe">VRcafe</option>
                            <option value="arcade">Arcade</option>
                            <option value="airhocky">Airhocky</option>
                            <option value="aanbod">Aanbod</option>
                            <option value="bedrijfsuitje">Bedrijfsuitje</option>
                            <option value="escapeRoom">EscapeRoom</option>
                            <option value="experience">Experience</option>
                            <option value="kinderfeestje">Kinderfeestje</option>
                            <option value="consumptie">Consumptie</option>
                            <option value="design">Design</option>
                            <option value="isomerty">Isomerty</option>
                            <option value="lasergamen">Lasergamen</option>
                            <option value="oplocatie">Op Locatie</option>
                            <option value="racen">Racen</option>
                            <option value="home">Home</option>
                            <option value="herfst">Herfst</option>
                            <option value="kerst">kerst</option>
                            <option value="lente">lente</option>
                            <option value="sinterklaas">sinterklaas</option>
                            <option value="valtentijnsdag">valtentijnsdag</option>
                            <option value="personeel">Personeel</option>
                            <option value="supersmash">Supersmash</option>
                        </select>
                    </div>
                </div>
            </div>


            {/*<Footer />*/}
        </div>
    );
};


export default Upload;
