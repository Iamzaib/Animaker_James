import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Main = props => {
	return (
		<>
			<Header />
			{props.children}
			{/* <footer>Main Footer</footer> */}
			{/* <LandingPage/> */}
			<Footer/>
		</>
	);
};

export default Main;
