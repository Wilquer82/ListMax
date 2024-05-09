/* eslint-disable react/prop-types */
import './style.css';
import Logo from '../assets/Logo.png';
import { Link, useLocation } from 'react-router-dom';
import UserCard from './user';
import { useState, useEffect } from 'react';

export default function NavBarPartners({ Local }) {
    const [myEvents, setMyEvents] = useState(false);
    const local = useLocation();

    useEffect(() => {
        if(local.pathname == "/HomeEvents"){
            setMyEvents(true);
        }
    }, [local]);

    return (
        <>
            <nav className="navbarPartner">
                    <Link to='/previa2024' style={{textDecoration: "none"}}>
                        <img src={Logo} alt="Logo ListMax" width="153.398px" height="40px" />
                    </Link>
                <div className="navbarInt">
                    <span className="nav-item" style={{ justifyContent: "center" }}>
                        Como Funciona
                    </span>
                    <span className="nav-item" style={{ justifyContent: "center" }}>
                        Recursos
                    </span>
                    <span className="nav-item" style={{ justifyContent: "center" }}>
                        Preços
                    </span>
                    <Link to="/partners" style={{textDecoration: "none"}}>
                        <span className="nav-item" style={{ justifyContent: "center" }}>
                            Parceiros
                        </span>
                    </Link>
                    <Link to="/News" style={{textDecoration: "none"}}>
                        <span className="nav-item" style={{ justifyContent: "center" }}>
                            Blog
                        </span>
                    </Link>

                    <span className="nav-item" style={{ justifyContent: "center" }}>
                        Contato
                    </span>
                    {Local == "Partners" &&
                        <span style={{ justifyContent: "center", width:"rem" }} 
                        className="nav-item white-choiced">
                            Partners
                        </span>
                    }
                    {Local == "Clients" &&
                        // <>
                        //     {myEvents ?
                        //             <span style={{ width: "12rem", justifyContent: "center" }} className={"nav-item white-choiced"}
                        //                 onClick={() => { setMyEvents((old) => !old) }}>
                        //                 Meus Eventos
                        //             </span> 
                        //         :
                                <Link to="/HomeEvents" style={{textDecoration: "none"}}>
                                    <span style={{ width: "12rem", justifyContent: "center" }} 
                                    className={ myEvents === true ? "nav-item white-choiced" : "nav-item"}
                                        onClick={() => { setMyEvents((old) => !old) }}>
                                        Meus Eventos
                                    </span>
                                </Link>
                        //         }

                        // </>
                    }
                </div>
                <UserCard />
            </nav>
        </>
    )
}