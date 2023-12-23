import { useState } from 'react';
import './homePartners.css';
import {
    RightOutlined,
    CheckOutlined,
    LeftOutlined,
    CalendarOutlined,
    ClockCircleOutlined,
    ExclamationCircleOutlined,
    MinusOutlined,
    PlusOutlined,
    EditOutlined
} from "@ant-design/icons";
import NavBarPartners from '../components/navbarPartner';
import { Button, Progress, Radio, Input, Switch, DatePicker, Space, Popover } from 'antd';
import PgEvento from '../components/eventos/pgEvento';
import PgConvite from '../components/eventos/pgConvite';
import PgConvidados from '../components/eventos/pgConvidados';
import PgEstatiscas from '../components/eventos/pgEstatis';
import PgRecep from '../components/eventos/pgRecep';
import PgLook from '../components/eventos/pgLook';
import locale from 'antd/es/date-picker/locale/pt_BR';
import {
    BirthdayCake, Users, BabyCarriage, Marriage2, PartyHorn, Diner, MoreHorizontal,
    ConferenceRoom, ChatMessageConversation2, EventSvg, EducationBagLearning5, HandshakeDeal, StaffPersonnel,
    PraySolid, Marriage, ReligionChristianity, ReligionJudaism, ReligionPeaceCultural, Heavensabove,
    Journalism, EducationBagLearning8, EducationBagLearning3, EducationBagLearning, EducationBagLearning4, EducationBagLearning2,
    Music, ArtDesign, ComedyAndDramaMasks, CinemaFilmMovie, Sparkler, Hilarious,
    Sport2, Sport, SportWinner, Badminton, SportWinner1, SportBasketball,
    EditPurple, ListMax, Copy, Map, Dolar
} from '../assets';




