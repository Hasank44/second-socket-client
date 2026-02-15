import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import ChatUserProvider from './Context/ChatUserProvider.jsx';
import UserProvider from './Context/UserProvider.jsx';
import { PrivateRoute, PublicRoute } from './components/shared/ProtectedRoute.jsx';
import Login from './components/auth/Login.jsx';
import Register from './components/auth/Register.jsx';
import DataProvider from './Context/DataProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: '/', element: <PrivateRoute><Home /></PrivateRoute> },
      { path: '/user/login', element: <PublicRoute><Login /></PublicRoute> },
      { path: '/user/register', element: <PublicRoute><Register /></PublicRoute> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <DataProvider>
        <ChatUserProvider>
          <RouterProvider router={router} />
        </ChatUserProvider>
      </DataProvider>
    </UserProvider>
  </StrictMode>
)
