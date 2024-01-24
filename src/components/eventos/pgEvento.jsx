
import { Button, Progress } from 'antd'
import { LeftOutlined, RightOutlined, CloseOutlined, EditOutlined, CalendarOutlined, ClockCircleOutlined, TeamOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Gmaps from '../../assets/icons8-google-maps-novo 1.png' ;
import Waze from '../../assets/wase.png';
import { useState } from 'react';
import Video from '../../assets/Video.png';
import ButtonVideo from '../../assets/Button.png';
import Video2 from '../../assets/pass2.png';
import Video3 from '../../assets/pass3.png';
import Video4 from '../../assets/pass4.png';

export default function PgEvento() {

    const CloseOutClick = (e) => {
        if (e.target.id === "Fundo") {
            setModal(false); 
        }
    }

    const twoColors = {
        '0%': '#FF14FF',
        '100%': '#6D0AD7',
    };

    const [modal, setModal] = useState(false);
    const [passOne, setPassOne] = useState(false);
    const [passTwo, setPassTwo] = useState(false);
    const [passThree, setPassThree] = useState(false);
    const [passFour, setPassFour] = useState(false);

    return (
        <div className="ParceriaMain">
            <div style={{ width: "100vw", minHeight: "50vh", backgroundColor: "#D9D9D9", display: "flex", alignItems: "flex-end", justifyContent: "end" }}>
                <button
                    className="buttonNewsNo add"
                    style={{ border: "none", marginRight: "7rem", marginBottom: "2rem", height: "3rem", width: "13rem", backgroundColor: "#FF14FF", color: "white" }}
                    icon={<EditOutlined />}
                    onClick={() => {setModal(true); 
                                    setPassOne(true); 
                                    setPassTwo(false);
                                    setPassThree(false);
                                    setPassFour(false);}}
                >Editar Informações</button>
            </div>
            <div style={{ width: "79vw", minHeight: "40vh", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "space-evenly" }}>
                <h1 style={{ color: "#1B0746", textAlign: "left" }}>Nome do Evento</h1>
                <div style={{ display: "flex", width: "100%", height: "17vh", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ width: "43%", height: "15vh", display: "flex", justifyContent: "space-between" }} className="box">
                        <div style={{ color: "#1B0746", display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
                            <span className="pdate">Inicio</span>
                            <div style={{ display: "flex", width: "100%", height: "2rem", alignItems: "center", justifyContent: "space-evenly" }}>
                                <CalendarOutlined className="pdate" /><span className="pdate"> 00/00/0000</span>
                                <ClockCircleOutlined className="pdate" /> <span className="pdate">00:00</span>
                            </div>
                        </div>
                        <div style={{
                            width: "1px",
                            background: "linear-gradient(270deg, #6D0AD7 0%, #FF14FF 100%)",
                            border: "none",
                            borderImageSource: "linear-gradient(270deg, #6D0AD7 0%, #FF14FF 100%)"
                        }} />

                        <div style={{ color: "#1B0746", display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
                            <span className="pdate">Fim</span>
                            <div style={{ display: "flex", width: "100%", height: "2rem", alignItems: "center" }}>
                                <CalendarOutlined className="pdate" /><span className="pdate"> 00/00/0000</span>
                                <ClockCircleOutlined className="pdate" /> <span className="pdate">00:00</span>
                            </div>
                        </div>
                    </div>
                    <div style={{ width: "55%", height: "15vh", display: "flex", flexDirection: "column" }} className="box">
                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "base-line" }}>
                            <span className="pdate">Convidados</span>
                            <Progress style={{ marginLeft: "5rem" }} percent={20} strokeColor={twoColors} showInfo={false} size={[400, 20]} trailColor="#B8B2C6" />
                        </div>
                        <span className="pdate" style={{ marginLeft: "13rem" }}> 000 convidados confirmados</span>

                        <div style={{ width: "10%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <TeamOutlined className="pdate" /><span className="pdate">0000</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="eventsBar" style={{ justifyContent: "space-between", padding: "2rem", height: "9rem" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-between", height: "100%" }}>
                    <span className="pdate">Endereço:</span>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <EnvironmentOutlined className="pdate" /><span className="pdate">Endereço completo</span>
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
                    <button className="buttonNewsP add" style={{ height: "2rem", width: "15rem", color: "white" }}>
                        <img style={{ margin: "0 10px" }} src={Gmaps} /> Ver no GoogleMaps
                    </button>
                    <button className="buttonNewsP add" style={{ height: "2rem", width: "15rem", color: "white" }}>
                        <img style={{ margin: "0 10px" }} src={Waze} /> Navegue pelo Waze
                    </button>
                </div>
            </div>
            <div style={{ width: "79vw", display: "flex", justifyContent: "space-between", alignItems: "start", marginTop: "2rem", flexDirection: "column" }}>
                <span className="Description">Descrição</span>
                <span style={{ margin: "2rem 0", color: "#1B0746", textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod,
                    elit quis mollis dictum, dui felis tristique lectus, eget vestibulum elit erat ac nunc. Vestibulum suscipit ullamcorper
                    imperdiet. Nam sed nisi tortor. Aliquam tempor, nulla at accumsan elementum, turpis nisl mollis neque, vitae porta sapien
                    sem ut diam. In pharetra cursus velit id lobortis. Donec ipsum est, tincidunt at quam a, suscipit interdum massa. Mauris
                    lectus risus, fringilla et ante vitae, lacinia lobortis risus. Cras cursus diam sit amet vulputate efficitur. Vestibulum
                    nec ante gravida, commodo mauris nec, ornare nibh. Sed fringilla est a efficitur dignissim. Aliquam ullamcorper nisi orci,
                    pulvinar euismod tellus lobortis venenatis. Aliquam erat volutpat. Aliquam molestie, est ultrices aliquam sodales,
                    libero libero pellentesque justo, sed molestie ante mauris in nisi. Donec laoreet quis turpis in accumsan. Mauris non
                    dolor id felis aliquet viverra ut quis orci. Aenean a est sapien.

                    Duis tristique sem vitae ex blandit, et porttitor velit dapibus. In turpis leo, iaculis at fringilla id, maximus eget
                    elit. Praesent molestie non libero et vehicula. Vestibulum egestas nec diam vel euismod. Etiam ut purus vehicula, tristique
                    elit quis, scelerisque ipsum. Etiam sed leo ut lorem facilisis cursus quis tempus elit. Morbi vestibulum condimentum lobortis.
                    Vestibulum vitae tristique mi.
                    Maecenas ut maximus dolor, vitae rhoncus velit. Fusce ac faucibus mauris. Integer at ipsum ac velit lacinia efficitur in et ipsum.
                    Morbi sed mauris lacinia turpis mollis rutrum. Integer viverra neque ligula, sed vulputate leo tempus eget. Sed ultrices ex risus,
                    quis pretium odio lacinia id. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam
                    luctus laoreet metus, at imperdiet metus varius molestie. Donec ullamcorper sagittis tempor. Ut non est augue. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Pellentesque gravida mauris a arcu sodales, sit amet hendrerit leo molestie. Pellentesque
                    vitae libero ligula. Duis consequat convallis tristique.</span>
            </div>
            { modal &&
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
                <div style={{ width: "70vw", height: "90vh", top: "5vh", backgroundColor: "white", borderRadius: ".5rem", display: "flex", flexDirection: "column", position: "absolute", alignItems: "center", justifyContent: "space-evenly" }}>
                    <button 
                        className="close" 
                        type="primary" 
                        onClick={() => { setModal(false)}} 
                        shape="square" 
                        size="small"
                        icon={<CloseOutlined />}
                    />

                    <span style={{color:"#1B0746", fontSize: "20px", fontWeight: "500", lineHeight: "30px", letterSpacing: "0em", textAlign: "center", marginTop:"3rem"}}>Guia rápido de como gerir seu evento aqui na ListMax!</span>
                        <div className="centerImg">
                            <img style={{position: "absolute", zIndex:"4"}} src={ButtonVideo} alt="Merch02"/>
                            { passOne &&
                                <img src={Video} alt="Imagem do Modal" style={{ width: "90%", height: "auto", margin: "0 3rem" }} />
                            }
                            { passTwo &&
                                <img src={Video2} alt="Imagem do Modal" style={{ width: "100%", height: "auto", margin: "0 1rem" }} />
                            }
                            { passThree &&
                                <img src={Video3} alt="Imagem do Modal" style={{ width: "100%", height: "auto", margin: "0 1rem" }} />
                            }   
                            { passFour &&
                                <img src={Video4} alt="Imagem do Modal" style={{ width: "100%", height: "auto", margin: "0 1rem" }} />
                            }                            
                        </div>
                        <div className="squareModal">
                        { passOne &&
                        <>
                            <span style={{bottom: "13.7rem",position: "absolute",background: "#1B0746", color: "#A1F71A", borderRadius: "10px",  padding:" .3rem 1.5rem", fontSize:"14px"}}>1º Passo</span>
                            <span style={{ color: "#1B0746", fonSize: "20px", fontWeight: "600", lineHeight: "24px", letterSpacing: "-0.02em", }}
                                >Personalize seu evento</span>
                            <span style={{ color: "#1B0746"}}>Inclua a imagem que será o banner da página de confirmação de presenças e a edite uma descrição bem bacana!</span>
                        </>
                        }
                        { passTwo &&
                        <>
                            <span style={{bottom: "13.5rem",position: "absolute",background: "#1B0746", color: "#A1F71A", borderRadius: "10px",  padding:" .3rem 1.5rem", fontSize:"14px"}}>2º Passo</span>
                            <span style={{ color: "#1B0746", fonSize: "20px", fontWeight: "600", lineHeight: "24px", letterSpacing: "-0.02em", }}
                                >Crie seus convites</span>
                            <span style={{ color: "#1B0746"}}>Na ListMax você pode criar convites diferentes para cada grupo de convidados.</span>
                            <br/>
                        </>
                        }
                        { passThree &&
                        <>
                            <span style={{bottom: "13.5rem",position: "absolute",background: "#1B0746", color: "#A1F71A", borderRadius: "10px",  padding:" .3rem 1.5rem", fontSize:"14px"}}>3º Passo</span>
                            <span style={{ color: "#1B0746", fonSize: "20px", fontWeight: "600", lineHeight: "24px", letterSpacing: "-0.02em", }}
                                >Adicione seus convidados</span>
                            <span style={{ color: "#1B0746"}}>
                                Faça upload de uma planilha excel com base em nosso modelo 
                                ou adicione manualmente a lista de seus convidados.</span>
                        </>
                        }
                        { passFour &&
                        <>
                            <span style={{bottom: "13.5rem",position: "absolute",background: "#1B0746", color: "#A1F71A", borderRadius: "10px",  padding:" .3rem 1.5rem", fontSize:"14px"}}>4º Passo</span>
                            <span style={{ color: "#1B0746", fonSize: "20px", fontWeight: "600", lineHeight: "24px", letterSpacing: "-0.02em", }}
                                >Envie os convites</span>
                            <span style={{ color: "#1B0746"}}>
                                Selecione os convidados e envie seus convites. 
                                Acompanhe os status de confirmação de presença e pronto! =)</span>
                        </>
                        }
                    </div>
                    {passOne &&
                        <button 
                            onClick={() =>  {setPassOne((old) => !old);
                                            setPassTwo((old) => !old);
                                    }}
                            className='passbutton'>
                            Próximo passo <RightOutlined />
                        </button>
                    }
                    { passTwo &&
                        <div className='passDiv'>
                            <span  onClick={() =>  {setPassOne((old) => !old);
                                                setPassTwo((old) => !old);
                                        }}>
                                <LeftOutlined /> Passo Anterior
                            </span>
                            <span  onClick={() =>  {setPassTwo((old) => !old);
                                                setPassThree((old) => !old);
                                        }}>
                                Próximo passo <RightOutlined />
                            </span>
                        </div>
                    }
                    { passThree &&
                        <div className='passDiv'>
                        <span  onClick={() =>  {setPassThree((old) => !old);
                                            setPassTwo((old) => !old);
                                    }}><LeftOutlined /> Passo Anterior</span>
                        <span  onClick={() =>  {setPassThree((old) => !old);
                                            setPassFour((old) => !old);
                                    }}>Próximo passo <RightOutlined /></span>
                        </div>
                    }
                    { passFour &&
                        <div className='passDiv'>
                        <span  onClick={() =>  {setPassThree((old) => !old);
                            setPassFour((old) => !old);
                            }}><LeftOutlined /> Passo Anterior</span>
                        <span  onClick={() => setModal((old) => !old)}>Fechar o guia rápido</span>
                        </div>
                    }

                </div>
            </div>
            }
        </div>
    )
}