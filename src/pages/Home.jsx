
import React, { useContext } from "react";
import {MyContext} from '../contect'

export default function Home(){
    const{darkMode}=  useContext (MyContext)

 
    return( <h1 style={{color:darkMode? "#fff" : "#000"}}>home </h1>)
}