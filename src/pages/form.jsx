/* eslint-disable react/prop-types */
import BackGround from "../components/backGround";
import './style.css';
import Logo from '../assets/logo2.png';
import { Button, Input } from 'antd';


export default function News({ whereCalled }) {

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100 overflow-hidden">
        <BackGround />
        <div className="col-lg-12 d-lg-flex">
          {whereCalled == "news" &&
            <div className="col-lg-6 text-center text-lg-start">
              <img className="logoM" src={Logo} width="245px" height="64px" alt="Logo List-Max" />
              <div className="lineContainer">
                <h1 className="MainText">Seu</h1><span className="span"></span><h1 className="G">evento</h1>
              </div>
              <div className="lineContainer">
                <h1 className="G">exclusivo</h1><span className="span"></span><h1 className="MainText">com a</h1>
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
          {whereCalled == "manut" &&
            <div className="col-lg-6 text-center text-lg-start">
              <img className="logoM" src={Logo} alt="Logo List-Max" />
              <div className="">
                <h1 className="MainText">Estamos em uma <br />
                  <span className="span">breve manutenção</span>. <br />
                  Voltaremos <span className="span">logo</span>!</h1>
              </div>
            </div>
          }
          <div className="col-lg-6 text-center pt-4">
            <p className="subTitle text-white">Cadastre-se para <br /> receber as novidades.</p>
            <div className="d-flex justify-content-center align-items-center">
              <form className="w400 px-lg-0 px-4">
                <Input size="large" className="inputNews mb-3" type="email" placeholder="E-mail" />
                <Input size="large" className="inputNews mb-3" type="text" placeholder="Celular" />
                <Button size="large" className="buttonNews w-100 font-16">Cadastrar no Newsletter</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

