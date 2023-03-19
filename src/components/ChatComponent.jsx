import React from "react"; 

const ChatComponent =({user})=>{
    
return(
    <div className="chat--listed">
        <img src={user.picture} alt="nombre usuario" width='54px' height='54px' className="icono--avatar" />
        <div>
            <p><b>nombre.user</b></p>
            <div className="contenidoChat--listed">
            <p>Lorem ipsum dolor sit amet...</p>
            <p>.</p>
            <p> 2h</p>
            </div>
            
        </div>
    </div>
)
}

export default ChatComponent;