import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import CarDetail from './components/CarDetail.jsx'
// import { useState } from 'react'


// const [cars, setCars] = useState([]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<App/>}/>
    <Route path='detail/:id' element={<CarDetail/>}/>
    {/* <Route path='detail/:id' element={<CarDetail cars={cars} setCars={setCars} />}/> */}
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router = {router} />
  </StrictMode>,
)
