import { useState } from "react";
import UsuarioSugeridoComponent from "./UsuarioSugeridoComponent";
import React from "react"; 

const SugeridosContainer =()=>{
    const usuariosSug = [
        {
            link:"Seguir",
            name:'brad.pitt',
            img:'https://i.pinimg.com/564x/bd/ff/9a/bdff9a91de40dbdfcbf966dd910933e6.jpg',
            legenda:'dahianaarochas sigue a este usuario',
        },
         {
            link:"Seguir",
            name:'julian.alvarez',
            img:'https://i1.sndcdn.com/artworks-97iba9Z0GCTq3zss-lLFRsg-t500x500.jpg',
            legenda:'marializ_597 sigue a este usuario',
        },
        {
            link:"Seguir",
            name:'martinpdisalvo',
            img:'https://laletrade.com/images/biografia/Coscu-Martin-Perez-Disalvo.jpg',
            legenda:'nchainq sigue a este usuario',
        },
        {
            link:"Seguir",
            name:'chris.martin',
            img:'https://media1.popsugar-assets.com/files/thumbor/WB4NmFR_ernsc28_5bVXmEFqlyw/32x75:2123x2166/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/03/17/853/n/1922398/dd07b6ea5e7125236ac023.26390298_/i/Chris-Martin.jpg',
            legenda:'Recomendado por Instagram',
        },
         {
            link:"Seguir",
            name:'keanu.reeves',
            img:'https://media1.popsugar-assets.com/files/thumbor/bwuY-aqw1fIfMiQfnlk9j-JNQXA/747x57:2332x1642/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/02/11/845/n/1922398/72b43cc95e42fddddb7c75.82501526_/i/Keanu-Reeves.jpg',
            legenda:'Nuevo en Instagram',
        }, 
         {
            link:"Seguir",
            name:'tom.hollad',
            img:'https://data.whicdn.com/images/331821888/original.jpg',
            legenda:'Nuevo en Instagram',
        }, 
    ]
    const usuarioPropio = {
        link:"Cambiar",
        name:'enzo.alderete_',
        img:'https://botmake.io/storage/33ccf224346cfd07517bef8e1d701240/users/b0e432c1bba2a7f0185a2c3575c4cdee.jpg?v=1628554417',
        legenda:'Enzo Alderete',
     };
    const [suggestedUser, setSuggestedUser] = useState(usuariosSug);
    return(
        <div className="sugerencia--usuarios">
            <UsuarioSugeridoComponent userSuggested={usuarioPropio}/>
            <div className="sugerencias--legend">
                <h4>Sugerencias para ti</h4>
                <a href="#">Ver todo</a>
            </div>
            <div className="sugerencias--list">
                {
                    suggestedUser.map((element,index) =>{
                        return(
                            <span key={index}>
                                <UsuarioSugeridoComponent userSuggested={element}/>
                            </span>
                            
                        );
                    })
                }
            </div>
            <div className="sugerencias--footer">
                <a href="#">Informacion</a>
                <a href="#"> . Ayuda</a>
                <a href="#"> . Prensa</a>
                <a href="#"> . API</a>
                <a href="#"> . Empleo</a>
                <a href="#"> . Privacidad</a>
                <a href="#"> . Condiciones</a>
                <a href="#"> . Ubicaciones</a>
                <a href="#"> . Idioma</a>
                <legend>© 2022 INSTAGRAM FROM META</legend>
            </div>
        </div>
    );
}

export default SugeridosContainer;