
import { Button, Progress } from 'antd'
import { LeftOutlined, RightOutlined, CloseOutlined, EditOutlined, CalendarOutlined, ClockCircleOutlined, TeamOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { useState } from 'react';


export default function PgConvite() {

    // const CloseOutClick = (e) => {
    //     if (e.target.id === "Fundo") {
    //         setModal(false); 
    //     }
    // }


    // const twoColors = {
    //     '0%': '#FF14FF',
    //     '100%': '#6D0AD7',
    // };

    const [inviteData, setInviteData] = useState(false);
    // const [passOne, setPassOne] = useState(false);
    // const [passTwo, setPassTwo] = useState(false);
    // const [passThree, setPassThree] = useState(false);
    // const [passFour, setPassFour] = useState(false);



    return (
        <div className="ParceriaMain" style={{backgroundColor:"#e8e6ed",  width: "100vw", minHeight:"100vh"}}>
            <div className="PartnersTitle">
                <div>
                    <p className="Title">Convites</p>
                    
                        <p><span style={{color:'#B8B2C6'}}>Home  / </span><span style={{color:'#1B0746'}}> Meus Eventos / Convites</span></p>
                    
                </div>
                <div style={{width:'32vw'}}/>

                
                <div>
                    <Button className="buttonNews add" style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white" }}
                        onClick={() =>  setInviteData((old) => !old)}
                    >
                        Criar novo convite
                    </Button>
                </div>
            </div>
            {!inviteData &&
                <div style={{marginTop: "1rem", border: "1px solid #B8B2C6", width:"79vw", boxShadow: "0px 8px 20px 0px #B8B2C680", background: "#fefefe", height:"50vh", borderRadius:"1rem", display:"flex", flexDirection: "column", alignItems:"center", justifyContent:"center"}}>
                    <p style={{fontSize: "35px",fontWight: "500",lineHeight: "53px", textAlign: "center", color:"#6D0AD7"}}>Você não possui nenhum modelo de convite :(</p>
                    <p style={{fontSize: "20px", fontWeight: "500", lineHeight: "30px", textAlign: "center", color:"#1B0746"}}>Que tal criar um convite? É rápido e fácil!</p>
                </div>
            }
            {inviteData &&
                <div>
                    <div></div>
                    <div></div>
                </div>

            }
        </div>
    )
}