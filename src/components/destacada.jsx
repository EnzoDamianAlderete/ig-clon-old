import React from "react";

const Destacada=({user})=>{

        return(
            <div className="destacada" >
                <span className='span--history__destacada'>
                <img src={user.img} alt="img--avatar" className="icono--avatar__destacada" />
                </span>
                <p>{user.name}</p>
                
            </div>
        );
}

export default Destacada;