import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign_in" element={<Signin />} />
      </Routes>
      <Footer />
    </BrowserRouter> 
  );
}

export default App;
