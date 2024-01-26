import { useState } from 'react';
import { Progress, Checkbox } from 'antd';
import Look from '../../assets/lookYou.png';
import { RightOutlined, CloseCircleOutlined , ExclamationCircleOutlined, ArrowDownOutlined, CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import  Upload from "../../assets/upload-square.svg";
import Face from "../../assets/face-scan.svg";
import Photo from "../../assets/photo-download.svg";
import Smile from "../../assets/face-scan-s.png"
import { Link } from 'react-router-dom';


export default function PgLook() {

    const teste = [
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
        {
            num: 1
        },
    ]
    const [nome, setNome] = useState(true);
    const [sobre, setSobre] = useState(true);
    const [envios, setEnvios] = useState(false);
    const [viewButtons, setViewButtons]= useState(false)
    const [seeOptions, setSeeOptions] = useState(Array(teste.length).fill(false));    
    const [selectedTab, setSelectedTab] = useState('IMPORTAÇÃO');
    const [activeButton, setActiveButton] = useState(null);
    const [particular, setParticular] = useState(false)


    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const twoColors = {
        '0%': '#FF14FF',
        '100%': '#6D0AD7',
    };

    const toggleSeeOptions = (index) => {
        setActiveButton(activeButton === index ? null : index);
        const newSeeOptions = [...seeOptions];
        newSeeOptions[index] = !newSeeOptions[index];
        setSeeOptions(newSeeOptions);
    };

    const handleButtonClick = (selectedTab) => {
        switch(selectedTab) {
            case 'IMPORTAÇÃO':
                return setSelectedTab('SELEÇÃO');
            case 'SELEÇÃO':
                return setSelectedTab('IMAGEM DE CAPA');
            case 'IMAGEM DE CAPA':
                return setSelectedTab('ENVIO');
            default:
                return {};
        }
    };


    return(
        <div className="ParceriaMain" style={{backgroundColor:"#e8e6ed",  width: "100vw", minHeight:"120vh"}}>
            <div style={{backgroundColor:"#1B0746",  width: "100vw", height:"12rem", display:"flex", alignItems:"center", justifyContent:"center"}}>
                <img src={Look} width={"20%"}/>
            </div>
            <div className="eventsBar" 
                style={{ width: "79vw",display: "flex", alignContent:"center", justifyContent: "space-between", padding: "2rem", height: "7rem", backgroundColor:"white", position:"absolute", marginTop:"11rem" }}>
                <div className="TabListConv" style={{ display: "flex",  justifyContent: "space-between", width:"100%", height:"100%"}}>
                    <div style={{ display: "flex", alignContent:"left", justifyContent: "space-between", width:"60%"}}>
                        <div className={`Tab ${selectedTab === 'IMPORTAÇÃO' ? 'active' : ''}`} onClick={() => setSelectedTab('IMPORTAÇÃO')}>
                            <span>IMPORTAÇÃO</span>
                        </div>
                        <div className={`Tab ${selectedTab === 'SELEÇÃO' ? 'active' : ''}`} onClick={() => setSelectedTab('SELEÇÃO')}>
                            <span>SELEÇÃO</span>
                        </div>
                        <div className={`Tab ${selectedTab === 'IMAGEM DE CAPA' ? 'active' : ''}`} onClick={() => setSelectedTab('IMAGEM DE CAPA')}>
                            <span>IMAGEM DE CAPA</span>
                        </div>
                        <div className={`Tab ${selectedTab === 'ENVIO' ? 'active' : ''}`} onClick={() => setSelectedTab('ENVIO')}>
                            <span>ENVIO</span>
                        </div>
                    </div>
                        <div style={{ width: "30rem"}}/>
                        {selectedTab === "ENVIO" ? 
                        <Link to="/look">
                            <button 
                                className="buttonNews" 
                                style={{ height: "3rem", width: "10rem", background: "linear-gradient(90deg, #FF14FF 0%, #6D0AD7 100%)", color: "white", borderRadius: "8px" }}
                                // onClick={() => handleButtonClick(selectedTab)}
                            >
                                Concluir
                            </button>
                        </Link> :
                        <button 
                            className="buttonNewsP" 
                            style={{ height: "3rem", width: "12rem", backgroundColor: "#6D0AD7", color: "white", borderRadius: "8px"}}
                            onClick={() => handleButtonClick(selectedTab)}
                        >
                            Continuar <RightOutlined />
                        </button>}
                    </div>
            </div>
            {selectedTab == 'IMPORTAÇÃO' &&
                <div 
                style={{ 
                    marginTop: "10rem",
                    border: "1px solid #B8B2C6", 
                    width: "79vw", 
                    boxShadow: "0px 8px 20px 0px #B8B2C680", 
                    background: "#fefefe", 
                    minHeight: "50vh", 
                    borderRadius: "1rem", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    padding:"2rem 2rem" }}
                >

                    <div style={{ display:"flex", alignItems:"center", justifyContent:"center",height: "4rem", width:"100%",borderRadius: "9px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", background: "#F1FAFF",}}>
                        <div style={{ display:"flex", alignItems:"center"}}>
                            <div style={{margin: "0 2rem"}}>
                                <img src={Upload} width={"30px"}/>  
                            </div>
                            <div className='containerV'>
                                <span className="textBold">Importar as fotos do seu evento</span>
                                <span className="text">Faça upload das suas fotos e iremos identificar e separa-las por convidado</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: "100%", height: "20vh", display: "flex", flexDirection: "column", marginTop:"10rem" }}>
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection:"column" }}>
                            <div style={{ width: "80%", display: "flex", justifyContent: "space-between", marginBottom: ".25rem"}}>
                                <span className="pdate">Fotos</span> 
                                <span style={{ color: "#6D0AD7"}} className="pdate">0000 de 0000 fotos</span>
                            </div>
                            <Progress style={{ width: "80%" }} percent={20} strokeColor={twoColors} showInfo={false} size={[950, 20]} trailColor="#B8B2C6" />
                            <div style={{ width: "80%", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: ".25rem" }}>
                            <span className="pdate">0000 fotos restantes para upload </span>
                        </div>
                        </div>
                        
                    </div>
                
                </div>
            }
                
            {selectedTab == 'SELEÇÃO' &&
                <div 
                style={{ 
                    marginTop: "10rem",
                    border: "1px solid #B8B2C6", 
                    width: "79vw", 
                    boxShadow: "0px 8px 20px 0px #B8B2C680", 
                    background: "#fefefe", 
                    minHeight: "50vh", 
                    borderRadius: "1rem", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    padding:"2rem 2rem" }}
                >
                    {!envios ?
                    <>
                        <div 
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop:"2rem",
                                border: "2px dashed #6D0AD7", 
                                backgroundColor: "#F0E7FB", 
                                fontSize: "12px", 
                                borderRadius: "12px", 
                                width: "100%", 
                                height: "4rem", 
                                color: "#727272", 
                                padding: "1rem" }}
                        >
                            <ExclamationCircleOutlined style={{color: "#6D0AD7", fontSize:"30px", margin: "0 2rem"}} /> 
                            <span className="text" style={{color: "#6D0AD7"}}>Crie o álbum do seu evento para enviar aos convidados. Selecione quais fotos estarão presentes.</span>
                        </div>
                        
                        <div style={{width: "100%", display:"flex", alignItems: "center", justifyContent:"space-between"}}>
                            <div style={{marginTop:"3rem", display:"flex", width:"45%", justifyContent:"space-between"}}>
                                <div className="containerV" style={{padding:"1rem", width: "12.5rem",height: "11rem", borderRadius: "0.5625rem", border: "1px solid var(--colors-roxo-light-active, #D2B3F3)" , background: "var(--Colors-Roxo-Light, #F0E7FB)"}}>
                                    <img src={Photo} width={"30%"}/>
                                    <span style={{color:"#D2B3F3",fontSize: "1.5rem",fontWeight: "600",lineHeight: "1.75rem",}}>000 / 000 fotos</span>
                                </div>
                                <div className="containerV" style={{padding:"1rem", width: "18.875rem", height: "11rem", borderRadius: "0.5625rem", border: "1px solid var(--colors-violeta-light-active, #FFB6FF)", background: "var(--Colors-Violeta-Light, #FFE8FF)"}}>
                                    <img src={Face} width={"20%"}/>
                                    <span style={{color:"#FFB6FF",fontSize: "1.5rem",fontWeight: "600",lineHeight: "1.75rem",}}>
                                        000 / 000 convidados identificados</span>
                                </div>
                            </div>
                            <div style={{width:"20%"}}>
                            </div>
                            <div style={{marginTop:"3rem", display:"flex", width:"35%", justifyContent:"space-between", alignItems:"baseline", height:"100%"}}>
                                <button className="buttonNews add" style={{ height: "3rem", width: "11.5rem", backgroundColor: "#6D0AD7", color: "white" }}>
                                    Selecionar todos 
                                </button>
                                <button 
                                    className="buttonNews add" 
                                    style={{ height: "3rem", width: "12.5rem", backgroundColor: "#6D0AD7", color: "white" }}
                                    onClick={() => {setEnvios(true)}}
                                >
                                    Apagar selecionados 
                                </button>
                            </div>
                        </div>
                        
                        <div style={{overflowY:"auto",flexWrap:"wrap", width: "80%", display:"flex", alignItems: "center", justifyContent:"space-between", marginTop:"2rem", height:"60vh"}}>
                            {teste.map((teste, index) => (
                                <div key={index} 
                                    style={{
                                        padding:"1rem",
                                        marginBottom:"1rem", 
                                        width: "15.75rem", 
                                        height: "9.9375rem", 
                                        borderRadius: "0.5625rem",
                                        background: "#C4C4C4"
                                    }}>
                                    <Checkbox onChange={onChange} style={{color:"transparent"}}>{teste.num}</Checkbox>
                                </div>
                            ))}
                        </div>
                    </>
                    :
                    <>
                        <div 
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginTop:"2rem",
                                border: "2px dashed #6D0AD7", 
                                backgroundColor: "#F0E7FB", 
                                fontSize: "12px", 
                                borderRadius: "12px", 
                                width: "100%", 
                                height: "4rem", 
                                color: "#727272", 
                                padding: "1rem" }}
                        >
                            <ExclamationCircleOutlined style={{color: "#6D0AD7", fontSize:"30px", margin: "0 2rem"}} /> 
                            <span className="text" style={{color: "#6D0AD7"}}>O álbum particular contem apenas fotos em que um 
                                convidado especifico está presente, enquanto o álbum completo inclui todas as fotos do evento. 
                                Escolha entre as opções.</span>
                        </div>
                        <div 
                            style={{
                                padding:"1rem",
                                display: "flex",
                                alignItems: "center",
                                width: "100%",
                                height: "5.625rem",
                                borderRadius: "0.5625rem",
                                border: "1px solid #6D0AD7",
                                background: "#F0E7FB",
                                marginTop:"2rem",
                                justifyContent:"space-evenly",
                            }}
                        >
                            <img src={Smile}/>
                            <span style={{fontSize: "1.25rem", fontWeight:" 600", lineHeight: "1rem", letterSpacing: "-0.025rem",color: "#FF14FF"}}>000/000</span>
                            <span style={{ fontSize: "1.25rem", fontWeight:" 600", lineHeight: "1rem", letterSpacing: "-0.025rem", color:"#D2B3F3"}}>
                                convidados foram identificados pelo Look You em suas fotos. Hora de compartilhar!</span>
                        </div>
                        <div style={{ width: "100%", justifyContent:"right", display:"flex", marginTop:"2rem"}}>
                            <button 
                                className="buttonNews add" style={{ borderRadius: "0.5625rem",height: "3rem", width: "25.5rem", backgroundColor: "#6D0AD7", color: "white" }}
                                onClick={() => {setViewButtons((old) => !old)}}>
                                Definir envio em massa <ArrowDownOutlined />
                            </button>
                            {viewButtons &&
                            <>
                                <div 
                                    style={{
                                        display:"flex",
                                        alignItems: 'center',
                                        justifyContent:"space-between",
                                        flexDirection:"column",
                                        backgroundColor: "#6D0AD7",
                                        position:"absolute",
                                        marginTop:"2.5rem", 
                                        width: "25.5rem",
                                        height:"10rem",
                                        zIndex:"10", 
                                        padding:" .5rem 0",
                                        borderRadius: "0.5625rem",
                                    }}>
                                    <button className="buttonNews add" style={{ borderRadius: "0.5625rem",height: "2.75rem", width: "25rem", backgroundColor: "#F0E7FB", color: "#6D0AD7" }}>
                                        <img src={Smile} width={"30px"}/>   Álbum particular para todos 
                                    </button>
                                    <button className="buttonNews add" style={{ borderRadius: "0.5625rem",height: "2.75rem", width: "25rem", backgroundColor: "#FEFEFE", color: "#6D0AD7" }}>
                                        Álbum completo para todos 
                                    </button>
                                    <button className="buttonNews add" style={{ borderRadius: "0.5625rem",height: "2.75rem", width: "25rem", backgroundColor: "#FEFEFE", color: "#6D0AD7" }}>
                                        Álbum Particular + Completo para todos 
                                    </button>
                                </div>
                                <div style={{
                                    overflow: "hidden",
                                    zIndex: "9",
                                    width: "75.5%",
                                    height: "45%",
                                    backgroundColor: "rgba(255, 255, 255, .15)",
                                    backdropFilter: "blur(3px)",
                                    display: "flex",
                                    position: "absolute",
                                    left: "12rem",
                                    marginTop:"4.5rem",
                                    }}/>
                            </>
                            }
                        </div>
                        <div style={{zIndex:"0" ,overflowY:"auto",flexWrap:"wrap", width: "100%", justifyContent:"space-between", display:"flex", marginTop:"2rem", height:"20rem"}}>
                        {teste.map((teste, index) => (
                            <div key={index} 
                                style={{
                                    pointerEvents: activeButton !== null && activeButton !== index ? 'none' : 'auto',
                                    opacity: activeButton !== null && activeButton !== index ? 0.3 : 1,
                                    padding:".7rem",
                                    display:"flex", 
                                    justifyContent:"space-evenly",
                                    marginBottom:"1rem", 
                                    width: "35rem", 
                                    height: "9rem", 
                                    borderRadius: "0.5rem", 
                                    border: "1px solid  #B8B2C6", 
                                    background: "#FEFEFE", 
                                    boxShadow: "0px 8px 20px 0px rgba(184, 178, 198, 0.50)",
                                }}>
                                <div style={{width:" 7.5rem", height:" 7.5rem", borderRadius: "0.5rem", background: "#D9D9D9"}}/>
                                <div className='containerV' style={{paddingLeft:"1rem"}}>
                                    <span style={{color: "#6D0AD7"}}>Nome</span>
                                    <div style={{display:"flex"}}>
                                        <img src={Smile} width={"30px"}/>
                                        <span style={{color: "#6D0AD7"}}>&nbsp;Identificado em X fotos</span>
                                    </div>
                                    <div style={{display:"flex",justifyContent:"space-between", width:"100%", marginLeft:".5rem"}}>
                                        <button className="buttonNews" style={{ height: "2.5rem", width: "8rem", backgroundColor: "#6D0AD7", color: "white" }}>
                                            Ver fotos
                                        </button>
                                        <button className="buttonNews" 
                                        style={{ height: "2.5rem", width: "17rem", backgroundColor: "#6D0AD7", color: "white" }} 
                                        onClick={() => toggleSeeOptions(index)}>
                                            Selecionar tipo de envios <ArrowDownOutlined />
                                        </button>
                                        {seeOptions[index] && 
                                        <div 
                                            style={{
                                                display:"flex",
                                                alignItems: 'center',
                                                justifyContent:"space-between",
                                                flexDirection:"column",
                                                backgroundColor: "#6D0AD7",
                                                position:"absolute",
                                                marginTop:"2.5rem", 
                                                width: "17rem",
                                                height:"10rem",
                                                zIndex:"5", 
                                                padding:" .5rem 0",
                                                borderRadius: "0.5625rem",
                                                marginLeft:"8.5rem",
                                            }}>
                                            <button 
                                                className="buttonNews" 
                                                style={{ borderRadius: "0.5625rem",height: "2.75rem", width: "16rem", backgroundColor: "#F0E7FB", color: "#6D0AD7" }}
                                                onClick={() => setParticular((old) => !old)}
                                            >
                                                <img src={Smile} width={"30px"}/>   Álbum particular
                                            </button>
                                            <button className="buttonNews" style={{ borderRadius: "0.5625rem",height: "2.75rem", width: "16rem", backgroundColor: "#FEFEFE", color: "#6D0AD7" }}>
                                                Álbum completo 
                                            </button>
                                            <button className="buttonNews" style={{ borderRadius: "0.5625rem",height: "2.75rem", width: "16rem", backgroundColor: "#FEFEFE", color: "#6D0AD7" }}>
                                                Álbum Particular + Completo
                                            </button>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </>
                    }
                    {particular &&
                    <>
                        <div 
                            style={{ 
                                position:"absolute",
                                marginTop: "-2.1rem",
                                border: "1px solid #B8B2C6", 
                                width: "79vw",
                                height: "94.5vh",
                                boxShadow: "0px 8px 20px 0px #B8B2C680", 
                                background: "#fefefe", 
                                minHeight: "50vh", 
                                borderRadius: "1rem", 
                                display: "flex", 
                                flexDirection: "column", 
                                alignItems: "center", 
                                padding:"2rem 2rem" }}
                            >
                            <div>
                            <button 
                                className="close" 
                                type="primary" 
                                onClick={() => { setParticular(false)}} 
                                shape="square" 
                                size="small"
                                icon={<CloseOutlined />}
                            />
                            </div>
                            <div style={{display: "flex", alignItems:"center", width:"34rem", justifyContent:"space-between", marginTop:"3rem"}}>
                                <div style={{width:"120px", height:"120px", backgroundColor:"#D9D9D9", borderRadius: "0.5625rem"}}/>
                                <div>
                                    <span className="squareTitle">Fotos no álbum de (nome do convidado)</span>
                                    <div style={{display: "flex", alignItems:"center"}}>
                                        <img src={Smile}/> 
                                        <span style={{fontSize: "20px", fontWeight: "600", lineHeight: "24px", color:"#D2B3F3"}}>Identificado em X fotos</span>
                                    </div>
                                </div>
                            </div>

                            <div style={{overflowY:"auto",flexWrap:"wrap", width: "80%", display:"flex", alignItems: "center", justifyContent:"space-between", marginTop:"2rem", height:"60vh"}}>
                            {teste.map((teste, index) => (
                                <div key={index} style={{padding:"1rem",marginBottom:"1rem", width: "15.75rem", height: "9.9375rem", borderRadius: "0.5625rem", background: "#C4C4C4", display:"flex", justifyContent:"flex-end", alignItems:"flex-end"}}>
                                    <button 
                                    style={{
                                        width: "5.0625rem",
                                        eight:" 1.5rem",
                                        borderRadius: "0.5rem", 
                                        background:"#1B0746",
                                        fontSize: "0.75rem", 
                                        fontWeight: "600", 
                                        color:"white"
                                    }}
                                    >
                                        Excluir <DeleteOutlined/>
                                    </button>
                                </div>
                            ))}
                        </div>
                        </div>
                    </>
                    }
                </div>
            }
            {selectedTab == 'IMAGEM DE CAPA' &&
                <div 
                    style={{ 
                        marginTop: "10rem",
                        border: "1px solid #B8B2C6", 
                        width: "79vw", 
                        boxShadow: "0px 8px 20px 0px #B8B2C680", 
                        background: "#fefefe", 
                        minHeight: "50vh", 
                        borderRadius: "1rem", 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        padding:"2rem 2rem" }}
                    >
                        <div className='containerH' style={{ marginBottom:"1rem", height: "4rem", width:"100%",borderRadius: "9px", border: "1px dashed var(--Colors-Roxo-Normal, #6D0AD7)", background: "#F1FAFF",}}>
                            <div className='containerH'  style={{ alignItems:"center"}}>
                                <div style={{margin: "0 2rem"}}>
                                    <img src={Upload} width={"30px"}/>  
                                </div>
                                <div className='containerV'>
                                    <span className="textBold">Importar foto</span>
                                    <span className="text">Faça upload de uma foto para ser usada como capa do seu álbum.</span>
                                </div>
                            </div>
                        </div>
                        <div className='containerH' style={{ minHeight: "4rem", width:"100%"}}>
                            <div  className='containerV'>
                                <span className="SubForm" style={{ marginBottom: "1rem"}}>Foto de capa</span>
                                <div style={{borderRadius: "9px",width: "15.75rem", height: "9.9375rem", backgroundColor: "#C4C4C4"}}>
                                </div>
                                <div className='containerH' style={{ marginTop:"1rem", justifyContent:"left"}}>
                                    <span className="text">Essa foto será usada na capa do seu álbum.</span>
                                </div>
                            </div>
                            <div>
                                <span className="SubForm" style={{ marginTop: "1rem" }}>Mensagem</span>
                                    <div className="containerV justify-content-sm-start"
                                        style={{
                                            alignItems: "left",
                                            height: "10rem",
                                            width: "100%",
                                            borderRadius: "9px",
                                            border: "none",
                                            background: "#F0E7FB",
                                            padding: "1rem",
                                            margin:"1rem 0"
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
                                    <div style={{ display: "flex", alignItems: "center", marginTop:".5rem" }}>
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
                        </div>
                </div>
            }   
            {selectedTab == 'ENVIO' &&
                <div 
                    style={{ 
                        marginTop: "10rem",
                        border: "1px solid #B8B2C6", 
                        width: "79vw", 
                        boxShadow: "0px 8px 20px 0px #B8B2C680", 
                        background: "#fefefe", 
                        minHeight: "50vh", 
                        borderRadius: "1rem", 
                        display: "flex", 
                        flexDirection: "column", 
                        alignItems: "center", 
                        padding:"2rem 2rem" }}
                    >
                        <span className="squareTitle">Veja o resumo das suas escolhas antes de encaminhar seus álbuns</span>
                        <div style={{ display:"flex", marginTop:"3rem", width:"100%", alignItems:"center", justifyContent:"space-between"}}>
                            <div style={{ borderRadius: "9px", padding:"2rem 2rem",display:"flex", flexDirection:"column", height: "50vh", width:"31%", overflowY: "auto", backgroundColor:"#e8e6ed"}}>                        
                                <span style={{ paddingBottom: "2rem", width:"100%"}} className="SubForm">Receberão álbuns particulares</span>
                                    {teste.map((teste, index) => (
                                        <div key={index} style={{marginBottom:".5rem", display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                                            <span style={{borderRadius: "50%", width:"40px", height: "40px", backgroundColor:"grey"}}></span> 
                                            <span style={{ color: "#1B0746", fontSize: "16px", fontWeight: "600", lineHeight: "24px"}}>{teste.num}</span>
                                        </div>
                                    ))}
                            </div>
                            <div style={{ borderRadius: "9px", padding:"2rem 2rem",display:"flex", flexDirection:"column", height: "50vh", width:"31%", overflowY: "auto", backgroundColor:"#e8e6ed"}}>                        
                                <span style={{ paddingBottom: "2rem", width:"100%"}} className="SubForm">Receberão álbuns completos</span>
                                    {teste.map((teste, index) => (
                                        <div key={index} style={{marginBottom:".5rem", display:"flex", alignItems:"center", justifyContent:"space-between", width:"100%"}}>
                                            <span style={{borderRadius: "50%", width:"40px", height: "40px", backgroundColor:"grey"}}></span> 
                                            <span style={{ color: "#1B0746", fontSize: "16px", fontWeight: "600", lineHeight: "24px"}}>{teste.num}</span>
                                        </div>
                                    ))}
                            </div>
                            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"column",  width:"31%"}}>
                                <span className="SubForm" style={{ marginTop: "1rem"}}>Foto de capa</span>
                                <div style={{borderRadius: "9px",width: "15.75rem", height: "9.9375rem", backgroundColor: "#C4C4C4"}}>
                                </div>
                                <span className="SubForm" style={{ marginTop: "1rem"}}>Mensagem</span>
                                <span className="text" style={{textAling:"justify"}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                                    elit. In euismod, elit quis mollis dictum, dui felis 
                                    tristique lectusquis mollis dictum, dui felis tristique 
                                    lectus dui felis tristique lectus dui felis tristique 
                                    lectus dui felis tristique lectus.</span>
                            </div>
                        </div>
                </div>
            }
        </div>
    )
}