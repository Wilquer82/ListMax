import { useState, useRef, useEffect } from "react";
import { 
    ExclamationCircleOutlined, 
    ShoppingCartOutlined, 
    SearchOutlined,  
    MailOutlined,
    CloseOutlined
} from "@ant-design/icons";
import { Button, Input, Select, Popover, Checkbox, Progress } from 'antd';
import Chart from "react-apexcharts";

export default function PgEstatisticas() {

    const convidados = [
        { nome: "Nome1", email: "email1@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "23:00", dataResposta: "05:00", status: "Não visualizou", msg: true },
        { nome: "Nome2", email: "email2@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "23:00", dataResposta: "05:00", status: "Confirmou presença", msg: false  },
        { nome: "Nome3", email: "email3@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "23:00", dataResposta: "05:00", status: "Recusou o convite",  msg: false},
        { nome: "Nome4", email: "email4@example.com", telefone: "+55(00) 00000-0000", dataEnvio: "23:00", dataResposta: "05:00", status: "Pendente de envio", msg: true }
    ];

    const [Msg, setMsg] = useState(false);    
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const [currentLetter, setCurrentLetter] = useState(0);
    const [activeElement, setActiveElement] = useState(null);
    const [seeMenuFilter, setSeeMenuFilter] = useState(false);
    const [convEscolhido, setConvEscolhido] = useState(null);

    const handleClick = (event) => {
        setActiveElement(event.target.id);
    };

    const [options, setOptions] = useState({
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
    });

    const [series, setSeries] = useState([
        {
            name: 'Convidados',
            data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
    ]);

    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const goNext = () => {
        if (currentLetter < alphabet.length - 3) {
            setCurrentLetter(currentLetter + 1);
        }
    };
    
    const goPrev = () => {
        if (currentLetter > 0) {
            setCurrentLetter(currentLetter - 1);
        }
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

    const node = useRef();
    // const [seeMenuFilter, setSeeMenuFilter] = React.useState(false);

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            // inside click
            return;
        }
        // outside click 
        setSeeMenuFilter(false);
    };

    useEffect(() => {
        if (seeMenuFilter) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [seeMenuFilter]);

    return (
        <>
            <div className="ParceriaMain" style={{ backgroundColor: "#e8e6ed", width: "100vw", minHeight: "100vh" }}>
                <div className="PartnersTitle">
                    <div className="containerV">
                        <span className="Title">Estatísticas</span>
                        <span><span style={{ color: "#B8B2C6" }}>Home  / </span><span style={{ color: "#1B0746" }}>  Meus Eventos / Estatíticas</span></span>
                    </div>
                    <div style={{ width: "32vw" }} />
                    <div>
                    </div>
                </div>
                <div className="containerH graySquare align-items-center justify-content-lg-start" style={{ width: "79vw", height: "6rem" }}>
                    <ExclamationCircleOutlined className="roxoF f16 f600" style={{ margin: "0 2rem", fontSize: "25    px" }} />
                    <span>Estatísticas mais completas estarão disponíveis após o evento.</span>
                </div>
                <div className="d-flex flex-column">
                    <div className="containerH" style={{ marginTop: "2rem" }}>
                        <div className="containerV">
                            <div className="squareStatistics" style={{ width: "37vw", height: "18rem", marginBottom: "2rem", marginRight: "2rem" }}>
                                <span><b>Convidados</b></span>
                                <div className="d-flex p-3 justify-content-center">
                                    <Progress
                                        percent={50}
                                        success={{
                                            percent: 30,
                                        }}
                                        type="dashboard"
                                        strokeWidth={[10]}
                                        format={() => 
                                            <div style={{display:'flex', flexDirection:'column'}}>
                                            <span style={{fontSize:'10px'}}>Convidados </span>
                                            <span style={{fontSize:'14px'}}>000</span>
                                            </div>
                                        }
                                        size={[180, 20]}
                                    />
                                    <div className="d-flex flex-column justify-content-evenly m-2 ml">
                                        <span className="flex justify-content-between"><span style={{color:'#6d0ad7'}}><b>-</b>&nbsp;</span>Confirmados      <span>00</span></span>
                                        <span className="flex justify-content-between"><span style={{color:'#52c41a'}}><b>-</b>&nbsp;</span>Recusados        <span>00</span></span>
                                        <span className="flex justify-content-between"><span style={{color:'#efefef'}}><b>-</b>&nbsp;</span>Não visualizaram&nbsp;&nbsp;<span>00</span></span>
                                    </div>
                                </div>
                                <span style={{marginLeft:'70%', cursor:"pointer"}}><ShoppingCartOutlined /> + Convidados</span>
                            </div>

                            <div className="squareStatistics" style={{ width: "37vw", height: "18rem" }}>
                            <span><b>Mensagens</b></span>
                                <div className="d-flex p-3 justify-content-center">
                                    <Progress
                                        percent={50}
                                        success={{
                                            percent: 30,
                                        }}
                                        type="dashboard"
                                        strokeWidth={[10]}
                                        format={() => 
                                            <div style={{display:'flex', flexDirection:'column'}}>
                                            <span style={{fontSize:'10px'}}>Mensagens </span>
                                            <span style={{fontSize:'14px'}}>000</span>
                                            </div>
                                        }
                                        size={[180, 20]}
                                    />
                                    <div className="d-flex flex-column justify-content-evenly m-2 ml">
                                        <span className="flex justify-content-between"><span style={{color:'#6d0ad7'}}><b>-</b>&nbsp;</span>Confirmados      <span>00</span></span>
                                        <span className="flex justify-content-between"><span style={{color:'#52c41a'}}><b>-</b>&nbsp;</span>Recusados        <span>00</span></span>
                                    </div>
                                </div>
                                <span style={{marginLeft:'70%', cursor:"pointer"}}><ShoppingCartOutlined /> + Mensagens</span>
                            </div>
                        </div>
                        <div className="squareStatistics containerV align-items-center" style={{ width: "40vw", height: "38rem" }}>
                            <Chart
                                options={options}
                                series={series}
                                type="area"
                                width={'450'}
                                height={'450'}
                            />
                        </div>
                    
                    </div>
                    {!Msg ?
                    <div className="squareStatistics" style={{ marginTop: "1rem",display: "flex", justifyContent: "space-between", width:"100%", flexDirection:"column", padding: "2rem"}}>
                        <div style={{ marginTop: "1rem",display: "flex", justifyContent: "space-between", width:"100%", flexDirection:"column", height:"6rem"}}>
                        <span><b>Status convites</b></span>
                            <div style={{ display: "flex", justifyContent: "space-between", width:"100%", alignItems:"center"}}>
                                <div style={{ display: "flex", justifyContent: "space-evenly"}}>
                                    <div style={{ display: "flex" }}>
                                        <button className="buttonNewsP" icon={<SearchOutlined />}style={{borderRadius:".5rem",  width: "6rem", color: "white" }}>Buscar</button>
                                        <Input style={{ width: "10rem", borderColor: "#6D0AD7"}}/> 
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-evenly", width: "10rem"}}>
                                        <span className="stickers" onClick={(e) => {goPrev(); handleClick(e);}}>&lt;</span>
                                        <span id="p1" className={`alphabetic ${activeElement === "p1" ? "active" : ""}`} onClick={handleClick}>{alphabet[currentLetter]}</span>
                                        <span id="p2" className={`alphabetic ${activeElement === "p2" ? "active" : ""}`} onClick={handleClick}>{alphabet[currentLetter + 1] || ""}</span>
                                        <span id="p3" className={`alphabetic ${activeElement === "p3" ? "active" : ""}`} onClick={handleClick}>{alphabet[currentLetter + 2] || ""}</span>
                                        <span className="stickers" onClick={(e) => {goNext(); handleClick(e);}}>&gt;</span>
                                    </div>
                                </div>
                                <div ref={node} style={{ display: "flex", justifyContent: "flex-end", width: "70%"}}>
                                    <button 
                                        className="closeLook" 
                                        style={{borderRadius:".5rem", height: "2.5rem", width: "3rem", color: "white", alignSelf: 'flex-end' }}
                                        onClick={()=>{setSeeMenuFilter((old) => !old)}}
                                    >
                                        <i className="bi bi-funnel" style={{color:'red'}}></i>
                                    </button>
                                    {seeMenuFilter && 
                                        <div className="miniMenuFilter">
                                            <div className="miniItemFil">
                                                <span>Todos</span>
                                            </div>
                                            <div className="miniItemFil">
                                                <span>Não visualizou</span>
                                            </div>
                                            <div className="miniItemFil">
                                                <span>Confirmou presenças</span>
                                            </div>
                                            <div className="miniItemFil">
                                                <span>Recusou o convite</span>
                                            </div>
                                            <div className="miniItemFil">
                                                <span>Pendente de envio</span>
                                            </div>
                                        </div>}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ marginTop: "2rem", display: "flex", alignItems: "center" , justifyContent:"space-between", width:"74vw", borderBottom: "1px dashed #BFBFBF", paddingBottom:".5rem"}}>
                                <Checkbox onChange={onChange}/>
                                <div style={{display:"flex", justifyContent:"center", width:"40%"}}>
                                    <span className="ticketConv">CONVIDADOS</span></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <span className="ticketConv">CHECK-IN</span></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <span className="ticketConv">CHECK-OUT</span></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%" }}>
                                    <span className="ticketConv">STATUS</span></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <span className="ticketConv">MENSAGEM</span></div>
                            </div>
                            {convidados.map((convidado, index) => (
                            <div key={index} style={{ display: "flex", alignItems: "center" , justifyContent:"space-between", width:"74vw", borderBottom: "1px dashed #BFBFBF", padding:"1rem 0 "}}>
                                <Checkbox onChange={onChange}/>
                                <div style={{display:"flex", justifyContent:"space-evenly", width:"40%", alignItems: "center"}}>
                                    <div style={{width: "36px", height: "36px", borderRadius: "60px", background: "#595959"}}></div>
                                    <div className="containerV">
                                        <span className="roxo" style={{color:"#1B0746"}}>{convidado.nome}</span>
                                        <span className="convText">{convidado.email}</span>
                                        <span className="convText">{convidado.telefone}</span>
                                    </div>
                                </div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <span className="roxo" style={{color:"#1B0746"}}>{convidado.dataEnvio}</span></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <span className="roxo" style={{color:"#1B0746"}}>{convidado.dataResposta}</span></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%" }}>
                                    <span className="convText" style={getStatusStyle(convidado.status)}>{convidado.status}</span></div>
                                <div style={{display:"flex", justifyContent:"center", width:"15%"}}>
                                    <div style={{ padding:"1rem 2rem", display:"flex", alignItems:"center", justifyContent: "center" ,height: "4rem", width:"100%"}}>
                                        <button  
                                            style={{
                                            width: "2rem", 
                                            height: "2rem",
                                            display:"flex", 
                                            alignItems:"center", 
                                            justifyContent:"center", 
                                            background: convidado.msg ? "purple" : "#F0E7FB", 
                                            border:"none", 
                                            borderRadius:"8px"
                                            }}
                                            onClick={() => {setMsg((old) => !old); setConvEscolhido(convidado)}}>
                                                <MailOutlined style={{color : convidado.msg ? "white" : null }}/>
                                        </button>
                                    </div>
                                </div>
                            </div>))}
                        </div>
                    </div> : 
                        <div className="squareStatistics" style={{ marginTop: "1rem",display: "flex", justifyContent: "space-between", width:"100%", flexDirection:"column", padding: "2rem"}}>
                            <div style={{ marginTop: "1rem",display: "flex", width:"100%", flexDirection:"column", height:"30rem"}}>
                                <div className="d-flex w-100 justify-content-between ">
                                    <span><b>Mensagem</b></span>
                                    <button
                                    className="closeB"
                                    // type="primary"
                                    onClick={() => { setMsg((old) => !old)}}
                                    ><CloseOutlined />
                                    </button>
                                </div>
                                <div className="d-flex justify-content-between align-items-xxl-start flex-column" style={{ marginTop: "2rem",borderBottom: "1px dashed black" }}>
                                    <div style={{display:"flex", justifyContent:"space-evenly", width:"40%", alignItems: "center"}}>
                                        <div style={{width: "36px", height: "36px", borderRadius: "60px", background: "#595959"}}></div>
                                        <div className="containerV">
                                            <span className="roxo" style={{color:"#1B0746"}}>{convEscolhido.nome}</span>
                                            <span className="convText">{convEscolhido.email}</span>
                                            <span className="convText">{convEscolhido.telefone}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-xxl-end flex-column" style={{ marginTop: "2rem"}}>
                                    <div>
                                        <div style={ { color: "white", border: "none", backgroundColor:"#6D0AD7", borderRadius: "8px", width: "34rem", height: "5rem", alignSelf:"flex-end", padding:"1rem" }}>
                                            <span>Espero que possamos curtir minha festa juntos, aguardo sua confirmação!</span>
                                        </div>
                                        <span>Data e Hora</span> 
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-xxl-start flex-column" style={{ marginTop: "2rem"}}>
                                    <div>
                                        <div style={ { color: "#6D0AD7", border: "1px solid #6D0AD7", backgroundColor:"white", borderRadius: "8px", width: "34rem", height: "5rem", alignSelf:"flex-end", padding:"1rem" }}>
                                            <span>Resposta do convidado</span>
                                        </div>
                                        <span>Data e Hora</span> 
                                    </div>
                                </div>
                        </div>
                    </div>}

                </div>
            </div>
        </>
    )
}