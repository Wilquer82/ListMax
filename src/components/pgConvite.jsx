
import { Button, Progress, Space, Input } from "antd"
import { FormOutlined, ExclamationCircleOutlined, EllipsisOutlined, DeleteOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import  Upload from "../assets/upload-square.svg"


export default function PgConvite() {

    const [inviteData, setInviteData] = useState(false);
    const [listInvites, setListInvites] = useState(false);
    const [seeOptions, setSeeOptions] = useState(false);
    const [modalEx, setModalEx] = useState(false);

    const CloseOutClick = (e) => {
        if (e.target.id !== "ConvMenu") {
            setSeeOptions(false); 
        }
    }

    const CloseOutClickEx = (e) => {
        if (e.target.id === "Fundo") {
            setSeeOptions(false); 
        }
    }

    return (
        <>
            {!listInvites ?
            <div className="ParceriaMain" style={{backgroundColor:"#e8e6ed",  width: "100vw", minHeight:"100vh"}}>
                {!inviteData ?
                    <>
                        <div className="PartnersTitle">
                            <div>
                                <p className="Title">Convites</p>
                                
                                    <p><span style={{color:"#B8B2C6"}}>Home  / </span><span style={{color:"#1B0746"}}> Meus Eventos / Convites</span></p>
                            </div>
                            <div style={{width:"32vw"}}/>
                            <div>
                                <Button className="buttonNews add" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white" }}
                                    onClick={() =>  setInviteData((old) => !old)}
                                >
                                    Criar novo convite
                                </Button>
                            </div>
                        </div>
                        <div style={{marginTop: "1rem", border: "1px solid #B8B2C6", width:"79vw", boxShadow: "0px 8px 20px 0px #B8B2C680", background: "#fefefe", height:"50vh", borderRadius:"1rem", display:"flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
                            <p style={{fontSize: "35px",fontWight: "500",lineHeight: "53px", textAlign: "center", color:"#6D0AD7"}}>Você não possui nenhum modelo de convite :(</p>
                            <p style={{fontSize: "20px", fontWeight: "500", lineHeight: "30px", textAlign: "center", color:"#1B0746"}}>Que tal criar um convite? É rápido e fácil!</p>
                        </div>
                    </>
                : 
                    <>
                        <div className="PartnersTitle">
                            <div>
                                <p className="Title">Criar Convite</p>
                                
                                    <p><span style={{color:"#B8B2C6"}}>Home  / </span><span style={{color:"#1B0746"}}> Meus Eventos / Criar convites</span></p>
                            </div>
                            <div style={{width:"32vw"}}/>
                            <div>
                                <Button className="buttonNews add" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white" }}
                                    onClick={() =>  setListInvites((old) => !old)}
                                >
                                    Concluido
                                </Button>
                            </div>
                        </div>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width: "79vw", marginBottom: "3rem"}}>
                            <div style={{
                                border: "1px solid #B8B2C6", 
                                width:"53vw", 
                                height: "90vh",
                                boxShadow: "0px 8px 20px 0px #B8B2C680", 
                                background: "#fefefe", 
                                borderRadius:"1rem", 
                                display:"flex", 
                                flexDirection: "column", 
                                alignItems:"flex-start", 
                                justifyContent:"space-around",
                                padding: "2rem 2rem"
                                }}>

                                <p className="SubForm">Nome do modelo do convite</p>
                                <Space.Compact style={{ marginTop: "1rem", width: "100%", backgroundColor: "#E8E6ED",borderRadius: "10px", height: "3rem"}}>
                                    <Input style={{ backgroundColor: "#E8E6ED", paddingLeft: "1rem"}} placeholder="Nome desse modelo de convite" />
                                    <Button style={{ color: "#6D0AD7", backgroundColor: "#E8E6ED", height: "3rem"}} icon={<FormOutlined />}></Button>
                                </Space.Compact>
                                <p className="SubForm" style={{ marginTop: "1rem"}}>Defina a foto do convite</p>
                                <div style={{ display:"flex", alignItems:"center", height: "4rem", width:"100%",borderRadius: "9px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", background: "#F1FAFF",}}>
                                    <div style={{margin: "0 2rem"}}>
                                        <img src={Upload} width={"30px"}/>  
                                    </div>
                                    <div>
                                        <p className="textBold">Importar foto ou vídeo</p>
                                        <p className="text">Importe a foto ou vídeo que você deseja usar como capa do convite </p>
                                    </div>
                                </div>
                                <p className="SubForm" style={{ marginTop: "1rem"}}>Mensagem</p>
                                <div style={{ display:"flex", alignItems:"center", height: "4rem", width:"100%",borderRadius: "9px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", background: "#F0E7FB",}}>
                                    <div style={{margin: "0 2rem"}}>
                                        <ExclamationCircleOutlined style={{color: "#6D0AD7", fontSize:"30px"}} /> 
                                    </div>
                                    <div>
                                        <p className="text">Essa mensagem será enviada para seus convidados junto com o convite do seu evento. </p>
                                    </div>
                                </div>
                                <div style={{ display:"flex", alignItems:"left", justifyContent: "start", height: "10rem", width:"100%",borderRadius: "9px", border: "none", background: "#F0E7FB", padding: "1rem, 1rem"}}>
                                    <div>
                                        <p className="text">Exemplo de mensagem:</p>
                                        <div style={{ display:"flex", alignItems:"center"}}>
                                            <p className="text" style={{padding: "4px 4px",border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)",borderRadius: "9px"}}>Nome </p> &nbsp;  
                                            <p className="text"style={{padding: "4px 4px",border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)",borderRadius: "9px"}}>Sobrenome</p>
                                            <p className="text">, espero que possamos curtir minha festa juntos, aguardo sua confirmação!</p>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display:"flex", alignItems:"center"}}>
                                    <p className="text">Adicione os campos automáticos: </p>  &nbsp;
                                    <p className="text" style={{padding: "4px 4px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)",borderRadius: "9px", background: "#F0E7FB"}}>Nome </p> &nbsp;  
                                    <p className="text"style={{padding: "4px 4px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)",borderRadius: "9px", background: "#F0E7FB"}}>Sobrenome</p>
                                </div>
                            </div>
                            <div
                                style={{
                                    backgroundColor: "white",
                                    width: "25vw", 
                                    height: "90vh",
                                    border: "1px solid #B8B2C6",
                                    boxShadow: "0px 8px 20px 0px #B8B2C680",
                                    display: "flex",
                                    flexDirection: "column",
                                    borderRadius: "1rem",    
                                }}>
                                <div style={{ height: "30vh", width: "100%", padding: "1rem 1rem" }}>
                                    <div style={{  height: "90%", width: "95%", backgroundColor:"#D9D9D9", margin: "auto", borderRadius: "9px"}}/>
                                    <p style={{ paddingTop: "1rem", color: "var(--Colors-Azul-escuro-Normal, #1B0746)", fontSize: "16px", fontWeight: "600", lineHeight: "24px"}}>Nome do evento</p>
                                </div>
                                <div style={{ height: "30vh", width: "70%", padding: "1rem 1rem", display: "flex", justifyContent:"space-evenly", flexDirection:"column" }}>
                                    <div style={{display: "flex", justifyContent:"space-between"}}>
                                        <span><p className="ticketSub"> Data</p>
                                        <p className="ticketCont">Nov 05 2024</p></span>
                                        <span><p className="ticketSub"> Hora</p>
                                        <p className="ticketCont">00:00</p></span>
                                    
                                    </div>
                                    <div>
                                        <span>
                                            <p className="ticketSub"> Endereço</p>
                                            <p className="ticketCont">Endereço completo</p>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <p className="ticketSub"> Convidado</p>
                                            <p className="ticketCont">Nome e Sobrenome</p>
                                        </span>
                                    </div>
                                </div>
                                <div style={{ borderTop:"3px dashed #6D0AD7", padding:"1rem 1rem", width: "100%", minHeight:"30vh", display: "flex", justifyContent: "center", alignItems:"flex-end" }}>
                                <p className="ticketSub">Código QR para acessar o evento</p>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>
            :
            <div className="ParceriaMain" style={{backgroundColor:"#e8e6ed",  width: "100vw", minHeight:"100vh"}}>
                <div className="PartnersTitle">
                    <div>
                        <p className="Title">Convites</p>
                        
                            <p><span style={{color:"#B8B2C6"}}>Home  / </span><span style={{color:"#1B0746"}}> Meus Eventos / Convites</span></p>
                    </div>
                    <div style={{width:"32vw"}}/>
                    <div>
                        <Button className="buttonNews add" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white" }}
                            onClick={() =>  setInviteData((old) => !old)}
                        >
                            Criar novo convite
                        </Button>
                    </div>
                </div>
                <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", width: "79vw", marginBottom: "3rem"}}>
                            <div style={{
                                border: "1px solid #B8B2C6",
                                width:"53vw",
                                height: "90vh",
                                boxShadow: "0px 8px 20px 0px #B8B2C680",
                                background: "#fefefe",
                                borderRadius:"1rem",
                                display:"flex", 
                                flexDirection: "column", 
                                alignItems:"start", 
                                justifyContent:"flex-start",
                                padding: "2rem 0"
                                }}>

                                <p style={{ padding:"0 2rem"}} className="SubForm">Crie e gerencie modelos de convites para serem enviados aos convidados</p>
                                <div style={{  display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"flex-start", height: "4rem", width:"100%"}}>
                                    <div  style={{ padding:"1rem 2rem", display:"flex", alignItems:"center", height:"6rem", width:"100%", background: "#F0E7FB", marginTop: "1rem"}}>
                                            <p style={{ fontSize: "16px"}}className="textBold">MODELO</p>
                                    </div>
                                    <div style={{ padding:"1rem 2rem", display:"flex", alignItems:"center", justifyContent: "space-between" ,height: "4rem", width:"100%", borderTop: "1px solid #B8B2C6", borderBottom: "1px solid #B8B2C6"}}>
                                        <p style={{ fontSize: "16px"}} className="text">Modelo de convite para familiares</p> 
                                        <Button  
                                            style={{ display:"flex", alignItems:"center", justifyContent:"center",background: "#F0E7FB", border:"none"}} 
                                            icon={<EllipsisOutlined style={{fontWeight:"bold"}}/>}
                                            onClick={() =>  setSeeOptions((old) => !old)}/>
                                        
                                            {seeOptions && 
                                            <div className="miniMenuConv" id="ConvMenu" onClick={CloseOutClick}>
                                                <p className="miniItemConv">Editar <FormOutlined /></p>
                                                <p className="miniItemConv Ex" onClick={() => { setModalEx(true)}} >Excluir <DeleteOutlined /></p>   
                                            </div>}

                                            {modalEx &&
                                                <div
                                                id="Fundo"
                                                style={{
                                                    overflow: "hidden",
                                                    zIndex: "10001!important",
                                                    width: "100vw",
                                                    height: "100vh",
                                                    backdropFilter: "blur(10px)",
                                                    backgroundColor: "#181C32CC",
                                                    display: "flex",
                                                    position: "fixed",
                                                    top: "0",
                                                    left: "0",
                                                    alignItems:"center",
                                                    justifyContent:"center",
                                                }}
                                                onClick={CloseOutClickEx}>
                                                    <div style={{ width: "60vw", height: "40vh", margin: "0 0 auto", backgroundColor: "white", borderRadius: ".5rem", display: "flex", flexDirection: "column", position: "absolute", zIndex: "10", alignItems: "center", justifyContent: "space-evenly" }}>
                                                        <Button 
                                                            className="close" 
                                                            type="primary" 
                                                            onClick={() => { setModalEx(false)}} 
                                                            shape="square" 
                                                            size="small"
                                                            icon={<CloseOutlined />}
                                                        />

                                                        <p className="squareTitle">Tem certeza que deseja excluir esse modelo de convite?</p>
                                                        <Button style={{fontWeight: "bold", width: "18rem" , backgroundColor:"#EA4335", height:"3rem"}}type="primary" danger> Excluir </Button>

                                                    </div>
                                                </div>

                                            }
                                    </div>

                                </div>
                            </div>
                            <div style={{
                                display:"flex", 
                                alignItems:"center", 
                                justifyContent:"center",
                                }}>
                                {!modalEx && <div className="boxBlur"/>}
                                <div
                                    style={{
                                        backgroundColor: "white",
                                        width: "25vw", 
                                        height: "90vh",
                                        border: "1px solid #B8B2C6",
                                        boxShadow: "0px 8px 20px 0px #B8B2C680",
                                        display: "flex",
                                        flexDirection: "column",
                                        borderRadius: "1rem",    
                                    }}>
                                    <div style={{ height: "30vh", width: "100%", padding: "1rem 1rem" }}>
                                        <div style={{  height: "90%", width: "95%", backgroundColor:"#D9D9D9", margin: "auto", borderRadius: "9px"}}/>
                                        <p style={{ paddingTop: "1rem", color: "var(--Colors-Azul-escuro-Normal, #1B0746)", fontSize: "16px", fontWeight: "600", lineHeight: "24px"}}>Nome do evento</p>
                                    </div>
                                    <div style={{ height: "30vh", width: "70%", padding: "1rem 1rem", display: "flex", justifyContent:"space-evenly", flexDirection:"column" }}>
                                        <div style={{display: "flex", justifyContent:"space-between"}}>
                                            <span><p className="ticketSub"> Data</p>
                                            <p className="ticketCont">Nov 05 2024</p></span>
                                            <span><p className="ticketSub"> Hora</p>
                                            <p className="ticketCont">00:00</p></span>
                                        
                                        </div>
                                        <div>
                                            <span>
                                                <p className="ticketSub"> Endereço</p>
                                                <p className="ticketCont">Endereço completo</p>
                                            </span>
                                        </div>
                                        <div>
                                            <span>
                                                <p className="ticketSub"> Convidado</p>
                                                <p className="ticketCont">Nome e Sobrenome</p>
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{ borderTop:"3px dashed #6D0AD7", padding:"1rem 1rem", width: "100%", minHeight:"30vh", display: "flex", justifyContent: "center", alignItems:"flex-end" }}>
                                    <p className="ticketSub">Código QR para acessar o evento</p>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
            }
        </>
    )
}