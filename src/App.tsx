import DefaultImg from './assets/empty.jpg'
import Img from './assets/uploadimg.jpg'
import './App.css'
import { useState,useRef } from 'react'

function App() {
  const fileUploadRef=useRef<HTMLInputElement>(null);
  const [imageURL,setimageURL]=useState(DefaultImg);

  const handleImageUpload=(event: React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    fileUploadRef.current?.click();
  }

  const uploadImageDisplay=()=>{
    const uploadedFile=fileUploadRef.current!.files![0];
    const cachedURL=URL.createObjectURL(uploadedFile); //Create a URL for file
    setimageURL(cachedURL);
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
