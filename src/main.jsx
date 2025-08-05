import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ChatProvider } from './context/ChatContext';
import './assets/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChatProvider>
      <RouterProvider router={router} />
    </ChatProvider>
  </React.StrictMode>
);
