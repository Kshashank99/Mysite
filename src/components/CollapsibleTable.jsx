import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import { Link, NavLink } from "react-router-dom";
import { Route, Switch, browserHistory, IndexRoute } from "react-router-dom";

const GreenButton = withStyles({
	root: {
		backgroundColor: "rgba(39, 174, 96, 0.3)",
		border: "1px solid #27AE60",
		boxSizing: "border-box",
		borderRadius: "20px",
		fontSize: "10px",
	},
})(Button);

const redStyles = makeStyles({
	contained: {
		backgroundColor: "red",
	},
});
const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		"&:nth-of-type(odd)": {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData("Management Team", 159, 6.0, 24, 4.0),
	createData("Procurement Team", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("IT Team", 305, 3.7, 67, 4.3),
	createData("Super Admin", 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

export default function CustomizedTables() {
	const classes = useStyles();

	return (
		<TableContainer component={Paper} style={{ marginLeft: "25px" }}>
			<Table className={classes.table} aria-label='customized table'>
				<TableHead>
					<TableRow style={{ BackgroundColor: "yellow" }}>
						<StyledTableCell
							style={{
								backgroundColor: "#F2F2F2",
								color: "black",
								fontWeight: "bolder",
							}}>
							Deparment/Role Name
						</StyledTableCell>
						<StyledTableCell
							style={{
								backgroundColor: "#F2F2F2",
								color: "black",
								fontWeight: "bolder",
							}}
							align='right'>
							Access Level
						</StyledTableCell>
						<StyledTableCell
							style={{
								backgroundColor: "#F2F2F2",
								color: "black",
								fontWeight: "bolder",
							}}
							align='right'>
							No of members
						</StyledTableCell>
						<StyledTableCell
							style={{
								backgroundColor: "#F2F2F2",
								color: "black",
								fontWeight: "bolder",
							}}
							align='right'>
							Last Updated
						</StyledTableCell>
						<StyledTableCell
							style={{
								backgroundColor: "#F2F2F2",
								color: "black",
								fontWeight: "bolder",
							}}
							align='right'></StyledTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.name}>
							<StyledTableCell
								component='th'
								scope='row'
								style={{
									backgroundColor: "white",
									color: "black",
									textDecoration: " none",
								}}>
								<NavLink
									className='nav-link'
									exact
									to='/ManagementTeam'
									style={{
										backgroundColor: "white",
										color: "black",
										textDecoration: " none",
										fontWeight: "bolder",
									}}>
									{row.name}
								</NavLink>
							</StyledTableCell>
							<StyledTableCell
								style={{ backgroundColor: "white", color: "black" }}
								align='right'>
								<GreenButton variant='contained' style={{ width: "160px" }}>
									All Access
								</GreenButton>
							</StyledTableCell>
							<StyledTableCell
								style={{ backgroundColor: "white", color: "black" }}
								align='right'>
								{row.fat}
							</StyledTableCell>
							<StyledTableCell
								style={{ backgroundColor: "white", color: "black" }}
								align='right'>
								1 min ago
							</StyledTableCell>
							<StyledTableCell
								style={{ backgroundColor: "white", color: "black" }}
								align='right'>
								<VisibilityOutlinedIcon />
							</StyledTableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
