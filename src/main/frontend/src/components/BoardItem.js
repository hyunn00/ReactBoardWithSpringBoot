import {Link, useParams} from "react-router-dom";
import {useEffect} from "react";
import {connect} from "react-redux";
import {getBoard} from "../module/board";

const BoardItem = ({
   getBoard,
   board,
   loadingBoard,
}) => {
    const id = useParams().id;

    useEffect(() => {
        getBoard(id)
    }, [id]);

    return (
        <>
            <div className={'btn-write'}>
                <Link to={'/boards'}>List</Link>
            </div>
            <div className={'wrap'}>
                <div className={'detail'}>
                    {loadingBoard && '로딩 중...'}
                    {!loadingBoard && board && (
                        <>
                            <div className={'title'}><h2>{board.title}</h2></div>
                            <div className={'writer'}><p>{board.writer || '익명'}</p></div>
                            <div className={'content'}><p>{board.content}</p></div>
                        </>
                    )}
                    <div className={'btn-box'}>
                        <Link to={`/boards/${id}/update`}>Update?</Link>
                        <Link to={`http://localhost:8080/api/board/${id}/delete`}>Delete?</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default connect(
    ({board}) => ({
        board: board.board,
        loadingBoard: board.loading.GET_BOARD,
    }),
    {
        getBoard,
    }
)(BoardItem);