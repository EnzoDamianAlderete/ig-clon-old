import React from "react";

const HeaderPerfilComponent=()=>{
    return(
     <div className="headerPerfil">
        <img src="https://botmake.io/storage/33ccf224346cfd07517bef8e1d701240/users/b0e432c1bba2a7f0185a2c3575c4cdee.jpg?v=1628554417" alt="" />
        <div>
            <div className="headerPerfil--title">
                <h2>enzo.alderete_</h2>
                <button>Editar Perfil</button>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-wide" viewBox="0 0 16 16">
                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"/>
                </svg>
                </button>
            </div>
            <div className="seguidoresPerfil">
                <div>
                    <p><b>18</b> publicaciones</p>
                    
                </div>
                <div>
                    <p><b>1234</b> seguidores</p>
                </div>
                <div>
                    <p><b>745</b> seguidos</p>
                </div>
            </div>
            <div>
                <h3>Enzo Alderete</h3>
                <p>Enzo como Francescoli 🐔
                <br /> 97'|| Corrientes 🏡🐊🇦🇷</p>
            </div>
            
        </div>
     </div> 
    )

}

export default HeaderPerfilComponent;