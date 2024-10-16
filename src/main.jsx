import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { store  } from './Redux/store.js'
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  
    
   <div>
         <Provider store={store}>
             <App />
             <ToastContainer/>
         </Provider> 
   </div>
     
)
