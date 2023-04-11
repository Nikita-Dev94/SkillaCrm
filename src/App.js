import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Calls from './components/Calls/Calls';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <Header/>
        <div className='content'>
          <Routes>
						<Route path='/calls' element={<Calls/>} />
					</Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
