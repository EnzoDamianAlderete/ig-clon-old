import Link from 'react-dom';
import React from "react"; 

const HistoriaComponent =({user})=>{

    const alerta=(name)=>{
        alert(`Estas viendo la historia de ${name}`);
    }

    return(
        <div className="historia--avatar" onClick={()=>alerta(user.name)}>
            <span className='span--history'>
            <img src={user.picture} alt="img--avatar" className="icono--avatar" width="56" height="56" />
            <p>{user.name}</p>
            </span>
        </div>
    );
}

export default HistoriaComponent;