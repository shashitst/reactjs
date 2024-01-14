import Layout from "./pages/layout";
import { Home } from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/about";
import NoPage from "./pages/noPages";
import Counter from "./components/Counters";


import { Routes, Route } from "react-router-dom";
import SimpleForm from "./SimpleForm";



//relative path



export default function AppRoutes(){

  return (
<>

       
    
    <Routes>
     
      <Route path="/" element={<Layout />}>
        
        <Route index path="Home" element={<Home />} />
        {/* <Route path="Adding" element = {<Home />} />  */}
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="Counter" element={<Counter />} />
        <Route path="Form" element={<SimpleForm />} />
        <Route path="*" element={<NoPage />} />
        
      </Route>
    </Routes>



    </>
  )
}

