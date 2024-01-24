import { ExclamationCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Progress } from "antd";

import Chart from "react-apexcharts";
import { useState } from "react";

export default function PgEstatisticas() {

    const [options, setOptions] = useState({
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        },
    });

    const [series, setSeries] = useState([
        {
            name: 'Convidados',
            data: [30, 40, 25, 50, 49, 21, 70, 51],
        },
    ]);

    return (
        <>
            <div className="ParceriaMain" style={{ backgroundColor: "#e8e6ed", width: "100vw", minHeight: "100vh" }}>
                <div className="PartnersTitle">
                    <div className="containerV">
                        <span className="Title">Estatísticas</span>
                        <span><span style={{ color: "#B8B2C6" }}>Home  / </span><span style={{ color: "#1B0746" }}>  Meus Eventos / Estatíticas</span></span>
                    </div>
                    <div style={{ width: "32vw" }} />
                    <div>
                    </div>
                </div>
                <div className="containerH graySquare align-items-center justify-content-lg-start" style={{ width: "79vw", height: "6rem" }}>
                    <ExclamationCircleOutlined className="roxoF f16 f600" style={{ margin: "0 2rem", fontSize: "25    px" }} />
                    <span>Estatísticas mais completas estarão disponíveis após o evento.</span>
                </div>
                <div className="containerH" style={{ marginTop: "2rem" }}>
                    <div className="containerV">
                        <div className="squareStatistics" style={{ width: "37vw", height: "18rem", marginBottom: "2rem", marginRight: "2rem" }}>
                            <span>Convidados</span>
                            <div style={{margin: '1rem',display:'flex', alignItems:'center', justifyContent:'space-between', width: '18vw', height:'11rem'}}>
                                <Progress
                                    percent={50}
                                    success={{
                                        percent: 30,
                                    }}
                                    type="dashboard"
                                    // strokeColor="#ff14ff"
                                    strokeWidth={[10]}
                                    format={() => 
                                        <div style={{display:'flex', flexDirection:'column'}}>
                                        <span style={{fontSize:'10px'}}>Convidados </span>
                                        <span style={{fontSize:'14px'}}>000</span>
                                        </div>
                                    }
                                    size={[180, 20]}
                                />
                                <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'7rem', width:'19vw', marginLeft:'1rem'}}>
                                    <span className="flex justify-content-between"><span>-&nbsp;</span>Confirmados      <span>00</span></span>
                                    <span className="flex justify-content-between"><span>-&nbsp;</span>Recusados        <span>00</span></span>
                                    <span className="flex justify-content-between"><span>-&nbsp;</span>Não visualizaram&nbsp;&nbsp;<span>00</span></span>
                                </div>
                            </div>
                            <span style={{marginLeft:'70%'}}><ShoppingCartOutlined /> + Convidados</span>
                        </div>

                        <div className="squareStatistics" style={{ width: "37vw", height: "18rem" }}>
                        <span>Convidados</span>
                            <div style={{marginLeft: '4rem',display:'flex', alignItems:'center', justifyContent:'space-between', width: '70%', height:'13rem'}}>
                            <Progress
                                percent={30}
                                success={{
                                    percent: 20,
                                }}
                                type="dashboard"
                                strokeColor="#ff14ff"
                                strokeWidth={[10]}
                                format={() => 
                                    <span style={{fontSize:'10px'}}>Mensagens 000</span>
                                }
                            />
                            <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'4rem', width:'60%'}}>
                                    <span className="flex justify-content-between"><span>-&nbsp;</span>Usadas      <span>00</span></span>
                                    <span className="flex justify-content-between"><span>-&nbsp;</span>Restantes        <span>00</span></span>
                                </div>
                            </div>
                            <span style={{marginLeft:'70%'}}><ShoppingCartOutlined /> + Mensagens</span>
                        </div>
                    </div>
                    <div className="squareStatistics containerV align-items-center" style={{ width: "40vw", height: "38rem" }}>
                        <Chart
                            options={options}
                            series={series}
                            type="area"
                            width={'450'}
                            height={'450'}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}