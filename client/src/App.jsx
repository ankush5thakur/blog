
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import DashBoard from './pages/DashBoard.jsx';
import Sigup from './pages/Sigup';
import Singnin from './pages/Singnin';
import Project from './pages/Projects';  
import Header from './components/Header.jsx';
import  Footer  from './components/Footer.jsx';
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/project' element={<Project />} />
        <Route path='/sign-up' element={<Sigup />} />
        <Route path='/sign-in' element={<Singnin />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
