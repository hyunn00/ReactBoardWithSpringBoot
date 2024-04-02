import * as api from '../lib/api';
import {handleActions} from "redux-actions";


const GET_BOARDS = 'board/GET_BOARDS';
const GET_BOARDS_SUCCESS = 'board/GET_BOARDS_SUCCESS';
const GET_BOARDS_FAILURE = 'board/GET_BOARDS_FAILURE';

const GET_BOARD = 'board/GET_BOARD';
const GET_BOARD_SUCCESS = 'board/GET_BOARD_SUCCESS';
const GET_BOARD_FAILURE = 'board/GET_BOARD_FAILURE';

export const getBoards = () => async dispatch => {
    dispatch({type : GET_BOARDS}); // 요청을 시작한 것을 알림
    try {
        const response = await api.getBoards();
        dispatch({
            type : GET_BOARDS_SUCCESS,
            payload : response.data
        });
    } catch (e) {
        dispatch({
            type : GET_BOARDS_FAILURE,
            payload : e,
            error : true
        });
        throw e;
    }
}

export const getBoard = (id) => async dispatch => {
    dispatch({type : GET_BOARD}); // 요청을 시작한 것을 알림
    try {
        const response = await api.getBoard(id);
        dispatch({
            type : GET_BOARD_SUCCESS,
            payload : response.data
        });
    } catch (e) {
        dispatch({
            type : GET_BOARD_FAILURE,
            payload : e,
            error : true
        });
        throw e;
    }
}

const initialState = {
    loading : {
        GET_BOARDS : false,
        GET_BOARD : false
    },
    boards : null,
    board : null
};

const board = handleActions(
    {
        [GET_BOARDS] : state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_BOARDS : true // 요청 시작
            }
        }),

        [GET_BOARDS_SUCCESS] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_BOARDS : false // 요청 완료
            },
            boards : action.payload
        }),

        [GET_BOARDS_FAILURE] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_BOARDS : false //요청 완료
            }
        }),

        [GET_BOARD] : state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_BOARD : true // 요청 시작
            }
        }),

        [GET_BOARD_SUCCESS] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_BOARD : false // 요청 완료
            },
            board : action.payload
        }),

        [GET_BOARD_FAILURE] : (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_BOARD : false //요청 완료
            }
        })
    },
    initialState
);

export default board;