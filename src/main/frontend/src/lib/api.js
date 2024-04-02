import axios from 'axios'

export const getBoards = () => axios.get('http://localhost:8080/api/board/list');
export const getBoard = id => axios.get(`http://localhost:8080/api/board/${id}`);