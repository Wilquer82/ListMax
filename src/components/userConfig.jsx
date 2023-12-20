import './style.css';
import { Button, Switch, Checkbox } from 'antd';
import LogoE from '../assets/logoEmpresa.png';
import { PhoneOutlined, UserOutlined, EnvironmentOutlined, MailOutlined, ExclamationCircleOutlined } from '@ant-design/icons';


export default function UserConfig() {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className="ParceriaMain">
            <div className="PartnersTitle">
                <div>
                    <p className="Title">Minha Conta</p>
                    <p><span style={{color:'#B8B2C6'}}>Home  / Minha Conta /</span><span style={{color:'#1B0746'}}>Configurações</span></p>
                </div>

            </div>
            <div className="square">
                <div style={{width:"39vw", display:"flex", alignItems: "center", justifyContent:"center"}}>
                    <div className="centerIMG">
                        <img src={LogoE} alt="LogoEmpresa" height={"200px"}/>
                        {/* <p style={{ color: 'black', position: 'absolute', zIndex: '4' }}></p> */}
                    </div>
                    <div className="data">
                        <p style={{ color: "#BFBFBF" }}><UserOutlined />  Nome</p>
                        <p style={{ color: "#BFBFBF" }}><EnvironmentOutlined /> Localidade</p>
                        <p style={{ color: "#BFBFBF" }}><MailOutlined />  E-Mail</p>
                        <p style={{ color: "#BFBFBF" }}><PhoneOutlined />  Telefone</p>
                    </div>
                </div>                
                <div style={{ width:"39vw", display: "flex", alignItems:"flex-start", justifyContent:"flex-end"}}>
                {/* {!edit &&
                    <Button  
                        size="large" 
                        style={{ height: "3rem", width: "6rem", backgroundColor: "#6D0AD7", color: "white"}} 
                        onClick={()=>{}}
                    >
                        Editar
                    </Button>
                } */}
                </div> 
            </div>
            <div className="squareE">
                <div style={{ borderBottom: "1px solid #BFBFBF", display: "flex"}}>
                    <p style={{ width: "100%", height: "2.5rem" }} className="squareTitle">Notificações</p>
                    <div style={{ width:"30rem", fontSize: "15px", display: "flex", justifyContent:"space-between"}}>
                        < Switch style={{backgroundColor:"#6D0AD7"}} defaultChecked onChange={onChange} />
                        <p style={{color: "#595959"}}>Receber todas as notificações</p>
                    </div>
                </div>
                        <div style={{display: "flex", flexDirection:"column", justifyContent:"space-between", fontSize: "14px",marginTop:"2rem" ,width:"29vw", minHeight:"20vh"}}>
                        <Checkbox onChange={onChange}>Notificações via E-mail</Checkbox>
                        <Checkbox onChange={onChange}>Notificações via WhatsApp</Checkbox>
                        <Checkbox onChange={onChange}>Notificações via SMS</Checkbox>
                        <Checkbox onChange={onChange}>Assinar boletins informativos</Checkbox>
                        <Checkbox onChange={onChange}>Atualizações especiais</Checkbox>
                    </div>                
            </div>
            <div className="squareE">
                <div style={{ borderBottom: "1px solid #BFBFBF", display: "flex"}}>
                    <p style={{ width: "100%", height: "2.5rem" }} className="squareTitle">Preferência de Comunicação</p>
                    <div style={{ width:"30rem", fontSize: "15px", display: "flex", justifyContent:"space-between"}}>
                        < Switch style={{backgroundColor:"#6D0AD7"}} defaultChecked onChange={onChange} />
                        <p style={{color: "#595959"}}>Receber todos</p>
                    </div>
                </div>
                <div style={{display: "flex", flexDirection:"column", justifyContent:"space-between", fontSize: "14px",marginTop:"2rem" ,width:"29vw", minHeight:"10vh"}}>
                    <Checkbox onChange={onChange}>Assinar boletins informativos</Checkbox>
                    <Checkbox onChange={onChange}>Assinar boletins sobre atualizações especiais</Checkbox>
                </div>                
            </div>
            <div className="squareE">
                <p style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Dados e Privacidade</p>
                <div style={{ display: "flex"}}>
                    <div style={{marginTop:"2rem" ,width:"39vw", minHeight:"13vh"}}>
                        <p style={{fontSize: "14px", marginTop:"1rem", color: "#595959"}}>Dados pessoais armazenados</p>
                        <p style={{fontSize: "14px",marginTop:"1rem", color: "#595959"}}>Politica de privacidade e informações</p>
                    </div>                
                    <div style={{fontSize: "14px", width:"39vw", display: "flex", alignItems:"flex-end", justifyContent:"flex-end", color: "#595959"}}>
                        <p className='buttonP'>Baixar Dados</p> <p className='buttonP' style={{marginLeft:"2rem"}}>Excluir Dados</p>
                    </div>
                </div>
            </div>
            <div className="squareE">
                <p style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Getão de Dispositivos</p>
                <div style={{ display: "flex"}}>
                    <div style={{marginTop:"2rem" ,width:"39vw", minHeight:"13vh"}}>
                        <p style={{fontSize: "14px", marginTop:"1rem", color: "#595959"}}>Lista de dispositivos conectados à sua conta</p>
                    </div>                
                    <div style={{fontSize: "14px", width:"39vw", display: "flex", alignItems:"flex-end", justifyContent:"flex-end", color: "#595959"}}>
                    <Button  size="large" style={{ height: "3rem", width: "12rem", backgroundColor: "#6D0AD7", color: "white"}}>Desconectar todos</Button>
                    </div>
                </div>
            </div>

            <div className="squareE">
                <p style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Ajuda e Suporte</p>
                <div style={{ display: "flex"}}>
                    <div style={{marginTop:"2rem" ,width:"39vw", minHeight:"13vh"}}>
                        <p style={{fontSize: "14px", marginTop:"1rem", color: "#595959"}}>Recursos de suporte</p>
                        <p style={{fontSize: "14px",marginTop:"1rem", color: "#595959"}}>Perguntas frequentes</p>
                        <p style={{fontSize: "14px", marginTop:"1rem", color: "#595959"}}>Entre em contato com o suporte ao cliente</p>

                    </div>                

                </div>
            </div>
            <div className="squareE">
                <p style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Desativar conta</p>
                <div style={{ display: "flex"}}>
                    <div style={{marginTop:"2rem" ,width:"100%", minHeight:"13vh"}}>
                        <div style={{borderRadius: "8px", border: "1px dashed #EA4335", background: "#FDFFB1", width: "100%", display:"flex", justifyContent:"left", padding: "2rem 4rem"}}>
                            <ExclamationCircleOutlined style={{fontWeight: "600", fontSize:"25px", color: "#FF9F46"}}/>
                            <div style={{  marginLeft:"2rem" ,display: "flex", flexDirection:"column", lineHeight: ".5rem"}}>
                                <p style={{  fontWeight: "600", fontSize: "14px", color: "#FF9F46"}}>Você está desativando sua conta</p>
                                <p style={{  fontSize: "14px", marginTop:"1rem", color: "#595959"}}>Para a sua segurança será enviado um e-mail de confirmação.</p>
                            </div>
                        </div>
                        <div style={{  width: "100%", display:"flex", alignItems:"center", justifyContent:"space-around", padding: "1rem 4rem"}}>
                            <Checkbox onChange={onChange}>Confirmo que quero desativar minha conta e que li os Termos de Uso do site.   </Checkbox>
                            <Button  size="large" style={{ marginTop: "4rem",fontWeight: "600", height: "3rem", width: "12rem", backgroundColor: "#EA4335", color: "white"}}>Desativar conta</Button>
                        </div>
                    </div>                

                </div>
            </div>
        </div>
    )
}