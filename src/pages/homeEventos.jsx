import './homePartners.css';
import NavBarPartners from '../components/navbarPartner';
import { Button } from 'antd';



export default function HomeEvents() {


    return (
        <div className="MainEvents">
            <NavBarPartners Local={"Clients"} />
            <div className="ParceriaMain">
                <div className="PartnersTitle">
                    <div>
                        <p className="Title">Meus eventos</p>
                        <p><span style={{color:'#B8B2C6'}}>Home /</span><span style={{color:'#1B0746'}}>Eventos futuros</span></p>
                    </div>

                    <Button className="buttonNews add" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white"}}>
                        Criar novo evento
                    </Button> 
                </div>
                <div className="eventsBar"> 
                    <Button className="buttonNews add" style={{ marginLeft: "2rem", height:"2rem", width: "13rem", backgroundColor: "#1B0746", color: "white"}}>Eventos Futuros</Button>
                    <Button className="buttonNews add" style={{ border: "none", marginLeft: "2rem", height:"2rem", width: "13rem", backgroundColor: "transparent", color: "#1B0746"}}>Eventos Encerrados</Button>
                </div>
                <div style={{width:"100vw" , marginTop: "10rem"}}>
                <p style={{fontSize: "35px",fontWight: "500",lineHeight: "53px", textAlign: "center", color:"#6D0AD7"}}>Você não possui nenhum evento :(</p>
                <p style={{fontSize: "20px", fontWeight: 500, lineHeight: "30px", textAlign: "center", color:"#1B0746"}}>Que tal criar um evento? É rápido e fácil!</p>
            </div>
            </div>

        </div>
    )
}