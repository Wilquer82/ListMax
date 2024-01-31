// import { useState, useEffect } from 'react';
import './style.css';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import UserCard from './user';

export default function NavBarAdmin({ selectedItem, setSelectedItem }) {


    return (
        <>
        <nav className="navbarPartner w-100 d-flex align-items-center justify-content-between">
                <Link to='/' style={{textDecoration: "none"}} className="d-flex flex-column">
                    <img src={Logo} alt="Logo ListMax" width="153.398px" height="40px"/>
                    <span>PAINEL DE CONTROLE</span>
                </Link>
                <div className="navbarIntAdm">
                    <span 
                        className={selectedItem === 'Site' ? "nav-item white-choiced" : "nav-item"}
                        onClick={() => setSelectedItem('Site')}>
                        Site
                    </span>
                    <span 
                        className={selectedItem === 'Usuarios' ? "nav-item white-choiced" : "nav-item"}
                        onClick={() => setSelectedItem('Usuarios')}>
                        Usuários
                    </span>
                    <span 
                        className={selectedItem === 'Eventos' ? "nav-item white-choiced" : "nav-item"}
                        onClick={() => setSelectedItem('Eventos')}>
                        Eventos
                    </span>
                    {/* <Link to="/partners" style={{textDecoration: "none"}}> */}
                    <span 
                        className={selectedItem === 'Partners' ? "nav-item white-choiced" : "nav-item"}
                        onClick={() => setSelectedItem('Partners')}>
                        Partners
                    </span>
                    {/* </Link> */}
                    {/* <Link to="/News" style={{textDecoration: "none"}}> */}
                    <span 
                        className={selectedItem === 'Comercial' ? "nav-item white-choiced" : "nav-item"}
                        onClick={() => setSelectedItem('Comercial')}>
                        Comercial
                    </span>
                    {/* </Link> */}
            </div>
            <UserCard/>
        </nav>

        </>
    )
}
