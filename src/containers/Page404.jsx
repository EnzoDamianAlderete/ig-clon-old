import { Link } from "react-router-dom"
import React from "react";

const Page404 =()=>{
    return(
        <>
        <h2>404 NOT FOUND</h2>
        <Link to={'/'}>Volver a home</Link>
        </>
        
    )
}

export default Page404;