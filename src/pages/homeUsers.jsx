import './homePartners.css';
import NavBarPartners from '../components/navbarPartner';
import { useState } from 'react';
import MyAcount from '../components/myAcount';
import UserConfig from '../components/userConfig';



export default function HomeUsers() {

    const [selectedTab, setSelectedTab] = useState('Home');

    return (
        <div className="MainPartners">
            <NavBarPartners Local={"Clients"} />
            <div className="TabList" style={{marginTop:"4rem", paddingLeft:"16rem"}}>
            <div 
                className={`Tab ${selectedTab === 'Home' ? 'active' : ''}`} 
                // onClick={() => setSelectedTab('Home')
            // }
                >
                <span>Home</span>
            </div>
            <div className={`Tab ${selectedTab === 'Minha Conta' ? 'active' : ''}`} onClick={() => setSelectedTab('Minha Conta')}>
                <span>Minha Conta</span>
            </div>
            <div className={`Tab ${selectedTab === 'Configurações' ? 'active' : ''}`} onClick={() => setSelectedTab('Configurações')}>
                <span>Configurações</span>
            </div>    
        </div>
            {/* {selectedTab == 'home' && <home />} */}
            {selectedTab == 'Minha Conta' && <MyAcount />}
            {selectedTab == 'Configurações' && <UserConfig />}
        </div>
    )
}