import "./App.css";
import Logo from './assets/logo2.png';
import NavBar from "./components/navbar";
import BackGround from "./components/backGround";
import TwoButtons from "./components/twoButtons";
import { Button, Input} from 'antd';


export default function App( { whereCalled } ) {
  return (
    <> 
    { whereCalled == "previa" ?
    <>
      <BackGround />
      <NavBar />
      <div className="MainP column">
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
      </div> 
      </>:
    <div className="container d-flex justify-content-center align-items-center vh-100 overflow-hidden">
      <BackGround />
      <div className="col-lg-12 d-lg-flex">
      <div className="col-lg-6 text-center text-lg-start">
        <img className="logoM" src={Logo} alt="Logo List-Max" />
        <div className="">
          <h1 className="MainText">Estamos em uma <br/> 
          <span className="span">breve manutenção</span>. <br/>
          Voltaremos <span className="span">logo</span>!</h1>
        </div>
      </div>
      <div className="col-lg-6 text-center">
        <p className="subTitle text-white">Cadastre-se para <br/> receber as novidades.</p>
        <div className="d-flex justify-content-center align-items-center">
        <form className="w400 px-lg-0 px-4">
        <Input size="large" className="inputNews mb-3" type="email" placeholder="E-mail"/>
        <Input size="large" className="inputNews mb-3" type="text" placeholder="Celular"/>
        <Button size="large"className="buttonNews w-100 font-16">Cadastrar no Newsletter</Button>
        </form>
        </div>
      </div>
    </div>
    </div>}
    </>
  );
}
