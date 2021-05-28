import "./App.css";
import Sidebar from "./components/Sidebar.js";
import Header from "./components/Header.js";
import Headerbar2 from "./components/Headerbar2.js";
import Home from "./components/home";
import ManagementTeam from "./components/ManagementTeam";
import Grid from "@material-ui/core/Grid";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	withRouter,
} from "react-router-dom";

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Grid container spacing={1} Classname='container'>
					<Grid item xs={12} sm={2}>
						<Sidebar className='x' />
					</Grid>
					<Grid item xs={12} sm={8}>
						<Headerbar2 />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/ManagementTeam' component={ManagementTeam} />
							{/* <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/:id" component={User} /> */}
							{/* <Route component={NotFound} /> */}
						</Switch>
					</Grid>
				</Grid>
			</div>
		</Router>
	);
}

export default App;
