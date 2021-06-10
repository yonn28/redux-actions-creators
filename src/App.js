import React , { useEffect } from 'react';
import NewNote from './components/newNotes';
import ListNotes from './components/notes';
import './App.css';
import FilterNotes from './components/filterNotes';
import { loadNotes } from './reducers/noteReducer';
import { useDispatch } from 'react-redux';


const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadNotes())
  });
  return (
    <div className="container">
      <NewNote/>
      <FilterNotes/>
      <ListNotes/>
    </div>
  );
}



export default App;
