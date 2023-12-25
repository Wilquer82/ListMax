import { useState } from "react";
import { Button, Input, Space } from 'antd';
import Google from '../assets/Google.png';
import Apple from '../assets/Apple.png';
import Face from '../assets/Facebook.png';
import Logo from '../assets/logo2.png';
import { Link } from "react-router-dom";
import BackGround from "../components/backGround";
import './style.css';



export default function Login (){

    const Login =  () => {
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("password").value);
    }

    const [isModalBlocked, setIsModalBlocked] = useState(false);

    return (
        <>
        <BackGround />
        <div className="Main">
            <div className="textContainerL">
                <Link to='/'>
                    <img className="logoP" src={Logo} width="153px" height="40px" alt="Logo List-Max" />
                </Link>
                <div className="lineContainer">
                    <h1 className="GL">Bem-vindo de volta!</h1>
                </div>
                <div className="lineContainer">
                    <h1 className="MainText">Acesse sua conta para</h1>
                </div>
                <div className="lineContainer">
                    <h1 className="MainText">organizar seu evento!</h1>
                </div>
                <div className="paragraphL text-white">
                    <p>Se você não possui uma conta </p>
                    <div className="flex"><p>cadastrada, você pode &nbsp;</p>
                    <Link to="/register" whereCalled="client"><p className="pink"> se cadastrar aqui!</p></Link></div>
                </div>
            </div>
            <Space direction="vertical" className="loginInputs text-white">
                    <Input id="email" size="large" className="inputNews" type="email" placeholder="E-mail"/>
                    <Input.Password id="password" size="large" className="inputNews" placeholder="Senha" />
                    
                    <p className="textRight">Esqueceu a senha?</p>
                        <Link to="/HomeUsers">
                            <Button size="large"className="buttonNews" onClick={()=>{Login()}}>Login</Button>
                        </Link>
                    <p className="textCenter">ou continue com:</p>

                    <div className="treeImg">
                        <img src={Google} alt="With Google"/>
                        <img src={Apple} alt="With Apple"/>
                        <img src={Face} alt="With Facebook"/>
                    </div>
            </Space>
            {isModalBlocked &&
                <div className="ModalBlocked">
                    <Button 
                        className="close" 
                        type="primary" 
                        onClick={() => setIsModalBlocked(false)}
                        shape="square" 
                        size="small"
                        >X</Button>
                    <div className="blocked">
                    <p>Você está bloqueado(a) da plataforma</p>
                    <p>por infringir os nossos Termos de Uso.</p>
                    <p>Para mais informações, entre em contato.</p>
                    </div>
                    <Space direction="horizontal">
                    <Button size="large"className="buttonModalLogin" onClick={()=>setIsModalBlocked(false)}>Ler Termos de Uso</Button>
                    <Button size="large"className="buttonModalLogin" onClick={()=>setIsModalBlocked(false)}>Ver Página de Contato</Button>
                    </Space>
                </div>
            }
        </div>
        </>
    )
}