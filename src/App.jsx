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

function App() {
  return (
    <>
    <BrowserRouter>
    <ContextProvider>
    <Routes>
      <Route path='/' element={<HomeContainer/>} />
      <Route path='/chats' element={<ChatsPage/>} />
      <Route path='/perfil' element={<Perfil/>} />
    </Routes>
    </ContextProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
