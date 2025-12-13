import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import Header from "./ui/Header";
import Home from "./Pages/Home.";
import Footer from "./ui/Footer";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Partner from "./Pages/Partner";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/partner" element={<Partner/>} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
