import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './State/Store'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    {/*now wee need to provide store to whole application so that in our entire  application from any component we can asses this store
 */}
     <Provider store={store}>
       <App />

     </Provider>
   
    </BrowserRouter>
    
  </React.StrictMode>,
)
