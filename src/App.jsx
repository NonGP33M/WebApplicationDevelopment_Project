import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Scoreboard from "./pages/Scoreboard";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
        <Route path="/sign_in" element={<Signin />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
