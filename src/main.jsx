import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Hero from './components/Hero/Hero.jsx'
import Links from './components/Links/Links.jsx'


const router = createBrowserRouter([{
  path: '',
  element: <Layout />,
  children : [
    {
      path : '/',
      element : <Hero />

    },
    {
      path: '/links',
      element: <Links />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
