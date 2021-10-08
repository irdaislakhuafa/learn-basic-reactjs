// import logo from './logo.svg';
// import './App.css';
import Beranda from './Component/Class/Beranda';
import BootstrapComp from './Component/Class/BootstrapComp';
import Parent from './Component/Class/ParentChild/Parent';
import Home from './Component/Functional/Home';
import { NavbarComp } from './Component/Functional/RoutingComp/NavbarComp';

function App() {
	return (
		<div className="App">
			{/* <Home /> */}
			{/* <Parent /> */}
			{/* <BootstrapComp /> */}
			<NavbarComp brand="Irda Islakhu Afa" />
		</div>
	);
}

export default App;
