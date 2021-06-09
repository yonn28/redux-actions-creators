import React from 'react';
import { useDispatch } from 'react-redux';
import {filterChange} from '../reducers/filterReducer';

const FilterNotes = () => { 
    const dispatch = useDispatch()
    const filterSelected = (value) => {
      dispatch(filterChange(value));
    }
    return (
        <>
            <input type="radio" name="filter" onChange={()=> filterSelected('ALL')}/> all   
            <input type="radio" name="filter" onChange={()=> filterSelected('IMPORTANT')}/> impotant
            <input type="radio" name="filter" onChange={()=> filterSelected('NONIMPORTANT')}/> nonImportant
        </>
    )
}

export default FilterNotes;