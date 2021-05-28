import React from "react";
import "./Headerbar2.css";
import "./Managementbar.css";
import logo from "./icons/logo.svg";
import oval from "./icons/Oval.svg";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import ArrowBackOutlinedIcon from "@material-ui/icons/ArrowBackOutlined";
import { Toolbar } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";
import CreateIcon from "@material-ui/icons/Create";
import "./Headerbar2.css";

function Navbody() {
	return (
		<>
			<div className='header2'>
				<Toolbar>
					<Typography
						className='active'
						style={{
							fontSize: 25,
							marginRight: 30,
							fontWeight: "bold",
						}}>
						<b>
							<u>Access Control</u>
						</b>
					</Typography>

					<Typography className='active1' style={{ fontSize: 15 }}>
						Assigned Members
					</Typography>
				</Toolbar>
			</div>
		</>
	);
}

export default Navbody;
