/* eslint-disable react/prop-types */
import BackGround from "../components/backGround";
import './style.css';
import Logo from '../assets/logo2.png';
import { Button, Input, Space } from 'antd';
import Google from '../assets/Google.png';
import Apple from '../assets/Apple.png';
import Face from '../assets/Facebook.png';
import { Link } from "react-router-dom";

function News({ whereCalled }) {


  return (
    <>
      <BackGround />
      { whereCalled == "news" &&
      <div className="textContainer">
        <img className="logoM" src={Logo} width="245px" height="64px" alt="Logo List-Max" />
        <div className="lineContainer">
          <h1 className="MainText">Seu</h1><span></span><h1 className="G">evento</h1>
        </div>
        <div className="lineContainer">
          <h1 className="G">exclusivo</h1><span></span><h1 className="MainText">com a</h1>
        </div>
        <div className="lineContainer">
          <h1 className="G">plataforma premium</h1>
        </div>
        <div className="lineContainer">
          <h1 className="MainText">que ele merece.</h1>
        </div>
        <div className="paragraph">
          <p>Em breve uma nova forma de </p>
          <p> gerir seu evento.</p>
        </div>
      </div>
      }
      { whereCalled == "manut" &&
      <div className="textContainer">
        <img className="logoM" src={Logo} width="245px" height="64px" alt="Logo List-Max" />
        <div className="lineContainer">
          <h1 className="MainText">Estamos em uma</h1>
        </div>
        <div className="lineContainer">
          <h1 className="G">breve manutenção</h1>
        </div>
        <div className="lineContainer">
          <h1 className="MainText">Voltaremos</h1><span></span><h1 className="G">logo.</h1>
        </div>
      </div>
      }
      { whereCalled != "login" && whereCalled != "register" &&  
      <div className="twoInputsButton">
        <p className="subTitle">Cadastre-se para </p>
        <p className="subTitle">receber as novidades.</p>
        <Input size="large" className="inputNews" type="email" placeholder="E-mail"/>
        <Input size="large" className="inputNews" type="text" placeholder="Celular"/>
        <Button size="large"className="buttonNews">Cadastrar no Newsletter</Button>
      </div>
      }
      { whereCalled == "login" &&
      <div>
          <div className="textContainerL">
            <img className="logoP" src={Logo} width="153px" height="40px" alt="Logo List-Max" />
            <div className="lineContainer">
              <h1 className="GL">Bem-vindo de volta!</h1>
            </div>
            <div className="lineContainer">
              <h1 className="MainText">Acesse sua conta para</h1>
            </div>
            <div className="lineContainer">
              <h1 className="MainText">organizar seu evento!</h1>
            </div>
          
            <div className="paragraphL">
              <p>Se você não possui uma conta </p>
              <div className="flex"><p>cadastrada, você pode &nbsp;</p>
              <Link to="/register"><p className="roxo"> se cadastrar aqui!</p></Link></div>
            </div>
        </div>
      <Space direction="vertical" className="loginInputs">
        <Input size="large" className="inputNews" type="email" placeholder="E-mail"/>
        <Input.Password size="large" className="inputNews" placeholder="Senha" />
        <p className="textRight">Esqueceu a senha?</p>
        <Button size="large"className="buttonNews">Login</Button>
        <p className="textCenter">ou continue com:</p>
        <div className="treeImg">
          <img src={Google} alt="With Google"/>
          <img src={Apple} alt="With Apple"/>
          <img src={Face} alt="With Facebook"/>
        </div>
      </Space>
      </div>
      }
      {  whereCalled == "register" &&
      <div>
      <div className="textContainerR">
        <img className="logoP" src={Logo} width="153px" height="40px" alt="Logo List-Max" />
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
          <p>Se você possui uma conta basta</p>
          <div className="flex"><p>fazer &nbsp;</p><Link to="/login"><p className="roxo">login aqui!</p></Link></div>
        </div>
      </div>
      <Space direction="vertical" className="loginInputsR">
        <Space direction="horizontal" className="nameLast">
          <Input size="large" type="text" placeholder="Nome"/>
          <Input size="large" type="text" placeholder="Sobrenome"/>
        </Space>
        <Input size="large" className="inputNews" type="phone" placeholder="Celular"/>
        <Input size="large" className="inputNews" type="email" placeholder="E-mail"/>
        <Input.Password size="large" className="inputNews" placeholder="Escolha um senha" />
        <Input.Password size="large" className="inputNews" placeholder="Confirme sua senha" />
        <Button size="large"className="buttonNews">Registre-se</Button>
        <p className="textCenter">ou continue com:</p>
        <div className="treeImg">
          <img src={Google} alt="With Google"/>
          <img src={Apple} alt="With Apple"/>
          <img src={Face} alt="With Facebook"/>
        </div>
      </Space>
      </div>      
      }
    </>
  )
}


export default News;