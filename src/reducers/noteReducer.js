import { getAll, createNew } from '../services/notes';


const noteReducer = ( state = [], action ) => {
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
        case 'LOAD_NOTES':
            return  action.data
        default:
            return state;
    }
}



const loadNotes = () => {
    return async dispatch => {
        const data = await getAll();
        dispatch ({
            type: 'LOAD_NOTES',
            data
        });
    }

}

const createNoteOf = ( content ) => {
    return async dispatch => {
        const newNote = await createNew({content, important: false });
        dispatch({
            type: 'NEW_NOTE',
            data: newNote
        });
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

export { createNoteOf , updateImportantOf ,loadNotes };
export default noteReducer;