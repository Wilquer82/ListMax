import './homePartners.css';
import { useState } from 'react';
import MyAcount from '../components/myAcount';
import UserConfig from '../components/userConfig';
import NavBarAdmin from '../components/navbarAdmin';



export default function HomeAdmin() {

    const [selectedTab, setSelectedTab] = useState('Configurações');
    const [selectedItem, setSelectedItem] = useState('Site');

    return (
        <div className="MainPartners">
            <NavBarAdmin selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
            <div className="TabList" style={{ marginTop: "5rem", paddingLeft: "16rem", boxShadow: "0px 7px 11px 0px rgba(70, 78, 95, 0.12)" }}>
                {selectedItem == "Site" && (
                    <>
                        <div
                            className={`TabAdm ${selectedTab === 'Configurações' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('Configurações')
                            }
                        >
                            <span>Configurações</span>
                        </div>
                        <div
                            className={`TabAdm ${selectedTab === 'Serviços' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('Serviços')
                            }
                        >
                            <span>Serviços</span>
                        </div>
                        <div className={`TabAdm ${selectedTab === 'Página Inicial' ? 'active' : ''}`} onClick={() => setSelectedTab('Página Inicial')}>
                            <span>Página Inicial</span>
                        </div>
                        <div className={`TabAdm ${selectedTab === 'Manutenção' ? 'active' : ''}`} onClick={() => setSelectedTab('Manutenção')}>
                            <span>Manutenção</span>
                        </div>
                        <div className={`TabAdm ${selectedTab === 'Páginas' ? 'active' : ''}`} onClick={() => setSelectedTab('Páginas')}>
                            <span>Páginas</span>
                        </div>
                        <div className={`TabAdm ${selectedTab === 'Aplicativo' ? 'active' : ''}`} onClick={() => setSelectedTab('Aplicativo')}>
                            <span>Aplicativo</span>

                        </div>

                    </>
                )}
                {selectedItem == "Usuarios" && (
                    <>
                    <div
                            className={`TabAdm ${selectedTab === 'Usuários' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('Usuários')
                            }
                        >
                            <span>Usuários</span>
                        </div>
                        <div
                            className={`TabAdm ${selectedTab === 'Bloqueados' ? 'active' : ''}`}
                            onClick={() => setSelectedTab('Bloqueados')
                            }
                        >
                            <span>Bloqueados</span>
                        </div>
                    </>
                )}

            </div>

            {/* {selectedTab == 'home' && <home />} */}
            {/* {selectedTab == 'Minha Conta' && <MyAcount />}
            {selectedTab == 'Configurações' && <UserConfig />} */}
        </div>
    )
}