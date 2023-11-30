/* eslint-disable react/prop-types */
import BackGround from "../components/backGround";
import './style.css';
import Logo from '../assets/logo2.png';
import { Button, Input } from 'antd';

function News({ whereCalled }) {
  return (
    <>
      <BackGround />
      {whereCalled == "NewsLetter" &&
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
      {whereCalled == "Manut" &&
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
      <div className="twoInputsButton">
        <p className="subTitle">Cadastre-se para </p>
        <p className="subTitle">receber as novidades.</p>
        <Input size="large" className="inputNews" type="email" placeholder="E-mail"/>
        <Input size="large" className="inputNews" type="text" placeholder="Celular"/>
        <Button size="large"className="buttonNews">Cadastrar no Newsletter</Button>
      </div>

    </>
  )
}


export default News;