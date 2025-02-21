import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Interview from './pages/Interview.jsx';
import Home from "./pages/Home.jsx";
import Footer from './components/Footer.jsx';
import Record from './pages/Record.jsx';
import Report from './pages/Report.jsx'

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/interview' element={<Interview />} />
          <Route path='/record' element={<Record />} />
          <Route path = '/report' element = {<Report/>} />
        </Routes>
        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;

