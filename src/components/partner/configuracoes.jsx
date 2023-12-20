import LogoP from '../../assets/logotipo-partners.png';
import '../style.css';
import { Button } from 'antd';
import LogoE from '../../assets/logoEmpresa.png';
import { PhoneOutlined, UserOutlined, EnvironmentOutlined, MailOutlined, CreditCardOutlined, UploadOutlined } from '@ant-design/icons';




export default function Config() {
    return (
        <div className="ParceriaMain">
            <div className="PartnersTitle">
                <div>
                    <p className="Title">Configurações</p>

                    <p><span style={{ color: '#B8B2C6' }}>ListMax Partners  / </span><span style={{ color: '#1B0746' }}>Configurações</span></p>

                </div>
                <div style={{ width: '32vw' }} />
                <div>
                    <img src={LogoP} alt="Logo ListMax" width="140px" />
                </div>
            </div>
            <div className="square">
                    <div style={{width:"39vw", display:"flex", alignItems: "center", justifyContent:"center"}}>
                    <div className="centerIMG">
                        <img src={LogoE} alt="LogoEmpresa" />
                        <p style={{ color: 'black', position: 'absolute', zIndex: '4' }}>LOGOTIPO DA EMPRESA</p>
                    </div>
                    <div className="data">
                        <p style={{ width: "50%" }} className="squareTitle">Nome da Empresa</p>
                        <p style={{ color: "#BFBFBF" }}><UserOutlined />  Nome Partner</p>
                        <p style={{ color: "#BFBFBF" }}><EnvironmentOutlined /> Localidade</p>
                        <p style={{ color: "#BFBFBF" }}><MailOutlined />  E-Mail</p>
                        <p style={{ color: "#BFBFBF" }}><PhoneOutlined />  Telefone</p>
                        <p style={{ color: "#BFBFBF" }}><CreditCardOutlined /> Conta bancária</p>
                    </div>
                </div>
            </div>
            <div className="squareE">
                <p style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Informações da Conta</p>
                <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "40%",  display: "flex", flexDirection:"column", height: "90vh", justifyContent: "space-evenly"}}>
                        <p className="squareSubTitle">Nome da Empresa</p>
                        <p className="squareSubTitle">Nome Partner</p>
                        <p className="squareSubTitle">Cargo</p>
                        <p className="squareSubTitle">CNPJ</p>
                        <p className="squareSubTitle">Estado / Cidade</p>
                        <p className="squareSubTitle">Endereço</p>
                        <p className="squareSubTitle">Telefone (WhatsApp)</p>
                        <p className="squareSubTitle">Foto do perfil</p>
                        <p className="squareSubTitle">E-mail</p>
                        <p className="squareSubTitle">Senha</p>
                    </div>
                    <div style={{ width: "40%", marginLeft: "20%", display: "flex", flexDirection:"column", height: "90vh", justifyContent: "space-evenly" }}>
                        <input className="Input"  placeholder="Nome da Empresa" />
                        <input className="Input"  placeholder="Nome que será usado por você" />
                        <input className="Input"  placeholder="Seu cargo" />
                        <input className="Input"  placeholder="CNPJ" />
                        <div>
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
                        <input className="Input"  placeholder="Endereço da empresa" />
                        <input className="Input"  placeholder="Telefone" />
                        {/* <Upload {...props}> */}
                        <Button  size="large" style={{ width: "28rem", backgroundColor: "#6D0AD7", color: "white"}} icon={<UploadOutlined />}>Click para carregar</Button>
                        {/* </Upload> */}
                        <input className="Input"  placeholder="E-mail" />
                        <input type="password" className="Input"  />


                    </div>
                </div>
                <div style={{ width: "50vw", marginLeft: "37%", marginTop: "2rem", display: "flex",  justifyContent: "space-evenly" }}>
                <Button  size="large" style={{ height: "3rem" ,width: "18rem", backgroundColor: "transparent", border: "none", color: "#989898"}}>Descartar</Button>

                <Button  size="large" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white"}}>Salvar Alterações</Button>
                </div>
            </div>
            <div className="squareE">
                <p style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Informações da Conta</p>
                <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "40%",  display: "flex", flexDirection:"column", height: "30vh", justifyContent: "space-evenly"}}>
                        <p className="squareSubTitle">Conta bancária</p>
                        
                    </div>
                    <div style={{ width: "60%", marginLeft: "20%", display: "flex", flexDirection:"column", height: "30vh", justifyContent: "space-evenly" }}>
                        <div style={{ width: "100%", marginTop: "1rem", display: "flex",  justifyContent: "space-between" }}>
                            <select
                                className="Input" 
                                style={{
                                    width: "15rem",
                                }}>
                                <option value="null" selected>Banco</option>
                            </select>
                            
                            <select
                                className="Input" 
                                style={{
                                    width: "15rem", marginLeft: "1.3rem"
                                }}>
                                <option value="null" selected>Tipo de Conta</option>
                            </select>
                            
                        </div>
                            <div style={{ width: "100%", marginTop: "1rem", display: "flex",  justifyContent: "space-between" }}>
                                <input className="Input" style={{ width: "8rem"}}  placeholder="Agência" />
                                <input className="Input" style={{ width: "12rem"}} placeholder="Conta" /> - 
                                <input className="Input" style={{ width: "6rem"}}  placeholder="Digito" />                        
                            </div>
                        </div>
                </div>
                <div style={{ width: "50vw", marginLeft: "37%", marginTop: "2rem", display: "flex",  justifyContent: "space-evenly" }}>
                <Button  size="large" style={{ height: "3rem" ,width: "18rem", backgroundColor: "transparent", border: "none", color: "#989898"}}>Descartar</Button>

                <Button  size="large" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white"}}>Salvar Alterações</Button>
                </div>
            </div>

        </div>
    )
}
