import './homePartners.css';
import NavBarPartners from '../components/navbarPartner';
import { useState } from 'react';
import Parceria from '../components/partner/parceria';
import Comissoes from '../components/partner/comissoes';
import Config from '../components/partner/configuracoes';



export default function HomePartners() {

    const [selectedTab, setSelectedTab] = useState('Parceria');

    return (
        <div className="MainPartners">
            <NavBarPartners Local={"Partners"} />
            <div className="TabList" style={{marginTop:"4rem"}}>
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
            {selectedTab == 'Parceria' && <Parceria />}
            {selectedTab == 'Comissões' && <Comissoes />}
            {selectedTab == 'Configurações' && <Config />}
        </div>
    )
}