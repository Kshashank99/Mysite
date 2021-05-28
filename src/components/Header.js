import React from "react";
import "./header.css";
import mysite from "./icons/mysite.svg";
import oval from "./icons/Oval.svg";
import Subtract from "./icons/Subtract.svg";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Toolbar } from "@material-ui/core";
import Container from "@material-ui/core/Container";
function Header() {
	return (
		<React.Fragment>
			<Toolbar className='header'>
				<div className='header_left'>
					<img alt='avatar' src={Subtract} />
					<img alt='avatar' src={mysite} />
				</div>
				<div className='header-right'>
					<IconButton>
						<Avatar alt='avatar' src={oval} />
					</IconButton>
					<Typography>kishore</Typography>
					<IconButton>
						<NotificationsNoneIcon />
					</IconButton>
					<IconButton>
						<HelpOutlineIcon />
					</IconButton>
				</div>
			</Toolbar>
		</React.Fragment>
	);
}

export default Header;
