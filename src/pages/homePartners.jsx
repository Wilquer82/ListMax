import './homePartners.css';
import NavBarPartners from '../components/navbarPartner';
import { useState } from 'react';
import Parceria from '../components/partner/parceria';
import Comissoes from '../components/partner/comissoes';
import Config from '../components/partner/configuracoes';
import BackGround from '../components/backGround';



export default function HomePartners() {

    const [selectedTab, setSelectedTab] = useState('Parceria');

    return (
        <div>
            <NavBarPartners Local={"Partners"} />
            <div className="TabList" style={{marginTop:"4rem"}}>
                <div className={`Tab ${selectedTab === 'Parceria' ? 'active' : ''}`} onClick={() => setSelectedTab('Parceria')}>
                    <span>Parceria</span>
                </div>
                <div className={`Tab ${selectedTab === 'Comissões' ? 'active' : ''}`} onClick={() => setSelectedTab('Comissões')}>
                    <span>Comissões</span>
                </div>
                <div className={`Tab ${selectedTab === 'Configurações' ? 'active' : ''}`} onClick={() => setSelectedTab('Configurações')}>
                    <span> Configurações</span>
                </div>
            </div>
            {selectedTab == 'Parceria' && <Parceria />}
            {selectedTab == 'Comissões' && <Comissoes />}
            {selectedTab == 'Configurações' && <Config />}
        </div>
    )
}