import { useState } from 'react';
import './App.css';
import NavBAr from './components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css'
      ></link>
      <NavBAr />
      <ItemListContainer />
    </div>
  );
}

export default App;
