import React from 'react';
import ReactDOM from 'react-dom/client';
import Laptop from './components/Laptop';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className="container text-center">
            <Laptop />
        </div>
    </React.StrictMode>
);
