// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import NumberPlate from './pages/NumberPlate/NumberPlate';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route  path='/np' element={<NumberPlate/>}/>
      </Routes>
    </>
  );
}

export default App;
