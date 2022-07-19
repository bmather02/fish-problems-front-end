import './App.css';
import Header from './components/Header';
import {Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Problems from './pages/problems';
import About from './pages/about';
import Home from './pages/home';
import Solutions from './pages/solutions';
import Tanks from './pages/tanks';
import TankShow from './pages/tankShow';

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
  const [tanks, setTanks] = useState([]);

  const Tank_URL = "http://localhost:3000/tanks"
  const getTanks = async () => {
    const response = await fetch(Tank_URL);
    const data = await response.json();
    setTanks(data.tanks)
  }
  console.log(tanks)

  useEffect(() => {getTanks()}, [])

  return (
    <div className="content">
      <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/problems' element={<Problems problems={problems} />}/>
      <Route exact path='/problems/:id' element={<Solutions problems={problems} getProblems={getProblems} />}/>
      <Route exact path='/tanks' element={<Tanks tanks={tanks} />}/>
      <Route exact path='/tanks/:id' element={<TankShow tanks={tanks} getTanks={getTanks} />}/>
    </Routes>
    <Footer/>
    </div>
  );
}
export default App;
