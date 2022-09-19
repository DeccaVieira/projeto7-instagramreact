import React from "react"

function PostP(props) {

const [like, setLike] = React.useState(false)
const [feed, setFeed] = React.useState(false)
let [count, setCount] = React.useState(Number(props.count))


const toggleL =()=>{
  setLike(!like)

  
}
const changeCount= ()=>{
  like ? setCount(count - 1) : setCount(count + 1) 
}



const toggleF =()=>{
  setFeed(!feed)

}
  return (
    <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.imgUser} alt="" />
            {props.nameUser}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.imagem} alt="" />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div class = "action"> 
           
              <span onClick={()=>setLike(!like, changeCount())}>
                    {like ? 
                    <ion-icon class="heart" name="heart"></ion-icon> 
                    :
                     <ion-icon name="heart-outline"></ion-icon>}
               
                </span>
            
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
            <span onClick={toggleF}>
                    {feed ? <ion-icon name="bookmark"></ion-icon> : <ion-icon name="bookmark-outline"></ion-icon>}
                </span>
              
            </div>
          </div>

          <div class="curtidas">
            <img src={props.imgliked} alt="" />
            <div class="texto">
              Curtido por <strong>{props.liked}</strong> e <strong><span>outras </span>
                             <span >
                             {count}</span>
                  <span> pessoas</span></strong>
            </div>
          </div>
        </div>
       
        </div>
  )
}

export default function Posts() {
 
  const post = [
    { imgUser: "assets/img/meowed.svg", nameUser: "meowed", imagem: "assets/img/gato-telefone.svg", imgliked: "assets/img/filomoderna.svg", liked: "filó", count: 1084},
    { imgUser: "assets/img/memeriagourmet.svg", nameUser: "Ratin", imagem: "assets/img/ratin.gif", imgliked: "assets/img/barked.svg", liked: "barked", count: 785},
  {imgUser: "assets/img/bad.vibes.memes.svg", nameUser: "Lôlô", imagem: "assets/img/pirulito.jpeg", imgliked: "assets/img/respondeai.svg", liked: "respondeai", count: 981 } 
  ]

 
 return (

    <div class="posts">
      {post.map((p) => (
        <PostP imgUser={p.imgUser} nameUser={p.nameUser} imagem={p.imagem} imgliked={p.imgliked} liked={p.liked} count={p.count}/>
      ))}
</div>
)}
















