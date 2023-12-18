import { Button } from 'antd';


export default function Modal({ tamanhoW, tamanhoH, title, img, texto, next, setMenu = () => { }, set = () => { } }) {

    const CloseOutClick = (e) => {
        if (e.target.id === "Fundo") {
            set(false);
            setMenu(false);
        }
    }


    return (
        <div
            style={{
                overflow: "hidden",
                zIndex: "10001!important",
                minWidth: "101%",
                minHeight: "210%",
                backdropFilter: "blur(10px)",
                backgroundColor: "#181C32CC",
                display: "flex",
                position: "fixed",
                top: "0",
                left: "0"
            }}
            onClick={CloseOutClick}>
            <div style={{ width: tamanhoW, height: tamanhoH, margin:"20vh 15vw", backgroundColor:"white", borderRadius: "1rem", display:"flex", flexDirection:"column", position:"absolute", alignItems:"center", justifyContent:"center" }}>
                <Button
                    className="close"
                    type="primary"
                    onClick={() => { setMenu(false); set(false)}}
                    shape="square"
                    size="small"
                >X</Button>
                <p>{title}</p>
                <img src={img} alt="Imagem do Modal" style={{ width: '100%', height: 'auto' }} />
                <p>{texto}</p>
                <button onClick={next}>Próximo</button>
            </div>
        </div>
    );
}


