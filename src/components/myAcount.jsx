import './style.css';
import { Button, Switch, Input } from 'antd';
import LogoE from '../assets/logoEmpresa.png';
import { 
    UserOutlined, 
    EnvironmentOutlined, 
    MailOutlined ,
    UploadOutlined
} from '@ant-design/icons';
import { useState } from 'react';


export default function MyAcount() {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    const [edit, setEdit] = useState(false);
    const [changePass, setchangePass] = useState(false);
    const [changeEmail, setchangeEmail] = useState(false);


    return (
        <div className="ParceriaMain">
            <div className="PartnersTitle">
                <div className="containerV">
                    <span className="Title">Minha Conta</span>
                    <span><span style={{color:'#B8B2C6'}}>Home  / </span><span style={{color:'#1B0746'}}> Minha conta</span></span>
                </div>

            </div>
            <div className="square">
                <div style={{width:"39vw", display:"flex", alignItems: "center", justifyContent:"center"}}>
                    <div className="centerIMG">
                        <img src={LogoE} alt="LogoEmpresa" height={"170px"}/>
                        {/* <span style={{ color: 'black', position: 'absolute', zIndex: '4' }}></span> */}
                    </div>
                    <div className="data">
                        <span style={{ color: "#BFBFBF" }}><UserOutlined />  Nome</span>
                        <span style={{ color: "#BFBFBF" }}><EnvironmentOutlined /> Localidade</span>
                        <span style={{ color: "#BFBFBF" }}><MailOutlined />  E-Mail</span>
                        <span style={{ color: "#BFBFBF" }}><spanhoneOutlined />  Telefone</span>
                    </div>
                </div>                
                <div style={{ width:"39vw", display: "flex", alignItems:"flex-start", justifyContent:"flex-end"}}>
                {!edit &&
                    <Button  
                        size="large" 
                        style={{ height: "3rem", width: "6rem", backgroundColor: "#6D0AD7", color: "white"}} 
                        onClick={()=>{setEdit((old) => !old)}}
                    >
                        Editar
                    </Button>
                }
                </div> 
            </div>
            {!edit ?
            <>
                <div className="squareE">
                    <span style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Privacidade e Segurança</span>
                    <div style={{ display: "flex"}}>
                        <div style={{fontSize: "14px",marginTop:"2rem" ,width:"29vw", minHeight:"13vh"}}>
                            <div style={{ width: "20rem",display: "flex", justifyContent:"space-between", alignItems:"center"}}>
                                <span style={{color: "#595959"}}>Autenticação de dois fatores (2FA)</span>          
                                < Switch style={{backgroundColor:"#6D0AD7"}} defaultChecked onChange={onChange} />
                            </div>
                            <span style={{marginTop:"2rem", color: "#595959"}}>Histórico de login</span>
                        </div>                
                        <div style={{ width:"49vw", display: "flex", alignItems:"flex-end", justifyContent:"flex-end"}}>
                            <Button  size="large" style={{ height: "3rem", width: "14rem", backgroundColor: "#6D0AD7", color: "white"}}>Encerrar sessões ativas</Button>
                        </div>
                    </div>
                </div>
                <div className="squareE">
                    <span style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Dados e Privacidade</span>
                    <div style={{ display: "flex"}}>
                        <div style={{marginTop:"2rem" ,width:"39vw", minHeight:"13vh"}}>
                            <span style={{fontSize: "14px", marginTop:"1rem", color: "#595959"}}>Dados pessoais armazenados</span>
                            <br/>
                            <span style={{fontSize: "14px",marginTop:"1rem", color: "#595959"}}>Politica de privacidade e informações</span>
                        </div>                
                        <div style={{fontSize: "14px", width:"39vw", display: "flex", alignItems:"flex-end", justifyContent:"flex-end", color: "#595959"}}>
                            <span className='buttonP'>Baixar Dados</span> <span className='buttonP' style={{marginLeft:"2rem"}}>Excluir Dados</span>
                        </div>
                    </div>
                </div>
                <div className="squareE">
                    <span style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Assinaturas e Pagamentos</span>
                    <div style={{ display: "flex"}}>
                        <div style={{marginTop:"2rem" ,width:"39vw", minHeight:"13vh"}}>
                            <span style={{fontSize: "14px", marginTop:"1rem", color: "#595959"}}>Gerenciamento de assinaturas</span>
                            <br/>
                            <span style={{fontSize: "14px",marginTop:"1rem", color: "#595959"}}>Histórico de transações feitas pela sua conta </span>
                        </div>                

                    </div>
                </div>
            </>
            :
            <>
            <div className="squareE">
                <span style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Informações da Conta</span>
                <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "30%",  display: "flex", flexDirection:"column", minHeight: "50vh", justifyContent: "space-evenly"}}>
                        <span className="squareSubTitle">Nome Completo</span>
                        <span className="squareSubTitle">Estado / Cidade</span>
                        <span className="squareSubTitle">Endereço</span>
                        <span className="squareSubTitle">Telefone (WhatsApp)</span>
                        <span className="squareSubTitle">Foto do perfil</span>
                    </div>
                    <div style={{ width: "100%", marginLeft: "20%", display: "flex", flexDirection:"column", minHeight: "50vh", justifyContent: "space-evenly" }}>
                        <input className="Input"  placeholder="Nome completo" />
                        <div style={{ display:"flex", justifyContent:"space-between"}}>
                            <select
                                className="Input" 
                                style={{
                                    width: "15rem",
                                }}>
                                <option value="null" selected>Estado</option>
                            </select>
                            
                            <select
                                className="Input" 
                                style={{
                                    width: "27rem", marginLeft: "1.3rem"
                                }}>
                                <option value="null" selected>Cidade</option>
                            </select>
                        </div>
                        <input className="Input"  placeholder="Endereço" />
                        <input className="Input"  placeholder="Telefone" />
                        {/* <Upload {...props}> */}
                        <Button  size="large" style={{ width: "100%", backgroundColor: "#6D0AD7", color: "white"}} icon={<UploadOutlined />}>Click para carregar</Button>
                        {/* </Upload> */}
                    </div>
                </div>
                <div style={{ width: "100%", display: "flex", flexDirection:"column" }}>
                        <div style={{ width: "100%", display: "flex", minHeight: "7rem", justifyContent:"left", alignItems:"center" }}>
                            
                            <span  style={{ width: "38.5%"}} className="squareSubTitle">E-mail</span>

                            <div style={!changeEmail?   
                                { marginLeft: "15%",display:"flex", width:"100%", justifyContent:"space-between", alignItems: "center"}
                            :   { marginLeft: "15%",display:"flex", width:"100%", justifyContent:"space-between", alignItems: "center", minHeight: "7rem", flexDirection:"column"}}>
                                <input style={!changeEmail? {width:"70%"} :  {width:"100%"}} className="Input"  placeholder="E-mail Atual" />
                                {!changeEmail ?
                                    <span style={{color: "#989898", cursor:"pointer", width:"20%", marginLeft:"1rem"}} 
                                    onClick={()=>{setchangeEmail((old) => !old)}}> Trocar E-mail</span>
                                :
                                    <input style={{width:"100%"}} className="Input"  placeholder="Novo E-mail" />
                                }
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", minHeight: "4rem", justifyContent:"left", alignItems:"center" }}>
                            
                            <span className="squareSubTitle" style={{ width: "38.5%"}}> Senha</span>

                            <div style={!changePass?
                                {marginLeft: "15%",display:"flex", width:"100%", justifyContent:"space-between", alignItems: "center"}
                            :   {marginLeft: "15%",display:"flex", width:"100%", justifyContent:"space-between", alignItems: "center", flexDirection:"column", minHeight: "11rem", marginTop:"3rem"}}>
                                    <Input.Password  style={!changePass? {width:"70%"} :  {width:"100%"}} className="Input" variant="filled" placeholder='Senha Atual' /> 
                                    {!changePass && <span  style={{color: "#989898", cursor:"pointer", width:"20%", marginLeft:"1rem"}} onClick={()=>{setchangePass((old) => !old)}}> Trocar Senha</span>}
                                {changePass &&
                                    <>
                                        <Input.Password  style={{width:"100%"}} className="Input" variant="filled" placeholder='Nova Senha' /> 
                                        <Input.Password  style={{width:"100%"}} className="Input" variant="filled" placeholder='Confirme a nova Senha' /> 
                                    </>
                                }
                            </div>
                        </div>
                </div>
                <div style={{ width: "30vw", marginLeft: "37%", marginTop: "4rem", display: "flex",  justifyContent: "space-evenly", alignSelf: 'flex-end' }}>
                    <Button  size="large" style={{ height: "3rem" ,width: "10rem", backgroundColor: "transparent", border: "none", color: "#989898"}}>Descartar</Button>
                    <Button  size="large" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white"}}>Salvar Alterações</Button>
                </div>
            </div>
            </>
            }
        </div>
    )
}