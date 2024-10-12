import DefaultImg from './assets/empty.jpg'
import Img from './assets/uploadimg.jpg'
import './App.css'
import { useState,useRef } from 'react'
import UploadingAnimation from './assets/uploading.gif'

function App() {
  const fileUploadRef=useRef<HTMLInputElement>(null);
  const [imageURL,setimageURL]=useState(DefaultImg);

  const handleImageUpload=(event: React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    fileUploadRef.current?.click();
  }

  const uploadImageDisplay=async()=>{
    try{
      setimageURL(UploadingAnimation);
      const uploadedFile=fileUploadRef.current!.files![0];
      const formdata=new FormData();
      formdata.append("file",uploadedFile);
      const response=await fetch("https://api.escuelajs.co/api/v1/files/upload",{
        method:"post",
        body:formdata
      })
      if(response.status===201){
        const data=await response.json();
        setimageURL(data.location);
      }
      //const cachedURL=URL.createObjectURL(uploadedFile); //Create a URL for file
      //setimageURL(cachedURL);
    } catch(error){
      console.error(error);
      setimageURL(DefaultImg);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-600 mb-10">Image Uploader</h1>
      <form encType='mulipart/form-data'>
        <button onClick={handleImageUpload} className='uploader' type='submit'>
          <img src={Img} alt="Edit icon"></img>
          <h1>Click to Upload</h1>
        </button>
        <input 
          type='file' 
          ref={fileUploadRef}
          onChange={uploadImageDisplay}
          hidden/> 
      </form>
      <div className='displayimg'>
        <img src={imageURL} alt="Main Image"></img>
      </div>
    </>
  )
}

export default App
