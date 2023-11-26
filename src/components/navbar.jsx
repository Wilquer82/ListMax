
import './style.css';
import Logo from '../assets/Logo.png';

function NavBar() {
    return (
        <>
        <nav className="navbar">
            <img src={Logo} alt="Logo ListMax" width="153.398px" height="40px"/>
            <div className="nav-item">
                Como Funciona
            </div>
            <div className="nav-item">
                Recursos
            </div>
            <div className="nav-item">
                Preços
            </div>
            <div className="nav-item">
                Parceiros
            </div>
            <div className="nav-item">
                Blog
            </div>
            <div className="nav-item">
                Contato
            </div>
            <div className="nav-item">
                Perguntas Frequentes
            </div>
            <div className="button">
            <div className="buttonGreenOver">
                Log In
            </div>
            <div className="buttonGreen">
                Criar meu evento
            </div>
            </div>
        </nav>
        </>
    )
}

export default NavBar;