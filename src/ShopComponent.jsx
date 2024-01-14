import cm from "./images/CM.png";
export default function ShopComponent(props){
    const Button = ({onclickHandler, id, max, total})=>{
        const background = total>=max ? "green":"red";
               return (
            <button style={{backgroundColor:background}}onClick = {onclickHandler} id={id} >Buy</button>
        )
    }
   return(
            <div id="divform">
            
                <button id="counterGrandma">{props.Grandma}</button>
                <input type="text" value="Grandma"/>
                <input  type="text" value="10 C"/>
                <input  type="text" value="+1"/>
                <Button onclickHandler={props.addGrandma} id="buyGrandma" max={10} total ={props.cookies}/><br/><br/>

                <button id="counterOven">{props.Oven}</button>
                <input type="text" value="Oven"/>
                <input  type="text" value="100 C"/>
                <input  type="text" value="+10"/>
               <Button onclickHandler={props.addOven} id="buyOven" max={100} total ={props.cookies}/><br/><br/>

                <button id="counterFactory">{props.Factory}</button>
                <input type="text" value="Factory"/>
                <input  type="text" value="1000 C"/>
                <input  type="text" value="+100"/>
                <Button onclickHandler={props.addFactory} id="buyFactory" max={1000} total ={props.cookies}/><br/><br/>

                <button id="counterMine">{props.Mine}</button>
                <input type="text" value="Mine"/>
                <input  type="text" value="10000 C"/>
                <input  type="text" value="+1000"/>
                <Button onclickHandler={props.addMine} id="buyMine" max={10000} total ={props.cookies}/><br/><br/>

                <button id="counterBank">{props.Bank}</button>
                <input type="text" value="Bank"/>
                <input  type="text" value="1000000 C"/>
                <input  type="text" value="+10000"/>
                <Button onclickHandler={props.addBank} id="buyBank" max={100000} total ={props.cookies}/><br/><br/>

            <img id="resetid" src={cm}/>
        </div>
) ;
}