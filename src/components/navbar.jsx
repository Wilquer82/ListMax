import './style.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
        <nav className="navbar">
            <Link to='/'>
            <img src={Logo} alt="Logo ListMax" width="153.398px" height="40px"/>
            </Link>
            {/* <Link to='/Test'> */}
            <p className="nav-item">
                Como Funciona
            </p>
            {/* </Link> */}
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
            <Link to="/manut">
            <p className="nav-item">
                Perguntas Frequentes
            </p>
            </Link>

            <div className="button">
                <Link to="/login">
                    <div className="buttonGreenOver">
                        Log In
                    </div>
                </Link>
                <div className="buttonGreen">
                    Criar meu evento
                </div>
            </div>
        </nav>
        </>
    )
}
