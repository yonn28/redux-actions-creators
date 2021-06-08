
const noteReducer = ( state = [], action ) => {
    switch (action.type) {
        case 'NEW_NOTE':
            return state.concat(action.data);
        case 'TOGGLE_IMPORTANCE': {
                const id = action.data.id
                const noteToChange = state.find(n => n.id === id)
                const changedNote = { 
                  ...noteToChange, 
                  important: !noteToChange.important 
                }
                return state.map(note =>
                  note.id !== id ? note : changedNote 
                )
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