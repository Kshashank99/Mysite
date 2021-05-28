import React from 'react'
import './sidebarRow.css'
import Typography from "@material-ui/core/Typography";
function SidebarRow({title,Icon}) {
    return (
        <div className='sidebarRow'>
            <Icon className='sidebarRow_icon'/>
            <Typography className='sidebarRow_title'>{title}</Typography>
        </div>
    )
}

export default SidebarRow
