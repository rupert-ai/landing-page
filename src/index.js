import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'GTM-TQD5Z2S',
};
TagManager.initialize(tagManagerArgs);

const router = createBrowserRouter([
    {
        path: '/*',
        element: <App />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
