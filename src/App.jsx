import "./App.css";
import NavBar from "./components/navbar";
import BackGround from "./components/backGround";

function App() {
  return (
    <>
      <BackGround />
      <NavBar />
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
        <p>Convide, controle e conecte-se: a solução definitiva com QR Code e Reconhecimento Facial. A solução perfeita para administrar os seus convidados.</p>
      </div>
    </>
  );
}

export default App;
