import "./App.css"
import About from "./Pages/About/About.js";
import ContactPage from "./Pages/ContactPage/ContactPage.js";
import Home from "./Pages/Home/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div><BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactPage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
 
</div>
    
  );
}

export default App;
