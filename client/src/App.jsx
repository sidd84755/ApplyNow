import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage/>}/>
          <Route path='/main' element={<LandingPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
