import './style.css'; // Importando o arquivo CSS
import Self from '../assets/partners1.png'
import { DownOutlined, UpOutlined, SettingOutlined, UserOutlined, ExportOutlined }from '@ant-design/icons';
import { useState } from 'react';

const UserCard = ({ avatarUrl, firstName, lastName, userLevel }) => {
    const [seeMenu, setSeeMenu] = useState(false);
    return (
        <div className="user-card text-white">
            <img src={Self} alt="User Avatar" className="user-avatar" />
            <div className="user-info">
                <span>Nome Sobrenome</span>
                <span>partner</span>
            </div>
            <button 
                className="settings-button" 
                icon={!seeMenu ?
                        (<DownOutlined style={{ fontSize: "13px", color:"white", fontWeight:"bold"}}/>)
                    :   (<UpOutlined style={{ fontSize: "13px", color:"white", fontWeight:"bold"}}/>)}
                onClick={()=>{setSeeMenu((old) => !old)}}/>

                {seeMenu && 
                    <div className="miniMenu">
                        <div className="miniItem">
                            <span>Minha Conta </span><UserOutlined />
                        </div>
                        <div className="miniItem">
                        <span>Configurações</span> <SettingOutlined />
                        </div>
                        <div className="miniItem">
                        <span>Sair</span> <ExportOutlined />
                        </div>

                    </div>}
        </div>
    );
};

export default UserCard;
