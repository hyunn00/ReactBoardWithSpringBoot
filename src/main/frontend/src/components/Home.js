import {Link} from "react-router-dom";


const Home = () => {
    return (
        <>
            <div className={'btn-write'}>
                <Link to={'/boards'}>List</Link>
            </div>
            <div className={'wrap'}>
                <div>
                    <h3>이 사이트는 Spring Boot와 React를 연동하는 연습을 위해 개발한 게시판입니다.</h3>
                    <p>
                        List 버튼을 통해 게시판 목록을 확인할 수 있습니다.<br/>
                        사이트의 바탕이 되는 게시판 소스코드는&nbsp;
                         <a href={"https://github.com/YangSeungMin-O/SpringBootJpaBoard"}>여기!</a>
                        에서 참고하였습니다.<br />
                        사이트의 전반적인 디자인은&nbsp;
                         <a href={'https://velog.io/@chez_bono/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B2%8C%EC%8B%9C%ED%8C%90-%EB%A7%8C%EB%93%A4%EA%B8%B0'}>여기!</a>
                        에서 참고하였습니다.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Home;