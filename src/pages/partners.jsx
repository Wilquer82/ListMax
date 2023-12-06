import { Button, Select } from 'antd';
import LogoP from '../assets/logotipo-partners.png';
import BackGround from "../components/backGround";
import './style.css';
import NavBar from "../components/navbar";




export default function Partners (){
    return(
        <>
            <BackGround/>
            <NavBar />
            <div className="MainP column">
                <div className="flexPart">
                    <img src={LogoP} className="logoPart" alt="Logo List-Max Partners" width="150px"/>
                    <div className="textContainerPart"> 
                        <div className="lineContainer">
                            <h1 className="MainText">Busque</h1><span className="span"></span><h1 className="G">fornecedores</h1>
                        </div>
                        <div className="lineContainer">
                            <h1 className="MainText">para seu evento   </h1>
                        </div>
                    </div>
                </div>
                <div className="threeFives">
                    <Select className="Select" defaultValue="Escolha a área" style={{ width: '35%' }}/>
                    <Select className="Select" defaultValue="Estado" style={{ width: '31.5%' }}/>
                    <Select className="Select" defaultValue="Cidade" style={{ width: '31.5%'}}/>
                </div>
                <div className="center">
                        <Button type="button" size="large" className="confirm"> Quero me tornar um parceiro</Button>
                </div>
            </div>
        </>
    )
}