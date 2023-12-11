import LogoP from '../assets/logotipo-partners.png';
import './style.css';
import { Button, Switch } from 'antd';
import LogoE from '../assets/logoEmpresa.png';
import { PhoneOutlined, UserOutlined, EnvironmentOutlined, MailOutlined, CreditCardOutlined, UploadOutlined } from '@ant-design/icons';




export default function MyAcount() {

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className="ParceriaMain">
            <div className="PartnersTitle">
                <div>
                    <p className="Title">Minha Conta</p>
                    
                        <p><span style={{color:'#B8B2C6'}}>Home  / </span><span style={{color:'#1B0746'}}> Minha conta</span></p>
                    
                </div>

            </div>
            <div className="square">
                <div style={{width:"39vw"}}>
                    <div className="centerIMG">
                        <img style={{ position: 'absolute', zIndex: '1' }} src={LogoE} alt="LogoEmpresa" />
                        <p style={{ color: 'black', position: 'absolute', zIndex: '4' }}></p>
                    </div>
                    <div className="data">
                        <p style={{ color: "#BFBFBF" }}><UserOutlined />  Nome</p>
                        <p style={{ color: "#BFBFBF" }}><EnvironmentOutlined /> Localidade</p>
                        <p style={{ color: "#BFBFBF" }}><MailOutlined />  E-Mail</p>
                        <p style={{ color: "#BFBFBF" }}><PhoneOutlined />  Telefone</p>
                    </div>
                </div>                
                <div style={{ width:"39vw", display: "flex", alignItems:"flex-start", justifyContent:"flex-end"}}>
                    <Button  size="large" style={{ height: "3rem", width: "6rem", backgroundColor: "#6D0AD7", color: "white"}}>Editar</Button>
                </div> 
            </div>
            <div className="squareE">
                <p style={{ width: "100%", borderBottom: "1px solid #BFBFBF", height: "2.5rem" }} className="squareTitle">Privacidade e Segurança</p>
                <div style={{ display: "flex"}}>
                    <div style={{fontSize: "14px",marginTop:"2rem" ,width:"29vw", minHeight:"13vh"}}>
                        <div style={{ display: "flex", justifyContent:"space-between"}}>
                            < Switch style={{backgroundColor:"#6D0AD7"}} defaultChecked onChange={onChange} />
                            <p style={{color: "#595959"}}>Autenticação de dois fatores (2FA)</p>
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
        </div>
    )
}