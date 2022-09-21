import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deshboard from './pages/Deshboard';
import Login from './pages/Login';
import Messages from './pages/Message';
import Settings from './pages/Settings';
import NoteState from './Context/NoteState';

function App() {
  return (
    <>
         <NoteState>
           <Navbar />
            <Routes>
             <Route path='/register' element={<Register />} />
             <Route path='/about' element={<About />} />
             <Route path='/deshboard' element={<Deshboard />} />
             <Route path='/login' element={<Login />} />
             <Route path='/messages' element={<Messages />} />
             <Route path='/setting' element={<Settings />}/>
             <Route path='/'  element={<Home />} />
           </Routes>
         </NoteState>
    </>
  );
}

export default App;
