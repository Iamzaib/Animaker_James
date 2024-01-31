import Header from "../components/header/Header";

const Main = props => {
	return (
		<>
			<Header />
			{props.children}
			{/* <footer>Main Footer</footer> */}
		</>
	);
};

export default Main;
