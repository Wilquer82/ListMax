import { useState } from 'react';
import { Button, Select, Input, Space } from 'antd';
import LogoP from '../assets/logotipo-partners.png';
import Gift from '../assets/GiftBox.png';
import BackGround from "../components/backGround";
import './style.css';
import NavBar from '../components/navbar';
import TwoButtons from '../components/twoButtons';
import PartOne from '../assets/partners1.png';
import PartTwo from '../assets/partners2.png';
import ButtonVideo from '../assets/Button.png';
import Video from '../assets/Video.png';
import { Link } from 'react-router-dom';


export default function Partners() {

    const [register, setRegister] = useState(false);
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };

    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

    return (
        <>
            <BackGround />
            <NavBar />
            {!register ?
                <div className="Main column">
                    <div className="flexPart">
                        <img src={LogoP} className="logoPart" alt="Logo List-Max Partners" width="130px" />
                        <div className="textContainerPart">
                            <div className="lineContainer" >
                                <h1 className="MainText">Busque</h1><span className="span"></span><h1 className="G">fornecedores</h1>
                            </div>

                            <div className="lineContainer" >
                                <h1 className="MainText">para seu evento   </h1>
                            </div>
                        </div>
                    </div>
                    <div className="threeFives">
                        <Select className="Select" defaultValue="Escolha a área" style={{ width: '35%' }} />
                        <Select className="Select" defaultValue="Estado" style={{ width: '31.5%' }} />
                        <Select className="Select" defaultValue="Cidade" style={{ width: '31.5%' }} />
                    </div>
                    <div className="center">
                        <Button type="button" size="large" className="confirm" onClick={() => { setRegister((old) => !old) }}> Quero me tornar um parceiro</Button>
                    </div>
                </div>
                :
                <div style={{minHeigh:'100vh', width: '100vw', display: 'flex', flexDirection: 'column', overflowY: 'hidden'}}>
                        <div style={{display: 'flex', height: '700px', width: '100vw', justifyContent: 'space-evenly'}}>
                            <div className="textContainerR">
                            <img src={LogoP} width="131px" height="134px" alt="Logo List-Max" />
                            <div className="lineContainer">
                                <h1 className="MainText">Transformar</h1><span className="span"></span><h1 className="G">eventos.</h1>
                            </div>
                            <div className="lineContainer">
                                <h1 className="G">Expandir</h1><span className="span"></span><h1 className="MainText">negócios.</h1>
                            </div>
                            <div className="paragraph">
                                <p>Seja um ListMax Partner e ganhe acesso a benefícios exclusivos.</p>
                            </div>
                            <TwoButtons />

                            </div>
                            <Space direction="vertical" className="loginInputsR">
                            <Space direction="horizontal" className="nameLast">
                                <Input size="large" type="text" placeholder="Nome" />
                                <Input size="large" type="text" placeholder="Sobrenome" />
                            </Space>
                            <Input size="large" className="inputNews" type="phone" placeholder="Celular" />
                            <Input size="large" className="inputNews" type="text" placeholder="Empresa" />
                            <Select
                                showSearch
                                className="inputNews"
                                placeholder="Categoria da sua Empresa"
                                optionFilterProp="children"
                                onChange={onChange}
                                onSearch={onSearch}
                                filterOption={filterOption}
                                size={'large'}
                                options={[
                                    {
                                        value: 'jack',
                                        label: 'Jack',
                                    },
                                    {
                                        value: 'lucy',
                                        label: 'Lucy',
                                    },
                                    {
                                        value: 'tom',
                                        label: 'Tom',
                                    },
                                ]}
                            />
                            <Input size="large" className="inputNews" type="text" placeholder="Seu cargo na empresa" />
                            <Input size="large" className="inputNews" type="email" placeholder="Seu E-mail" />
                            <Button
                                size="large"
                                className="buttonNews"
                            >
                                Solicitar Parceria
                            </Button>
                            </Space>
                        </div>
                        <div className="white">
                        <div className="Container">
                            <h2 className="About">Sobre o programa</h2>
                            <p className="Text">Na ListMax, sabemos o quanto as parcerias são cruciais para o sucesso em eventos especiais. É por isso que estamos empolgados em apresentar o ListMax Partners, um programa exclusivo que oferece a profissionais do setor de eventos, como cerimoniais, fotógrafos, vídeomakers, buffets e outros, uma maneira de não apenas melhorar a experiência de seus clientes, mas também expandir seus próprios negócios.</p>
                        </div>
                        <div className="ImgContainer">
                            <img className="ImgOne" src={PartOne} alt="Merch01" width="270px" height="356px"/>
                            <img className="ImgTwo" src={PartTwo} alt="Merch02" width="270px" height="356px"/>
                        </div>
                    </div>
                    <div className="blue">
                        <div>
                            <img src={LogoP} className="logoPart logoDivision" alt="Logo List-Max Partners" width="150px" />
                            <div className="titleContainer">
                                <div className="lineContainerP"> 
                                    <h3 className="h3">Quais os </h3><span className="span"/><h3 className="pinkG">benefícios </h3>
                                </div>
                                <div className="lineContainerP">
                                    <h3 className="h3">em se tornar um </h3></div>
                                <div className="lineContainerP">
                                    <h3 className="pinkG">partner </h3><span className="span"/>
                                    <h3 className="h3">da ListMax?</h3>
                                </div>
                            </div>
                            <div className="description">
                                <div className="gradient">Ganhe Comissões Atrativas</div>
                                <div className="lineContainerP">
                                    <p>Indique Anfitriões para a ListMax e ganhe até [porcentagem de comissão dos partners] de comissão quando eles utilizarem nossa plataforma para gerenciar seus eventos. Transforme suas recomendações em recompensas financeiras.</p>
                                </div>
                                <div className="gradient">Presenteie seus Anfitriões com Descontos Exclusivos</div>
                                <div className="lineContainerP">
                                    <p>Mostre seu comprometimento com a excelência em eventos presenteando seus Anfitriões com cupons de desconto exclusivos na ListMax. Torne sua oferta ainda mais atraente e valorizada.</p>
                                </div>
                                <div className="gradient"> Acesso a Novos Contratos</div>
                                <div className="lineContainerP">
                                    <p>Além das comissões e dos descontos para seus clientes, ao se tornar um parceiro ListMax, você também terá acesso a um pool de clientes que procuram por serviços como os seus. Isso significa que você pode conquistar novos contratos e clientes em potencial.</p>
                                </div>
                                <div className="gradient">Faça Parte de uma Comunidade de Parceiros</div>
                                <div className="lineContainerP">
                                    <p>Junte-se a uma rede de profissionais de eventos que compartilham conhecimentos, experiências e oportunidades de negócios. Cresça junto com outros parceiros que compartilham sua paixão por eventos memoráveis.</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={Gift} className="gift" alt="Gitf"  />
                        </div>
                    </div>
                    <div className="lightBlue">
                        <div className="half tenRemTop">
                            <div className="lineContainerP tenRemLeft">
                                <p className="fourth">Ainda ficou com</p>
                            </div>
                            <div className="lineContainerP tenRemLeft">
                                <p className="fourth">dúvidas? Assista:</p>
                            </div>
                            <div className="centerImg">
                                <img className="" src={Video} alt="Merch01"/>
                                <img style={{position: 'absolute', zIndex:'4'}} src={ButtonVideo} alt="Merch02"/>
                            </div>

                        </div>
                        <div className="half">
                            <p className="textLight">Na ListMax, acreditamos que cada evento especial merece ser memorável. Junte-se a nós no ListMax Partners e torne-se parte de uma comunidade de profissionais que compartilham a mesma visão. Simplifique a gestão de convidados, recompense seus clientes e expanda seus negócios.</p>
                            <Link to="/homePartners">
                            <Button className="buttonNews add">
                                Quero me tornar um parceiro
                            </Button>                        
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}