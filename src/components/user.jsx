import './style.css'; // Importando o arquivo CSS
import Self from '../assets/partners1.png'

const UserCard = ({ avatarUrl, firstName, lastName, userLevel }) => {
    return (
        <div className="user-card">
            <img src={Self} alt="User Avatar" className="user-avatar" />
            <div className="user-info">
                <h5>Nome Sobrenome</h5>
                <p>Partner</p>
            </div>
            <button className="settings-button">⚙️</button>
        </div>
    );
};

export default UserCard;
