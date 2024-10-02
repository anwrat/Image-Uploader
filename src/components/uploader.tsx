import { useState } from "react";
import DefaultImg from '../assets/uploadimg.jpg'
const ImageUpload=()=>{
    const [imageURL,setimageURL]=useState();
    return(
        <>
            <img src={DefaultImg} alt="Couldnot load image" ></img>
        </>
    )
}

export default ImageUpload;