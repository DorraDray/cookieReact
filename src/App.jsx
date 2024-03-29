import { useEffect, useState } from "react";
import ShopComponent from "./ShopComponent";
export default function  App()
{
    const [cookies, setCookies] =useState (parseInt(localStorage.getItem("cookieCount"))||0);
    const [CookiesPerSecond, setCookiesPerSecond] =useState (parseInt(localStorage.getItem("localCookiesPerSecond"))||1);
    const [Grandma, setGrandma] =useState (parseInt(localStorage.getItem("cookieCountGrandma"))||0);
    console.log(cookies, CookiesPerSecond, Grandma)
    const [Oven, setOven] =useState (parseInt(localStorage.getItem("cookieCountOven"))||0);
    const [Factory, setFactory] =useState (parseInt(localStorage.getItem("cookieCountFactory"))||0);
    const [Mine, setMine] =useState (parseInt(localStorage.getItem("cookieCountMine"))||0);
    const [Bank, setBank] =useState (parseInt(localStorage.getItem("cookieCountBank"))||0);
    useEffect(()=>{
      const myCookies = setInterval(()=>{
      
        setCookies((currentCookies)=>currentCookies + CookiesPerSecond);
      },1000);
      return()=>{
        clearInterval(myCookies);
      };
    },[]);
    useEffect(()=>{
      localStorage.setItem("cookieCountGrandma",Grandma.toString() );
      localStorage.setItem("cookieCount", cookies.toString());
      localStorage.setItem("localCookiesPerSecond", CookiesPerSecond.toString());
      localStorage.setItem("cookieCountOven",Oven.toString() );
      localStorage.setItem("cookieCountFactory",Factory.toString() );
      localStorage.setItem("cookieCountMine",Mine.toString() );
      localStorage.setItem("cookieCountBank",Bank.toString());
    },[Grandma,cookies,CookiesPerSecond]);
    function handleClick(){
      setCookies(cookies + CookiesPerSecond);

    }
    function addGrandma(){
      if(cookies>=10){
      setGrandma(Grandma + 1) ;
      setCookiesPerSecond(CookiesPerSecond+1);
      setCookies(cookies-10);
            }else{
          alert("you dont have enought cookies")
      }
    }
      function addOven(){
        if(cookies>=100){
        setOven(Oven + 1) ;
        setCookiesPerSecond(CookiesPerSecond+10);
        setCookies(cookies-100);
               }else{
            alert("you dont have enought cookies")
        }}
        function addFactory(){
          if(cookies>=1000){
          setFactory(Factory + 1) ;
          setCookiesPerSecond(CookiesPerSecond+100);
          setCookies(cookies-1000);
        
          }else{
              alert("you dont have enought cookies")
          }}
          function addMine(){
            if(cookies>=10000){
            setMine(Mine + 1) ;
            setCookiesPerSecond(CookiesPerSecond+1000);
            setCookies(cookies-10000);
        
            }else{
                alert("you dont have enought cookies")
            }}
            function addBank(){
              if(cookies>=100000){
              setBank(Bank + 1) ;
              setCookiesPerSecond(CookiesPerSecond+10000);
              setCookies(cookies-100000);
           
              }else{
                  alert("you dont have enought cookies")
              }
  }
              function reset(){
                setCookies(0);
                setCookiesPerSecond(1);
                setGrandma(0) ;
                setMine(0);
                setOven(0);
                setFactory(0);
                setBank(0);              
                
                 }
  return(
    
   
    <div class="container">
      <div>
         <p id="counter" class="pcounter">{cookies} Cookies</p>
         <p id="counterPS" class="pcounterPS">{CookiesPerSecond} CPS</p>
        <button onClick = {handleClick} id="counterbutton"></button>
      </div>
      <ShopComponent cookies={cookies} CookiesPerSecond={CookiesPerSecond} 
      Grandma={Grandma} Oven={Oven} Factory={Factory} Mine={Mine} Bank={Bank}
      addGrandma={addGrandma} addOven={addOven} addFactory={addFactory} 
      addMine={addMine} addBank={addBank} reset={reset}/>
    </div>
   );
}