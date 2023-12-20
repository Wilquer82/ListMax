import { Button, Input, Select, Popover } from 'antd'
import { DownloadOutlined, CloseOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import ImpExcel from '../../assets/Excel.png';
import { useState } from 'react';
import ButtonVideo from '../../assets/Button.png';
import ExcelPlan from '../../assets/excel-plan.png';

export default function PgConvidados() {

    const CloseOutClick = (e) => {
        if (e.target.id === "Fundo") {
            setModal(false);
        }
        if (e.target.id === "FundoAdd") {
            setAddConvidado(false);
        }
    }

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

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const [currentLetter, setCurrentLetter] = useState(0);

    const goNext = () => {
        setCurrentLetter((currentLetter + 3) % (alphabet.length - 2));
    };
    
    const goPrev = () => {
        setCurrentLetter((currentLetter - 3 + (alphabet.length - 2)) % (alphabet.length - 2));
    };

    return (
        <>
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
                    height: "70vh", 
                    borderRadius: "1rem", 
                    display: "flex", 
                    flexDirection: "column", 
                    alignItems: "center", 
                    padding:"1rem" }}
                >
                    {showList &&
                    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                        <button onClick={goPrev} style={{ margin: '0 10px' }}>&lt;</button>
                        <button style={{ margin: '0 10px' }}>{alphabet[currentLetter]}</button>
                        <button style={{ margin: '0 10px' }}>{alphabet[currentLetter + 1]}</button>
                        <button style={{ margin: '0 10px' }}>{alphabet[currentLetter + 2]}</button>
                        <button onClick={goNext} style={{ margin: '0 10px' }}>&gt;</button>
                    </div>
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
            {addConvidado &&
                <div
                    id="FundoAdd"
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
                    <div style={{ width: "70vw", height: "90vh", margin: "0 15vw", top: "2rem", backgroundColor: "white", borderRadius: ".5rem", display: "flex", position: "absolute", alignItems: "center", flexDirection: "column" }}>
                        <div style={{ marginTop: "2rem", width: "90%", borderBottom: "1px solid #BFBFBF", display: "flex", justifyContent: "center" }}>
                            <p style={{ width: "100%", height: "2.5rem" }} className="squareTitle">Adicionar convidados</p>
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
                            <p style={{ marginTop: "1rem" }} className="squareTitle">Precisamos que preencha esses dados sobre cada convidado.</p>
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
                        <Button className="buttonNews add" style={{ height: "3rem", width: "50rem", backgroundColor: "#6D0AD7", color: "white", marginTop:"2rem" }}
                            onClick={() => setAddConvidado((old) => !old)}
                        >
                            Adicionar novo convidado
                        </Button>
                    </div>
                  
                </div>
            }
        </>
    )
}