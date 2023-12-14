import './style.css'; // Importando o arquivo CSS
import Self from '../assets/partners1.png'
import { Button } from 'antd';
import { DownOutlined, UpOutlined, SettingOutlined, UserOutlined, ExportOutlined }from '@ant-design/icons';
import { useState } from 'react';

const UserCard = ({ avatarUrl, firstName, lastName, userLevel }) => {
    const [seeMenu, setSeeMenu] = useState(false);
    return (
        <div className="user-card">
            <img src={Self} alt="User Avatar" className="user-avatar" />
            <div className="user-info">
                <h5>Nome Sobrenome</h5>
                <p>Partner</p>
            </div>
            <Button 
                className="settings-button" 
                icon={!seeMenu ?
                        (<DownOutlined style={{ fontSize: "13px", color:"white", fontWeight:"bold"}}/>)
                    :   (<UpOutlined style={{ fontSize: "13px", color:"white", fontWeight:"bold"}}/>)}
                onClick={()=>{setSeeMenu((old) => !old)}}/>

                {seeMenu && 
                    <div className="miniMenu">
                        <div className="miniItem">
                            <p>Minha Conta </p><UserOutlined />
                        </div>
                        <div className="miniItem">
                        <p>Configurações</p> <SettingOutlined />
                        </div>
                        <div className="miniItem">
                        <p>Sair</p> <ExportOutlined />
                        </div>

                    </div>}
        </div>
    );
};

export default UserCard;
