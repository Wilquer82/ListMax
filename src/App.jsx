import "./App.css";
import { useState } from "react";
import Logo from './assets/Logo.png';
import NavBar from "./components/navbar";
import BackGround from "./components/backGround";
import TwoButtons from "./components/twoButtons";
import { Input } from 'antd';
import Status from "./assets/StatusdeConvidados.png";


export default function App( ) {
  const [email, setEmail] = useState('');
  const { TextArea } = Input;


  const planos=[
    "Controle Avançado de Convidados",
    "Painel de Controle Intuitivo", 
    "Convites Elegantes e Rápidos",
    "Páginas Personalizáveis",
    "Estatísticas Pós Evento"
  ]

  return (
    <>
      <BackGround />
      <NavBar />
      <div className="d-flex flex-column">
        <div className="MainP column">
          <div className="textContainerA">
            <div className="lineContainerA">
              <h1 className="MainTextA">Seu</h1><span className="span">&nbsp;&nbsp;</span><h1 className="GA">evento</h1>
            </div>
            <div className="lineContainerA">
              <h1 className="GA">exclusivo</h1><span className="span">&nbsp;&nbsp;</span><h1 className="MainTextA">com a</h1>
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
        <div className="d-flex flex-column" style={{backgroundColor:"#6D0AD7", height:"33rem", padding: "6rem 3rem"}}>
          <img src={Status} alt="Img Celular" className="status"/>
          <span className="f3rem f500 fwhite">Como funciona a <br/><span className="fpink f700">ListMax</span>?</span>
          <span className="fwhite mt-5" style={{width:"38rem", textAlign:"justify"}}>Seja bem-vindo à ListMax, a plataforma revolucionária 
            que vai transformar a maneira como você lida com a gestão 
            de convidados para seus eventos. Com um conjunto abrangente 
            de recursos projetados para simplificar cada etapa do processo, 
            a ListMax é a sua solução completa para garantir que cada evento 
            seja perfeito, desde o planejamento até o pós-evento.</span>
        </div>
        <div className="d-flex flex-column align-items-center" style={{backgroundColor:"#310561", height:"53rem"}}>
          <span className="flemon f700 f3rem mt-5">Nossos melhores recursos</span>
          <div className="d-flex justify-content-evenly w-100 mt-5">
            <div className="d-flex flex-column align-items-center ">
              <div className="gradient">Controle Avançado de Convidados</div>
              <div className="lineContainerC fwhite">
                  <p>Diga adeus às listas de papel desorganizadas. Com a ListMax, você pode simplesmente fazer o upload de uma planilha Excel e nossa plataforma fará a integração perfeita da lista de convidados.</p>
              </div>
              <div className="gradient">Confirmações de Presença Sem Esforço</div>
              <div className="lineContainerC fwhite">
                  <p>Mantenha-se atualizado sobre a presença dos convidados com nossa função de confirmação de presença. Isso permite que você ajuste os detalhes do evento de acordo.</p>
              </div>
              <div className="gradient">Painel de Controle Intuitivo</div>
              <div className="lineContainerC fwhite">
                  <p>Nossa interface de usuário intuitiva foi projetada para ser acessível a todos, independentemente da experiência técnica, permitindo que você gerencie seu evento sem complicações.</p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className="gradient">Acesso com Look You ou QR Code</div>
              <div className="lineContainerC fwhite">
                  <p>Diga adeus às listas de papel desorganizadas. Com a ListMax, você pode simplesmente fazer o upload de uma planilha Excel e nossa plataforma fará a integração perfeita da lista de convidados.</p>
              </div>
              <div className="gradient">Convites Elegantes e Rápidos</div>
              <div className="lineContainerC fwhite">
                  <p>Envie convites personalizados diretamente pela plataforma e acompanhe as respostas em tempo real, simplificando o processo de RSVP.</p>
              </div>
              <div className="gradient">Páginas Personalizáveis</div>
              <div className="lineContainerC fwhite">
                  <p>Crie páginas de eventos personalizadas que capturam a essência do seu evento, compartilhando informações vitais com os convidados.</p>
              </div>
            </div>
        </div>
        </div>
        <div className="d-flex align-items-center flex-column" style={{backgroundColor:"#6D0AD7", height:"50rem"}}>
          <span className="fwhite f3rem f700 mt-5">Preços</span>
          <div className="d-flex w-100 justify-content-evenly mt-5">
            <div className="d-flex flex-column align-items-start justify-content-between priceSquare mt-4">
              <span className="f24 f700 mb-3">Gratuito</span>
              <span><i className="bi bi-check"/>&nbsp; Até 50 convidados</span>
              {planos.map((textos, index) => (
                  <span key={index}><i className="bi bi-check"/>&nbsp; {textos}</span>
              ))}
              <span style={{color:"grey"}}><i className="bi bi-x"/>&nbsp; Serviços avançados</span>
              <span className=" align-self-center">R$<span className="f700 f24">0</span>/grátis!</span>
              <button className=" f700 align-self-center buttonCriar"  >Criar evento</button>
            </div>
            <div className="d-flex flex-column align-items-start justify-content-between priceSquareB">
              <span className="f24 f700 mb-3">Premium</span>
              <span style={{textAlign:"left"}}><i className="bi bi-check"/>&nbsp; Até 500 convidados</span>
              {planos.map((textos, index) => (
                    <span style={{textAlign:"left"}}key={index}><i className="bi bi-check"/>&nbsp; {textos}</span>
                ))}
              <span><i className="bi bi-check"/>&nbsp; Serviços avançados</span>
              <span className=" align-self-center">R$<span className="f700 f24">6,90</span>/por convidado</span>
              <button style={{ backgroundColor: "#A1F71A", color: "black"}} className=" f700 align-self-center buttonCriar "  >Criar evento</button>
            </div>
            <div className="d-flex flex-column align-items-start justify-content-between priceSquare mt-4">
            <span className="f24 f700 mb-3">Profissional</span>
            <span><i className="bi bi-check"/>&nbsp; Para empresas ou eventos grandes</span>
              {planos.map((textos, index) => (
                    <span key={index}><i className="bi bi-check"/>&nbsp; {textos}</span>
                ))}
              <span><i className="bi bi-check"/>&nbsp; Serviços avançados</span>
              <button className=" mt-3 f700 align-self-center buttonCriar"  >Criar evento</button>
            </div>  
          </div>
          <span className="fwhite w-50 text-center mt-5">Conte ainda com serviços adicionais como o <span className="flemon">Look You (beta) </span>e envios de mensagens extras por WhatsApp para seus convidados. </span>
        </div>
        <div className="background-image d-flex flex-column align-items-center justify-content-evenly w-100" style={{height:"35rem"}}>
          <div className="d-flex align-items-center justify-content-evenly w-100">
            <div className=" d-flex flex-column w-25 justify-content-between">
              <span className="f700 f3rem flemon">Fale<span className="fwhite f400">&nbsp;conosco</span></span>
              <span className="fwhite">Tem dúvidas, sugestões ou comentários? Nos envie uma mensagem no formulário a seguir e em breve lhe retornaremos. </span>
            </div>
            <div className=" d-flex flex-column w-25 justify-content-evenly mt-5">
              <div className=" d-flex w-100 mb-3">
                  <Input size="large" type="text" placeholder="Nome" />
                  <Input className=" ms-3" size="large" type="text" placeholder="Sobrenome" />
              </div>
              <Input size="large" className="mb-3" type="phone" placeholder="Celular" />
              <Input size="large" className="mb-3" type="email" placeholder="Seu E-mail" value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              <TextArea className="inputNews w-100 mb-5" rows={4} placeholder="Sua mensagem" maxLength={6} />
              <button style={{ backgroundColor: "#A1F71A", color: "black"}} className=" f700 align-self-center buttonCriar w-100"  >Enviar Mensagem</button>
            </div>
          </div>
          <button style={{ backgroundColor: "#A1F71A", color: "black", alignSelf: "self-end"}} className=" f700 buttonCriar"><i className="bi bi-whatsapp"/>&nbsp;Fale conosco Agora</button>
        </div>
        <div className="d-flex w-100 row align-items-baseline justify-content-center" style={{background: "#26044B", height:"20rem"}}>
          <div className="d-flex flex-column  justify-content-evenly col-6 w-25 mt-5">
            <img src={Logo} alt="Logo ListMax" width="153.398px" height="40px" className="mt-2"/>
            <div className="d-flex mt-4 ">
              <i style={{fontSize:"1.5rem", color:"white", margin:"0 .5rem"}}className="bi bi-facebook"/>
              <i style={{fontSize:"1.5rem", color:"white", margin:"0 .5rem"}}className="bi bi-instagram"/>
              <i style={{fontSize:"1.5rem", color:"white", margin:"0 .5rem"}}className="bi bi-youtube"/>
              <i style={{fontSize:"1.5rem", color:"white", margin:"0 .5rem"}}className="bi bi-whatsapp"/>
            </div>
            <span className="fwhite mt-4 w-50"><i className="bi bi-c-circle"/>&nbsp;2024 ListMax LTDA Todos os direitos reservados.</span>
          </div>
          <div className="d-flex flex-column col-2 fwhite mt-5" >
            <span className="flemon f600">SOBRE</span>
            <span>Como Funciona</span>
            <span>Recursos</span>
            <span>Preços</span>
            <span>Parceiros</span>
            <span>FAQ</span> 
          </div>
          <div className="d-flex flex-column col-2 fwhite mt-5">
            <span className="flemon f600">BLOG</span>
            <span>Eventos</span>
            <span>Buffet</span>
            <span>Dicas</span>
            <span>Portaria</span>
          </div>
          <div className="d-flex flex-column col-2 fwhite mt-5">
            <span className="flemon f600">NOSSAS REDES</span>
            <span>E-mail</span>
            <span>WhatsApp</span>
            <span>Instagranm</span>
            <span>Facebook</span>
            <span>YouTube</span> 
          </div>
        </div>
      </div>
    </>
  );
}
