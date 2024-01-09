import { Outlet, Link } from "react-router-dom";
import { Nav } from '../components/NavBar';
const Layout = () => {
  return (
    <>
      <Nav title="Hare M-Kart" />
      <Outlet />
    </>
  )
};

export default Layout;