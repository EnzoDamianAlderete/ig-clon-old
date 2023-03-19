import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import PublicacionPerfil from "./publicacionPerfil";

const PublicacionesPerfilConteiner=()=>{

    const {publicacionesFeed} = useContext(AppContext);

    return(
        <div className="">
            <div className="seccionesPublicaciones conteiner">
                <p>PUBLICACIONES</p>
                <p>GUARDADAS</p>
                <p>ETIQUETAS</p>
            </div>
            <div className="publicacionesPerfil conteiner">
            {publicacionesFeed.map((element)=>{
                return(
                    <PublicacionPerfil publicacion={element}/>
                )
            })}
            </div>
        </div>
        
    )
}

export default PublicacionesPerfilConteiner;