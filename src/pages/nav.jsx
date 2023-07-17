// import React, { useState } from "react";
// import {MyContext} from '../contect';
// import { Link } from "react-router-dom";

// import './nav.css'


// export default function Nav(){
//     const[darkMode,setDarkMode]=useState(false)

//     const changeDarkMode=()=>setDarkMode ((prev)=> !prev)

//     return(
        
        
//         <div className="header"> 
        
//         <div className="nav" style={{backgroundColor:darkMode? "#fff" : "#000"}}>
//                 <ul className="ul_links">


//                     <li><link to='/'  className="li_first_child">Nav bar</link></li>
//                     <li><link to='/home' className="li_second_child">Home</link></li>
//                     <li><link to='/fetures'>Features</link></li>
//                     <li><link to='/pricing'>Pricing</link></li>
//                     <li><link to='/about'>About</link></li>
                    
                   
                    

//                 </ul>


                

//             </div>


              
//           <div className="search">
//           <input type="text" placeholder="Search" />
//           <button >Search</button>

//         </div>
//         <button className='darkmode_button' onClick={changeDarkMode}>dark mode</button>

//         </div>
            
              

          
        

//     )
// }