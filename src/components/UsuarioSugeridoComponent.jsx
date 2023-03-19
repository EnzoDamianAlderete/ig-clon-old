import React from "react"; 
import { Link } from "react-router-dom";

const UsuarioSugeridoComponent =({userSuggested})=>{
    return(
        <div className="usuario--card">
            <div className="contenido--usuario__card">
                <Link to={'/Perfil'}>
                <img src={userSuggested.img} alt="img--avatar" className="icono--avatar" />
                </Link>
                <div>
                    <Link to={'/Perfil'}>
                    {userSuggested.name}
                    </Link>
                    <p>{userSuggested.legenda}</p>
                </div>
            </div>
            <a href="#">{userSuggested.link}</a>
        </div>
    );
}
export default UsuarioSugeridoComponent;