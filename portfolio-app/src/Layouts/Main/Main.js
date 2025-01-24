import { Outlet } from "react-router-dom";
import Navbar from "../../Components/NavbarComponent/navbar";
import Footer from '../Footer/Footer'
const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
};

export default Main;