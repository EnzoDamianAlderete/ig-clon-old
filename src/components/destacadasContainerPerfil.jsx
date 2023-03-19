import React, { react } from "react";
import Destacada from "./destacada";
import { useState } from "react";

const DestacadasContainerPerfil=()=>{
    const hDestacadas = [
        {
            name:'me',
            img:'https://i.pinimg.com/originals/9e/98/79/9e9879a15fae122b5f7f353dac856892.jpg',
         },
         {
            name:'mascotas',
            img:'https://cdn.icon-icons.com/icons2/1949/PNG/512/free-30-instagram-stories-icons53_122600.png',
        },
        {
            name:'amigos',
            img:'https://i.pinimg.com/originals/75/d5/66/75d566340e30a69c05a588b0ed99b2f5.jpg',
         }
         
    ]
    const [destacadas, setDestacadas] = useState(hDestacadas);
    return(
        <div className="destacadasContainer conteiner">
            {
                destacadas.map((element,index)=>{
                    return(
                        <span key={index}>
                            <Destacada user={element}/> 
                        </span>
                    );
                })
            }
            
        </div>
    )
}

export default DestacadasContainerPerfil;