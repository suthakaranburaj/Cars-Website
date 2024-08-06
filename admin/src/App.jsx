import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Admin />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
