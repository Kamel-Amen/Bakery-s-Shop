import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Starter from './components/Starter/starter';
import Home from './components/Home/home';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Starter />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
