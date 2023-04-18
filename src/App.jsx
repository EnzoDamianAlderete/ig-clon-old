import './App.css';
import './styles/Perfil.css'
import './styles/Explorer.css'
import './styles/ChatStyles.css';
import ChatsPage from './containers/ChatsPage';
import HomeContainer from './containers';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Perfil from './containers/perfil';
import { ContextProvider } from './context/AppContext';
import Page404 from './containers/Page404';

function App() {
  return (
    <>
    <BrowserRouter>
    <ContextProvider>
    <Routes>
      <Route path='/' element={<HomeContainer/>} />
      <Route path='/chats' element={<ChatsPage/>} />
      <Route path='/perfil' element={<Perfil/>} />
      <Route path='*' element={<Page404/>} />
    </Routes>
    </ContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
