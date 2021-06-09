
const filterReducer = ( state = 'ALL', action ) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;
        default:
            return state
    }
}

const filterChange = (value) => {
    return {
        type: 'SET_FILTER', 
        filter: value
    }
}

export {filterChange}
export default filterReducer;