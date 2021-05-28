import React from 'react'
import AccountTreeOutlinedIcon from '@material-ui/icons/AccountTreeOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SecurityOutlinedIcon from '@material-ui/icons/SecurityOutlined';
import SidebarRow from "./SidebarRow"
import './sidebar.css';
function Sidebar() {
    return (
        <div className='sidebar'>           
            <SidebarRow title="Projects" Icon={AccountTreeOutlinedIcon}/>
            <SidebarRow title="Organization Profile" Icon={LocalMallOutlinedIcon}/>
            <SidebarRow title="Access Control" Icon={SecurityOutlinedIcon}/>
        </div>
    )
}

export default Sidebar
