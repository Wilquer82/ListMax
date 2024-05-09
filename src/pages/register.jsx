import { useEffect, useState } from "react";
import { Button, Input, Space } from 'antd';
import Google from '../assets/Google.png';
import Apple from '../assets/Apple.png';
import Face from '../assets/Facebook.png';
import Logo from '../assets/logo2.png';
import { Link } from "react-router-dom";
import BackGround from "../components/backGround";
import './style.css';


export default function Register() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [time, setTime] = useState(5 * 60);

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [message, setMessage] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setMessage('Por favor, insira um e-mail válido.');
        } else if (email !== confirmEmail) {
            setMessage('Os e-mails não correspondem.');
        } else {
            setMessage('E-mails validados com sucesso!');
        }
        if (password !== confirmPassword) {
            setMessage('As senhas não correspondem.');
        } else {
            setMessage('Senhas validadas com sucesso!');
        }
    };

    useEffect(() => {
        let timer = 0;
        clearInterval(timer);
        timer = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer); // limpa o intervalo quando o componente é desmontado
    }, []);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const handleCancel = () => {
        setIsModalOpen(false);
        setTime(5 * 60);
    }

    return (
        <>
            <BackGround />
            <div className="Main">
                <div className="textContainerR">
                    <Link to='/previa2024' style={{ textDecoration: "none" }}>
                        <img className="logoP" src={Logo} width="153px" height="40px" alt="Logo List-Max" />
                    </Link>
                    <div className="lineContainer">
                        <h1 className="GL">Antes de criar seu</h1>
                    </div>
                    <div className="lineContainer">
                        <h1 className="GL">evento, precisamos</h1>
                    </div>
                    <div className="lineContainer">
                        <h1 className="GL">criar seu cadastro.</h1>
                    </div>
                    <div className="lineContainer">
                        <h1 className="MainText">É rápido e fácil.</h1>
                    </div>

                    <div className="paragraphL">
                        <p className="fwhite">Se você possui uma conta basta</p>
                        <div className="flex"><p className="fwhite">fazer &nbsp;</p><Link to="/login"><p className="pink">login aqui!</p></Link></div>
                    </div>
                </div>
                <Space direction="vertical" className="loginInputsR">
                    <Space direction="horizontal" className="nameLast">
                        <Input size="large" type="text" placeholder="Nome" />
                        <Input size="large" type="text" placeholder="Sobrenome" />
                    </Space>
                    <Input size="large" className="inputNews" type="phone" placeholder="Celular" />
                    <Input size="large" className="inputNews" type="email" placeholder="E-mail" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <Input size="large" className="inputNews" type="email" placeholder="Confirme seu e-mail" value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)} />
                    <Input.Password size="large" className="inputNews" placeholder="Escolha um senha" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <Input.Password size="large" className="inputNews" placeholder="Confirme sua senha" value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                    <Button
                        size="large"
                        className="buttonNews"
                        onClick={() => {
                            // handleSubmit();
                            setIsModalOpen(true);
                            setTime(5 * 60);
                        }}
                    >
                        Registre-se
                    </Button>
                    <p className="textCenter" style={{ color: 'white' }}>ou continue com:</p>
                    <div className="treeImg">
                        <img src={Google} alt="With Google" />
                        <img src={Apple} alt="With Apple" />
                        <img src={Face} alt="With Facebook" />
                    </div>
                </Space>
                {isModalOpen &&
                    <div className="Modal">
                        <Button
                            className="close"
                            type="primary"
                            onClick={() => { setIsModalOpen(false); setTime(5 * 60); }}
                            shape="square"
                            size="small"
                        >X</Button>
                        <p className="MainText">Quase lá!</p>
                        <div className="modalParagraph">
                            <p>Precisamos que confirme</p>
                            <p>o código que enviamos para o seu e-mail</p>
                        </div>
                        <div className="containerCodigo">
                            <Input className="codigo" type="text" />
                            <Input className="codigo" type="text" />
                            <Input className="codigo" type="text" />
                            <Input className="codigo" type="text" />
                        </div>
                        <Space direction="horizontal" className="nameLast justify-content-md-center align-content-center" >
                            <p>Código válido por </p>
                            <p className="roxo">
                                {(minutes < 0 && seconds < 0) ? handleCancel : `${minutes.toString().padStart(2, '0')}:
                            ${seconds.toString().padStart(2, '0')}`}</p>
                        </Space>
                        <Button type="button" className="confirm">Confirmar e-mail e criar meu evento</Button>
                    </div>
                }
            </div>
        </>
    )
}