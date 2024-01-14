import { Outlet, Link } from "react-router-dom";

import { Nav } from '../components/NavBar';

const Layout = () => {
  return (
    <>
    
      <Nav title>react</Nav>
      
      <Outlet />
    </>
  )
};

export default Layout;