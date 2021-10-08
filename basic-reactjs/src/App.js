// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AboutComp } from './Component/Functional/RoutingComp/AboutComp';
import { HomeComp } from './Component/Functional/RoutingComp/HomeComp';
import { NavbarComp } from './Component/Functional/RoutingComp/NavbarComp';

function App() {
	return (
		<div className="App">
			{/* <Home /> */}
			{/* <Parent /> */}
			{/* <BootstrapComp /> */}
			<NavbarComp brand="Irda Islakhu Afa" />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={HomeComp} />
					<Route exact path="/about" component={AboutComp} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
