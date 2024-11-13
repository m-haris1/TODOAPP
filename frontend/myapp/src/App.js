import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
