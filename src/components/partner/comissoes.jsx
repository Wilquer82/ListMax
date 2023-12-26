import LogoP from '../../assets/logotipo-partners.png';
import '../style.css';
import { Button } from 'antd';


const pend = {
    borderRadius: "8px",
    background: "#FFF8DD",
    color: "#FBBC05",
    fontSize: "14px",
    fontWeight: "600",
    lineHeight: "21px",
    letterSpacing: "-0.14px",
    border: "transparent",
    width: "10rem",
}

const pago = {
    backgroundColor: '#EEFFF3',
    color: '#34A853',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '21px',
    letterSpacing: '-0.14px',
    borderRadius: '8px',
    border: 'transparent',
    width: '10rem',
  };

const cancel = {
    color: '#EA4335',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '21px',
    letterSpacing: '-0.14px',
    borderRadius: '8px',
    backgroundColor: '#FFF6F8',
    border: 'transparent',
    width: '10rem',
  };
  
  const down = {
    color: '#595959',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: '21px',
    letterSpacing: '-0.14px',
    borderRadius: '8px',
    backgroundColor: '#E8E6ED',
    border: 'transparent',
    width: '9rem',
  };

export default function Comissoes() {
    return (
        <div className="ParceriaMain">
            <div className="PartnersTitle">
                <div className="containerV">
                    <span className="Title">Comissões</span>

                    <span><span style={{ color: '#B8B2C6' }}>ListMax Partners  / </span><span style={{ color: '#1B0746' }}>Comissões</span></span>

                </div>
                <div style={{ width: '32vw' }} />
                <div>
                    <img src={LogoP} alt="Logo ListMax" width="140px" />
                </div>
            </div>
            <div className="squareU">
                    <div className="oneLine">
                        <span style={{ width: "10%" }} className="squareTitle">Comissões</span>
                        <span style={{ width: "80%" }}></span>
                        <span style={{ width: "10%" }} className="squareTitle">2023</span>
                    </div>
                    <table className="table">
                        <tr className="squareSubTitle">
                            <th className='f16 f600 fblue' style={{width:'10rem'}}>Data</th>
                            <th className='f16 f600 fblue' style={{width:'10rem'}}>ID</th>
                            <th className='f16 f600 fblue' style={{width:'30rem'}}>Anfitrião</th>
                            <th className='f16 f600 fblue' style={{width:'10rem'}}>Comissão</th>
                            <th className='f16 f600 fblue' style={{width:'10rem'}}>Status de pagamento</th>
                            <th className='f16 f600 fblue' style={{width:'10rem'}}>Recibo</th>
                        </tr>
                        <tr >
                            <td className='f16 f600'>01/01/2023</td>
                            <td className='f16 f600'>123</td>
                            <td className='f16 f600' style={{textAlign:'left'}}>João</td>
                            <td className='f16 f600'>10%</td>
                            <td className='f16 f600'><Button style={pago}>Pago</Button></td>
                            <td className='f16 f600'><Button style={down}>Download</Button></td>
                        </tr>
                        <tr >
                            <td className='f16 f600'>01/01/2023</td>
                            <td className='f16 f600'>123</td>
                            <td className='f16 f600' style={{textAlign:'left'}}>José</td>
                            <td className='f16 f600'>10%</td>
                            <td className='f16 f600'><Button style={pend}>Pendente</Button></td>
                            <td className='f16 f600'><Button style={down}>Download</Button></td>
                        </tr>
                        <tr >
                            <td className='f16 f600'>01/01/2023</td>
                            <td className='f16 f600'>123</td>
                            <td className='f16 f600' style={{textAlign:'left'}}>Antonio</td>
                            <td className='f16 f600'>10%</td>
                            <td className='f16 f600'><Button style={cancel}>Cancelado</Button></td>
                            <td className='f16 f600'><Button style={down}>Download</Button></td>
                        </tr>
                    </table>
            </div>
        </div>
    )
}
