import { useState } from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";

import SideBar from "../SideBar/SideBar";

const { Content } = Layout;

function App() {
	const [selectedKey, setSelectedKey] = useState(null);

	return (
		<Layout>
			<SideBar setSelectedKey={setSelectedKey} />
			<Layout>
				<Content>
					<Switch>
						<Route exact path="/dashboard">
							<h1>Dashboard</h1>
						</Route>
						<Route exact path="/profile">
							<h1>Profile</h1>
						</Route>
						<Route exact path="/adduser/adduser">
							<h1>Add users</h1>
						</Route>
						<Route exact path="/users/listUsers">
							<h1>List of users</h1>
						</Route>
						<Route exact path="/users/language">
							<h1>Search by language</h1>
						</Route>
						<Route exact path="/users/country">
							<h1>Search by country</h1>
						</Route>
						<Route exact path="/users/city">
							<h1>Search by city</h1>
						</Route>
						<Route exact path="/logout">
							<h1>Logout</h1>
						</Route>
					</Switch>
				</Content>
			</Layout>
		</Layout>
	);
}

export default App;
