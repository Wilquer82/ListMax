import './style.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
        <nav className="navbar">
            <Link to='/'>
            <img src={Logo} alt="Logo ListMax" width="153.398px" height="40px"/>
            </Link>
            <p className="nav-item">
                Como Funciona
            </p>
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
            <p className="nav-item">
                Blog
            </p>
            <p className="nav-item">
                Contato
            </p>
            <p className="nav-item">
                Perguntas Frequentes
            </p>
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


export default NavBar;