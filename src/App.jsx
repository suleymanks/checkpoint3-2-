import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import './App.css'
import CarSearch from './pages/CarSearch'
import CarList from './pages/CarList'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/CarList' element={<CarList/>}/>
        <Route path='/CarSearch' element={<CarSearch/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
