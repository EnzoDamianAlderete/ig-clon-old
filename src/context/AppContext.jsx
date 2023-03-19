import React, { Component }  from 'react';
import { createContext, useState } from "react";


export const AppContext = createContext();

export const ContextProvider=({children})=>{

    const [ publicacionesPrincipal , setpublicacionesPrincipal ] = useState([
        {
        link:' . . .',
        name:'julian.Cortese',
        img:'/assets/img/usuarios/usuario-3.jpg',
        publicacion:'/assets/img/publicaciones/publicacion-1.jpg',
        description:'Inicio de una nueva aventura...'
    },
    {
        link:' . . .',
        name:'julia.simth',
        img:'/assets/img/usuarios/usuario-1.jpg',
        publicacion:'/assets/img/publicaciones/publicacion-2.jpg',
        description:'#travel'
    },
    {
        link:' . . .',
        name:'leo.paredes',
        img:'/assets/img/usuarios/usuario-5.jpg',
        publicacion:'/assets/img/publicaciones/publicacion-3.jpg',
        description:'#work #monday #programming'
    }]);

    const [publicacionesFeed , setpublicacionesFeed] = useState([{ publicacion:"/assets/img/imagenes-feed/publicacion-feed-1.jpg"},
    { publicacion:"/assets/img/imagenes-feed/publicacion-feed-2.jpg"},
    { publicacion:"/assets/img/imagenes-feed/publicacion-feed-3.jpg"},
    { publicacion:"/assets/img/imagenes-feed/publicacion-feed-4.jpg"},
    { publicacion:"/assets/img/imagenes-feed/publicacion-feed-5.jpg"}]);

    const [ users , setUsers] = useState([{
        name:'julia.simth',
        picture:'/assets/img/usuarios/usuario-1.jpg',
        viewed:false,
        },
        {
        name:'melanie.09',
        picture:'/assets/img/usuarios/usuario-2.jpg',
        viewed:false,
        },
        {
        name:'julian.Cortese',
        picture:'/assets/img/usuarios/usuario-3.jpg',
        viewed:false,
        },
        {
        name:'Aaron.robert',
        picture:'/assets/img/usuarios/usuario-4.jpg',
        viewed:false,
        },
        {
        name:'leo.paredes',
        picture:'/assets/img/usuarios/usuario-5.jpg',
        viewed:false,
        },
        {
        name:'romina.rodriguez',
        picture:'/assets/img/usuarios/usuario-6.jpg',
        viewed:false,
        } ,
        {
        name:'bruno.romero07',
        picture:'/assets/img/usuarios/usuario-7.jpg',
        viewed:false,
        } ]);


    return(
        <AppContext.Provider value={{ publicacionesFeed ,publicacionesPrincipal,users}}>
            {children}
        </AppContext.Provider>
    )
}