import React, {useEffect, useState} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Permanent/Nav';
import Home from './components/Home/Home';
import Summaries from './components/Summary/Summaries';
import TextEditor from './components/Summary/TextEditor';
import LogIn from './components/Account/LogIn';
import CardFolders from './components/FlashCards/CardFolders';
import FlashCards from './components/FlashCards/FlashCards';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  
  return (

    <AuthProvider>
      
      <div className="App">
        
        <Nav />
        <Routes>

          <Route exact path='/' element={ <Home />} />
          <Route exact path='/signIn' element={<LogIn />} />
          <Route exact path='/summary' element={<Summaries />} />
          <Route exact path='/summary/:id' element={<TextEditor />} />
          <Route exact path='/FlashCards' element={<CardFolders />} />
          <Route exact path='/FlashCards/CardGroup/:id' element={<FlashCards />} />
        
        </Routes>


      </div>

    </AuthProvider>
  );
}

export default App;
