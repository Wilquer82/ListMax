import LogoP from '../../assets/logotipo-partners.png';
import '../style.css';
import { Button } from 'antd';



export default function Parceria() {
    return (
        <div className="ParceriaMain">
            <div className="PartnersTitle">
                <div className='containerV'>
                    <span className="Title">Parceria</span>
                    
                        <span><span style={{color:'#B8B2C6'}}>ListMax Partners  / </span><span style={{color:'#1B0746'}}> Minha conta</span></span>
                    
                </div>
                <div style={{width:'32vw'}}/>

                
                <div>
                    <img src={LogoP} alt="Logo ListMax" width="140px"  />
                </div>
            </div>
            <div className="square">
                <div>
                    <div className="twoLines">
                        <span className="squareTitle">Sua parceria com a gente</span>
                        <span className="squareSubTitle">Para continuar sua parceria com a gente</span>
                    </div>

                    <div className="cupom">
                        <div className="QuantDesc">
                            <span className="quant">3/3</span>
                            <span className="descricao DescCupom">Cupons de desconto disponíveis</span>
                        </div>
                        <span className="DescCupom"><span className="Eighteen">Link com</span><span className="twentyFour"> 10% de desconto</span></span>
                        <div  className="linkButton">
                            <span className="link">https://listmax.com.br/indicacao/?refid=345re66787k8</span>
                            <Button  size="large" className="purpleButton">Copiar</Button>
                        </div>
                    </div>
                    <div className="cupom">
                    <div className="QuantDesc">
                            <span className="quant">∞ / ilimitado</span>
                            <span className="descricao DescCupom">Cupons de desconto disponíveis</span>
                        </div>
                        <span className="DescCupom"><span className="Eighteen">Link com</span><span className="twentyFour"> 10% de desconto</span></span>
                        <div  className="linkButton">
                            <span className="link">https://listmax.com.br/indicacao/?refid=345re66787k8</span>
                            <Button  size="large" className="purpleButton">Copiar</Button>
                        </div>
                    </div>
                    <div className="twoLines">
                        <span className="squareTitle">Não sabe como utilizar?</span>
                        <span className="squareSubTitle">Temos um tutorial para te explicar como funciona!</span>
                    </div>
                    <Button  size="large" className="LearnMore">Saiba mais</Button>

                </div>
                <div className="halfSquares">
                    <div className="containerSquares">
                        <div className="litleSquares">
                            <span className="LStitle">Cadastros por indicação</span>
                            <span className="LSvalue">03</span>

                        </div>
                        <div className="litleSquares">
                        <span className="LStitle">Fechamentos</span>
                        <span className="LSvalue">02</span>

                        </div>    
                    </div>
                    <div className="containerSquares">
                        <div className="litleSquares">
                        <span className="LStitle">Comissões pendentes</span>
                        <span className="LSvalue">R$ 389,13</span>

                        </div>
                        <div className="litleSquares">
                        <span className="LStitle">Comissões pagas</span>
                        <span className="LSvalue">R$ 2.568,25</span>

                        </div>    
                    </div>
                </div>
            </div>
        </div>
    )
}