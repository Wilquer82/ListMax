import LogoP from '../../assets/logotipo-partners.png';
import '../style.css';


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
                            <th style={{width:'10rem'}}>Data</th>
                            <th style={{width:'10rem'}}>ID</th>
                            <th style={{width:'30rem'}}>Anfitrião</th>
                            <th style={{width:'10rem'}}>Comissão</th>
                            <th style={{width:'10rem'}}>Status de pagamento</th>
                            <th style={{width:'10rem'}}>Recibo</th>
                        </tr>
                        <tr >
                            <td>01/01/2023</td>
                            <td>123</td>
                            <td style={{textAlign:'left'}}>João</td>
                            <td>10%</td>
                            <td className="pago">Pago</td>
                            <td className="down">Download</td>
                        </tr>
                        <tr >
                            <td>01/01/2023</td>
                            <td>123</td>
                            <td style={{textAlign:'left'}}>José</td>
                            <td>10%</td>
                            <td className="pend">Pendente</td>
                            <td className="down">Download</td>
                        </tr>
                        <tr >
                            <td>01/01/2023</td>
                            <td>123</td>
                            <td style={{textAlign:'left'}}>Antonio</td>
                            <td>10%</td>
                            <td className="cancel">Cancelado</td>
                            <td className="down">Download</td>
                        </tr>
                    </table>
            </div>
        </div>
    )
}
