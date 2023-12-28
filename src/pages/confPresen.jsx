import { useState } from 'react';
import { Button, Input, Checkbox } from 'antd';
import {
    EnvironmentOutlined,
    ClockCircleOutlined,
    CalendarOutlined,
    CloseOutlined,
    LeftOutlined,
    RightOutlined
} from "@ant-design/icons";

import { LookYouLogoBlck, GoogleMaps, Wase, LookYouCapt } from "../assets";

const { TextArea } = Input;


export default function ConfPres (){

    const [confirm, setConfirm] = useState('');
    const [step, setStep] = useState(0);

    const handleNextStep = () => {
    setStep((step + 1) % 14);
    };

    const handlePreviousStep = () => {
    setStep((step - 1 + 14) % 14);
    };

    return(
    <div className="ParceriaMain">
        <div style={{ width: "100vw", minHeight: "50vh", backgroundColor: "#D9D9D9", display: "flex", alignItems: "flex-end", justifyContent: "end" }}>
        </div>
        <div style={{ 
            width: "79vw", 
            minHeight: "40vh", 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "flex-start", 
            justifyContent: "space-evenly" 
            }}>
            <div className='containerV justify-content-center flex align-items-center' style={{width:"79vw", margin: "5rem 0"}} >
                <h3 className='roxoF' style={{fontSize: "48px"}}> Você foi convidado!</h3>
                <h1 className='rosaF f600' style={{fontSize: "60px"}}>Nome do Evento</h1>
            </div>
            <div style={{ display: "flex", width: "100%", height: "9vh", alignItems: "center", justifyContent: "space-between", marginBottom:"2rem"}}>
                <div style={{ width: "30%", height: "9rem", display: "flex", justifyContent: "space-between" }} className="eventsBar">
                    <div style={{ color: "#1B0746",  height: "9rem",display: "flex", justifyContent: "space-evenly", flexDirection: "column" }}>
                        <span className="pdate">Inicio</span>
                        <div style={{ display: "flex", width: "100%", height: "2rem", alignItems: "center", justifyContent: "space-evenly" }}>
                            <CalendarOutlined className="pdate" /><span className="pdate"> 00/00/0000</span>
                            <ClockCircleOutlined className="pdate" /> <span className="pdate">00:00</span>
                        </div>
                    </div>
                </div>
                <div className="eventsBar" style={{ justifyContent: "space-between", padding: "2rem", height: "9rem", width:"70%", marginLeft: "2rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "start", justifyContent: "space-between", height: "100%" }}>
                        <span className="pdate">Endereço:</span>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                            <EnvironmentOutlined className="pdate" /><span className="pdate">Endereço completo</span>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
                        <Button className="buttonNews add" style={{ height: "2rem", width: "15rem", backgroundColor: "#6D0AD7", color: "white" }}>
                            <img style={{ margin: "0 10px" }} src={GoogleMaps} /> Ver no GoogleMaps
                        </Button>
                        <Button className="buttonNews add" style={{ height: "2rem", width: "15rem", backgroundColor: "#6D0AD7", color: "white" }}>
                            <img style={{ margin: "0 10px" }} src={Wase} /> Navegue pelo Waze
                        </Button>
                    </div>
                </div>
            </div>

        </div>
    
        <div style={{ width: "79vw", display: "flex", justifyContent: "space-between", alignItems: "start", marginTop: "2rem", flexDirection: "column" }}>
            <span style={{ margin: "2rem 0", color: "#1B0746", textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod,
                elit quis mollis dictum, dui felis tristique lectus, eget vestibulum elit erat ac nunc. Vestibulum suscipit ullamcorper
                imperdiet. Nam sed nisi tortor. Aliquam tempor, nulla at accumsan elementum, turpis nisl mollis neque, vitae porta sapien
                sem ut diam. In pharetra cursus velit id lobortis. Donec ipsum est, tincidunt at quam a, suscipit interdum massa. Mauris
                lectus risus, fringilla et ante vitae, lacinia lobortis risus. Cras cursus diam sit amet vulputate efficitur. Vestibulum
                nec ante gravida, commodo mauris nec, ornare nibh. Sed fringilla est a efficitur dignissim. Aliquam ullamcorper nisi orci,
                pulvinar euismod tellus lobortis venenatis. Aliquam erat volutpat. Aliquam molestie, est ultrices aliquam sodales,
                libero libero pellentesque justo, sed molestie ante mauris in nisi. Donec laoreet quis turpis in accumsan. Mauris non
                dolor id felis aliquet viverra ut quis orci. Aenean a est sapien.</span>
        </div>
        {confirm == "" && step === 0 &&
        <div>
            <Button
                className="buttonNews"
                style={{ height: "4rem", width: "79vw", backgroundColor: "#6D0AD7", color: "white", margin: "2rem 0"}}
                onClick={() => {
                    handleNextStep();
                }}
            >
                Aceitar convite
            </Button>
            <Button
                className="buttonNews"
                style={{ height: "4rem", width: "79vw", backgroundColor: "white", color: "red", margin: "2rem 0"}}
                onClick={() => {
                    setConfirm('Recusa');
                }}
            >
                Recusar Convite
            </Button>
        </div>
        }
        {confirm == "Recusa" &&
            <div className='box containerV align-items-center' style={{width:"79vw", height:"40rem" ,marginBottom:"3rem"}}>
                <div className='containerH justify-content-evenly' style={{height:"6rem", width:"214rem"}} >
                    <Button 
                        className='closeLook'
                        type="primary" 
                        onClick={() => {setConfirm('') }} 
                        icon={<LeftOutlined className='roxoF f600'/>}
                    />
                    <Button 
                        className='closeLook'
                        type="primary" 
                        icon={<CloseOutlined className='roxoF f600'/>}
                    />
                </div>
                <span className='MainText roxoF f600'>Que pena que você não poderá comparecer. =(</span>
                <span className='f600'>Mande uma mensagem para o Anfitrião.</span>
                <div className='containerV align-items-lg-start' style={{width:"60vw", marginTop:"5rem"}} >
                <span>Mensagem</span>
                <TextArea rows={6} style={{width:"60vw", margin:"1rem 0",  resize: "none"}} placeholder='Escreva sua mensagem aqui'/>
                    <span>É necessário concordar com os termos a seguir</span>
                    <Checkbox className="my-radio-group" style={{ padding:"0", fontWeight: "500", marginTop:"1rem"}}>Concordo com os Termos de Uso e a Política de Privacidade da ListMax.</Checkbox>
                </div>

                <Button
                    className="buttonNews"
                    style={{ height: "4rem", width: "20rem", background: "linear-gradient(90deg, #EA4335 0%, #A22626 100%)", color: "white", margin: "2rem 0"}}
                    onClick={() => {
                        setConfirm('Recusa');
                    }}
                >
                    RECUSAR CONVITE
                </Button>
            </div>
        }
        {step === 1 &&
            <div className='box containerV align-items-center justify-content-evenly' style={{width:"79vw", height:"40rem" ,marginBottom:"3rem"}}>
                <div className='containerV align-items-lg-end' style={{height:"2rem", width:"73rem"}} >
                    <Button 
                        className='closeLook'
                        type="primary" 
                        onClick={() => {setConfirm(''); setStep(0) }}
                        icon={<CloseOutlined className='roxoF f600'/>}
                    />
                </div>
                <span className='MainText roxoF f600'>Confirme sua presença </span>
                <span className='f600'>Confira seus dados!</span>
                <div className='containerH justify-content-between' style={{width:"32vw", marginTop:"5rem", marginBottom:"6rem", height:"10rem"}} >
                    <div className='containerV'>
                        <span>Convidado:</span>
                        <span>E-mail:</span>
                        <span>Telefone/WhatsApp:</span>
                    </div>
                    <div className='containerV' style={{width:"20rem"}}>
                        <div className='containerH'>
                            <Input className="inputConfirm" size="large" type="text" placeholder="Nome"/>&nbsp;&nbsp;
                            <Input className="inputConfirm" size="large" type="text" placeholder="Sobrenome" />
                        </div>
                        <Input className="inputConfirm"  size="large" type="email" placeholder="Seu E-mail" />
                        <Input className="inputConfirm"  size="large" type="phone" placeholder="Celular" />
                    </div>
                </div>

                <Button 
                    style={{marginBottom:"1rem"}}
                    onClick={() =>  {
                        handleNextStep();
                    }}
                    className='passButton'>
                    Próximo passo <RightOutlined />
                </Button>
            </div>
        }

        {step === 2 &&
            <div className='box containerV align-items-center justify-content-evenly' style={{width:"79vw", height:"45rem" ,marginBottom:"2rem"}}>
                <div className='containerH justify-content-evenly' style={{height:"6rem", width:"214rem"}} >
                    <Button 
                        className='closeLook'
                        type="primary" 
                        onClick={() => {handlePreviousStep()}} 
                        icon={<LeftOutlined className='roxoF f600'/>}
                    />
                    <Button 
                        className='closeLook'
                        type="primary" 
                        onClick={() => {setConfirm(''); setStep(0) }}
                        icon={<CloseOutlined className='roxoF f600'/>}
                    />
                </div>
                <span className='MainText roxoF f600'>Confirme sua presença </span>
                <span className='f600'>Agora é hora do reconhecimento facial, ele será usado </span>
                <span className='f600'>para você acessar o evento e ser identificado nas fotos.</span>
                <div className='containerV justify-content-between' style={{height: "16rem", width:"15vw", marginTop:"5rem", marginBottom:"6rem"}} >
                        <span className='f600 text-center'>Como Configurar o LookYou </span>
                        <span className='text-center'>Certifique que está em um ambiente com boa iluminação.</span>
                        <span className='text-center'>Posicione o rosto na moldura da câmera.</span>
                        <span className='text-center'>Mova a cabeça devagar para mostrar todos os ângulos do rosto.</span>
                </div>

                <Button 
                    style={{marginBottom:"1rem"}}
                    onClick={() =>  {
                        handleNextStep();
                    }}
                    className='passButton'>
                    Começar <RightOutlined />
                </Button>
            </div>
        }

        {step >= 3 && step <= 6 &&
            <div className='box containerV align-items-center justify-content-evenly' style={{width:"79vw", height:"45rem" ,marginBottom:"3rem"}}>
                <div className='containerH justify-content-evenly' style={{height:"6rem", width:"214rem"}} >
                    <Button 
                        className='closeLook'
                        type="primary" 
                        onClick={() => {handlePreviousStep()}} 
                        icon={<LeftOutlined className='roxoF f600'/>}
                    />
                    <Button 
                        className='closeLook'
                        type="primary" 
                        onClick={() => {setConfirm(''); setStep(0) }}
                        icon={<CloseOutlined className='roxoF f600'/>}
                    />
                </div>
                <div className='containerV justify-content-between' style={{height: "36rem", width:"15vw", marginTop:"1rem", marginBottom:"3rem"}} >
                <img src={LookYouLogoBlck}/>

                <img src={LookYouCapt}/>

                        <span className='f600 text-center'>Posicione seu rosto na moldura.</span>
                        {step === 3 && <span className='text-center'>Olhe para direita.</span>}
                        {step === 4 && <span className='text-center'>Olhe para esquerda.</span>}
                        {step === 5 && <span className='text-center'>Olhe para cima.</span>}
                        {step === 6 && <span className='text-center'>Olhe para Baixo.</span>}

                </div>

                <Button 
                    style={{marginBottom:"1rem"}}
                    onClick={() =>  {
                        handleNextStep();
                    }}
                    className='passButton'>
                    Próximo passo <RightOutlined />
                </Button>
            </div>
        }
        {step === 7 &&
            <div className='box containerV align-items-center' style={{width:"79vw", height:"45rem" ,marginBottom:"3rem"}}>
            <div className='containerH justify-content-evenly' style={{height:"6rem", width:"214rem"}} >
                <Button 
                    className='closeLook'
                    type="primary" 
                    onClick={() => {  handlePreviousStep()}}
                    icon={<LeftOutlined className='roxoF f600'/>}
                />
                <Button 
                    className='closeLook'
                    onClick={() => {setConfirm(''); setStep(0)}}
                    icon={<CloseOutlined className='roxoF f600'/>}
                />
            </div>
            <span className='MainText roxoF f600'>Confirme sua presença </span>
            <span className='f600'>Mande uma mensagem para o Anfitrião.</span>
            <div className='containerV align-items-lg-start' style={{width:"60vw", marginTop:"5rem"}} >
            <span>Mensagem</span>
            <TextArea rows={6} style={{width:"60vw", margin:"1rem 0",  resize: "none"}} placeholder='Escreva sua mensagem aqui'/>
                <span>É necessário concordar com os termos a seguir</span>
                <Checkbox className="my-radio-group" style={{ padding:"0", fontWeight: "500", marginTop:"1rem"}}>Concordo com os Termos de Uso e a Política de Privacidade da ListMax.</Checkbox>
            </div>

            <Button
                className='passButton'

                style={{ height: "3rem", width: "15rem"}}
                onClick={() => {
                    handleNextStep();
                }}
            >
                Concluir
            </Button>
        </div>
        }
        
        {step === 8 &&
            <div className='box containerV align-items-center' style={{width:"79vw", height:"32rem" ,marginBottom:"3rem"}}>
            <div className='containerH justify-content-evenly' style={{height:"2rem", width:"214rem"}} >
                <Button 
                    className='closeLook'
                    type="primary" 
                    onClick={() => {  handlePreviousStep()}}
                    icon={<LeftOutlined className='roxoF f600'/>}
                />
                <Button 
                    className='closeLook'
                    onClick={() => {setConfirm(''); setStep(0)}}
                    icon={<CloseOutlined className='roxoF f600'/>}
                />
            </div>
            <div className='containerV'>
                <span className='MainText roxoF f600 text-center'>Você confirmou com sucesso a sua presença</span>
                <span className='MainText roxoF f600 text-center'>ao evento <span className='MainText rosaF f600'>[Nome do Evento]</span>!</span>
            </div>
            <div className='containerV'>
                <span className='f600 roxoF ' style={{fontSize:"1.5rem"}}>Confira no seu e-mail e/ou WhatsApp</span>
                <span className='f600 roxoF ' style={{fontSize:"1.5rem"}}>o Qr Code de acesso ao evento. </span>
            </div>
            <Button
                className='passButton'

                style={{ height: "3rem", width: "20rem", marginBottom: "3rem"}}
                // onClick={() => {
                //     setConfirm('Recusa');
                // }}
            >
                Fazer download do convite
            </Button>
        </div>
        }

    </div>
    )
}