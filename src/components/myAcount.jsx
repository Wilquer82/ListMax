import './style.css';
import { Button, Switch, Input } from 'antd';
import LogoE from '../assets/logoEmpresa.png';
import { 
    PhoneOutlined, 
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
                <div>
                    <span className="Title">Minha Conta</span>
                    <p><span style={{color:'#B8B2C6'}}>Home  / </span><span style={{color:'#1B0746'}}> Minha conta</span></p>
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
                    <p style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Privacidade e Segurança</p>
                    <div style={{ display: "flex"}}>
                        <div style={{fontSize: "14px",marginTop:"2rem" ,width:"29vw", minHeight:"13vh"}}>
                            <div style={{ display: "flex", justifyContent:"space-around"}}>
                                < Switch style={{backgroundColor:"#6D0AD7"}} defaultChecked onChange={onChange} />
                                <span style={{color: "#595959"}}>Autenticação de dois fatores (2FA)</span>
                            </div>
                            <p style={{marginTop:"2rem", color: "#595959"}}>Histórico de login</p>
                        </div>                
                        <div style={{ width:"49vw", display: "flex", alignItems:"flex-end", justifyContent:"flex-end"}}>
                            <Button  size="large" style={{ height: "3rem", width: "14rem", backgroundColor: "#6D0AD7", color: "white"}}>Encerrar sessões ativas</Button>
                        </div>
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
                    <p style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Assinaturas e Pagamentos</p>
                    <div style={{ display: "flex"}}>
                        <div style={{marginTop:"2rem" ,width:"39vw", minHeight:"13vh"}}>
                            <p style={{fontSize: "14px", marginTop:"1rem", color: "#595959"}}>Gerenciamento de assinaturas</p>
                            <p style={{fontSize: "14px",marginTop:"1rem", color: "#595959"}}>Histórico de transações feitas pela sua conta </p>
                        </div>                

                    </div>
                </div>
            </>
            :
            <>
            <div className="squareE">
                <p style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Informações da Conta</p>
                <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "30%",  display: "flex", flexDirection:"column", minHeight: "50vh", justifyContent: "space-evenly"}}>
                        <p className="squareSubTitle">Nome Completo</p>
                        <p className="squareSubTitle">Estado / Cidade</p>
                        <p className="squareSubTitle">Endereço</p>
                        <p className="squareSubTitle">Telefone (WhatsApp)</p>
                        <p className="squareSubTitle">Foto do perfil</p>
                    </div>
                    <div style={{ width: "100%", marginLeft: "20%", display: "flex", flexDirection:"column", minHeight: "50vh", justifyContent: "space-evenly" }}>
                        <input className="Input"  placeholder="Nome completo" />
                        <div style={{ display:"flex", justifyContent:"space-between"}}>
                            <select
                                className="Input" 
                                style={{
                                    width: "8rem",
                                }}>
                                <option value="null" selected>Estado</option>
                            </select>
                            
                            <select
                                className="Input" 
                                style={{
                                    width: "18.5rem", marginLeft: "1.3rem"
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
                            
                            <p  style={{ width: "38.5%"}} className="squareSubTitle">E-mail</p>

                            <div style={!changeEmail?   
                                { marginLeft: "15%",display:"flex", width:"100%", justifyContent:"space-between", alignItems: "center"}
                            :   { marginLeft: "15%",display:"flex", width:"100%", justifyContent:"space-between", alignItems: "center", minHeight: "7rem", flexDirection:"column"}}>
                                <input style={!changeEmail? {width:"70%"} :  {width:"100%"}} className="Input"  placeholder="E-mail Atual" />
                                {!changeEmail ?
                                    <p style={{color: "#989898", cursor:"pointer", width:"20%", marginLeft:"1rem"}} 
                                    onClick={()=>{setchangeEmail((old) => !old)}}> Trocar E-mail</p>
                                :
                                    <input style={{width:"100%"}} className="Input"  placeholder="Novo E-mail" />
                                }
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", minHeight: "4rem", justifyContent:"left", alignItems:"center" }}>
                            
                            <p className="squareSubTitle" style={{ width: "38.5%"}}> Senha</p>

                            <div style={!changePass?
                                {marginLeft: "15%",display:"flex", width:"100%", justifyContent:"space-between", alignItems: "center"}
                            :   {marginLeft: "15%",display:"flex", width:"100%", justifyContent:"space-between", alignItems: "center", flexDirection:"column", minHeight: "11rem", marginTop:"3rem"}}>
                                    <Input.Password  style={!changePass? {width:"70%"} :  {width:"100%"}} className="Input" placeholder='Senha Atual' /> 
                                    {!changePass && <p  style={{color: "#989898", cursor:"pointer", width:"20%", marginLeft:"1rem"}} onClick={()=>{setchangePass((old) => !old)}}> Trocar Senha</p>}
                                {changePass &&
                                    <>
                                        <Input.Password  style={{width:"100%"}} className="Input" placeholder='Nova Senha' /> 
                                        <Input.Password  style={{width:"100%"}} className="Input" placeholder='Confirme a nova Senha' /> 
                                    </>
                                }
                            </div>
                        </div>
                </div>
                <div style={{ width: "50vw", marginLeft: "37%", marginTop: "4rem", display: "flex",  justifyContent: "space-evenly" }}>
                <Button  size="large" style={{ height: "3rem" ,width: "18rem", backgroundColor: "transparent", border: "none", color: "#989898"}}>Descartar</Button>
                <Button  size="large" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white"}}>Salvar Alterações</Button>
                </div>
            </div>
            </>
            }
        </div>
    )
}