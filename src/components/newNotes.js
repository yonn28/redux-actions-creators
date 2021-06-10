import React from 'react';
import { useDispatch } from 'react-redux'
import { createNoteOf } from '../reducers/noteReducer';
import { createNew  } from '../services/notes'

const NewNote = (_props) => { 

    const dispatch = useDispatch();

    const addNote = async(event) => {
        event.preventDefault();
        const content = event.target.note.value;
        event.target.note.value = '';
        dispatch(createNoteOf(content));
    }

    return  (
        <form onSubmit={addNote}>
            <input name="note"/>
            <button type="submit"> add </button>
        </form>
    )
}

export default NewNote;