import ImageUpload from './components/uploader'
import Img from './assets/uploadimg.jpg'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-600 mb-10">Image Uploader</h1>
      <div className='uploader'>
        <img src={Img} alt="Error in loading image"></img>
        <h1>Click to Upload</h1>
      </div>
      <div className='displayimg'>
        <ImageUpload />
      </div>
    </>
  )
}

export default App
