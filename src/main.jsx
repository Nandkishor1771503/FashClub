import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Shirts from './components/Shirts.jsx'
import Pants from './components/Pants.jsx'
import Shoes from './components/Shoes.jsx'
import Accessories from './components/Accessories.jsx'
import Contact_us from'./components/Contact_us.jsx'
import About_us from './components/About_us.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>

      <Route path="/" element={<App />} />
      <Route path="/shirts" element={<Shirts />} />
      <Route path="/pants" element={<Pants />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/accessories" element={<Accessories />} />
      <Route path='/contact' element={<Contact_us />} />
      <Route path='/about' element={<About_us />} />

    </>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} />
    
  </StrictMode>,
)
