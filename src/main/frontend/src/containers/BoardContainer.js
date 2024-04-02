import React, {useEffect} from "react";
import {getBoards} from "../module/board";
import Board from "../components/Board";
import {connect} from "react-redux";

const BoardContainer = ({
    getBoards,
    boards,
    loadingBoards,
}) => {
    useEffect(() => {
        getBoards()
    }, [getBoards]);

    return (
        <Board boards={boards} loadingBoards={loadingBoards} />
    );
};

export default connect(
    ({board}) => ({
        boards : board.boards,
        loadingBoards : board.loading.GET_BOARDS,
    }),
    {
        getBoards,
    }
)(BoardContainer);