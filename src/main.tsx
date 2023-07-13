import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter as Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './components/vehicle-habitation/index.tsx'
import VehicleSimulation from './components/vehicle-simulation/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/vehicle-habitation",
    element: <Index />,
  },
  {
    path: "/vehicle-simulation",
    element: <VehicleSimulation />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Router><App />
    
    </Router> */}
     <RouterProvider router={router} />
  </React.StrictMode>,
  
)
