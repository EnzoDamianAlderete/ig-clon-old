import PublicacionComponent from "./PublicacionComponent";
import React from "react"; 
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";


const PublicacionesContainer=()=>{ 

    const { publicacionesPrincipal } = useContext(AppContext);

    const [liked, updateLiked]=useState(false);
    const [saved, updateSaved]=useState(false);
    
    const handleClickLike=()=>{
        if(liked){
            updateLiked(false);
        }else if(!liked){
            updateLiked(true);
        }
    }
    
    const comentPublication=()=>{
        alert('insertar comentario');
    }
    const handleClickSave=()=>{
        if(saved){
            updateSaved(false);
        }else if(!saved){
            updateSaved(true);
        }
    }

    return(
        <>
        {publicacionesPrincipal.map((element)=>{
            return(
                <PublicacionComponent publicacion={element}  handleClickLike={handleClickLike} liked={liked} saved={saved} comentPublication={comentPublication} handleClickSave={handleClickSave}/>
            );
        })}
        </>
    )
};

export default PublicacionesContainer;