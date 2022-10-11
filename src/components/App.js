import React from "react";
import { Route,Routes } from "react-router-dom";
import BikePage from "./BikePage";
import Navbar from "./Navbar";
import Home from "./Home";
import YourBikeCollection from "./YourBikeCollection";


//hello
function App() {
  
  return (
    <div id="grad" className="App">
      {/* //Navbar and routes */}
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/bikePage" element={<BikePage/>} />
      <Route path="/yourBikeCollection" element={<YourBikeCollection />} />
      </Routes>
    </div>
  );


}

export default App;
