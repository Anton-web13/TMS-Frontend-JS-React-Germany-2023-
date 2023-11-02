import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Router from "./routers/Router";

import './static/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/*<App />*/}
        <MainLayout>
            <Router />
        </MainLayout>
    </BrowserRouter>
);


