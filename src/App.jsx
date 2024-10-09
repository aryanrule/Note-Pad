import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { createBrowserRouter  , RouterProvider} from 'react-router-dom';
import Notes from './components/Notes';
import Button from './components/Button';
//lets build this one by one 

const App = () => {
   const router = createBrowserRouter([
    {
      path:'/' , 
      element:<Home/>
    } , 

    {
      path:'/ViewNotes' , 
      element:<Notes/>  
    }  , 
   ]) ; 

  return (
    <div>
          <RouterProvider router={router}/>
    </div>
  )
}

export default App;
