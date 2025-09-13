import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import GlobalMap from './components/Map/GlobalMap.jsx'
import PlasticList from './components/PlasticList/PlasticList.jsx'
import About from './components/About/About.jsx'
import APIInfo from './components/API/API.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='map' element={<GlobalMap/>} />
      <Route path='plasticList' element={<PlasticList />} />
      <Route path='about' element={<About />} />
      <Route path='api' element={<APIInfo />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)