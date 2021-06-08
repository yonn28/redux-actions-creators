import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import noteReducer, { createNoteOf , updateImportantOf } from './reducers';

const store = createStore(noteReducer);



const App = () => {
  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    store.dispatch(createNoteOf(content))
  }
  const toggleImportance = (id) => {
    store.dispatch( updateImportantOf(id) )
  }


  return (
    <>
      <form onSubmit={addNote}>
        <input name="note"/>
        <button type="submit"> add </button>
      </form>
      <ul>
        {store.getState().map( note => 
           <li 
            key={ note.id }
            onClick={() => { toggleImportance(note.id) }}
          >

             {note.content} <strong> { note.important ? 'important' : '' } </strong>
           </li>
        )}
      </ul>
    </>
  );
}



const render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(()=>{
  console.log(store.getState())
  render();
})

render();

export default App;
