import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import DetailPage from './pages/detail/DetailPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Header/>
        <Routes>
          <Route exath path="/" element={<HomePage />}/>
          <Route path="/detail/:id" element={<DetailPage />}/>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
