import Button from 'antd/lib/button'; // Assuming you're using Ant Design for buttons
import LeftOutlined from '@ant-design/icons/LeftOutlined';
import RightOutlined from '@ant-design/icons/RightOutlined';

export default function NavigationButtons({ voltar, handleButtonClick, activeStep, disabled }) {
    return (
        <div className="containerH" style={{ justifyContent: "space-between", alignItems: "center", width: "52rem" }}>
            <Button
                className="buttonNews"
                style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                onClick={voltar}
            >
                <LeftOutlined style={{ color: "#A1F71A" }} /> Voltar
            </Button>
            <Button
                className="buttonNews"
                disabled={disabled}
                style={{ height: "3rem", width: "10rem", backgroundColor: "#6D0AD7", color: "white" }}
                onClick={() => handleButtonClick(activeStep)}
            >
                Continuar <RightOutlined style={{ color: "#A1F71A" }} />
            </Button>
        </div>
    );
};

