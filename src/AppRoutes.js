import Layout from "./pages/layout";
import {Home} from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/about";
import NoPage from "./pages/noPages";

import {  Routes, Route } from "react-router-dom";
//relative path



export default function AppRoutes() {

return(
<Routes>
        

<Route path="/" element={<Layout />}>

  <Route index element={<Home />} />
  
  <Route path="contact" element={<Contact />} />
  <Route path="about" element={<About />} />
  <Route path="*" element={<NoPage />} />
</Route>
</Routes>
)
}