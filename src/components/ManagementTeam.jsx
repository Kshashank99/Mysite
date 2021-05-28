import React from "react";
import PropTypes from "prop-types";
// import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Managementbar from "./Managementbar";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Badge from "@material-ui/core/Badge";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
const GreenButton = withStyles({
	root: {
		width: "160px",
		backgroundColor: "rgba(39, 174, 96, 0.3)",
		border: "1px solid #27AE60",
		boxSizing: "border-box",
		borderRadius: "20px",
		fontSize: "12px",
		color: "#27AE60",
		fontWeight: "normal",
	},
})(Button);
const RedButton = withStyles({
	root: {
		width: "160px",
		backgroundColor: "rgba(255, 8, 8, 0.3)",
		border: "1px solid #FF0808",
		boxSizing: "border-box",
		borderRadius: "20px",
		fontSize: "12px",
		color: "#FF0808",
		fontWeight: "normal",
	},
})(Button);
const GrayButton = withStyles({
	root: {
		width: "160px",
		backgroundColor: "#F2F2F2",
		border: "1px solid #BDBDBD",
		boxSizing: "border-box",
		borderRadius: "20px",
		fontSize: "12px",
		color: "#BDBDBD",
		fontWeight: "normal",
	},
})(Button);
const useRowStyles = makeStyles({
	root: {
		width: "50%",
		"& > *": {
			borderBottom: "unset",
		},
	},
});

function createData(name, calories, fat, carbs, protein, price) {
	return {
		name,
		calories,
		fat,
		carbs,
		protein,
		price,
		history: [{ date: "2020-01-05", customerId: "11091700", amount: 3 }],
	};
}

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const classes = useRowStyles();
	const [count, setCount] = React.useState(1);
	const [invisible, setInvisible] = React.useState(false);

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton
						aria-label='expand row'
						size='small'
						onClick={() => setOpen(!open)}>
						{open ? (
							<RemoveCircleOutlineOutlinedIcon />
						) : (
							<AddCircleOutlineOutlinedIcon />
						)}
					</IconButton>
				</TableCell>
				<TableCell component='th' scope='row'>
					{row.name}
				</TableCell>
				<TableCell align='right'>{row.calories}</TableCell>
				<TableCell align='right'>{row.fat}</TableCell>
				<TableCell align='right'>{row.carbs}</TableCell>
				<TableCell align='right'>{row.protein}</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box margin={1}>
							<Typography variant='h6' gutterBottom component='div'>
								All aspects in the bidding module
							</Typography>
							<Table size='small' aria-label='purchases'>
								<TableHead>
									<TableRow>
										<TableCell>Access Control</TableCell>
										<TableCell>Permission</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{
										<TableRow>
											<TableCell component='th' scope='row'>
												{/* {historyRow.date} */}
												<FormControl component='fieldset'>
													<RadioGroup>
														<FormControlLabel
															value='All Access'
															control={<Radio />}
															label='All Access'
														/>
														<FormControlLabel
															value='Restricted Access'
															control={<Radio />}
															label='Restricted Access'
														/>
													</RadioGroup>
												</FormControl>
											</TableCell>
											<TableCell component='th' scope='row'>
												{/* {historyRow.date} */}
												<FormControl
													component='fieldset'
													className={classes.formControl}>
													<FormGroup>
														<FormControlLabel
															control={<Checkbox />}
															label='View items in access'
														/>
														<FormControlLabel
															control={<Checkbox />}
															label='Edit items in access'
														/>
														<FormControlLabel
															control={<Checkbox />}
															label='Create items in access'
														/>
														<FormControlLabel
															control={<Checkbox />}
															label='Delete items in access'
														/>
													</FormGroup>
													<FormHelperText>Be careful</FormHelperText>
												</FormControl>
											</TableCell>
										</TableRow>
									}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

Row.propTypes = {
	row: PropTypes.shape({
		calories: PropTypes.number.isRequired,
		carbs: PropTypes.number.isRequired,
		fat: PropTypes.number.isRequired,
		history: PropTypes.arrayOf(
			PropTypes.shape({
				amount: PropTypes.number.isRequired,
				customerId: PropTypes.string.isRequired,
				date: PropTypes.string.isRequired,
			})
		).isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		protein: PropTypes.number.isRequired,
	}).isRequired,
};

const rows = [
	createData(
		"Budget",
		<GreenButton variant='contained'>All Access</GreenButton>,
		<Typography>View | Create | Edit | Delete</Typography>,

		<Typography>1 min ago</Typography>,
		<FormControlLabel control={<Switch color='primary' />} />
	),

	createData(
		"Bidding",
		<RedButton variant='contained'>Restricted Access</RedButton>,
		<Typography>View | Create | Edit | Delete</Typography>,

		<Typography>1 min ago</Typography>,
		<FormControlLabel control={<Switch color='primary' />} />
	),
	createData(
		"Vendor Portal",
		<RedButton variant='contained'>Restricted Access</RedButton>,
		<Typography>View | Create </Typography>,

		<Typography>1 min ago</Typography>,
		<FormControlLabel control={<Switch color='primary' />} />
	),
	createData(
		"Purchase Order/Work Order",
		<RedButton variant='contained'>Restricted Access</RedButton>,
		<Typography>View | Create </Typography>,

		<Typography>1 min ago</Typography>,
		<FormControlLabel control={<Switch color='primary' />} />
	),
	createData(
		"Organisational Profile",
		<GreenButton variant='contained'>All Access</GreenButton>,
		<Typography>View | Create | Edit | Delete</Typography>,

		<Typography>1 min ago</Typography>,
		<FormControlLabel control={<Switch color='primary' />} />
	),
	createData(
		"Organisational Profile",
		<GrayButton variant='contained'>Restricted Access</GrayButton>,
		<Typography></Typography>,

		<Typography>1 min ago</Typography>,
		<FormControlLabel control={<Switch color='primary' />} />
	),
];

export default function ManagementTeam() {
	const [value, setValue] = React.useState("female");
	const [invisible, setInvisible] = React.useState(false);
	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<>
			<Managementbar />
			<TableContainer component={Paper}>
				<Table aria-label='collapsible table'>
					<TableHead>
						<TableRow>
							<TableCell />
							<TableCell>Deparment/Role Name</TableCell>
							<TableCell align='right'>Access Level</TableCell>
							<TableCell align='right'>Summary</TableCell>
							<TableCell align='right'>Last Updated</TableCell>
							<TableCell align='right'></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<Row key={row.name} row={row} />
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
