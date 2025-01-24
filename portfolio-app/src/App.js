import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


    import Main from './Layouts/Main/Main.js';
    import HomePage from './Pages/homePage.js';
    import Contact from './Components/contactComponent/Contact.js';
    import ProjectPage from './Pages/projectPage.js'

    function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

    export default App;
