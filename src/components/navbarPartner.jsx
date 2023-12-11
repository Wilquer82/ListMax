import './style.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import Choice from '../assets/navChoice.png';
import UserCard from './user';

export default function NavBarPartners({ Local }) {
    console.log(Local)
    return (
        <>
            <nav className="navbarPartner">
                <div className="navbarInt">
                    <Link to='/'>
                        <img src={Logo} alt="Logo ListMax" width="153.398px" height="40px" />
                    </Link>
                    <Link to='/Test'>
                        <p className="nav-item">
                            Como Funciona
                        </p>
                    </Link>
                    <p className="nav-item">
                        Recursos
                    </p>
                    <p className="nav-item">
                        Preços
                    </p>
                    <Link to="/partners">
                        <p className="nav-item">
                            Parceiros
                        </p>
                    </Link>
                    <Link to="/News">
                        <p className="nav-item">
                            Blog
                        </p>
                    </Link>

                    <p className="nav-item">
                        Contato
                    </p>
                    {/* <Link to="/manut"> */}
                    { Local == "Partners" &&
                    <div className="nav-item">
                        <img src={Choice} alt="PartnersHome" width="100px" className="choiceImg" />
                        <p className="nav-item part">
                            ListMax Partners
                        </p>
                    </div>}
                </div>
                <div className='nav-item'>
                    <UserCard />
                </div>
                {/* </Link> */}


            </nav>
        </>
    )
}