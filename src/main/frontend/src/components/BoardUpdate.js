import {Link, useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {getBoard} from "../module/board";
import {connect} from "react-redux";


const BoardUpdate = ({
    getBoard,
    board,
    loadingBoard
 }) => {
    const id = useParams().id;
    const [boardFields, setBoardFields] = useState({
        title : '',
        writer : '',
        content : ''
    })

    useEffect(() => {
        getBoard(id);
    }, [id]);

    useEffect(() => {
        if(board) setBoardFields(board)
    }, [board]);

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setBoardFields(prevState => ({
            ...prevState,
            [name] : value
        }))
    }, []);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div className={'btn-write'}>
                <Link to={'/boards'}>List</Link>
            </div>
            <div className={'wrap'}>
                <form className={'form'} action={`http://localhost:8080/api/board/${id}/update`} method={'post'}>
                    {loadingBoard && '로딩 중...'}
                    {!loadingBoard && board && (
                        <>
                            <input type={"hidden"} name={'id'} value={board.id} readOnly={true}/>
                            <div className={'title-box'}>
                                <input type={"text"} name={'title'} value={boardFields.title} onChange={onChange}/>
                            </div>
                            <div className={'writer-box'}>
                                <input type={'text'} name={'writer'} value={boardFields.writer} onChange={onChange}/>
                            </div>
                            <textarea className={'textarea'} name={'content'} value={boardFields.content} onChange={onChange}></textarea>
                        </>
                    )}
                    <div className={'btn-box'}>
                        <button type={'submit'}>Update</button>
                        <button type={'button'} onClick={goBack}>Cancle</button>
                    </div>
                </form>
            </div>
        </>

    )
};

export default connect(
    ({board}) => ({
        board: board.board,
        loadingBoard: board.loading.GET_BOARD,
    }),
    {
        getBoard,
    }
)(BoardUpdate);