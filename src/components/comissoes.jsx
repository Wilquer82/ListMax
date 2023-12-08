import LogoP from '../assets/logotipo-partners.png';
import './style.css';
import { Button } from 'antd';


export default function Comissoes() {
    return (
        <div className="ParceriaMain">
            <div className="PartnersTitle">
                <div>
                    <p className="Title">Comissões</p>

                    <p><span style={{ color: '#B8B2C6' }}>ListMax Partners  / </span><span style={{ color: '#1B0746' }}>Comissões</span></p>

                </div>
                <div style={{ width: '32vw' }} />
                <div>
                    <img src={LogoP} alt="Logo ListMax" width="140px" />
                </div>
            </div>
            <div className="squareU">
                    <div className="oneLine">
                        <p style={{ width: "10%" }} className="squareTitle">Comissões</p>
                        <p style={{ width: "80%" }}></p>
                        <p style={{ width: "10%" }} className="squareTitle">2023</p>
                    </div>
                    <table className="table">
                        <tr className="squareSubTitle">
                            <th>Data</th>
                            <th>ID</th>
                            <th style={{width:'30rem'}}>Anfitrião</th>
                            <th>Comissão</th>
                            <th><p>Status de</p><p>pagamento</p></th>
                            <th>Recibo</th>
                        </tr>
                        <tr >
                            <td>01/01/2023</td>
                            <td>123</td>
                            <td style={{textAlign:'left'}}>João</td>
                            <td>10%</td>
                            <td><Button className="pago">Pago</Button></td>
                            <td><Button className="down">Download</Button></td>
                        </tr>
                        <tr >
                            <td>01/01/2023</td>
                            <td>123</td>
                            <td style={{textAlign:'left'}}>José</td>
                            <td>10%</td>
                            <td><Button className="pend">Pendente</Button></td>
                            <td><Button className="down">Download</Button></td>
                        </tr>
                        <tr >
                            <td>01/01/2023</td>
                            <td>123</td>
                            <td style={{textAlign:'left'}}>Antonio</td>
                            <td>10%</td>
                            <td><Button className="cancel">Cancelado</Button></td>
                            <td><Button className="down">Download</Button></td>
                        </tr>
                    </table>
            </div>
        </div>
    )
}
