import "./App.css";
import Logo from './assets/logo2.png';
import NavBar from "./components/navbar";
import BackGround from "./components/backGround";
import TwoButtons from "./components/twoButtons";
import { Button, Input} from 'antd';




export default function App() {
  return (
    <div className="Main">
      <BackGround />
      {/* <NavBar /> */}
      {/* <div className="MainP column">
        <div className="textContainerA">
          <div className="lineContainerA">
            <h1 className="MainTextA">Seu</h1><span className="span"></span><h1 className="GA">evento</h1>
          </div>
          <div className="lineContainerA">
            <h1 className="GA">exclusivo</h1><span className="span"></span><h1 className="MainTextA">com a</h1>
          </div>
          <div className="lineContainerA">
            <h1 className="GA">plataforma premium</h1>
          </div>
          <div className="lineContainerA">
            <h1 className="MainTextA">que ele merece.</h1>
          </div>
        </div>
        <div className="paragraphA">
          <span className="fwhite">Convide, controle e conecte-se: a solução definitiva com QR Code e Reconhecimento Facial. A solução perfeita para administrar os seus convidados.</span>
        </div>
        <div className="textContainerA">
          <TwoButtons />
        </div>
      </div> */}
        <div className="textContainer">
            <img className="logoM" src={Logo} width="245px" height="64px" alt="Logo List-Max" />
            <div className="lineContainer">
              <h1 className="MainText">Estamos em uma</h1>
            </div>
            <div className="lineContainer">
              <h1 className="G">breve manutenção</h1>
            </div>
            <div className="lineContainer">
              <h1 className="MainText">Voltaremos</h1><span className="span"></span><h1 className="G">logo.</h1>
            </div>
          </div>
          <div className="twoInputsButton">
            <p className="subTitle text-white">Cadastre-se para </p>
            <p className="subTitle text-white">receber as novidades.</p>
            <Input size="large" className="inputNews" type="email" placeholder="E-mail"/>
            <Input size="large" className="inputNews" type="text" placeholder="Celular"/>
            <Button size="large"className="buttonNews">Cadastrar no Newsletter</Button>
          </div>
      </div>
  );
}
