import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";
import Header from "./ui/Header";
import Home from "./Pages/Home.";
import Footer from "./ui/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
