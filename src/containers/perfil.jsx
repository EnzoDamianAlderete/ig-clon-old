import React from "react";
import DestacadasContainerPerfil from "../components/destacadasContainerPerfil";
import HeaderComponent from "../components/HeaderComponent";
import HeaderPerfilComponent from "../components/headerPerfilComponent";
import PublicacionesPerfilConteiner from "../components/publicacionesPerfilConteiner";

const Perfil=()=>{
    return(
        <>
        <HeaderComponent/>
        <HeaderPerfilComponent/>
        <DestacadasContainerPerfil/>
        <PublicacionesPerfilConteiner/>
        </>
    )
}

export default Perfil;