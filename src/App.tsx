import ImageUpload from './components/uploader'
import './App.css'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold text-600 mb-10">Image Uploader</h1>
      <div className='uploader'>
        <ImageUpload />
        <h1>Click to Upload</h1>
      </div>
    </>
  )
}

export default App
