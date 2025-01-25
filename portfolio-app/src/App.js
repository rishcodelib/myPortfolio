import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { HelmetProvider } from 'react-helmet-async';


import Main from './Layouts/Main/Main.js';
import HomePage from './Pages/homePage.js';
import ContactPage from './Pages/contactPage.js';
import ProjectPage from './Pages/projectPage.js'
// import DummyPage from './Pages/DummyPage.js'

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* <Route path="dummy" element={<DummyPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
