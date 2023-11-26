import "./App.css";
import NavBar from "./components/navbar";
import BackGround from "./components/backGround";

function App() {
  return (
    <>
      <BackGround />
      <NavBar />
      <div className="textContainer">
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
      </div>
      <div className="paragraph">
        <p>Convide, controle e conecte-se: a solução definitiva com QR Code e Reconhecimento Facial. A solução perfeita para administrar os seus convidados.</p>
      </div>
    </>
  );
}

export default App;
