import { Outlet, Link } from "react-router-dom";

import {Nav} from '../components/NavBar';

import Stateh from "../components/Stateh";


const Layout = () => {
  return (
    <>
     <Nav title = "Hare-Mkart"/>
      <Stateh />
      
      <Outlet />
    </>
  )
};

export default Layout;