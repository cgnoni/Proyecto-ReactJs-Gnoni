import { useState } from 'react'
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';

import './App.css'

function App() {

  return (
    <div className='container-fluid'>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos!"/>
    </div>
  )
}

export default App
