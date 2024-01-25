
import { Progress, Space, Input } from "antd"
import { CloseCircleOutlined, FormOutlined, ExclamationCircleOutlined, EllipsisOutlined, DeleteOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import Upload from "../../assets/upload-square.svg"


export default function PgConvite() {

    const [inviteData, setInviteData] = useState(false);
    const [listInvites, setListInvites] = useState(false);
    const [seeOptions, setSeeOptions] = useState(false);
    const [modalEx, setModalEx] = useState(false);
    const [nome, setNome] = useState(true);
    const [sobre, setSobre] = useState(true);


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
                <div className="ParceriaMain" style={{ backgroundColor: "#e8e6ed", width: "100vw", minHeight: "100vh" }}>
                    {!inviteData ?
                        <>
                            <div className="PartnersTitle">
                                <div className="containerV">
                                    <span className="Title">Convites</span>
                                    <span><span style={{ color: "#B8B2C6" }}>Home  / </span><span style={{ color: "#1B0746" }}> Meus Eventos / Convites</span></span>
                                </div>
                                <div style={{ width: "32vw" }} />
                                <div>
                                    <button className="buttonNewsP add" style={{ height: "3rem", width: "18rem", color: "white" }}
                                        onClick={() => setInviteData((old) => !old)}
                                    >
                                        Criar novo convite
                                    </button>
                                </div>
                            </div>
                            <div style={{ marginTop: "1rem", border: "1px solid #B8B2C6", width: "79vw", boxShadow: "0px 8px 20px 0px #B8B2C680", background: "#fefefe", height: "50vh", borderRadius: "1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <span style={{ fontSize: "35px", fontWight: "500", lineHeight: "53px", textAlign: "center", color: "#6D0AD7" }}>Você não possui nenhum modelo de convite :(</span>
                                <span style={{ fontSize: "20px", fontWeight: "500", lineHeight: "30px", textAlign: "center", color: "#1B0746" }}>Que tal criar um convite? É rápido e fácil!</span>
                            </div>
                        </>
                        :
                        <>
                            <div className="PartnersTitle">
                                <div className="containerV">
                                    <span className="Title">Criar Convite</span>
                                    <span><span style={{ color: "#B8B2C6" }}>Home  / </span><span style={{ color: "#1B0746" }}> Meus Eventos / Criar convites</span></span>
                                </div>
                                <div style={{ width: "32vw" }} />
                                <div>
                                    <button className="buttonNewsP add" style={{ height: "3rem", width: "18rem", color: "white" }}
                                        onClick={() => setListInvites((old) => !old)}
                                    >
                                        Concluido
                                    </button>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "79vw", marginBottom: "3rem" }}>
                                <div 
                                style={{
                                    border: "1px solid #B8B2C6",
                                    width: "53vw",
                                    height: "90vh",
                                    boxShadow: "0px 8px 20px 0px #B8B2C680",
                                    background: "#fefefe",
                                    borderRadius: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "space-around",
                                    padding: "2rem 2rem"
                                }}>

                                    <span className="SubForm">Nome do modelo do convite</span>
                                    <Space.Compact style={{ marginTop: "1rem", width: "100%", backgroundColor: "#E8E6ED", borderRadius: "10px", height: "3rem" }}>
                                        <Input style={{ backgroundColor: "#E8E6ED", paddingLeft: "1rem" }} placeholder="Nome desse modelo de convite" />
                                        <button style={{ color: "#6D0AD7", backgroundColor: "#E8E6ED", height: "3rem" }} icon={<FormOutlined />} disabled></button>
                                    </Space.Compact>
                                    <span className="SubForm" style={{ marginTop: "1rem" }}>Defina a foto do convite</span>
                                    <div style={{ display: "flex", alignItems: "center", height: "4rem", width: "100%", borderRadius: "9px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", background: "#F1FAFF", }}>
                                        <div style={{ margin: "0 2rem" }}>
                                            <img src={Upload} width={"30px"} />
                                        </div>
                                        <div>
                                            <span className="textBold">Importar foto ou vídeo</span><br/>
                                            <span className="text">Importe a foto ou vídeo que você deseja usar como capa do convite </span>
                                        </div>
                                    </div>
                                    
                                    <span className="SubForm" style={{ marginTop: "1rem" }}>Mensagem</span>
                                    <div style={{ display: "flex", alignItems: "center", height: "4rem", width: "100%", borderRadius: "9px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", background: "#F0E7FB", }}>
                                        <div style={{ margin: "0 2rem" }}>
                                            <ExclamationCircleOutlined style={{ color: "#6D0AD7", fontSize: "30px" }} />
                                        </div>
                                        <div>
                                            <span className="text">Essa mensagem será enviada para seus convidados junto com o convite do seu evento. </span>
                                        </div>
                                    </div>
                                    <div className="containerV justify-content-sm-start"
                                        style={{
                                            alignItems: "left",
                                            height: "10rem",
                                            width: "100%",
                                            borderRadius: "9px",
                                            border: "none",
                                            background: "#F0E7FB",
                                            padding: "1rem"
                                        }}>
                                        <div>
                                            <span className="text">Exemplo de mensagem:</span>
                                            <div style={{ display: "flex", alignItems: "center" }}>
                                                <span className={nome?"text":"invisible"}
                                                    style={{ padding: "4px 4px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", borderRadius: "9px" }}
                                                    >Nome 
                                                    <CloseCircleOutlined style={{ color: 'red' }} onClick={() => setNome((old) => !old)}/>
                                                </span>
                                                &nbsp;
                                                <span className={sobre?"text":"invisible"}
                                                    style={{ padding: "4px 4px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", borderRadius: "9px" }}
                                                    >Sobrenome 
                                                    <CloseCircleOutlined style={{ color: 'red' }} onClick={() => setSobre((old) => !old)} />
                                                </span>
                                                <span className="text" contentEditable="true">, espero que possamos curtir minha festa juntos, aguardo sua confirmação!</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <span className="text">Adicione os campos automáticos: </span>  &nbsp;
                                        <span 
                                        className="text" 
                                        style={{ padding: "4px 4px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", borderRadius: "9px", background: "#F0E7FB" }}
                                        onClick={() => setNome((old) => !old)}
                                        >Nome </span> &nbsp;
                                        <span 
                                        className="text" 
                                        style={{ padding: "4px 4px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", borderRadius: "9px", background: "#F0E7FB" }}
                                        onClick={() => setSobre((old) => !old)}
                                        >Sobrenome</span>
                                    </div>
                                </div>
                                <div style={{ width: "25vw", marginTop: "5rem", marginBottom: "5rem" }} >
                                    <div
                                        style={{
                                            backgroundColor: "white",
                                            width: "20vw", height: "90vh",
                                            border: "1px solid #B8B2C6",
                                            boxShadow: "0px 8px 20px 0px #B8B2C680",
                                            display: "flex",
                                            flexDirection: "column",
                                            borderRadius: "1rem",
                                            // padding: "1rem 1rem",       
                                        }}>
                                        <div style={{
                                            height: "30vh",
                                            width: "100%",
                                            padding: "1rem 1rem"
                                        }}>
                                            <div
                                                style={{ height: "90%", width: "95%", backgroundColor: "#D9D9D9", margin: "auto", borderRadius: "9px" }} />
                                            <p style={{ paddingTop: "1rem", color: "var(--Colors-Azul-escuro-Normal, #1B0746)", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>Nome do evento</p>

                                        </div>

                                        <div style={{ height: "30vh", width: "100%", padding: "1rem 1rem" }}>
                                            <p className="ticketSub">
                                                Descrição
                                            </p>
                                            <p className="ticketCont" style={{ height: "30vh", width: "100%", textAlign: "justify" }}>
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
                                        <div style={{ border: '1px dashed var(--Colors-Roxo-Normal, #6D0AD7)', display: "flex", alignItems: "center", justifyContent: "center" }}>
                                        </div>
                                        <div style={{ padding: "1rem 1rem", width: "100%", minHeight: "34vh", display: "flex", justifyContent: "space-between", alignItems: "base-line", flexDirection: "column" }}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <div><p className='ticketSub'> Data</p>
                                                    <p className='ticketCont'>Nov 05 2024</p></div>
                                                <div><p className='ticketSub'> Início</p>
                                                    <p className='ticketCont'>00:00</p></div>
                                                <div><p className='ticketSub'> Termino</p>
                                                    <p className='ticketCont'>00:00</p></div>
                                            </div>
                                            <div>
                                                <span>
                                                    <p className='ticketSub'> Endereço</p>
                                                    <p className='ticketCont'>Endereço completo</p>
                                                </span>
                                            </div>
                                            <div>
                                                <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "base-line", flexDirection: "column" }}>
                                                    <span className="ticketSub">Convidados</span>
                                                    <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                        <p className="ticketCont"
                                                            style={{ marginBottom: ".5rem", marginRight: "1rem" }}
                                                        >000/000</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    }
                </div>
                :
                <div className="ParceriaMain" style={{ backgroundColor: "#e8e6ed", width: "100vw", minHeight: "100vh" }}>
                    <div className="PartnersTitle">
                        <div className="containerV">
                            <span className="Title">Convites</span>
                            <span><span style={{ color: "#B8B2C6" }}>Home  / </span><span style={{ color: "#1B0746" }}> Meus Eventos / Convites</span></span>
                        </div>
                        <div style={{ width: "32vw" }} />
                        <div>
                            <button className="buttonNews add" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white" }}
                                onClick={() => setInviteData((old) => !old)}
                            >
                                Criar novo convite
                            </button>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "79vw", marginBottom: "3rem" }}>
                        <div style={{
                            border: "1px solid #B8B2C6",
                            width: "53vw",
                            height: "90vh",
                            boxShadow: "0px 8px 20px 0px #B8B2C680",
                            background: "#fefefe",
                            borderRadius: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                            justifyContent: "flex-start",
                            padding: "2rem 0"
                        }}>

                            <span style={{ padding: "0 2rem" }} className="SubForm">Crie e gerencie modelos de convites para serem enviados aos convidados</span>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", height: "4rem", width: "100%" }}>
                                <div style={{ padding: "1rem 2rem", display: "flex", alignItems: "center", height: "6rem", width: "100%", background: "#F0E7FB", marginTop: "1rem" }}>
                                    <span style={{ fontSize: "16px" }} className="textBold">MODELO</span>
                                </div>
                                <div style={{ padding: "1rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: "4rem", width: "100%", borderTop: "1px solid #B8B2C6", borderBottom: "1px solid #B8B2C6" }}>
                                    <span style={{ fontSize: "16px" }} className="text">Modelo de convite para familiares</span>
                                    <button
                                        style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "#F0E7FB", border: "none" }}
                                        icon={<EllipsisOutlined style={{ fontWeight: "bold" }} />}
                                        onClick={() => setSeeOptions((old) => !old)} />

                                    {seeOptions &&
                                        <div className="miniMenuConv" id="ConvMenu" onClick={CloseOutClick}>
                                            <span className="miniItemConv">Editar <FormOutlined /></span>
                                            <span className="miniItemConv Ex" onClick={() => { setModalEx(true) }} >Excluir <DeleteOutlined /></span>
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
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                            onClick={CloseOutClickEx}>
                                            <div style={{ width: "60vw", height: "40vh", margin: "0 0 auto", backgroundColor: "white", borderRadius: ".5rem", display: "flex", flexDirection: "column", position: "absolute", zIndex: "10", alignItems: "center", justifyContent: "space-evenly" }}>
                                                <button
                                                    className="close"
                                                    type="primary"
                                                    onClick={() => { setModalEx(false) }}
                                                    shape="square"
                                                    size="small"
                                                    icon={<CloseOutlined />}
                                                />

                                                <span className="squareTitle">Tem certeza que deseja excluir esse modelo de convite?</span>
                                                <button style={{ fontWeight: "bold", width: "18rem", backgroundColor: "#EA4335", height: "3rem" }} type="primary" danger> Excluir </button>

                                            </div>
                                        </div>

                                    }
                                </div>

                            </div>
                        </div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}>
                            {!modalEx && <div className="boxBlur" />}
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
                                    <div style={{ height: "90%", width: "95%", backgroundColor: "#D9D9D9", margin: "auto", borderRadius: "9px" }} />
                                    <span style={{ paddingTop: "1rem", color: "var(--Colors-Azul-escuro-Normal, #1B0746)", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>Nome do evento</span>
                                </div>
                                <div style={{ height: "30vh", width: "70%", padding: "1rem 1rem", display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <span><span className="ticketSub"> Data</span>
                                            <span className="ticketCont">Nov 05 2024</span></span>
                                        <span><span className="ticketSub"> Hora</span>
                                            <span className="ticketCont">00:00</span></span>

                                    </div>
                                    <div>
                                        <span>
                                            <span className="ticketSub"> Endereço</span>
                                            <span className="ticketCont">Endereço completo</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span>
                                            <span className="ticketSub"> Convidado</span>
                                            <span className="ticketCont">Nome e Sobrenome</span>
                                        </span>
                                    </div>
                                </div>
                                <div style={{ borderTop: "3px dashed #6D0AD7", padding: "1rem 1rem", width: "100%", minHeight: "30vh", display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
                                    <span className="ticketSub">Código QR para acessar o evento</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}