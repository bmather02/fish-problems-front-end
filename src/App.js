import './App.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Problems from './pages/problems';
import About from './pages/about';
import Home from './pages/home';

function App() {

  const [problems, setProblems] = useState([]);

  const URL = "http://localhost:3001/problems"
  const getProblems = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setProblems(data)
  }
  console.log(problems)

  useEffect(() => {getProblems()}, [])
  return (
    <div>
      <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/problems' element={<Problems problems={problems} />}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
