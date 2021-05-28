import React from "react";
import "./home.css";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import CollapsibleTable from "./CollapsibleTable";
import Managementbar from "./Managementbar.jsx";
import Navbody from "./Navbody.jsx";
function home() {
	return (
		<div className='home'>
			<Toolbar className='child' style={{ marginLeft: "7px" }}>
				<Button
					className='btn'
					variant='contained'
					style={{
						backgroundColor: "#673AB7",
						color: "white",
						width: "190px",
					}}>
					+ Add Role
				</Button>
				<IconButton>
					<CreateIcon />
				</IconButton>
				<IconButton>
					<DeleteOutlineIcon />
				</IconButton>
			</Toolbar>
			{/* <Navbody /> */}
			<CollapsibleTable />
		</div>
	);
}

export default home;
