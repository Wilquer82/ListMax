// import button from 'antd/lib/button'; // Assuming you're using Ant Design for buttons
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';
import '../../pages/style.css';

export default function Navigationbuttons({ voltar, handlebuttonClick, activeStep, disabled }) {
    return (
        <div className="containerH" style={{ justifyContent: "space-between", alignItems: "center", width: "52rem" }}>
            <button
                className="buttonNewsP"
                style={{ height: "3rem", width: "10rem", color: "white" }}
                onClick={voltar}
            >
                <LeftOutlined style={{ color: "#A1F71A" }} /> Voltar
            </button>
            <button
                className="buttonNewsP"
                disabled={disabled}
                style={{ height: "3rem", width: "10rem", color: "white" }}
                onClick={() => handlebuttonClick(activeStep)}
            >
                Continuar <RightOutlined style={{ color: "#A1F71A" }} />
            </button>
        </div>
    );
};

