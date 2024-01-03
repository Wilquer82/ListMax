import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Progress } from "antd";

import  Chart  from "react-apexcharts";
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
                            <Progress
                                percent={60}
                                success={{
                                    percent: 30,
                                }}
                                type="circle"
                            />
                        </div>
                        <div className="squareStatistics" style={{ width: "37vw", height: "18rem" }}>
                            <Progress
                                percent={30}
                                success={{
                                    percent: 20,
                                }}
                                type="circle"
                                strokeWidth={[10]}
                            />
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