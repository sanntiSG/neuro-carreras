import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ThisCantBeReached from "./components/Home/ThisSiteCantBeReached/ThisCantBeReached";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Banner1 from "./components/Banners/Banner1";
import Banner2 from "./components/Banners/Banner2";
import Banner3 from "./components/Banners/Banner3";
import Footer from "./components/Footer/Footer";
import Formulario from "./components/Formulario/Formulario";
import Prediccion from "./components/Formulario/Prediccion"; // importar Prediccion
import Tecnologias from "./components/Tecnologias/Tecnologias"

const AppContent = ({ darkMode, setDarkMode, showPage }) => {
  const location = useLocation(); // Hook para obtener la ruta actual

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="overflow-x-hidden">
        {!showPage ? (
          <ThisCantBeReached />
        ) : (
          <>
            {/* Renderiza el Navbar solo si no estás en "/Formulario" o "/Prediccion" */}
            {location.pathname !== "/Formulario" && location.pathname !== "/prediccion" && (
              <Navbar setDarkMode={setDarkMode} />
            )}
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <Banner1 />
                    <Banner2 />
                    <Banner3 />
                    <Tecnologias />
                    <Footer />
                  </>
                }
              />
              <Route path="/Formulario" element={<Formulario />} />
              <Route path="/Prediccion" element={<Prediccion />} />
            </Routes>
          </>
        )}
      </main>
    </div>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <AppContent darkMode={darkMode} setDarkMode={setDarkMode} showPage={showPage} />
    </Router>
  );
};

export default App;
