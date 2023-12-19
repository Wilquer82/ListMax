import './homePartners.css';
import NavBarPartners from '../components/navbarPartner';
import { Button } from 'antd';
import { useState } from 'react';
import PgEvento from '../components/pgEvento';
import PgConvite from '../components/pgConvite';



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
                            <p><span style={{ color: '#B8B2C6' }}>Home / </span><span style={{ color: '#1B0746' }}>Eventos futuros</span></p>
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
                                backgroundColor: "#e8e6ed",
                                width: "25vw", height: "90vh",
                                border: "1px solid #B8B2C6",
                                boxShadow: "0px 8px 20px 0px #B8B2C680",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "1rem",    
                                padding: "1rem 1rem",       
                            }}>
                            <div style={{  height: "30vh", width: "100%" }}>
                                <div style={{  height: "90%", width: "95%", backgroundColor:"#D9D9D9", margin: "auto", borderRadius: "9px"}}/>
                                <p style={{ color: "var(--Colors-Azul-escuro-Normal, #1B0746)", fontSize: "16px", fontWeight: "600", lineHeight: "24px"}}>Nome do evento</p>
                                
                            </div>

                            <div style={{  height: "30vh", width: "100%" }}>
                                <p style={{ }}>Descrição</p>
                                <p style={{  height: "30vh", width: "100%" }}>Lorem ipsum dolor sit amet,
                                     consectetur adipiscing elit. 
                                     In euismod, elit quis mollis dictum, 
                                     dui felis tristique lectus, eget 
                                     vestibulum elit erat ac nunc.
                                      Vestibulum suscipit ullamcorper 
                                      imperdiet. Lorem ipsum dolor sit 
                                      amet vestibulum suscipit ullamcorper 
                                      imperdiet. Lorem ipsum dolor sit amet
                                       suscipit ullamcorper amet...</p>
                            </div>
                            <div style={{ border: "none", top: "48rem" ,position: "absolute", display:"flex",alignItems:"center" , justifyContent:"space-between", width: "25vw" }}>
                                <div className="circuloE"></div>
                                <div className="circuloD"></div>
                            </div>
                            <div style={{  height: "30vh", width: "100%", borderTop: "3px dashed #6D0AD7" }}>
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
                    {selectedTab == 'Convites' && <PgConvite />}

                </div>
            }
        </div>
    )
}