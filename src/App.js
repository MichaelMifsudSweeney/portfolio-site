import './App.scss';

import { BrowserRouter, Routes, Route, Navigate, useLocation, useRoutes } from "react-router-dom"
import Tidbits from './pages/Tidbits/Tidbits';
import Footer from './components/Footer/Footer';
import * as React from "react";
import Navigation from './components/Navigation/Navigation';
import About from './pages/About/About';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import DesignWork from './pages/DesignWork/DesignWork';
import { motion, AnimatePresence } from 'framer-motion'
import Homepage from './components/HomePage/Homepage';


function App() {
  const location = useLocation();

  const element = useRoutes([
    {
      path: "/",
      index:true,
      element: (
        <Homepage />
      )
    },
    {
      path: "/about",
      index:true,
      element: (
        <About />
      )
    },
    {
      path: "/home",
      index:true,
      element: (
        <Homepage />
      )
    },
    {
      path: "/tidbits",
      element: (
        <Tidbits />
      )
    },
    {
      path: "/design",
      element: (
        <DesignWork />
      )
    }
  ]);

  if (!element) return null;

  return (
    <>
      
      <div className="App">
        <Navigation />
        <AnimatePresence mode="wait">
        {React.cloneElement(element, { key: location.pathname })}
        </AnimatePresence>
        
      </div>

    </>
  );
}

export default App;
