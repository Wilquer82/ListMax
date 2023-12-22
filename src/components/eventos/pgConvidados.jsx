import { Button, Input, Select, Popover, Checkbox } from 'antd'
import { DeleteOutlined, DownloadOutlined, EllipsisOutlined, CloseOutlined, FormOutlined, ExclamationCircleOutlined, SearchOutlined } from "@ant-design/icons";
import ImpExcel from '../../assets/Excel.png';
import { useState } from 'react';
import ButtonVideo from '../../assets/Button.png';
import ExcelPlan from '../../assets/excel-plan.png';
import Send from '../../assets/send.svg';
import Export from '../../assets/upload.svg';

export default function PgConvidados() {
    
    const convidados = [
        { nome: "Nome1", email: "email1@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "01/01/2023", dataResposta: "02/01/2023", status: "Não visualizou" },
        { nome: "Nome2", email: "email2@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "01/02/2023", dataResposta: "02/02/2023", status: "Confirmou presença" },
        { nome: "Nome3", email: "email3@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "01/03/2023", dataResposta: "02/03/2023", status: "Recusou o convite" },
        { nome: "Nome4", email: "email4@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "01/04/2023", dataResposta: "02/04/2023", status: "Pendente de envio" }
    ];

    const nomes = [
        {nome: "Nome Sobrenome"},
        {nome: "Nome Sobrenome"},
        {nome: "Nome Sobrenome"},
        {nome: "Nome Sobrenome"},
        {nome: "Nome Sobrenome"},
        {nome: "Nome Sobrenome"},
        {nome: "Nome Sobrenome"},
        {nome: "Nome Sobrenome"},
        {nome: "Nome Sobrenome"},
        {nome: "Nome Sobrenome"},
    ];

    const content = (
        <p style={{
            position: "absolute", 
            border: "2px dashed #6D0AD7", 
            backgroundColor: "#F0E7FB", 
            fontSize: "12px", 
            borderRadius: "12px", 
            width: "50vw", 
            height: "4rem", 
            color: "#727272", 
            padding: "1rem", 
            left: "3rem", 
            bottom: "-3rem" }}
        >
            Quando você enviar o convite para esse convidado, ele terá a
            opção de compartilhar o link de confirmação com outras pessoas.
            Por favor, defina o número máximo de pessoas com quem o convite
            desse convidado pode ser compartilhado.
        </p>
    );



 

    const [modal, setModal] = useState(false);
    const [addConvidado, setAddConvidado] = useState(false);
    const [showList, setShowList] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Todos');
    const [seeOptions, setSeeOptions] = useState(Array(convidados.length).fill(false));    
    const [modalEx, setModalEx] = useState(false);
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const [currentLetter, setCurrentLetter] = useState(0);
    const [editConv, setEditConv] = useState(false);
    const [sendInvites, setSendInvites] = useState(false);
    const [modalInvite, setModalInvite] = useState(false);
    const [activeElement, setActiveElement] = useState(null);

    const handleClick = (event) => {
        setActiveElement(event.target.id);
    };

    
    const CloseOutClick = (e) => {
        if (e.target.id === "Fundo") {
            setModal(false);
        }
        if (e.target.id === "FundoAdd") {
            setAddConvidado(false);
            setEditConv(false)
        }
    }

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const goNext = () => {
        setCurrentLetter((currentLetter + 3) % (alphabet.length - 2));
    };
    
    const goPrev = () => {
        setCurrentLetter((currentLetter - 3 + (alphabet.length - 2)) % (alphabet.length - 2));
    };

    const CloseOutClickEx = (e) => {
        if (e.target.id === "Fundo") {
            setSeeOptions(false); 
        }
        setEditConv(false);
        setAddConvidado(false);
    }
    
    const toggleSeeOptions = (index) => {
        const newSeeOptions = [...seeOptions];
        newSeeOptions[index] = !newSeeOptions[index];
        setSeeOptions(newSeeOptions);
    };

    const getStatusStyle = (status) => {
        switch(status) {
            case 'Não Visualizou':
                return {color: '#595959',
                borderRadius: '8px',
                backgroundColor: '#dfdfdf' , padding:".5rem"};
            case 'Confirmou presença':
                return {color: '#23A047', borderRadius: '8px',
                backgroundColor: '#EEFFF3', padding:".5rem"};
            case 'Recusou o convite':
                return {color: '#F44336', borderRadius: '8px',
                backgroundColor: '#FFF6F8', padding:".5rem"};
            case 'Pendente de envio':
                return {color: '#FF9F46', borderRadius: '8px',
                backgroundColor: '#FDFFB1', padding:".5rem"};
            default:
                return {};
        }
    };

    
    return (
        <>{sendInvites ? 
            <div className="ParceriaMain" style={{backgroundColor:"#e8e6ed",  width: "100vw", minHeight:"100vh"}}>
                <div className="PartnersTitle">
                    <div>
                        <p className="Title">Gerenciar Convidados</p>
                            <p><span style={{color:"#B8B2C6"}}>Home  / Meus Eventos / Geerenciar Convidados / </span><span style={{color:"#1B0746"}}> Envio de Convites</span></p>
                    </div>
                    <div style={{width:"32vw"}}/>
                    <div>
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
                        padding: "2rem 2rem"
                        }}>

                        <p style={{ paddingBottom: "2rem", borderBottom: "1px solid #BFBFBF", width:"100%"}} className="SubForm">Envio de convites</p>
                        <div 
                            style={{  
                                display:"flex", 
                                flexDirection:"column", 
                                alignItems:"center", 
                                justifyContent:"flex-start", 
                                height: "100%", 
                                width:"100%"}}>
                            <div 
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    marginTop:"2rem",
                                    border: "2px dashed #6D0AD7", 
                                    backgroundColor: "#F0E7FB", 
                                    fontSize: "12px", 
                                    borderRadius: "12px", 
                                    width: "48.5vw", 
                                    height: "4rem", 
                                    color: "#727272", 
                                    padding: "1rem" }}
                            >
                                <ExclamationCircleOutlined style={{color: "#6D0AD7", fontSize:"30px", margin: "0 2rem"}} /> 
                                <p className="text">Aqui você verá o destinatário e  poderá escolher o modelo de convite à ser enviado.  </p>
                            </div>
                            <div style={{ display:"flex", height:"100%", width:"100%", justifyContent:"space-evenly", marginTop:"2rem"}}>
                                <div style={{  padding:"0 .5rem",display:"flex", flexDirection:"column", height: "50vh", width:"35%", overflowY: "auto"}}>                        
                                    <p style={{ paddingBottom: "2rem", width:"100%"}} className="SubForm">Receberá seu convite</p>
                                        {nomes.map((nomes, index) => (
                                            <div key={index} style={{marginBottom:".5rem", display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                                                <span style={{borderRadius: "50%", width:"40px", height: "40px", backgroundColor:"grey"}}></span> 
                                                <p style={{ color: "#1B0746", fontSize: "16px", fontWeight: "600", lineHeight: "24px"}}>{nomes.nome}</p>
                                            </div>
                                        ))}
                                </div>
                                <div style={{  display:"flex", flexDirection:"column", width:"60%", paddingLeft:"4rem"}}>
                                    <p style={{ paddingBottom: "2rem", width:"100%"}} className="SubForm">Modelo de convite à ser enviado</p>
                                    <div style={{display:"flex", alignItems:"center", justifyContent:"left", marginBottom:"1rem"}}>
                                        <Checkbox onChange={onChange}/><p className="Tab">Modelo de convite para familiares</p>
                                    </div>
                                    <div style={{display:"flex", alignItems:"center", justifyContent:"left"}}>
                                        <Checkbox onChange={onChange}/><p className="Tab">Modelo de convite para amigos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button 
                            className="buttonNews" 
                            style={{borderRadius:".5rem", height: "3rem", width: "49vw", backgroundColor: "#6D0AD7", color: "white" }}
                            onClick={() => {
                                setModalInvite(true);
                            }}
                        > 
                            <img src={Send}/> &nbsp;Enviar Convites
                        </Button>
                    </div>
                    <div style={{
                        display:"flex", 
                        alignItems:"center", 
                        justifyContent:"center",
                        }}>
                        {!modalInvite && <div className="boxBlur"/>}
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
        :
            <div className="ParceriaMain" style={{ backgroundColor: "#e8e6ed", width: "100vw", minHeight: "100vh" }}>
                <div className="PartnersTitle">
                    <div>
                        <p className="Title">Convidados</p>

                        <p><span style={{ color: "#B8B2C6" }}>Home  / </span><span style={{ color: "#1B0746" }}> Meus Eventos / Gerenciar convidados</span></p>
                    </div>
                    <div style={{ width: "32vw" }} />
                    <div 
                        style={{ display: "flex", width:"22rem", position: "absolute", left:"68vw", top: "40vh", cursor: "pointer"}}
                        onClick={() => setShowList((old) => !old)}
                    >
                        <DownloadOutlined style={{color:"#FF14FF"}} />
                        <p style={{color:"#1B0746", marginLeft:".5rem", fontSize: "12px", borderBottom: "1px solid black"}}>
                            Baixe nosso modelo de planilha Excel
                        </p>
                    </div>
                </div>
                <div 
                style={{ 
                    border: "1px solid #B8B2C6", 
                    width: "79vw", 
                    boxShadow: "0px 8px 20px 0px #B8B2C680", 
                    background: "#fefefe", 
                    minHeight: "70vh", 
                    borderRadius: "1rem", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    padding:"2rem 2rem" }}
                >
                    {showList &&
                    <>
                        <div
                            style={{ 
                                cursor: "pointer", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center",
                                height: "4rem",
                                marginTop: "5rem",
                                width: "74.5vw", 
                                borderRadius: "9px", 
                                border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", 
                                background: "#F1FAFF",}}
                            onClick={() => setModal((old) => !old)}>
                            <div style={{ margin: "0 2rem", }}>
                                <img src={ImpExcel} width={"30px"} />
                            </div>
                            <div>
                                <p className="textBold">Importar Excel</p>
                                <p className="text">Importe sua lista de convidados direto do Excel </p>
                            </div>
                        </div>
                        <div style={{ marginTop: "2rem",display: "flex", justifyContent: "space-between", width:"100%", flexDirection:"column", height:"6rem"}}>
                            <div style={{ display: "flex", justifyContent: "space-between", width:"100%", alignItems:"center"}}>
                                <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                                    <div style={{ display: "flex" }}>
                                        <Button className="buttonNews" icon={<SearchOutlined />}style={{borderRadius:".5rem",  width: "6rem", backgroundColor: "#6D0AD7", color: "white" }}>Buscar</Button>
                                        <Input style={{ width: "10rem", borderColor: "#6D0AD7"}}/> 
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-evenly", width: "10rem"}}>
                                        <p className="stickers" onClick={(e) => {goPrev(); handleClick(e);}}>&lt;</p>
                                        <p id="p1" className={`alphabetic ${activeElement === "p1" ? "active" : ""}`} onClick={handleClick}>{alphabet[currentLetter]}</p>
                                        <p id="p2" className={`alphabetic ${activeElement === "p2" ? "active" : ""}`} onClick={handleClick}>{alphabet[currentLetter + 1]}</p>
                                        <p id="p3" className={`alphabetic ${activeElement === "p3" ? "active" : ""}`} onClick={handleClick}>{alphabet[currentLetter + 2]}</p>
                                        <p className="stickers" onClick={(e) => {goNext(); handleClick(e);}}>&gt;</p>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", width: "35rem"}}>
                                    <Button 
                                        className="buttonNews" 
                                        style={{borderRadius:".5rem", height: "2.5rem", width: "13rem", backgroundColor: "#6D0AD7", color: "white" }}
                                        onClick={() => {
                                            setSendInvites(true);
                                        }}
                                    > 
                                        <img src={Send}/> &nbsp;Enviar Convites
                                    </Button>
                                    
                                    <Button className="buttonNews" 
                                        style={{borderRadius:".5rem", height: "2.5rem", width: "14rem", backgroundColor: "#6D0AD7", color: "white" }}>
                                        <img src={Export}/> &nbsp;Exportar para Excel
                                    </Button>
                                    <Button 
                                        className="buttonNews" 
                                        style={{borderRadius:".5rem", height: "2.5rem", width: "3rem", backgroundColor: "#6D0AD7", color: "white" }}
                                        onClick={() => {
                                            editConv? setEditConv((old) => !old): null;
                                            setAddConvidado((old) => !old)}}
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>
                            <div className="TabListConv">
                                <div className={`Tab ${selectedTab === 'Todos' ? 'active' : ''}`} onClick={() => setSelectedTab('Todos')}>
                                    <p>Todos</p>
                                </div>
                                <div className={`Tab ${selectedTab === 'Confirmados' ? 'active' : ''}`} onClick={() => setSelectedTab('Confirmados')}>
                                    <p>Confirmados</p>
                                </div>
                                <div className={`Tab ${selectedTab === 'Não visualizados' ? 'active' : ''}`} onClick={() => setSelectedTab('Não visualizados')}>
                                    <p>Não visualizados</p>
                                </div>
                                <div className={`Tab ${selectedTab === 'Recusados' ? 'active' : ''}`} onClick={() => setSelectedTab('Recusados')}>
                                    <p>Recusados</p>
                                </div>
                                <div className={`Tab ${selectedTab === 'Pendentes de envio' ? 'active' : ''}`} onClick={() => setSelectedTab('Pendentes de envio')}>
                                    <p>Pendentes de envio</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginTop: "2rem", display: "flex", alignItems: "center" , justifyContent:"space-between", width:"74vw", borderBottom: "1px dashed #BFBFBF", paddingBottom:".5rem"}}>
                                <Checkbox onChange={onChange}/>
                                <div style={{display:"flex", justifyContent:"center", width:"40%"}}>
                                    <p className="ticketConv">CONVIDADOS</p></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <p className="ticketConv">Convite enviado em</p></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <p className="ticketConv">Data de resposta</p></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%" }}>
                                    <p className="ticketConv">STATUS</p></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <p className="ticketConv">OPÇÕES</p></div>
                            </div>
                            {convidados.map((convidados, index) => (
                            <div key={index} style={{ display: "flex", alignItems: "center" , justifyContent:"space-between", width:"74vw", borderBottom: "1px dashed #BFBFBF", padding:"1rem 0 "}}>
                                <Checkbox onChange={onChange}/>
                                <div style={{display:"flex", justifyContent:"space-evenly", width:"40%", alignItems: "center"}}>
                                    <div style={{width: "36px", height: "36px", borderRadius: "60px", background: "#595959"}}></div>
                                    <div>
                                        <p className="roxo" style={{color:"#1B0746"}}>{convidados.nome}</p>
                                        <p className="convText">{convidados.email}</p>
                                        <p className="convText">{convidados.telefone}</p>
                                    </div>
                                </div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <p className="roxo" style={{color:"#1B0746"}}>{convidados.dataEnvio}</p></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <p className="roxo" style={{color:"#1B0746"}}>{convidados.dataResposta}</p></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%" }}>
                                    <p className="convText" style={getStatusStyle(convidados.status)}>{convidados.status}</p></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <div style={{ padding:"1rem 2rem", display:"flex", alignItems:"center", justifyContent: "center" ,height: "4rem", width:"100%"}}>
                                            <Button  
                                                style={{ display:"flex", alignItems:"center", justifyContent:"center", background: "#F0E7FB", border:"none"}} 
                                                icon={<EllipsisOutlined style={{fontWeight:"bold"}}/>}
                                                onClick={() => toggleSeeOptions(index)}/>
                                            
                                                {seeOptions[index] && 
                                                <div className="miniMenuConvid" id="ConvMenu" onClick={CloseOutClick}>
                                                    <p 
                                                        className="miniItemConv" 
                                                        onClick={() => {
                                                            setAddConvidado((old) => !old);
                                                            setEditConv(true);
                                                            toggleSeeOptions(index);
                                                        }}
                                                    >
                                                            Editar <FormOutlined />
                                                    </p>
                                                    <p className="miniItemConv Ex" onClick={() => { setModalEx(true); toggleSeeOptions(index);}} >Excluir <DeleteOutlined /></p>   
                                                </div>}

                                                {modalEx &&
                                                    <div
                                                    id="Fundo"
                                                    style={{
                                                        overflow: "hidden",
                                                        zIndex: "10001!important",
                                                        width: "100vw",
                                                        height: "100vh",
                                                        backgroundColor: "rgba(255, 255, 255, .15)",
                                                        backdropFilter: "blur(3px)",
                                                        display: "flex",
                                                        position: "fixed",
                                                        top: "0",
                                                        left: "0",
                                                        alignItems:"center",
                                                        justifyContent:"center",
                                                    }}
                                                    onClick={CloseOutClickEx}>
                                                        <div 
                                                            style={{ 
                                                            width: "60vw",
                                                            height: "40vh", 
                                                            margin: "0 0 auto", 
                                                            backgroundColor: "white", 
                                                            borderRadius: ".5rem", 
                                                            display: "flex", 
                                                            flexDirection: "column", 
                                                            position: "absolute", 
                                                            zIndex: "10", 
                                                            alignItems: "center", 
                                                            justifyContent: "space-evenly",
                                                            border: "2px solid #B8B2C6"
                                                            }}
                                                        >
                                                            <Button 
                                                                className="close" 
                                                                type="primary" 
                                                                onClick={() => { setModalEx(false)}} 
                                                                shape="square" 
                                                                size="small"
                                                                icon={<CloseOutlined />}
                                                            />

                                                            <p className="squareTitle">Tem certeza que deseja excluir esse modelo Convidado?</p>
                                                            <Button style={{fontWeight: "bold", width: "18rem" , backgroundColor:"#EA4335", height:"3rem"}}type="primary" danger> Excluir </Button>

                                                        </div>
                                                    </div>
                                                }
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </>
                    }
                    {!showList &&
                    <>
                        <div style={{display:"flex", justifyContent:"flex-end", width: "90%", height:"4rem"}}>
                            <Button className="buttonNews add" style={{ height: "3rem", width: "15rem", backgroundColor: "#6D0AD7", color: "white" }}
                                onClick={() => setAddConvidado((old) => !old)}
                            >
                                + Adicionar Convidado
                            </Button>
                        </div>
                        <div
                            style={{ 
                                cursor: "pointer", 
                                display: "flex", 
                                alignItems: "center", 
                                justifyContent: "center",
                                height: "4rem",
                                marginTop: "5rem",
                                width: "90%", 
                                borderRadius: "9px", 
                                border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", 
                                background: "#F1FAFF", }}
                            onClick={() => setModal((old) => !old)}>
                            <div style={{ margin: "0 2rem" }}>
                                <img src={ImpExcel} width={"30px"} />
                            </div>
                            <div>
                                <p className="textBold">Importar Excel</p>
                                <p className="text">Importe sua lista de convidados direto do Excel </p>
                            </div>
                        </div>
                        <div style={{marginTop:"5rem"}}>
                            <p style={{ fontSize: "35px", fontWight: "500", lineHeight: "53px", textAlign: "center", color: "#6D0AD7" }}>Você não possui nenhum convidado :(</p>
                            <p style={{ fontSize: "20px", fontWeight: "500", lineHeight: "30px", textAlign: "center", color: "#1B0746" }}>Que tal criar uma lista de convidados? Você pode importar de uma planilha do Excel </p>
                            <p style={{ fontSize: "20px", fontWeight: "500", lineHeight: "30px", textAlign: "center", color: "#1B0746" }}>ou criar aqui mesmo. É rápido e fácil!</p>
                        </div>
                    </>
                    }
                </div>
            </div>
        }

            {modal &&
                <div
                    id="Fundo"
                    style={{
                        overflow: "hidden",
                        zIndex: "10001!important",
                        minWidth: "101%",
                        minHeight: "210%",
                        backdropFilter: "blur(10px)",
                        backgroundColor: "#181C32CC",
                        display: "flex",
                        position: "fixed",
                        top: "0",
                        left: "0"
                    }}
                    onClick={CloseOutClick}>
                    <div style={{ width: "70vw", height: "90vh", margin: "5vh 15vw", backgroundColor: "white", borderRadius: ".5rem", display: "flex", flexDirection: "column", position: "absolute", alignItems: "center", justifyContent: "space-evenly" }}>
                        <Button
                            className="close"
                            type="primary"
                            onClick={() => { setModal(false) }}
                            shape="square"
                            size="small"
                            icon={<CloseOutlined />}
                        />
                        <p style={{ color: "#1B0746", fontSize: "20px", fontWeight: "500", lineHeight: "30px", letterSpacing: "0em", textAlign: "center", marginTop: "3rem" }}>Faça o download da Planilha Modelo de Excel</p>
                        <div className="centerImg">
                            <img style={{ position: "absolute", zIndex: "4" }} src={ButtonVideo} alt="Merch02" />
                            <img src={ExcelPlan} alt="Imagem do Modal" style={{ width: "90%", height: "auto", margin: "0 3rem" }} />
                        </div>
                        <p style={{ bottom: "14.7rem", position: "absolute", background: "#1B0746", color: "#A1F71A", borderRadius: "10px", padding: " .3rem 1.5rem", fontSize: "14px" }}>É muito simples importar convidados através da planilha excel!</p>
                        <div className="squareModal">
                            <p style={{ color: "#1B0746", fonSize: "20px", fontWeight: "600", lineHeight: "24px", letterSpacing: "-0.02em", }}>
                                Personalize seu evento</p>
                            <p style={{ color: "#1B0746" }}>Inclua a imagem que será o banner da página de confirmação de presenças e a edite uma descrição bem bacana!</p>
                        </div>
                        <Button
                            // onClick={() =>  {setPassOne((old) => !old);
                            //                 setPassTwo((old) => !old);
                            //         }}
                            style={{
                                background: "#6D0AD7",
                                width: "35rem",
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "19px",
                                letterSpacing: "0em",
                                color: "white",
                                height: "3rem",
                                border: "none",
                                padding: "0 2rem"
                            }}>
                            Fazer Download da Planilha Modelo de Excel
                        </Button>
                    </div>
                </div>
            }

            {modalInvite &&
                <div
                    id="Fundo"
                    style={{
                        overflow: "hidden",
                        zIndex: "10001!important",
                        minWidth: "101%",
                        minHeight: "210%",
                        backdropFilter: "blur(10px)",
                        backgroundColor: "#181C32CC",
                        display: "flex",
                        position: "fixed",
                        top: "0",
                        left: "0"
                    }}
                    onClick={CloseOutClick}>
                    <div style={{ width: "50vw", height: "50vh", margin: "20vh 25vw", backgroundColor: "white", borderRadius: ".5rem", display: "flex", flexDirection: "column", position: "absolute", alignItems: "center", justifyContent: "space-evenly" }}>
                        <Button
                            className="close"
                            type="primary"
                            onClick={() => { setModalInvite(false) }}
                            shape="square"
                            size="small"
                            icon={<CloseOutlined />}
                        />
                        <p 
                            style={{ color: "#1B0746", fontSize: "20px", fontWeight: "500", lineHeight: "30px", letterSpacing: "0em", textAlign: "center", marginTop: "3rem" }}>
                            Convite(s) enviado com sucesso!
                        </p>
                        
                        <Button
                            // onClick={() =>  {setPassOne((old) => !old);
                            //                 setPassTwo((old) => !old);
                            //         }}
                            style={{
                                background: "#6D0AD7",
                                width: "15rem",
                                fontSize: "16px",
                                fontWeight: "600",
                                lineHeight: "19px",
                                letterSpacing: "0em",
                                color: "white",
                                height: "3rem",
                                border: "none",
                                padding: "0 2rem"
                            }}>
                            Concluir
                        </Button>
                    </div>
                </div>
            }

            {addConvidado &&
                <div
                    id="FundoAdd"
                    style={{
                        overflow: "hidden",
                        zIndex: "10001!important",
                        minWidth: "101%",
                        minHeight: "210%",
                        backgroundColor: "rgba(255, 255, 255, .15)",
                        backdropFilter: "blur(3px)",
                        display: "flex",
                        position: "fixed",
                        top: "0",
                        left: "0"
                        }}
                    onClick={CloseOutClick}>
                    <div 
                        style={{ 
                            width: "70vw", 
                            height: "90vh", 
                            margin: "0 15vw", 
                            top: "2rem", 
                            backgroundColor: "white", 
                            borderRadius: ".5rem", 
                            display: "flex", 
                            position: "absolute", 
                            alignItems: "center", 
                            flexDirection: "column",
                            border: "2px solid #B8B2C6"
                        }}
                        >
                        <div style={{ marginTop: "2rem", width: "90%", borderBottom: "1px solid #BFBFBF", display: "flex", justifyContent: "center" }}>
                            
                            {editConv ?
                                <p style={{ width: "100%", height: "2.5rem" }} className="squareTitle">Editar convidado</p>
                            :   <p style={{ width: "100%", height: "2.5rem" }} className="squareTitle">Adicionar convidados</p>
                            }
                            <Button
                                className="closeFlex"
                                type="primary"
                                onClick={() => { setAddConvidado(false) }}
                                shape="square"
                                size="small"
                                icon={<CloseOutlined />}
                            />
                        </div>
                        <div style={{ width: "79%", display: "flex", flexDirection: "column" }}>
                            <p style={{ color: "black", fontWeight: "600", lineHeight: "37px", marginTop: "2rem" }} className="MainText">Quase lá</p>
                            {editConv ?
                                <p style={{ width: "100%", height: "2.5rem" }} className="squareTitle">Edite os dados do convidado.</p>
                            :   <p style={{ width: "100%", height: "2.5rem" }} className="squareTitle">Precisamos que preencha esses dados sobre cada convidado.</p>
                            }
                        </div>
                        <div style={{ marginTop: "2rem", width: "87%", display: "flex", justifyContent: "space-evenly" }}>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ margin: "1rem 0" }}>
                                    <p style={{ display: "flex", marginBottom:".5rem" }} className="SubTitle">Primeiro Nome<p style={{ color: "red" }}>*</p></p>
                                    <Input size="large" className="inputInv" type="text" />
                                </div>
                                <div style={{ margin: "1rem 0" }}>

                                    <p style={{ display: "flex", marginBottom:".5rem" }} className="SubTitle">Sobrenome<p style={{ color: "red" }}>*</p></p>
                                    <Input size="large" className="inputInv" type="text" />
                                </div>

                                <div style={{ margin: "1rem 0" }}>


                                    <p style={{ display: "flex", marginBottom:".5rem" }} className="SubTitle">Número de convites extras</p>
                                    <div style={{ display: "flex", width: "8rem", justifyContent: "space-between" }}>
                                        <Select
                                            className="selectNum"
                                            options={[
                                                {
                                                    value: '0',
                                                    label: '0',
                                                },
                                            ]}
                                        />
                                        <Popover content={content} placement="left">
                                            <ExclamationCircleOutlined style={{ color: "#6D0AD7", fontSize: "1.5rem", fontWeight: "bold" }} />
                                        </Popover>
                                    </div>
                                </div>

                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                                <div style={{ margin: "1rem 0" }}>

                                    <p style={{ display: "flex", marginBottom:".5rem" }} className="SubTitle">E-Mail<p style={{ color: "red" }}>*</p></p>
                                    <Input size="large" className="inputInv" type="email" />
                                </div>
                                <div style={{ margin: "1rem 0" }}>

                                    <p style={{ display: "flex", marginBottom:".5rem" }} className="SubTitle">Telefone (WhatsApp)<p style={{ color: "red" }}>*</p></p>
                                    <Input size="large" className="inputInv" type="phone" />
                                </div>

                            </div>
                        </div>
                        {editConv ?
                                <Button className="buttonNews add" style={{ height: "3rem", width: "50rem", backgroundColor: "#6D0AD7", color: "white", marginTop:"2rem" }}
                                onClick={CloseOutClick}
                                >
                                    Salvar alterações
                                </Button>
                        
                            :   <Button className="buttonNews add" style={{ height: "3rem", width: "50rem", backgroundColor: "#6D0AD7", color: "white", marginTop:"2rem" }}
                                onClick={CloseOutClick}
                                >
                                    Adicionar novo convidado
                                </Button>
                        }
                    </div>
                </div>
            }
            
        </>
    )
}