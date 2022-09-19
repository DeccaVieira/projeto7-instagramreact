import { useState } from "react"

function Sugest (props){
    const [follow, setFollow] = useState(false)

    const toggle =()=>{
        setFollow(!follow)
   
}
return(
<div class="sugestao">
                <div class="usuario">
                    <img src= {props.Image} alt = ""/>
                    <div class="texto">
                        <div class="nome">{props.Name}</div>
                        <div class="razao">Segue Você</div>
                    </div>
                    </div>

                <div onClick={toggle}>
                    {follow ? <span class= "seguindo">Seguindo</span> : <span class= "seguir">Seguir</span>}
                </div>
            </div>
)
}
export default function Sugestoes() {
       const sugestao = [
        {Image:"assets/img/download.jpeg" , Name:"Doguxo", },
        {Image:"assets/img/1.jpeg" , Name:"E.T" },
        {Image:"assets/img/3.jpg"  , Name:"Smile" },
        {Image:"assets/img/4.jpeg" , Name:"cyclist.dog"},
        {Image:"assets/img/2.gif" , Name:"grimace"}
    
    ]
  
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
           {sugestao.map((sug) => (
            
        <Sugest Image={sug.Image} Name={sug.Name}/>


))}
 </div>)

            
}
            
    

