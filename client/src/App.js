import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


/*import the componets*/
import Username from './components/Username';
import Password from './components/Password';
import Reset from './components/Reset';
import Register from './components/Register';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import PageNotFound from './components/PageNotFound';

/* root routes */

const router = createBrowserRouter([
    {
        path: '/',
        element:<Username></Username>
    },
    {
        path: '/password',
        element:<Password></Password>
    },
    {
        path: '/reset',
        element:<Reset></Reset>
    },
    {
        path: '/profile',
        element:<Profile></Profile>
    },
    {
        path: '/recovery',
        element:<Recovery></Recovery>
    },
    {
        path: '*',
        element:<PageNotFound></PageNotFound>
    },
    {
        path: '/register',
        element:<Register></Register>
    }
    

]);
export default function App() {
  return (
    <main>
        <RouterProvider router={router}></RouterProvider>
    </main>

  )
}


