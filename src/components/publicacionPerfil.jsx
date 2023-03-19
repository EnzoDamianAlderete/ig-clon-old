import React from "react";
import { Link } from "react-router-dom";

const PublicacionPerfil=({publicacion})=>{

    return(
        <div className="publicacionPerfil">
            <Link to={'/publicacionDetalles'}>
            <img src={publicacion.publicacion} alt="publicacion perfil" />
            </Link>
        </div>
    )
}

export default PublicacionPerfil;