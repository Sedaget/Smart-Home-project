import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Errorpage/ErrorPage.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Notifications from './pages/Notifications/Notifications.jsx'
import Settings from './pages/Settings/Settings.jsx'
import Analytics from './pages/Analytics/Analytics.jsx'
import LivingRoom from './pages/Dashboard/LivingRoom.jsx'
import BedRoom from './pages/Dashboard/BedRoom.jsx'
import Kitchen from './pages/Dashboard/Kitchen.jsx'
import KidRoom from './pages/Dashboard/KidRoom.jsx'
import DynamicRoom from './pages/Dashboard/DynamicRoom.jsx'
import './i18n/i18n.js';
import { ThemeProvider } from './context/ThemeContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />, // Dashboard route
        children: [
          { index: true, element: <LivingRoom /> },
          { path: "livingroom", element: <LivingRoom /> },
          { path: "bedroom", element: <BedRoom /> },
          { path: "kitchen", element: <Kitchen /> },
          { path: "kidroom", element: <KidRoom /> },
          { path: ":roomName", element: <DynamicRoom /> }
        ],
      },
      { path: "analytics", element: <Analytics /> },
      { path: "notifications", element: <Notifications /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
      </ThemeProvider>
  </StrictMode>,
)


