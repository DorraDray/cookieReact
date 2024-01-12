import { useEffect, useState } from "react";
import ShopComponent from "./ShopComponent";
export default function  App(){
    const [cookies, setCookies] =useState (0);
    const [CookiesPerSecond, setCookiesPerSecond] =useState (1);
    useEffect(()=>{
      const myCookies = setInterval(()=>{
        setCookies((currentCookies)=>currentCookies + CookiesPerSecond);
      },1000);
      return()=>{
        clearInterval(myCookies);
      };
    },[]);
    function handleClick(){
      setCookies(cookies + CookiesPerSecond);
    }
  return(
    
   
    <div class="container">
      <div>
         <p id="counter" class="pcounter">{cookies} Cookies</p>
         <p id="counterPS" class="pcounterPS">{CookiesPerSecond} CPS</p>
        <button onClick = {handleClick} id="counterbutton"></button>
      </div>
      <ShopComponent/>
    </div>
   );
}