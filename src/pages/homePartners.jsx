import './homePartners.css';
import NavBarPartners from '../components/navbarPartner';
import { useState } from 'react';
import Parceria from '../components/parceria';



export default function HomePartners() {

    const [selectedTab, setSelectedTab] = useState('Parceria');
   
    return (
        <div className="MainPartners">
            <NavBarPartners />
            <div className="TabList">
            <div className={`Tab ${selectedTab === 'Parceria' ? 'active' : ''}`} onClick={() => setSelectedTab('Parceria')}>
                <p>Parceria</p>
            </div>
            <div className={`Tab ${selectedTab === 'Comissões' ? 'active' : ''}`} onClick={() => setSelectedTab('Comissões')}>
                <p>Comissões</p>
            </div>
            <div className={`Tab ${selectedTab === 'Configurações' ? 'active' : ''}`} onClick={() => setSelectedTab('Configurações')}>
                <p> Configurações</p>
            </div>    
        </div>
            <Parceria />
        </div>
    )
}