import { useContext, useState, useEffect } from 'react';
import { InviteContext } from '../context/InviteContext';
import { MemberContext } from '../context/MemberContext';

import { 
    BrowserRouter as Router,
    Link
 } from 'react-router-dom';
    
    const Navbar = (props) => {

    const { count: memberCount } = useContext(MemberContext);
    const { invites } = useContext(InviteContext);

    const [navConfig, setNavConfig] = useState(["hidden",""])

    useEffect(() => {
        if(props.loggedIn === true){
            setNavConfig(["", "hidden"])
        }else{
            setNavConfig(["hidden", ""])
        }
    }, [props.loggedIn])


    return (
    
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#">ELECTIVE</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <Link to='/member' className="nav-link active" aria-current="page">Friends <span className="badge rounded-pill bg-primary"><small>{memberCount}</small></span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/suggestions' className="nav-link" href="/#">Suggestions</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/invites' className="nav-link" >Invites <span className="badge rounded-pill bg-primary"><small>{invites.length}</small></span></Link>
                                </li>
                                <li className="nav-item">
                                    <a className={`nav-link ${navConfig[0]}`} href="/#">Sign out</a>
                                </li>
                                <li className="nav-item">
                                    <Link to='/login' className={`nav-link ${navConfig[1]}`} >Login</Link>
                                </li>
                                
                            </ul>

                        </div>
                    </div>
                </nav>
            </header>
        
    );
}

export default Navbar;