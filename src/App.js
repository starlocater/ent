import React from 'react';
import Titlepage from './pages/Titlepage';
import Mainpage from './pages/Mainpage';
import Nav from './components/Nav';
import Streamers from './pages/Streamers';
import GameDetailsRouter from './components/GameDetailsRouter';
import { Route, Routes, Outlet } from 'react-router-dom';
import { useState } from 'react';


const Layout = ({ isOpen, isGuideOpen, setIsOpen, setIsGuideOpen }) => {
  return (
    <div>
      <Nav isOpen={isOpen} isGuideOpen={isGuideOpen} setIsOpen={setIsOpen} setIsGuideOpen={setIsGuideOpen} />
      <Outlet/>
    </div>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout isOpen={isOpen} isGuideOpen={isGuideOpen} setIsOpen={setIsOpen} setIsGuideOpen={setIsGuideOpen} />}>
          <Route index element={<Titlepage isOpen={isOpen} isGuideOpen={isGuideOpen} setIsOpen={setIsOpen} setIsGuideOpen={setIsGuideOpen} />} />
          <Route path="main" element={<Mainpage isOpen={isOpen} isGuideOpen={isGuideOpen} setIsOpen={setIsOpen} setIsGuideOpen={setIsGuideOpen} />} />
          <Route path="/games/:gameName/*" element={<GameDetailsRouter isOpen={isOpen} isGuideOpen={isGuideOpen} setIsOpen={setIsOpen} setIsGuideOpen={setIsGuideOpen} />} />
          <Route path="/streamers" element={<Streamers />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;