export default function HomeEvents() {
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const { Search } = Input;


    const ImgLegend = {
        "A": [
            { img: BirthdayCake, legenda: "Aniversário" },
            { img: Users, legenda: "Casamento" },
            { img: BabyCarriage, legenda: "Chá de bebê" },
            { img: Marriage2, legenda: "Noivado" },
            { img: PartyHorn, legenda: "Festa surpresa" },
            { img: Diner, legenda: "Jantar intimo" },
            { img: MoreHorizontal, legenda: "Outros" }
        ],
        "B": [
            { img: PraySolid, legenda: "Culto religioso" },
            { img: Marriage, legenda: "Casamento religioso" },
            { img: ReligionChristianity, legenda: "Batizado" },
            { img: ReligionJudaism, legenda: "Bar/Bat Mitzvah" },
            { img: ReligionPeaceCultural, legenda: "Festival religioso" },
            { img: Heavensabove, legenda: "Retiro espiritual" },
            { img: MoreHorizontal, legenda: "Outros" }
        ],
        "C": [
            { img: Music, legenda: "Concerto" },
            { img: ArtDesign, legenda: "Exibição de arte" },
            { img: ComedyAndDramaMasks, legenda: "Peça de teatro" },
            { img: CinemaFilmMovie, legenda: "Exibição de filme" },
            { img: Sparkler, legenda: "Festival cultural" },
            { img: Hilarious, legenda: "Show de comédia" },
            { img: MoreHorizontal, legenda: "Outros" }
        ],
        "D": [

            { img: ConferenceRoom, legenda: "Conferência" },
            { img: ChatMessageConversation2, legenda: "Reunião de equipe" },
            { img: EventSvg, legenda: "Lançamento de produto" },
            { img: EducationBagLearning5, legenda: "Treinamento corporativo" },
            { img: HandshakeDeal, legenda: "Evento de networking" },
            { img: StaffPersonnel, legenda: "Workshop empresarial" },
            { img: MoreHorizontal, legenda: "Outros" }
        ],
        "E": [
            { img: Journalism, legenda: "Palestra" },
            { img: EducationBagLearning8, legenda: "Seminário" },
            { img: EducationBagLearning3, legenda: "Aula magna" },
            { img: EducationBagLearning, legenda: "Feira educacional" },
            { img: EducationBagLearning4, legenda: "Workshop educativo" },
            { img: EducationBagLearning2, legenda: "Dia de portas abertas" },
            { img: MoreHorizontal, legenda: "Outros" }
        ],
        "F": [
            { img: Sport2, legenda: "Jogo de futebol" },
            { img: Sport, legenda: "Corrida" },
            { img: SportWinner, legenda: "Torneio esportivo" },
            { img: Badminton, legenda: "Partida de tênis" },
            { img: SportWinner1, legenda: "Maratona" },
            { img: SportBasketball, legenda: "Jogo de basquete" },
            { img: MoreHorizontal, legenda: "Outros" }
        ]
    };

    const twoColors = {
        '0%': '#FF14FF',
        '100%': '#6D0AD7',
    };

    const content = (
        <p style={{
            position: "absolute",
            border: "2px dashed #6D0AD7",
            backgroundColor: "#F0E7FB",
            fontSize: "12px",
            borderRadius: "12px",
            width: "35vw",
            height: "4rem",
            color: "#6D0AD7",
            padding: "1rem",
            display: "flex",
            left: "3rem",
            bottom: "-2rem"
        }}
        >
            <img src={Map} style={{ padding: "0 1rem" }} /> Pesquise pelo CEP que estado, cidade, bairro e rua serão preenchidos
            automaticamente.
        </p>
    );

    const content2 = (
        <p style={{
            position: "absolute",
            border: "2px dashed #6D0AD7",
            backgroundColor: "#F0E7FB",
            fontSize: "12px",
            borderRadius: "12px",
            width: "35vw",
            height: "4rem",
            color: "#6D0AD7",
            padding: "1rem",
            alignItems: "center",
            display: "flex",
            left: "3rem",
            bottom: "-2rem"
        }}
        >
            <EditOutlined style={{fontSize: "2rem", marginRight: "1rem"}}/> Você também pode digitar no seu teclado o numero de convidados, 
            só clicar em cima do numero do quadro.
        </p>
    );

    const content3 = (
        <p style={{
            position: "absolute",
            border: "2px dashed #6D0AD7",
            backgroundColor: "#F0E7FB",
            fontSize: "12px",
            borderRadius: "12px",
            width: "32vw",
            height: "6rem",
            color: "#6D0AD7",
            padding: "1rem",
            display: "flex",
            alignItems:"center",
            left: "3rem",
            bottom: "-2rem",
            textAlign:"justify"
        }}
        >
            <img src={Dolar} style={{ padding: "0 1rem", height:"2rem" }} />
            Aqui você verá o valor a ser pago pela utilização da plataforma 
            mediante a quantidade de convidados. Fica a dica: quanto mais 
            convidados, menor o preço unitário.
        </p>
    );

    const steps = ['Tipo e Categoria', 'Título e Descrição', 'Data e Horário', 'Localização', 'Convidados', 'Serviços', 'Pagamento'];

    const [principal, setPrincipal] = useState(true);
    const [criarEvento, setCriarEvento] = useState(false);
    const [gerenciarEvento, setGerenciarEvento] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Página do Evento');
    const [activeStep, setActiveStep] = useState(0);
    const [eventType, setEventType] = useState("");
    const [activeElement, setActiveElement] = useState(null);
    const [startTime, setStartTime] = useState({ hour: '', minute: '' });
    const [endTime, setEndTime] = useState({ hour: '', minute: '' });
    const [dateStartEnd, setDateStartEnd] = useState(false);

    const [value, setValue] = useState('');

    const hours = [...Array(24).keys()].map(i => i.toString().padStart(2, '0'));
    const minutes = [...Array(60).keys()].map(i => i.toString().padStart(2, '0'));

    const handleTimeChange = (setTime) => (event) => {
        const { name, value } = event.target;
        setTime(prevTime => ({ ...prevTime, [name]: value }));
    };

    const handleClick = (event) => {
        setActiveElement(event.target.id);
    };

    const onChangeEvent = e => {
        if (e.target.value) {
            setEventType(e.target.value)
            console.log(`radio checked:${e.target.value}`);
        }
    };

    const handleStep = (step) => {
        setActiveStep(step);
        console.log(step);
        // Aqui você pode adicionar a lógica para interagir com o restante da página
        // setCompletedSteps([...completedSteps, step]);
    };

    const handleButtonClick = (activeStep) => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    function voltar() {
        if (activeStep > 0) {  // Verifique se não estamos no primeiro passo
            setActiveStep(activeStep - 1);  // Diminua o passo ativo em 1
        }
    }

    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    };

    // const formatNumber = (value) => new Intl.NumberFormat().format(value);

    const handleChange = (onChange) => (e) => {
        const { value: inputValue } = e.target;
        const reg = /^\d*\.?\d*$/;
        if (reg.test(inputValue)) {
            onChange(inputValue);
        }
    };

    const handleBlur = (value, onChange) => () => {
        let valueTemp = value;
        if (value.charAt(value.length - 1) === '.' || value === '-') {
            valueTemp = value.slice(0, -1);
        }
        onChange(valueTemp.replace(/0*(\d+)/, '$1'));
    };

    const handleIncrement = () => {
        const newValue = Number(value) + 1;
        setValue(newValue.toString());
    };

    const handleDecrement = () => {
        const newValue = Number(value) - 1;
        if (newValue >= 0) {
            setValue(newValue.toString());
        }
    };


    return (
        <div className="MainEvents" style={{ overflow: "hidden" }}>
            <NavBarPartners Local={"Clients"} />
            {principal &&
                <div className="ParceriaMain">
                    <div className="PartnersTitle">
                        <div>
                            <p className="Title">Meus eventos</p>
                            <p><span style={{ color: '#B8B2C6' }}>Home / </span>
                                <span style={{ color: '#1B0746' }}>Eventos futuros</span></p>
                        </div>

                        <Button
                            className="buttonNews"
                            style={{ height: "3rem", width: "18rem", backgroundColor: "#6D0AD7", color: "white" }}
                            onClick={() => {
                                setCriarEvento((old) => !old);
                                setPrincipal((old) => !old);
                            }}
                        >
                            Criar novo evento
                        </Button>
                    </div>
                    <div className="eventsBar">
                        <Button className="buttonNews" style={{ marginLeft: "2rem", height: "2rem", width: "13rem", backgroundColor: "#1B0746", color: "white" }}>Eventos Futuros</Button>
                        <Button className="buttonNews" style={{ border: "none", marginLeft: "2rem", height: "2rem", width: "13rem", backgroundColor: "transparent", color: "#1B0746" }}>Eventos Encerrados</Button>
                    </div>
                    {/* <div style={{width:"100vw" , marginTop: "10rem"}}>
                    <p style={{fontSize: "35px",fontWight: "500",lineHeight: "53px", textAlign: "center", color:"#6D0AD7"}}>Você não possui nenhum evento :(</p>
                    <p style={{fontSize: "20px", fontWeight: 500, lineHeight: "30px", textAlign: "center", color:"#1B0746"}}>Que tal criar um evento? É rápido e fácil!</p>
                    </div> */}
                    <div style={{ width: "79vw", marginTop: "5rem", marginBottom: "5rem" }} >
                        <div
                            style={{
                                backgroundColor: "#e8e6ed",
                                width: "20vw", height: "90vh",
                                border: "1px solid #B8B2C6",
                                boxShadow: "0px 8px 20px 0px #B8B2C680",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "1rem",
                                // padding: "1rem 1rem",       
                            }}>
                            <div style={{ height: "30vh", width: "100%", padding: "1rem 1rem" }}>
                                <div style={{ height: "90%", width: "95%", backgroundColor: "#D9D9D9", margin: "auto", borderRadius: "9px" }} />
                                <p style={{ paddingTop: "1rem", color: "var(--Colors-Azul-escuro-Normal, #1B0746)", fontSize: "16px", fontWeight: "600", lineHeight: "24px" }}>Nome do evento</p>

                            </div>

                            <div style={{ height: "30vh", width: "100%", padding: "1rem 1rem" }}>
                                <p className="ticketSub">
                                    Descrição
                                </p>
                                <p className="ticketCont" style={{ height: "30vh", width: "100%", textAlign: "justify" }}>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit.
                                    In euismod, elit quis mollis dictum,
                                    dui felis tristique lectus, eget
                                    vestibulum elit erat ac nunc.
                                    Vestibulum suscipit ullamcorper
                                    imperdiet. Lorem ipsum dolor sit
                                    amet vestibulum suscipit ullamcorper
                                    imperdiet. Lorem ipsum dolor sit amet
                                    suscipit ullamcorper amet...</p>
                            </div>
                            <div style={{ border: '1px dashed var(--Colors-Roxo-Normal, #6D0AD7)', display: "flex", alignItems: "center", justifyContent: "center" }}>
                            </div>
                            <div style={{ padding: "1rem 1rem", width: "100%", height: "30vh", display: "flex", justifyContent: "space-between", alignItems: "base-line", flexDirection: "column" }}>
                                <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <span><p className='ticketSub'> Data</p>
                                        <p className='ticketCont'>Nov 05 2024</p></span>
                                    <span><p className='ticketSub'> Início</p>
                                        <p className='ticketCont'>00:00</p></span>
                                    <span><p className='ticketSub'> Termino</p>
                                        <p className='ticketCont'>00:00</p></span>
                                </div>
                                <div>
                                    <span>
                                        <p className='ticketSub'> Endereço</p>
                                        <p className='ticketCont'>Endereço completo</p>
                                    </span>
                                </div>
                                <div>
                                    <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "space-between", alignItems: "base-line", flexDirection: "column" }}>
                                        <p className="ticketSub">Convidados</p>
                                        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <p className="ticketCont"
                                                style={{ marginBottom: ".5rem", marginRight: "1rem" }}
                                            >000/000</p>
                                            <Progress percent={20} strokeColor={twoColors} showInfo={false} size={[200, 20]} trailColor="#B8B2C6" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-around" }}>
                                    <div style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                        <img src={Copy} height={"15px"} width={"auto"} />
                                        <p className='ticketSub'>Duplicar Evento</p>
                                    </div>
                                    <Button
                                        className="buttonNews add"
                                        style={{ border: "2px solid #6D0AD7", height: "2rem", width: "8rem", backgroundColor: "transparent", color: "#6D0AD7", fontSize: "12px" }}
                                        onClick={() => { setGerenciarEvento((old) => !old); setPrincipal((old) => !old) }}>
                                        Gerenciar Evento
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {criarEvento &&
                <div className="ParceriaMain">
                    <div className="PartnersTitle" style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
                        <div>
                            <p className="Title">Criar novo evento</p>
                            <p><span style={{ color: '#B8B2C6' }}>Home / Meus Eventos / </span>
                                <span style={{ color: '#1B0746' }}>Criar novo evento</span></p>
                        </div>
                    </div>
                    <div className="containerH" style={{ width: "79vw", height: "69vh" }}>
                        <div className="stepper">
                            {steps.map((label, index) => (
                                <div key={label} className={`step ${index === activeStep ? 'active' : ''}`} onClick={() => handleStep(index)}>
                                    <div className="step-number" style={index < activeStep ? { backgroundColor: "#1B0746" } : {}}>{index < activeStep ? <CheckOutlined style={{ color: "#FF14FF", fontWeight: "1000" }} /> : index + 1}</div>
                                    <div className="step-title">{label}</div>
                                    {index < steps.length - 1 && <div className="step-line"></div>}
                                </div>
                            ))}
                        </div>
                        {activeStep === 0 &&
                            <div className="containerV" >
                                <div className="squareNo containerV" style={{ width: "55rem", height: "24vh", padding: "1rem" }} >
                                    <p className="Title" style={{ padding: "0" }}>Vamos começar?</p>
                                    <p className="f16">Qual o seu tipo de evento?</p>
                                    <Radio.Group className="my-radio-group containerH" style={{ width: "60%" }} onChange={onChangeEvent}>
                                        <div className="containerV" >
                                            <Radio value="A" style={{ marginBottom: ".5rem" }}>Particular</Radio>
                                            <Radio value="B" style={{ marginBottom: ".5rem" }}>Religioso</Radio>
                                            <Radio value="C" style={{ marginBottom: ".5rem" }}>Cultural / Entretenimento</Radio>
                                        </div>
                                        <div className="containerV">
                                            <Radio value="D" style={{ marginBottom: ".5rem" }}>Corporativo</Radio>
                                            <Radio value="E" style={{ marginBottom: ".5rem" }}>Acadêmico / Educacional</Radio>
                                            <Radio value="F" style={{ marginBottom: ".5rem" }}>Esportivo</Radio>
                                        </div>
                                    </Radio.Group>
                                </div>
                                <div className="squareNo containerV" style={{ width: "55rem", height: "43vh", padding: "1rem" }} >
                                    <p className="Title" style={{ padding: "0" }}>Certo!</p>
                                    <p className="f16">Em qual dessas categorias seu evento se encaixa?</p>
                                    <div className="containerH" style={{ height: "9rem" }}>
                                        {ImgLegend[eventType] ? ImgLegend[eventType].map((item, index) => (
                                            <div
                                                id={eventType + index}
                                                className={`blueSq containerV ${activeElement === (eventType + index) ? "active" : ""}`}
                                                style={{ alignItems: "center" }}
                                                key={index}
                                                onClick={handleClick}
                                            >
                                                <img src={item.img} alt={item.legenda} />
                                                <p style={{ fontSize: "14px", textAlign: "center" }}>{item.legenda}</p>
                                            </div>
                                        )) : null}
                                    </div>
                                    <div className="containerH">
                                        <div className="containerH" style={{ justifyContent: "flex-end", alignItems: "center" }} >
                                            <Input style={{ width: "41rem", height: "3rem" }} placeholder="Descreva seu evento" />
                                            <img src={EditPurple} width={"24px"} style={{ position: "absolute", paddingRight: ".5rem" }} />
                                        </div>
                                        <Button
                                            className="buttonNews"
                                            style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                                            onClick={() => handleButtonClick(activeStep)}
                                        >
                                            Continuar <RightOutlined />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        }
                        {activeStep === 1 &&
                            <div className="containerV" >
                                <div className="squareNo containerV" style={{ width: "55rem", height: "69vh", padding: "1rem" }} >
                                    <p className="Title" style={{ padding: "0" }}>Vamos continuar ...</p>
                                    <p className="f16">Qual titulo, link e descrição deseja dar ao seu evento?</p>
                                    <div className="containerV" style={{ justifyContent: "space-between", height: "55vh" }}>
                                        <div className="containerH" style={{ justifyContent: "left", alignItems: "center" }} >
                                            <Input className="EventDes" placeholder="Título do evento" />
                                            <img src={EditPurple} width={"24px"} style={{ position: "absolute", right: "11.5rem" }} />
                                        </div>
                                        <div className="containerH" style={{ justifyContent: "left", alignItems: "center" }} >
                                            <img src={ListMax} height={"17px"} style={{ position: "absolute", marginLeft: "1rem", zIndex: 2 }} />
                                            <Input className="EventDes" style={{ paddingLeft: "8.5rem" }} placeholder="Seu evento" />
                                            <img src={EditPurple} width={"24px"} style={{ position: "absolute", right: "11.5rem" }} />
                                        </div>
                                        <TextArea
                                            // showCount
                                            maxLength={500}
                                            onChange={onChange}
                                            placeholder="Descrição"
                                            style={{
                                                height: '14rem',
                                                width: '52rem',
                                                resize: 'none',
                                                padding: '1rem',
                                            }} />
                                        <div className="containerH" style={{ justifyContent: "space-between", alignItems: "center", width: "52rem" }}>
                                            <Button
                                                className="buttonNews"
                                                style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                                                onClick={() => voltar()}
                                            >
                                                <LeftOutlined style={{ color: "#A1F71A" }} /> Voltar
                                            </Button>
                                            <Button
                                                className="buttonNews"
                                                style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                                                onClick={() => handleButtonClick(activeStep)}
                                            >
                                                Continuar <RightOutlined style={{ color: "#A1F71A" }} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {activeStep === 2 &&
                            <div className="containerV" >
                                <div className="squareNo containerV" style={{ width: "55rem", height: "69vh", padding: "1rem" }} >
                                    <div className="containerV" style={{ height: "49vh" }} >

                                        <p className="Title" style={{ padding: "0" }}>E quando vai ser?</p>
                                        {!dateStartEnd ?
                                            <p className="f16">Escolha a data e horário do seu evento</p> :
                                            <p className="f16">Escolha a(s) data(s) e horário(s) do seu evento</p>}
                                        <div className="containerH" style={{ width: "9rem" }}>
                                            <Switch onChange={() => { setDateStartEnd((old) => !old) }} />
                                            <p className="f15">Várias datas</p>
                                        </div>
                                        <div className="containerH" style={{ alignItems: "center", width: "35rem" }}>
                                            {!dateStartEnd ?
                                                <p className="f15">Data do seu evento</p> :
                                                <p className="f15">Data inicio/fim do seu evento</p>}
                                            {/* <Button 
                                            className="buttonNews" 
                                                style={{ height: "3rem", width: "13rem", backgroundColor: "#6D0AD7", color: "white" }}
                                            // onClick={() => }
                                        >
                                            <CalendarOutlined style={{color:"#FEFEFE"}}/> data/mês/ano <RightOutlined style={{color:"#FEFEFE"}}/>
                                        </Button> */}
                                            {!dateStartEnd ?
                                                <DatePicker
                                                    placement='bottomLeft'
                                                    className="buttonNews"
                                                    onChange={onChangeDate}
                                                    // placeholder='data/mês/ano'
                                                    locale={locale}
                                                    format="DD/MM/YYYY"
                                                    style={{
                                                        height: "3rem",
                                                        width: "13rem",
                                                        backgroundColor: "#6D0AD7",
                                                        color: "white",
                                                    }}
                                                /> :
                                                <RangePicker
                                                    placement='bottomLeft'
                                                    className="buttonNews"
                                                    onChange={onChangeDate}
                                                    locale={locale}
                                                    format="DD/MM/YYYY"
                                                    style={{
                                                        height: "3rem",
                                                        width: "16rem",
                                                        backgroundColor: "#6D0AD7",
                                                        color: "white",
                                                    }} />}
                                        </div>
                                        <p className="f15">Hora do inicio do seu evento</p>
                                        <div className="containerH" style={{ width: "10rem" }}>
                                            <ClockCircleOutlined style={{ fontSize: "1.5rem", color: "#6D0AD7" }} />
                                            <select className="select" name="hour" value={startTime.hour} onChange={handleTimeChange(setStartTime)}>
                                                {hours.map(hour => <option key={hour} value={hour}>{hour}</option>)}
                                            </select>
                                            <p className="f15">:</p>
                                            <select className={!startTime.hour ? "selectDeac" : "select"} name="minute" value={startTime.minute} onChange={handleTimeChange(setStartTime)} disabled={!startTime.hour}>
                                                {minutes.map(minute => <option key={minute} value={minute}>{minute}</option>)}
                                            </select>
                                        </div>
                                        <p className="f15">Hora do fim do seu evento</p>
                                        <div className="containerH" style={{ width: "10rem" }}>
                                            <ClockCircleOutlined style={{ fontSize: "1.5rem", color: "#6D0AD7" }} />
                                            <select className="select" name="hour" value={endTime.hour} onChange={handleTimeChange(setEndTime)}>
                                                {hours.map(hour => <option key={hour} value={hour}>{hour}</option>)}
                                            </select>
                                            <p className="f15">:</p>
                                            {/* className={`${!endTime.hour) ? "selectDeac" : "select"}`} */}
                                            <select className={!endTime.hour ? "selectDeac" : "select"} name="minute" value={endTime.minute} onChange={handleTimeChange(setEndTime)} disabled={!endTime.hour}>
                                                {minutes.map(minute => <option key={minute} value={minute}>{minute}</option>)}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="containerH" style={{ justifyContent: "space-between", alignItems: "center", width: "52rem" }}>
                                        <Button
                                            className="buttonNews"
                                            style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                                            onClick={() => voltar()}
                                        >
                                            <LeftOutlined style={{ color: "#A1F71A" }} /> Voltar
                                        </Button>
                                        <Button
                                            className="buttonNews"
                                            style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                                            onClick={() => handleButtonClick(activeStep)}
                                        >
                                            Continuar <RightOutlined style={{ color: "#A1F71A" }} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        }
                        {activeStep === 3 &&
                            <div className="containerV" >
                                <div className="squareNo containerV" style={{ width: "55rem", height: "69vh", padding: "1rem" }} >
                                    <p className="Title" style={{ padding: "0" }}>Agora o endereço!</p>
                                    <p className="f16">Preencha os dados abaixo</p>
                                    <div className="containerV" style={{ width: "25rem", height: "20rem" }}>
                                        <div style={{ width: "15rem", display: "flex", justifyContent: "space-between" }}>
                                            <Search
                                                placeholder="CEP"
                                                size="large"
                                                // onSearch={onSearch}
                                                style={{ width: "10rem", borderRadius: "0.5625rem" }}
                                            />
                                            <Popover content={content} placement="left" arrow={false}>
                                                <ExclamationCircleOutlined style={{ color: "#6D0AD7", fontSize: "1.5rem", fontWeight: "bold" }} />
                                            </Popover>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                                            <select
                                                className="select"
                                                style={{
                                                    width: "10rem",
                                                    height: "3rem",
                                                    borderRadius: "0.5625rem"
                                                }}
                                            >
                                                <option value="null" selected>Estado</option>
                                            </select>

                                            <select
                                                className="select"
                                                style={{
                                                    width: "12rem",
                                                    marginLeft: "1.3rem",
                                                    height: "3rem",
                                                    borderRadius: "0.5625rem"
                                                }}
                                            >
                                                <option value="null" selected>Cidade</option>
                                            </select>
                                        </div>
                                        <Input style={{ height: "3rem", borderRadius: "0.5625rem" }} placeholder="Bairro" />
                                        <Input style={{ height: "3rem", borderRadius: "0.5625rem" }} placeholder="Rua" />
                                        <Space direction="horizontal" className="nameLast">
                                            <Input style={{ height: "3rem", borderRadius: "0.5625rem" }} placeholder="Número" />
                                            <Input style={{ height: "3rem", borderRadius: "0.5625rem" }} placeholder="Complemento" />
                                        </Space>
                                    </div>
                                    <div className="containerH" style={{ justifyContent: "space-between", alignItems: "center", width: "52rem" }}>
                                        <Button
                                            className="buttonNews"
                                            style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                                            onClick={() => voltar()}
                                        >
                                            <LeftOutlined style={{ color: "#A1F71A" }} /> Voltar
                                        </Button>
                                        <Button
                                            className="buttonNews"
                                            style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                                            onClick={() => handleButtonClick(activeStep)}
                                        >
                                            Continuar <RightOutlined style={{ color: "#A1F71A" }} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        }
                        {activeStep === 4 &&
                            <div className="containerV" >
                                <div className="squareNo containerV" style={{ width: "55rem", height: "69vh", padding: "1rem" }} >
                                    <p className="Title" style={{ padding: "0" }}>Ótimo! Estamos quase lá...</p>
                                    <p className="f16">Escolha a quantidade de convidados. Relaxa! Você
                                        poderá incluir convidados extra depois...</p>
                                    <div
                                        className="containerH"
                                        style={{
                                            backgroundColor: "#6D0AD7",
                                            width: "12rem",
                                            borderRadius: ".75rem", 
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent:"center"
                                        }}
                                    >
                                        <Button
                                            style={{
                                                height: "4rem",
                                                width: "3rem",
                                                backgroundColor: "#6D0AD7",
                                                color: "white",
                                                border: "transparent",
                                                borderTopLeftRadius: "0.75rem",
                                                borderBottomLeftRadius: "0.75rem",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent:"center"

                                            }}
                                            onClick={handleDecrement}
                                            icon={<MinusOutlined style={{ fontWeight: "1000" }} />} />

                                        <Input
                                            className="buttonNews"
                                            style={{
                                                height: "4rem",
                                                width: "6rem",
                                                backgroundColor: "#6D0AD7",
                                                color: "white",
                                                border: "transparent", 
                                                textAlign:"center", 
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent:"center"

                                            }}
                                            value={value}
                                            onChange={handleChange(setValue)}
                                            onBlur={handleBlur(value, setValue)}
                                        />
                                        <Button
                                            style={{
                                                height: "4rem",
                                                width: "3rem",
                                                backgroundColor: "#6D0AD7",
                                                color: "white",
                                                borderTopRightRadius: "0.75rem",
                                                borderBottomRightRadius: "0.75rem",
                                                border: "transparent",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent:"center"
                                                
                                            }} 
                                            onClick={handleIncrement}
                                            icon={<b><PlusOutlined style={{ fontWeight: "1000", color: "#FF14FF" }} /></b>} />
                                            <Popover content={content2} placement="left" arrow={false}>
                                                <b><ExclamationCircleOutlined 
                                                    style={{ 
                                                        color: "#6D0AD7", 
                                                        fontSize: "1rem",
                                                        position: "absolute",
                                                        marginLeft:"1rem",
                                                        marginTop:"-0.4rem"
                                                    }} /></b>
                                            </Popover>
                                    </div>
                                    <div className="containerH" style={{width:"14rem"}}>
                                        <img src={Dolar}/>
                                        <p className="f16">Valor unitário</p>
                                        <p className="f15"><b>R$</b></p>
                                        <p className="f16" style={{color:"#6D0AD7"}}>00,00</p>
                                    </div>
                                    <div className="containerH" style={{width:"19rem", alignItems:"center"}}>
                                        <img src={Dolar}/>
                                        <p className="f16">Valor total a pagar</p>
                                        <p className="f15"><b>R$</b></p>
                                        <p className="f16" style={{color:"#6D0AD7"}}>0.000,00</p>
                                        <Popover content={content3} placement="left" arrow={false}>
                                            <b><ExclamationCircleOutlined 
                                            style={{ 
                                                color: "#6D0AD7", 
                                                fontSize: "1rem",
                                                marginLeft: ".5rem",
                                            }} /></b>
                                        </Popover>
                                    </div>
                                    <div className="containerH" style={{ justifyContent: "space-between", alignItems: "center", width: "52rem" }}>
                                        <Button
                                            className="buttonNews"
                                            style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                                            onClick={() => voltar()}
                                        >
                                            <LeftOutlined style={{ color: "#A1F71A" }} /> Voltar
                                        </Button>
                                        <Button
                                            className="buttonNews"
                                            style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                                            onClick={() => handleButtonClick(activeStep)}
                                        >
                                            Continuar <RightOutlined style={{ color: "#A1F71A" }} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
            {gerenciarEvento &&
                <div className="ParceriaMain">
                    <div className="TabList">
                        <div style={{ color: "#009EF6", marginRight: "9rem" }}>Gerenciando: Nome do evento</div>
                        <div className={`Tab ${selectedTab === 'Página do Evento' ? 'active' : ''}`} onClick={() => setSelectedTab('Página do Evento')}>
                            <p>Página do Evento</p>
                        </div>
                        <div className={`Tab ${selectedTab === 'Convites' ? 'active' : ''}`} onClick={() => setSelectedTab('Convites')}>
                            <p>Convites</p>
                        </div>
                        <div className={`Tab ${selectedTab === 'Gerenciar Convidados' ? 'active' : ''}`} onClick={() => setSelectedTab('Gerenciar Convidados')}>
                            <p>Gerenciar Convidados</p>
                        </div>
                        <div className={`Tab ${selectedTab === 'Estatísticas' ? 'active' : ''}`} onClick={() => setSelectedTab('Estatísticas')}>
                            <p>Estatísticas</p>
                        </div>
                        <div className={`Tab ${selectedTab === 'Recepção' ? 'active' : ''}`} onClick={() => setSelectedTab('Recepção')}>
                            <p>Recepção</p>
                        </div>
                        <div className={`Tab ${selectedTab === 'LookYou' ? 'active' : ''}`} onClick={() => setSelectedTab('LookYou')}>
                            <p>LookYou</p>
                        </div>
                    </div>
                    {selectedTab == 'Página do Evento' && <PgEvento />}
                    {selectedTab == 'Convites' && <PgConvite />}
                    {selectedTab == 'Gerenciar Convidados' && <PgConvidados />}
                    {selectedTab == 'Estatíticas' && <PgEstatiscas />}
                    {selectedTab == 'Recepção' && <PgRecep />}
                    {selectedTab == 'LookYou' && <PgLook />}

                </div>
            }
        </div>
    )
}