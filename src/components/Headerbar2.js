import React from "react";
import "./Headerbar2.css";
import logo from "./icons/logo.svg";
import oval from "./icons/Oval.svg";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { Toolbar } from "@material-ui/core";
function Headerbar2() {
	return (
		<div className='header2'>
			
			<Toolbar  className='header2' style={{marginLeft:'-40px'}}><RssFeedIcon style={{ fontSize: 25}}/>
            <Typography style={{fontSize: 15, marginRight:30 } }>Permission</Typography>
            <ViewComfyIcon style={{ fontSize: 25}}/>
            <Typography style={{fontSize: 15}}>Approval Matrix</Typography>
            </Toolbar>
            
		</div>
	);
}

export default Headerbar2;
