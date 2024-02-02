import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './views/home/HomePage';
import DetailPage from './views/detail/DetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exath path="/" element={<HomePage />}/>
        <Route path="/detail/:id" element={<DetailPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
