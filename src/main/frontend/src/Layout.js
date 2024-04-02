import {Link, Outlet, useNavigate} from "react-router-dom";


const Layout = () => {
    return (
        <div className={'Board'}>
            <header>
                <h1><Link to={'/'}>HOME</Link></h1>
            </header>
            <Outlet/>
        </div>
    )
}

export default Layout;