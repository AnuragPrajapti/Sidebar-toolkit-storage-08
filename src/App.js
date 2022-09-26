import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homeComponent/Home";
import Register from "./pages/registrCompnent/Register";
import About from "./pages/aboutComponent/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Deshboard from "./pages/dashboardComponent/Deshboard";
import Login from "./pages/loginComponent/Login";
import Messages from "./pages/messageComponent/Message";
import Settings from "./pages/settingComponent/Settings";
import NoteState from "./Context/NoteState";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <div style={{marginTop : "100px" }} >
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/deshboard" element={<Deshboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/setting" element={<Settings />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </NoteState>
    </>
  );
}

export default App;
