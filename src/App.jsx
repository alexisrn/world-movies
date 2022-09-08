import { useState } from 'react'
import { Outlet} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer';

import './App.css';
export function App() {

  return (
    <div className="App">
     <NavBar />
      <Outlet/>   
      <Footer/> 
    </div>
  )
}


