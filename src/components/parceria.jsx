import LogoP from '../assets/logotipo-partners.png';
import './style.css';
import { Button } from 'antd';



export default function Parceria() {
    return (
        <div className="ParceriaMain">
            <div className="PartnersTitle">
                <div>
                    <p className="Title">Parceria</p>
                    
                        <p><span style={{color:'#B8B2C6'}}>ListMax Partners  / </span><span style={{color:'#1B0746'}}> Minha conta</span></p>
                    
                </div>
                <div style={{width:'32vw'}}/>

                
                <div>
                    <img src={LogoP} alt="Logo ListMax" width="140px"  />
                </div>
            </div>
            <div className="square">
                <div>
                    <div className="twoLines">
                        <p className="squareTitle">Sua parceria com a gente</p>
                        <p className="squareSubTitle">Para continuar sua parceria com a gente</p>
                    </div>

                    <div className="cupom">
                        <div className="QuantDesc">
                            <p className="quant">3/3</p>
                            <p className="descricao DescCupom">Cupons de desconto disponíveis</p>
                        </div>
                        <p className="DescCupom"><span className="Eighteen">Link com</span><span className="twentyFour"> 10% de desconto</span></p>
                        <div  className="linkButton">
                            <p className="link">https://listmax.com.br/indicacao/?refid=345re66787k8</p>
                            <Button  size="large" className="purpleButton">Copiar</Button>
                        </div>
                    </div>
                    <div className="cupom">
                    <div className="QuantDesc">
                            <p className="quant">∞ / ilimitado</p>
                            <p className="descricao DescCupom">Cupons de desconto disponíveis</p>
                        </div>
                        <p className="DescCupom"><span className="Eighteen">Link com</span><span className="twentyFour"> 10% de desconto</span></p>
                        <div  className="linkButton">
                            <p className="link">https://listmax.com.br/indicacao/?refid=345re66787k8</p>
                            <Button  size="large" className="purpleButton">Copiar</Button>
                        </div>
                    </div>
                    <div className="twoLines">
                        <p className="squareTitle">Não sabe como utilizar?</p>
                        <p className="squareSubTitle">Temos um tutorial para te explicar como funciona!</p>
                    </div>
                    <Button  size="large" className="LearnMore">Saiba mais</Button>

                </div>
                <div className="halfSquares">
                    <div className="containerSquares">
                        <div className="litleSquares">
                            <p className="LStitle">Cadastros por indicação</p>
                            <p className="LSvalue">03</p>

                        </div>
                        <div className="litleSquares">
                        <p className="LStitle">Fechamentos</p>
                        <p className="LSvalue">02</p>

                        </div>    
                    </div>
                    <div className="containerSquares">
                        <div className="litleSquares">
                        <p className="LStitle">Comissões pendentes</p>
                        <p className="LSvalue">R$ 389,13</p>

                        </div>
                        <div className="litleSquares">
                        <p className="LStitle">Comissões pagas</p>
                        <p className="LSvalue">R$ 2.568,25</p>

                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}