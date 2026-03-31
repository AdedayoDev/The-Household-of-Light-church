import "./App.css";
import Header from "./ui/Header";
import Home from "./Pages/Home.";
import Footer from "./ui/Footer";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/AboutUs";
import Partner from "./Pages/Partner";
import BecomeAMember from "./components/BecomeAMember/BecomeAMember";
import ContactUs from "./Pages/ContactUs";
import Messages from "./Pages/Messages";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/sermons' element={<Messages />} />
        <Route path='/partner' element={<Partner />} />
        <Route path='/become-a-member' element={<BecomeAMember />} />
        <Route path='contact-us' element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
