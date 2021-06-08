import React from 'react';
import {updateImportantOf} from '../reducers/noteReducer'
import { useDispatch, useSelector } from 'react-redux'


const ListNotes = (_props) => {

    const dispatch = useDispatch();
    const notes = useSelector(state => state)
  
  
    const toggleImportance = (id) => {
      dispatch( updateImportantOf(id) )
    }

    return (
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
    )
}

export default ListNotes;