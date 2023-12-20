import './homePartners.css';
import NavBarPartners from '../components/navbarPartner';
import { Button, Progress } from 'antd';
import { useState } from 'react';
import PgEvento from '../components/pgEvento';
import PgConvite from '../components/pgConvite';
import Duplicate from '../assets/copy.svg';


export default function HomeEvents() {

    const twoColors = {
        '0%': '#FF14FF',
        '100%': '#6D0AD7',
    };

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
                                width: "20vw", height: "90vh",
                                border: "1px solid #B8B2C6",
                                boxShadow: "0px 8px 20px 0px #B8B2C680",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "1rem",    
                                // padding: "1rem 1rem",       
                            }}>
                            <div style={{  height: "30vh", width: "100%", padding: "1rem 1rem" }}>
                                <div style={{  height: "90%", width: "95%", backgroundColor:"#D9D9D9", margin: "auto", borderRadius: "9px"}}/>
                                <p style={{ paddingTop: "1rem", color: "var(--Colors-Azul-escuro-Normal, #1B0746)", fontSize: "16px", fontWeight: "600", lineHeight: "24px"}}>Nome do evento</p>
                                
                            </div>

                            <div style={{  height: "30vh", width: "100%", padding: "1rem 1rem" }}>
                                <p className="ticketSub">
                                    Descrição
                                </p>
                                <p className="ticketCont" style={{  height: "30vh", width: "100%", textAlign: "justify"}}>
                                    Lorem ipsum dolor sit amet,
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
                            <div style={{ border: '1px dashed var(--Colors-Roxo-Normal, #6D0AD7)', display:"flex",alignItems:"center" , justifyContent:"center"  }}>
                            </div>
                            <div style={{padding:"1rem 1rem", width: "100%", height:"30vh", display: "flex", justifyContent: "space-between", alignItems: "base-line", flexDirection:"column"}}>
                                <div style={{display: "flex", justifyContent:"space-between"}}>
                                    <span><p className='ticketSub'> Data</p>
                                    <p className='ticketCont'>Nov 05 2024</p></span>
                                    <span><p className='ticketSub'> Início</p>
                                    <p className='ticketCont'>00:00</p></span>
                                    <span><p className='ticketSub'> Termino</p>
                                    <p className='ticketCont'>00:00</p></span>
                                </div>
                                <div>
                                    <span>
                                        <p className='ticketSub'> Endereço</p>
                                        <p className='ticketCont'>Endereço completo</p>
                                    </span>
                                </div>
                                <div>
                                    <div style={{ width: "100%", height:"100%", display: "flex", justifyContent: "space-between", alignItems: "base-line", flexDirection:"column"}}>
                                        <p className="ticketSub">Convidados</p>
                                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems:"center"}}>
                                            <p className="ticketCont" 
                                            style={{marginBottom:".5rem", marginRight:"1rem"}}
                                            >000/000</p>
                                            <Progress percent={20} strokeColor={twoColors} showInfo={false} size={[200, 20]} trailColor="#B8B2C6" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{display: "flex", justifyContent: "space-around"}}>
                                    <div style={{cursor:"pointer", display: "flex", alignItems:"center", justifyContent:"space-between"}}>
                                        <img src={Duplicate} height={"15px"} width={"auto"}/> 
                                        <p className='ticketSub'>Duplicar Evento</p>
                                    </div>
                                    <Button
                                        className="buttonNews add"
                                        style={{ border: "2px solid #6D0AD7", height: "2rem", width: "8rem", backgroundColor: "transparent", color: "#6D0AD7", fontSize: "12px" }}
                                        onClick={() => setGerenciarEvento((old) => !old)}>
                                            Gerenciar Evento
                                    </Button>
                                </div>
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