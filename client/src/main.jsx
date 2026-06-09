import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'




//import router and set up router correctly
// having route as main paths
// having the components that should stay all along.
// hooks route switch , useHistory
// links 

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
