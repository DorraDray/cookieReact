import cm from "./images/CM.png";
export default function ShopComponent(){
   return(
            <div id="divform">
            <form>
                <button id="counterGrandma">0</button>
                <input type="text" value="Grandma"/>
                <input  type="text" value="10 C"/>
                <input  type="text" value="+1"/>
                <button id="buyGrandma">Buy</button><br/><br/>


                <button id="counterOven">0</button>
                <input type="text" value="Oven"/>
                <input  type="text" value="100 C"/>
                <input  type="text" value="+10"/>
                <button id="buyOven">Buy</button><br/><br/>


                <button id="counterFactory">0</button>
                <input type="text" value="Factory"/>
                <input  type="text" value="1000 C"/>
                <input  type="text" value="+100"/>
                <button id="buyFactory">Buy</button><br/><br/>


                <button id="counterMine">0</button>
                <input type="text" value="Mine"/>
                <input  type="text" value="10000 C"/>
                <input  type="text" value="+1000"/>
                <button id="buyMine">Buy</button><br/><br/>


                <button id="counterBank">0</button>
                <input type="text" value="Bank"/>
                <input  type="text" value="1000000 C"/>
                <input  type="text" value="+10000"/>
                <button id="buyBank">Buy</button><br/><br/>
            </form>
            <img id="resetid" src={cm}/>
        </div>
) ;
}