import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Art from "./pages/Art";
import Contact from "./pages/Contact";
import About from "./pages/About";

//dark theme by default
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <div>
          <Header />
        </div>
        <div className="footspace">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route index element={<Home />} />
            <Route path="art" element={<Art />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <div >
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}


export default App;
