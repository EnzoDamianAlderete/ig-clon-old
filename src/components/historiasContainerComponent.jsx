import { useState } from "react";
import HistoriaComponent from "./historiaComponent";
import React from "react"; 
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const HistoriasContainer =()=>{
    const {users} = useContext(AppContext);
    return(
        <div className="historias--contenedor">
            <div className="btns--historia__container">
            <button className="btn--historia">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            </button>

            <button className="btn--historia">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
            </button>
            </div>
            
            {
                users.map( (element,index) =>{
                    return(
                        <span key={index}>
                            <HistoriaComponent user={element}/> 
                        </span>
                     );     
                })
            }
            
            
        </div>
    );
}

export default HistoriasContainer;