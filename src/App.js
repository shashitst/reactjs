
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';
import Content from "./Contextweb/Content";
import Header from "./Contextweb/Header";
import ThemeProvider from "./Contextweb/ThemeProvider";





export default function App() {
    return (
      
     <ThemeProvider>
      <BrowserRouter>


        <AppRoutes />
      
        <Header />
         <Content />

        

      
        
      </BrowserRouter>
      </ThemeProvider>
      
    );
  }


