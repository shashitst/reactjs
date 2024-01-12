
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';
import Counter from "./components/Counters";
import Adding from "./components/Adding";
import Form from "./components/Forms";
import Back from "./Back";



export default function App() {
    return (
      
      <BrowserRouter>
        <AppRoutes />
        <Counter />
        <Adding />
        <Form />
        <Back />
      
        
      </BrowserRouter>
      
    );
  }


