import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ExerciseDetails from './pages/ExerciseDetails';

function App() {
  return (
    <main className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails/>} />
      </Routes>
      <Footer/>
    </main>
  );
}

export default App;
