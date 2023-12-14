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
                <div className="navbarInt">
                    <Link to='/'>
                        <img src={Logo} alt="Logo ListMax" width="153.398px" height="40px" />
                    </Link>
                    <Link to='/Test'>
                        <p className="nav-item" style={{ justifyContent: "center" }}>
                            Como Funciona
                        </p>
                    </Link>
                    <p className="nav-item" style={{ justifyContent: "center" }}>
                        Recursos
                    </p>
                    <p className="nav-item" style={{ justifyContent: "center" }}>
                        Preços
                    </p>
                    <Link to="/partners">
                        <p className="nav-item" style={{ justifyContent: "center" }}>
                            Parceiros
                        </p>
                    </Link>
                    <Link to="/News">
                        <p className="nav-item" style={{ justifyContent: "center" }}>
                            Blog
                        </p>
                    </Link>

                    <p className="nav-item" style={{ justifyContent: "center" }}>
                        Contato
                    </p>
                    {Local == "Partners" &&
                        <p style={{ justifyContent: "center" }} className="nav-item white-choiced    ">
                            ListMax Partners
                        </p>
                    }
                    {Local == "Clients" &&
                        <>
                            {myEvents ?
                                    <p style={{ width: "12rem", justifyContent: "center" }} className={"nav-item white-choiced"}
                                        onClick={() => { setMyEvents((old) => !old) }}>
                                        Meus Eventos
                                    </p> 
                                :
                                <Link to="/HomeEvents">
                                    <p style={{ width: "12rem", justifyContent: "center" }} className={"nav-item"}
                                        onClick={() => { setMyEvents((old) => !old) }}>
                                        Meus Eventos
                                    </p>
                                </Link>
                                }

                        </>
                    }
                </div>
                <UserCard />
            </nav>
        </>
    )
}