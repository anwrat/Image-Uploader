import { useState } from "react";
import DefaultImg from '../assets/empty.jpg'
const ImageUpload=()=>{
    const [imageURL,setimageURL]=useState(DefaultImg);
    return(
        <>
            <img src={imageURL} alt="Main Image" ></img>
        </>
    )
}

export default ImageUpload;