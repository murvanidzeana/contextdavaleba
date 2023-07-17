
import './App.css';
import { Routes, Route,Link} from "react-router-dom";
import Navbar  from './pages/Navbar';
import About from './pages/About';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Home from './pages/Home';
// import Nav from './pages/nav'
import { useState } from 'react';
import {MyContext} from './contect'





function App() {
  const[darkMode,setDarkmode]=useState(false)

  const changeDarkMode=()=>setDarkmode((prev)=> ! prev)
  
  return (

    <>
    
    < MyContext.Provider  value ={{darkMode,setDarkmode}}>
    
  <div className='app' style={{backgroundColor:darkMode? "#fff" : "#000"}}>
    
    <div className="header" > 
        
        <div className="nav" >
                <ul className="ul_links">


                    <li><link to='/'  className="li_first_child">Nav bar</link></li>
                    <li><link to='/home' className="li_second_child">Home</link></li>
                    <li><link to='/fetures'>Features</link></li>
                    <li><link to='/pricing'>Pricing</link></li>
                    <li><link to='/about'>About</link></li>
                     
                   
                    

                </ul>


                

            </div>


              
          <div className="search">
          <input type="text" placeholder="Search" />
          <button >Search</button>

        </div>
        <button className='darkmode_button' onClick={changeDarkMode}>dark mode</button>

        
    <Routes>
      <Route path="/" element={<Navbar/>}  />
      <Route path="/home" element={<Home />} />
      <Route path="/features" element={<Features />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      
    </Routes>

        </div>
            

      </div>        

    
    
    </MyContext.Provider>
    </>

  );
}

export default App;
