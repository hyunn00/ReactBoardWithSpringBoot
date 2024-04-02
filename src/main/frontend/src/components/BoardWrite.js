import {Link, useNavigate} from "react-router-dom";


const BoardWrite = () => {
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
                <form className={'form'} action={'http://localhost:8080/api/board/write'} method={'post'}>
                    <div className={'title-box'}>
                        <input type={"text"} name={'title'} placeholder={'Title'}/>
                    </div>
                    <div className={'writer-box'}>
                        <input type={'text'} name={'writer'} placeholder={'Writer'}/>
                    </div>
                    <textarea className={'textarea'} name={'content'} placeholder={'Content'}></textarea>
                    <div className={'btn-box'}>
                        <button type={'submit'}>Submit</button>
                        <button type={'button'} onClick={goBack}>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default BoardWrite;