import axios from 'axios';

const url = 'http://localhost:3001/notes';


const getAll = async() => {
    const res = await axios.get(url);
    return res.data;
}

const createNew = async(data) => {
    const res = await axios.post(url, data);
    return res.data;
}

export { getAll , createNew };