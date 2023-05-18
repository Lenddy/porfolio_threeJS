import "./App.css";
import Hero from "./components/hero";
import Works from "./components/Works";
import Who from "./components/Who";
import Contact from "./components/Contact";
import { styled } from "styled-components";
// import Test from "./components/Test";

//styles for the back ground
const Container = styled.div`
	height: 100vh;
	scroll-snap-type: y mandatory;
	scroll-behavior: smooth;
	overflow-y: auto;
	color: white;
	background: url("./img/bg.jpeg");
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	&::-webkit-scrollbar {
		display: none; /* Chrome, Safari, and Opera */
	}
`;

function App() {
	return (
		<Container className="App">
			<Hero></Hero>
			<Who></Who>
			<Works></Works>
			<Contact></Contact>
			{/* <Test></Test> */}
		</Container>
	);
}

export default App;
