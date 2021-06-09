const notes= [
    { content: 'reducer defines how redux store works', important: true, id: 1},
    { content: 'state of store can contain any data', important: false, id: 2}
  ]

const noteReducer = ( state = notes, action ) => {
    switch (action.type) {
        case 'NEW_NOTE':
            return  [...state, action.data];
        case 'TOGGLE_IMPORTANCE': {
                const id = action.data.id;
                const noteToChange = state.find(n => n.id === id);
                const changedNote = { 
                  ...noteToChange, 
                  important: !noteToChange.important 
                }
                const newNotes = state.map( note =>
                    note.id !== id ? note : changedNote 
                )
                return [...newNotes]
             
        }
        default:
            return state;
    }
}

const generateId = () => {
    return Math.floor(Math.random() * 1000);
}

const createNoteOf = ( content ) => {
    return {
        type: 'NEW_NOTE',
        data: {
          content,
          important: false,
          id: generateId()
        }
    }
}

const updateImportantOf = ( id ) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        data: {
            id
        }
    }
}

export { createNoteOf , updateImportantOf }

export default noteReducer;