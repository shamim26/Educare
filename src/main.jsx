import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './components/Layout/Main'
import Home from './components/Home/Home'
import Error from './components/Error/Error'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'

const router = createBrowserRouter ([
  {
    path: '/',
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('fakeData.json')
      },
      {
        path:'about',
        element:<About></About>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
