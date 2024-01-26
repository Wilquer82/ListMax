import { useState, useRef } from 'react';
import {
    DeleteOutlined,
    DownloadOutlined,
    EllipsisOutlined,
    CloseOutlined,
    FormOutlined,
    ExclamationCircleOutlined,
    SearchOutlined
} from "@ant-design/icons";
import {
    Input,
    Select,
    Popover,
    Checkbox
} from 'antd'
import Share from '../../assets/orward-next-right-share-turn.svg'

export default function PgRecep() {

    const convidados = [
        { nome: "Nome1", sobrenome: "sobre1", email: "email1@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "23:00", dataResposta: "05:00", status: "Não visualizou", msg: true },
        { nome: "Nome2", sobrenome: "sobre2", email: "email2@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "23:00", dataResposta: "05:00", status: "Confirmou presença", msg: false  },
        { nome: "Nome3", sobrenome: "sobre3", email: "email3@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "23:00", dataResposta: "05:00", status: "Recusou o convite",  msg: false},
        { nome: "Nome4", sobrenome: "sobre4", email: "email4@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "23:00", dataResposta: "05:00", status: "Pendente de envio", msg: true }
    ];

    const onChange = (e, convidado) => {
        if (e.target.checked) {
            setSelecteds(oldSelecteds => [...oldSelecteds, convidado]);
        } else {
            setSelecteds(oldSelecteds => oldSelecteds.filter(item => item !== convidado));
            setSelectAll(false); // Desmarque selectAll quando um item é desmarcado
        }
    };
    
    const onChangeAll = (e) => {
        setSelectAll(e.target.checked);
        if (e.target.checked) {
            setSelecteds(convidados); // Selecione todos os convidados
        } else {
            setSelecteds([]); // Desmarque todos os convidados
        }
    };
    

    const node = useRef();

    const[selecteds, setSelecteds] = useState([]);

    const [addRecep, setAddRecep] = useState(false);

    const [editRecep, setEditRecep] = useState(null);

    const [shareAccess, setShareAccess] = useState(null);

    const [listRecep, setListRecep] = useState(false);

    const [noList, setNoList] = useState(true);

    const [seeOptions, setSeeOptions] = useState(false);

    const [modalEx, setModalEx] = useState(false);

    const [modalAll, setModalAll] = useState(false);

    const [optionsVisibility, setOptionsVisibility] = useState({});

    const [selectAll, setSelectAll] = useState(false);

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
            <div className="ParceriaMain" style={{ backgroundColor: "#e8e6ed", width: "100vw", minHeight: "100vh" }}>
                <div className="PartnersTitle">
                    <div className="containerV">
                        <span className="Title">Recepção</span>
                        <span><span style={{ color: "#B8B2C6" }}>Home  / </span><span style={{ color: "#1B0746" }}>  Meus Eventos / Recepção</span></span>
                    </div>
                    <div style={{ width: "32vw" }} />
                    <div>
                    {!addRecep &&
                        <button className="buttonNewsP add" style={{ height: "3rem", width: "18rem", color: "white" }}
                            onClick={() => {setAddRecep((old) => !old); setNoList((old) => !old);}}
                        >
                            + Adicionar recepcionista
                        </button>
                    }
                    </div>
                </div>
                {noList &&
                    <div className="quadroAdd">
                        <div style={{ marginTop: "5rem", cursor:"pointer" }} className="d-flex flex-column align-items-center">
                            <span 
                                onClick={() => {setListRecep((old) => !old); setNoList((old) => !old)}}
                                style={{ 
                                    fontSize: "35px", 
                                    fontWight: "500", 
                                    lineHeight: "53px", 
                                    textAlign: "center", 
                                    color: "#6D0AD7" 
                                    }}
                                
                            >
                                Você não possui nenhum recepcionista :(</span> <br />
                            <span style={{ fontSize: "20px", fontWeight: "500", lineHeight: "30px", textAlign: "center", color: "#1B0746" }}>
                                Que tal adicionar algum recepcionista ao seu evento? É rápido e fácil!</span>
                        </div>
                    </div>
                    }
                    {addRecep &&   
                    <div>
                        <div className="quadroAdd">
                            <div style={{ margin: "2rem", width: "90%", borderBottom: "1px solid #BFBFBF", display: "flex", justifyContent: "center", alignItems:"center"}}>
                                {editRecep ?
                                    <span style={{ width: "100%", height: "2.5rem" }} className="squareTitle">Editar recepcionista</span>
                                    : <span style={{ width: "100%", height: "2.5rem" }} className="squareTitle">Adicionar recepcionista</span>
                                }
                                <button
                                    className="closeB"
                                    onClick={() => { setAddRecep((old) => !old); setNoList((old) => !old)}}
                                    ><CloseOutlined />
                                </button>
                            </div>
                            <div style={{ marginTop: "2rem", width: "87%", display: "flex", justifyContent: "space-evenly" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ margin: "1rem 0" }}>
                                        <span style={{ display: "flex", marginBottom: ".5rem" }} className="SubTitle">Primeiro Nome<span style={{ color: "red" }}>*</span></span>
                                        <Input 
                                        size="large" 
                                        className="inputInv" 
                                        type="text" 
                                        value={ editRecep? editRecep.nome : "" } 
                                        // onChange={e => setValor(e.target.value)}    
                                        />
                                    </div>
                                    <div style={{ margin: "1rem 0" }}>

                                        <span style={{ display: "flex", marginBottom: ".5rem" }} className="SubTitle">Sobrenome<span style={{ color: "red" }}>*</span></span>
                                        <Input 
                                            size="large" 
                                            className="inputInv" 
                                            type="text" 
                                            value={editRecep? editRecep.sobrenome : ""}
                                            // onChange={e => setValor(e.target.value)}    
                                        />
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <div style={{ margin: "1rem 0" }}>

                                        <span style={{ display: "flex", marginBottom: ".5rem" }} className="SubTitle">E-Mail<span style={{ color: "red" }}>*</span></span>
                                        <Input 
                                            size="large" 
                                            className="inputInv" 
                                            type="email"
                                            value={editRecep? editRecep.email : ""}
                                            // onChange={e => setValor(e.target.value)}    
                                        />
                                    </div>
                                    <div style={{ margin: "1rem 0" }}>

                                        <span style={{ display: "flex", marginBottom: ".5rem" }} className="SubTitle">Telefone (WhatsApp)<span style={{ color: "red" }}>*</span></span>
                                        <Input 
                                            size="large" 
                                            className="inputInv" 
                                            type="phone"
                                            value={editRecep ? editRecep.telefone : ""}
                                            // onChange={e => setValor(e.target.value)}    
                                        />
                                    </div>

                                </div>
                            </div>
                            {editRecep ?
                                <button className="buttonNewsP add" style={{ height: "3rem", width: "50rem", color: "white", marginTop: "2rem" }}
                                // onClick={CloseOutClick}
                                >
                                    Salvar alterações
                                </button>

                                : <button className="buttonNewsP add" style={{ height: "3rem", width: "50rem", color: "white", marginTop: "2rem" }}
                                // onClick={CloseOutClick}
                                >
                                    Adicionar recepcionista
                                </button>
                            }
                        </div>
                    </div>
                }
                {listRecep &&
                <div className="quadroAdd">
                    <div style={{ padding: "1rem 2rem",marginTop: "1rem",display: "flex", justifyContent: "space-between" , width:"100%", height:"6rem"}}>
                        <span className="squareTitle">Recepcionistas</span>
                        <button className="buttonNewsP add" style={{ height: "3rem", width: "18rem", color: "white" }}
                            onClick={() => {
                                if(selectAll){
                                    setModalAll((old) => !old)
                                }else{
                                    setListRecep((old) => !old); 
                                    setShareAccess((old) => !old);
                                }
                            }}
                        >
                            <img src={Share}/> &nbsp; Compartilhar acesso
                        </button>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center" style={{ marginTop: "2rem", width:"74vw", borderBottom: "1px dashed #BFBFBF", paddingBottom:".5rem"}}>
                            <div style={{display:"flex", justifyContent:"center", alignItems: "center", width:"15%"}}>
                                <Checkbox onChange={onChangeAll}/>
                                <span className="ticketConv" style={{ marginLeft:"3rem" }}>RECEPCIONISTAS</span>
                            </div>
                            <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                <span className="ticketConv">OPÇÕES</span>
                            </div>
                        </div>
                        {convidados.map((convidado, index) => (
                        <div key={index} 
                            style={{ 
                                display: "flex", 
                                alignItems: "center" , 
                                justifyContent:"space-between", 
                                width:"74vw", 
                                backgroundColor:"#E8E6ED", 
                                borderRadius:"12px", 
                                borderBottom: "1px dashed #BFBFBF", 
                                padding:"1rem 0", 
                                marginBottom:"1rem"
                                }}>
                            <div style={{display:"flex", justifyContent:"space-evenly", width:"20%", alignItems: "center"}}>
                                <>
                                {selectAll?<Checkbox checked={selectAll || selecteds.includes(convidado)} onChange={e => onChange(e, convidado)}/>:
                                <Checkbox onChange={e => onChange(e, convidado)}/>}
                                </>
                                <div className="containerV">
                                    <span className="roxo" style={{color:"#1B0746"}}>{convidado.nome}</span>
                                    <span className="convText">{convidado.email}</span>
                                    <span className="convText">{convidado.telefone}</span>
                                </div>
                            </div>
                            <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                <div style={{ padding:"1rem 2rem", display:"flex", alignItems:"center", justifyContent: "center" ,height: "4rem", width:"100%"}}>
                                    <button  
                                        style={{
                                        width: "2rem", 
                                        height: "2rem",
                                        display:"flex", 
                                        alignItems:"center", 
                                        justifyContent:"center", 
                                        border:"none", 
                                        borderRadius:"8px"
                                        }}
                                        onClick={() => {
                                            setOptionsVisibility((oldVisibility) => ({
                                                ...oldVisibility,
                                                [index]: !oldVisibility[index],
                                            }));
                                        }}
                                        >
                                            ...
                                    </button>
                                    {optionsVisibility[index] && (
                                        <div className="miniMenuRecep" id="ConvMenu" onClick={CloseOutClick}>
                                            <span className="miniItemConv" onClick={() => { setEditRecep(convidado); setAddRecep((old) => !old); setListRecep((old) => !old) }} >Editar <FormOutlined /></span>
                                            <span className="miniItemConv Ex" onClick={() => { setModalEx((old) => !old) }} >Excluir <DeleteOutlined /></span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>))}
                    </div>
                </div>
                }
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
                        <div 
                        style={{ 
                            width: "60vw", 
                            height: "40vh", 
                            margin: "0 0", 
                            backgroundColor: "white", 
                            borderRadius: ".5rem", 
                            display: "flex", 
                            flexDirection: "column", 
                            position: "absolute", 
                            zIndex: "10", 
                            alignItems: "center", 
                            justifyContent: "space-between", 
                            padding:"2rem"
                            }}>
                            <button
                                className="closeB"
                                onClick={() => { setModalEx(false) }}
                            >
                                <CloseOutlined />
                            </button>

                            <span className="squareTitle">Tem certeza que deseja excluir esse recepcionista?</span>
                            <button 
                                className="buttonNewsNo"
                                style={{ fontWeight: "bold", width: "18rem", backgroundColor: "#EA4335", height: "3rem" }} type="primary" danger>
                                Excluir 
                            </button>

                        </div>
                    </div>
                }

                {modalAll &&
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
                        <div 
                        style={{ 
                            width: "60vw", 
                            height: "40vh", 
                            margin: "0 0", 
                            backgroundColor: "white", 
                            borderRadius: ".5rem", 
                            display: "flex", 
                            flexDirection: "column", 
                            position: "absolute", 
                            zIndex: "10", 
                            alignItems: "center", 
                            justifyContent: "space-between", 
                            padding:"2rem"
                            }}>
                            <button
                                className="closeB"
                                onClick={() => { setModalAll(false) }}
                            >
                                <CloseOutlined />
                            </button>

                            <span className="squareTitle">Tem certeza que deseja enviar o login para todos os recepcionistas?</span>
                            <button 
                                className="buttonNewsP"
                                style={{ width: "18rem", height: "3rem" }}>
                                Enviar 
                            </button>

                        </div>
                    </div>
                }
                {shareAccess && (
                    <div className="quadroAdd">
                        <div style={{ margin: "2rem", width: "90%", borderBottom: "1px solid #BFBFBF", display: "flex", justifyContent: "center", alignItems:"center"}}>

                            <span style={{ width: "100%", height: "2.5rem" }} className="squareTitle">Dados de acesso ao evento do(a) [NOME E SOBRENOME RECEPCIONISTA] </span>
                            <button
                                className="closeB"
                                onClick={() => { setShareAccess((old) => !old); setNoList((old) => !old)}}
                                ><CloseOutlined />
                            </button>
                        </div>
                        <div className="containerH graySquare align-items-center justify-content-lg-start" style={{ width: "72vw", height: "5rem" }}>
                            <ExclamationCircleOutlined className="roxoF f16 f600" style={{ margin: "0 2rem", fontSize: "1.25rem" }} />
                            <span className="roxoF">Os dados: SENHA e QR CODE, são gerados automaticamente para cada tipo de evento e para cada recepcionista que você adicionar.
                                Com esses dados os recepcionistas do seu evento podem fazer login na plataforma de recepção.</span>
                        </div>
                        <div className="d-flex justify-content-evenly" style={{ marginTop:"5rem", width:"100%", marginBottom:"2rem"}}>
                            <div className="d-flex flex-column">
                                <div style={{ margin: "1rem 0" }}>
                                    <span style={{ display: "flex", marginBottom: ".5rem" }} className="SubTitle">E-Mail</span>
                                    <Input 
                                        size="large" 
                                        className="inputInv" 
                                        type="email"
                                        disabled
                                        // value={editRecep? editRecep.email : ""}
                                        // onChange={e => setValor(e.target.value)}    
                                    />
                                </div>
                                <div style={{ margin: "1rem 0" }}>
                                    <span style={{ display: "flex", marginBottom: ".5rem" }} className="SubTitle">Senha</span>
                                    <Input 
                                        size="large" 
                                        className="inputInv" 
                                        type="phone"
                                        disabled
                                        // value={editRecep ? editRecep.telefone : ""}
                                        // onChange={e => setValor(e.target.value)}    
                                    />
                                </div>
                            </div>
                            <div className="d-flex flex-column">
                                <span style={{ display: "flex", marginBottom: ".5rem" }} className="SubTitle">QR Code</span>
                                <div style={{width:"28rem", height:"17rem", borderRadius:".6rem", backgroundColor:"#E8E6ED"}}/>
                            </div>
                        </div>
                        <button className="buttonNewsP add" style={{ height: "3rem", width: "90%", color: "white" }}
                            onClick={() => {setAddRecep((old) => !old); setNoList((old) => !old);}}
                        >
                            <img src={Share}/> &nbsp; Compartilhar com o/a recepecionista
                        </button>
                    </div>
                )}
            </div>

        </>
    )
}