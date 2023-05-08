import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Read from './components/Read';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/create' element={<Create />}></Route>
          <Route exact path='/' element={<Read />}></Route>
          <Route exact path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;