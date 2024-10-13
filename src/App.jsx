import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { createBrowserRouter  , RouterProvider} from 'react-router-dom';
import Notes from './components/Notes';
import Button from './components/Button';
import ViewNote from './components/ViewNote';
//lets build this one by one 

const App = () => {
   const router = createBrowserRouter([
    {
      path:'/' , 
      element:<Home/>
    } , 

    {
      path:'/Notes', 
      element:<Notes/>  
    }  , 
    {
      path : '/Notes/ViewNotes' , 
      element:<ViewNote/>
    }
   ]) ; 

  return (
    <div>
          <RouterProvider router={router}/>
    </div>
  )
}

export default App;
