import ImageUpload from './components/uploader'
import Img from './assets/uploadimg.jpg'
import './App.css'
import { useRef } from 'react'

function App() {
  const fileUploadRef=useRef<HTMLInputElement>(null);

  const handleImageUpload=(event: React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    fileUploadRef.current?.click();
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
          hidden/>
      </form>
      <div className='displayimg'>
        <ImageUpload />
      </div>
    </>
  )
}

export default App
