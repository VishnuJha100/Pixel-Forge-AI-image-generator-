import Navbar from "./components/Navbar"
import GenerateImage from "./pages/GenerateImage"
import Home from "./pages/Home"
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/generateImage' element={<GenerateImage />} />
      </Routes>
    </div>
  )
}

export default App
