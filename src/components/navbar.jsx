import './style.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
        <nav className="navbar">
            <Link to='/' style={{textDecoration: "none"}}>
                <img src={Logo} alt="Logo ListMax" width="153.398px" height="40px"/>
            </Link>
            <span className="nav-item">
                Como Funciona
            </span>
            <span className="nav-item">
                Recursos
            </span>
            <span className="nav-item">
                Preços
            </span>
            <Link to="/partners" style={{textDecoration: "none"}}>
            <span className="nav-item">
                Parceiros
            </span>
            </Link>
            <Link to="/News" style={{textDecoration: "none"}}>
            <span className="nav-item">
                Blog
            </span>
            </Link>

            <span className="nav-item">
                Contato
            </span>
            <Link to="/manut" style={{textDecoration: "none"}}>
            <span className="nav-item">
                Perguntas Frequentes
            </span>
            </Link>

            <div className="button">
                <Link to="/login" style={{textDecoration: "none"}}>
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
