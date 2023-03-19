import HeaderComponent from "../components/HeaderComponent";
import HistoriasContainer from "../components/historiasContainerComponent";
import PublicacionesContainer from "../components/publicacionesContainerComponent";
import SugeridosContainer from "../components/sugeridosContainerComponent";
import React from "react";

const HomeContainer=()=>{
    return(
        <>
        <HeaderComponent/>
        <div className="body--container">
        <div>
        <HistoriasContainer/>
        <PublicacionesContainer/>
        </div>
        <SugeridosContainer/>
      </div>
        </>
    
    )
}

export default HomeContainer;