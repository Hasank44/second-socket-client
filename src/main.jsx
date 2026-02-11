import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import ChatUserProvider from './Context/ChatUserProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, path: '/', element: <Home /> },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatUserProvider>
      <RouterProvider router={router} />
    </ChatUserProvider>
  </StrictMode>
)
