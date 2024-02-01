import Header from "../components/header/Header";
import LandingPage from "../views/LandingPage";

const Main = props => {
	return (
		<>
			<Header />
			{props.children}
			{/* <footer>Main Footer</footer> */}
			<LandingPage/>
		</>
	);
};

export default Main;
