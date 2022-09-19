import React from "react"
const fotoPadrao = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX_TKWA29GxhmFg37NiXn3Jp-bCPiUQsQhYA&usqp=CAU"
export default function Usuario(props) {

    const [nome, setName] = React.useState("")
    const [foto, setFoto] = React.useState(fotoPadrao)


    return (
        <div class="usuario">
            <img onClick={() => setFoto(prompt("Insira o link da sua foto de perfil"))} src={foto} alt="." />
            <div class="texto"> 
                <strong>{(nome === "" || nome === null) ? "Olá! Não sabemos o seu nome :(" : `Olá, ${nome}`}</strong>
                <span>
                    {nome}
              <ion-icon onClick={() => setName(prompt("Insira o seu nome"))} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}