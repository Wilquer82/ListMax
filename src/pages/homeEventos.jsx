import './homePartners.css';
import NavBarPartners from '../components/navbarPartner';
import { Button } from 'antd';
import { useState } from 'react';
import PgEvento from '../components/pgEvento';



export default function HomeEvents() {

    const [gerenciarEvento, setGerenciarEvento] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Página do Evento');


    return (
        <div className="MainEvents">
            <NavBarPartners Local={"Clients"} />
            {!gerenciarEvento ?
                <div className="ParceriaMain">
                    <div className="PartnersTitle">
                        <div>
                            <p className="Title">Meus eventos</p>
                            <p><span style={{ color: '#B8B2C6' }}>Home /</span><span style={{ color: '#1B0746' }}>Eventos futuros</span></p>
                        </div>

                        <Button className="buttonNews add" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white" }}>
                            Criar novo evento
                        </Button>
                    </div>
                    <div className="eventsBar">
                        <Button className="buttonNews add" style={{ marginLeft: "2rem", height: "2rem", width: "13rem", backgroundColor: "#1B0746", color: "white" }}>Eventos Futuros</Button>
                        <Button className="buttonNews add" style={{ border: "none", marginLeft: "2rem", height: "2rem", width: "13rem", backgroundColor: "transparent", color: "#1B0746" }}>Eventos Encerrados</Button>
                    </div>
                    {/* <div style={{width:"100vw" , marginTop: "10rem"}}>
                    <p style={{fontSize: "35px",fontWight: "500",lineHeight: "53px", textAlign: "center", color:"#6D0AD7"}}>Você não possui nenhum evento :(</p>
                    <p style={{fontSize: "20px", fontWeight: 500, lineHeight: "30px", textAlign: "center", color:"#1B0746"}}>Que tal criar um evento? É rápido e fácil!</p>
                </div> */}
                    <div style={{ width: "79vw", marginTop: "5rem", marginBottom: "5rem" }} >
                        <div
                            style={{
                                backgroundColor: "#E8E6ED",
                                width: "20vw", height: "90vh",
                                border: "1px solid #B8B2C6",
                                boxShadow: "0px 8px 20px 0px #B8B2C680",
                                display: "flex",
                                flexDirection: "column"
                            }}>
                            <div style={{ border: "1px solid #B8B2C6", height: "30vh", width: "100%" }}></div>
                            <div style={{ border: "1px solid #B8B2C6", height: "30vh", width: "100%" }}>
                                <Button
                                    className="buttonNews add"
                                    style={{ border: "none", marginLeft: "2rem", height: "2rem", width: "13rem", backgroundColor: "#1B0746", color: "white" }}
                                    onClick={() => setGerenciarEvento((old) => !old)}
                                >Gerenciar Evento</Button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="ParceriaMain">
                    <div className="TabList">
                        <div style={{ color: "#009EF6", marginRight: "9rem" }}>Gerenciando: Nome do evento</div>
                        <div className={`Tab ${selectedTab === 'Página do Evento' ? 'active' : ''}`} onClick={() => setSelectedTab('Página do Evento')}>
                            <p>Página do Evento</p>
                        </div>
                        <div className={`Tab ${selectedTab === 'Convites' ? 'active' : ''}`} onClick={() => setSelectedTab('Convites')}>
                            <p>Convites</p>
                        </div>
                        <div className={`Tab ${selectedTab === 'Gerenciar Convidados' ? 'active' : ''}`} onClick={() => setSelectedTab('Gerenciar Convidados')}>
                            <p>Gerenciar Convidados</p>
                        </div>
                        <div className={`Tab ${selectedTab === 'Estatísticas' ? 'active' : ''}`} onClick={() => setSelectedTab('Estatísticas')}>
                            <p>Estatísticas</p>
                        </div>
                        <div className={`Tab ${selectedTab === 'Recepção' ? 'active' : ''}`} onClick={() => setSelectedTab('Recepção')}>
                            <p>Recepção</p>
                        </div>
                        <div className={`Tab ${selectedTab === 'LookYou' ? 'active' : ''}`} onClick={() => setSelectedTab('LookYou')}>
                            <p>LookYou</p>
                        </div>
                    </div>
                    {selectedTab == 'Página do Evento' && <PgEvento />}
                </div>
            }
        </div>
    )
}