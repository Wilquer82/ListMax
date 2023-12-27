import { FaceScan, LookYouLogo } from "../assets";
import { Input, Button, Checkbox   } from 'antd';
import { useState } from "react";

export default function LookYou() {

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

    const [selectedTab, setSelectedTab] = useState('ALBUM COMPLETO');
    const [album, setAlbum] = useState(false);

    return(
        <div id="colorLook">
            <div id="mainLook" >
                <div className="containerV align-items-center justify-content-between " style={{marginTop:"7rem", height: "35rem"}}>
                        <img src={LookYouLogo} width="300px" style={album?{position:"absolute", top:"3rem", left:"3rem"}:null}/>
                        <div className="containerV align-items-center" style={album?{marginTop: "32rem"}:null}>
                            <h1 className="fwhite f600" >Álbum de fotos do evento</h1>
                            <h1 className="fwhite f600 fst-italic">(nome do evento)</h1>
                        </div>
                        {!album &&
                        <div className="containerV align-items-center" style={{width: "30rem"}}> 
                            <h4 className="fwhite f600">Digite a senha para acessá-lo:</h4>
                            <div className="containerCodigo" style={{marginTop:"3rem"}}>
                                <Input className="codigo" type="text" />
                                <Input className="codigo" type="text" />
                                <Input className="codigo" type="text" />
                                <Input className="codigo" type="text" />
                            </div>
                            <Button 
                                className="buttonNews" 
                                style={{ marginTop:"5rem", height: "3rem", width: "18rem", background: "linear-gradient(90deg, #FF14FF 0%, #6D0AD7 100%)", color: "white", borderRadius: "8px" }}
                                onClick={() => setAlbum((old) => !old)}
                            >
                                Acessar álbum de fotos
                            </Button>
                        </div>}
                </div>
                {album &&
                <>
                <div className="containerV align-items-center justify-content-between " style={{marginTop:"7rem", minHeight: "50rem", backgroundColor:"white"}}>
                    <div className="squareBP containerH align-items-center" style={{width: "80%", height:"5.6rem", padding: "1rem", marginTop: "2rem"}}>
                        <img src={FaceScan} width={"60px"}/>
                            <span className="roxo f600 f20">[Nome do convidado]</span>
                            <span className="rosa f600 f20"> você foi identificado em</span>
                            <span className="roxo f600 f20">[X fotos]</span>
                            <span className="rosa f600 f20">do evento pela inteligência do Look You da ListMax</span>
                    </div>
                
                    <div className="eventsBar" 
                        style={{ width: "79vw",display: "flex", alignContent:"center", padding: "2rem", backgroundColor:"white", marginTop:"2rem", minHeight: "50rem", flexDirection: "column" }}>
                        <div className="TabListConv" style={{ display: "flex",  justifyContent: "space-between", width:"100%"}}>
                            <div style={{ display: "flex", alignItens: "center", justifyContent: "space-between", width:"100%"}}>
                                <div className="containerH">
                                    <div className={`Tab ${selectedTab === 'ALBUM COMPLETO' ? 'active' : ''}`} onClick={() => setSelectedTab('ALBUM COMPLETO')}>
                                        <span className="roxoF">ALBUM COMPLETO</span>
                                    </div>
                                    <div className={`Tab ${selectedTab === 'ALBUM PARTICULAR' ? 'active' : ''}`} onClick={() => setSelectedTab('ALBUM PARTICULAR')}>
                                        <span className="roxoF">ALBUM PARTICULAR</span>
                                    </div>
                                </div>
                                <Button 
                                        className="buttonNews" 
                                        style={{ height: "3rem", width: "10rem", background: "linear-gradient(90deg, #FF14FF 0%, #6D0AD7 100%)", color: "white", borderRadius: "8px" }}
                                        // onClick={() => handleButtonClick(selectedTab)}
                                    >
                                        Selecionar todas
                                </Button>
                            </div>
                        </div>
                        <div style={{overflowY:"auto", flexWrap:"wrap", width: "100%", display:"flex", alignItems: "center", justifyContent:"space-between", marginTop:"2rem", height:"60rem"}}>
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
                                    <Checkbox style={{color:"transparent"}}>{teste.num}</Checkbox>
                                </div>
                            ))}
                        </div>
                        <Button 
                                        className="buttonNews" 
                                        style={{ height: "4rem", width: "100%", background: "linear-gradient(90deg, #FF14FF 0%, #6D0AD7 100%)", color: "white", borderRadius: "8px", marginTop:"2rem" }}
                                        // onClick={() => handleButtonClick(selectedTab)}
                                    >
                                        Fazer Download das Fotos Selecionadas
                                </Button>
                    </div>
                </div>
                </>}
            </div>
        </div>
    )
}
