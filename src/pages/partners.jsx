import { Button, Select, Input, Space } from 'antd';
import LogoP from '../assets/logotipo-partners.png';
import BackGround from "../components/backGround";
import './style.css';
import NavBar from "../components/navbar";
import { useState } from 'react';
// import { Link } from 'react-router-dom';



export default function Partners (){

    const [register, setRegister] = useState(false);
    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };
      
      // Filter `option.label` match the user type `input`
      const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
      

    return(
        <>
            <BackGround/>
            <NavBar />
            {!register ? 
            <div className="Main column">
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
                    <Button type="button" size="large" className="confirm"  onClick={() => {setRegister((old) => !old)}}> Quero me tornar um parceiro</Button>
                </div>
            </div>
            :
            <div className="Main">
                <div className="textContainerR">
                    
                    <img  src={LogoP} width="131px" height="134px" alt="Logo List-Max" />
                    <div className="lineContainer">
                        <h1 className="MainText">Transformar</h1><span className="span"></span><h1 className="G">eventos.</h1>
                    </div>
                    <div className="lineContainer">
                        <h1 className="G">Expandir</h1><span className="span"></span><h1 className="MainText">negócios.</h1>
                    </div>
                    <div className="paragraph">
                        <p>Seja um ListMax Partner e ganhe acesso a benefícios exclusivos.</p>
                    </div>
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
            }
        </>
    )
}