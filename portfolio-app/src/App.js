import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { HelmetProvider } from 'react-helmet-async';


import Main from './Layouts/Main/Main.js';
import HomePage from './Pages/homePage.js';
import ContactPage from './Pages/contactPage.js';
import ProjectGridPage from './Pages/projectGridPage.js'
import ProjectPage from './Pages/projectPage.js'
import MusicPage from './Pages/musicPage.js';
import TravelPage from './Pages/travelPage.js';
import ResumePage from './Pages/resumePage.js';


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<HomePage />} />
            <Route path="projects" element={<ProjectGridPage />} />
            <Route path="CodeWithRishhiii" element={<ProjectGridPage />} />
            <Route path="projects/:projectId" element={<ProjectPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="music" element={<MusicPage />} />
            <Route path="RishhiiiMusic" element={<MusicPage />} />
            <Route path="RishhiiiTheExplorer" element={<TravelPage />} />
            <Route path="Travel" element={<TravelPage />} />
            {/* <Route path="resume" element={<ResumePage />} /> */}
            <Route path="resumePage" element={<ResumePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
