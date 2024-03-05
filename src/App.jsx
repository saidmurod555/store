import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Accessories from "./pages/Accessories";
import Clothes from "./pages/Clothes";
import Login from "./pages/Login";
import Shoes from "./pages/Shoes";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Loading from "./components/Loading";
import About from "./pages/About";
import Uscontact from "./pages/Uscontact";
import Conditions from "./pages/Conditions";
import Like from "./pages/Like";
import Savat from "./pages/Savat";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLoading ? (
          <Loading/>
          
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Accessories" element={<Accessories />} />
              <Route path="/Clothes" element={<Clothes />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Like" element={<Like />} />
              <Route path="/Shop" element={<Savat />} />
              <Route path="/Shoes" element={<Shoes />} />
              <Route path="/About" element={<About />} />
              <Route path="/Uscontat" element={<Uscontact />} />
              <Route path="/Conditions" element={<Conditions />} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;