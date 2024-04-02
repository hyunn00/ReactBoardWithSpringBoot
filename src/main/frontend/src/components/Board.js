import {Link, Outlet} from "react-router-dom";

const Board = ({loadingBoards, boards}) => {
    return (
        <>
            <Outlet />
            <div className={'btn-write'}>
                <Link to={'/write'}>Write</Link>
            </div>
            <div className={'wrap'}>
                <div className={'List'}>
                    <div className={'header'}>title</div>
                    <div className={'header'}>writer</div>
                    {loadingBoards && '로딩 중...'}
                    {!loadingBoards && boards && (
                        <div className={'items'}>
                            {boards.map(board => (
                                <div className={'ListItem'}>
                                    <div className={'title'}>
                                        <Link to={`/boards/${board.id}`}>{board.title}</Link>
                                    </div>
                                    <div className={'writer'}>{board.writer || '익명'}</div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Board;