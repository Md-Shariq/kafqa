import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './screen/login';
import Register from './screen/register';
import Home from './screen/home';

function App() {
  return (
    <Routes>
       <Route path="/" element={<Login/>} />
       <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
    </Routes>
   
  );
}

export default App;
