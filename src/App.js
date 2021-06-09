import React from 'react';
import NewNote from './components/newNotes';
import ListNotes from './components/notes';
import './App.css';
import FilterNotes from './components/filterNotes';


const App = () => {
  return (
    <div className="container">
      <NewNote/>
      <FilterNotes/>
      <ListNotes/>
    </div>
  );
}



export default App;
