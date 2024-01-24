import { Button, Space } from 'antd';
import './style.css';
import { PlayCircleFilled } from '@ant-design/icons';



export default function TwoButtons() {
    return (
        <div className="buttons">
            <Button
                size="large"
                className="buttonMore"
            >
                Saiba mais
            </Button>
            <p className='videoButton'><PlayCircleFilled style={{fontSize:'2rem', marginRight:'.5rem'}}/> Assistir video </p>
        </div>
    )
}