import { Button, Space } from 'antd';
import './style.css';
import { PlayCircleOutlined } from '@ant-design/icons';



export default function TwoButtons() {
    return (
        <Space direction="horizontal" className="buttons">
            <Button
                size="large"
                className="buttonMore"
            >
                Saiba mais
            </Button>
            <Button
                size="large"
                className="videoButton"
                icon={<PlayCircleOutlined />}
            >
                Assistir video
            </Button>
        </Space>
    )
}