import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createNoteOf , updateImportantOf } from './reducers/noteReducer';


const App = () => {

  const dispatch = useDispatch();
  const notes = useSelector(state => state)

  const addNote = (event) => {
    event.preventDefault();
    const content = event.target.note.value;
    event.target.note.value = '';
    dispatch(createNoteOf(content))
  }
  const toggleImportance = (id) => {
    dispatch( updateImportantOf(id) )
  }


  return (
    <>
      <form onSubmit={addNote}>
        <input name="note"/>
        <button type="submit"> add </button>
      </form>
      <ul>
        {notes.map( note => 
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



// const render = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// }

// store.subscribe(()=>{
//   console.log(store.getState())
//   render();
// })

// render();

export default App;
