import React from "react";
import { styled } from "styled-components";

//???
const Section = styled.div`
	display: flex;
	justify-content: center;
	@media only screen and (max-width: 768px) {
		width: 100%;
	}
`;

const Container = styled.div`
	width: 1400px;
	display: flex; //child elements automatically align like column or row with auto width and auto height
	justify-content: space-between; // defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container
	align-items: center;
	padding: 10px 0px;
`;

const Links = styled.div`
	display: flex;
	align-items: center;
	gap: 50px; // add  a gap of the wanted px count
`;

const List = styled.ul`
	display: flex;
	gap: 20px;
	list-style: none;

	@media only screen and (max-width: 768px) {
		display: none;
		padding: 10px;
	}
`;

const ListItem = styled.li`
	cursor: pointer; //so the cursor turns to the pointer when it hovers over the wanted element
`;

const Link = styled.div``;

const Logo = styled.img`
	height: 50px;
`;
const Icons = styled.div`
	display: flex;
	align-items: center;
	gap: 50px; // add  a gap of the wanted px count
`;
const Icon = styled.img`
	width: 20px;
	cursor: pointer;
`;
const Button = styled.button`
	width: 100px;
	padding: 10px;
	background-color: #da4ea2;
	color: white;
	border: none;
	border-radius: 20px;
	cursor: pointer;
`;

const NavBar = () => {
	return (
		<Section>
			<Container>
				<Links>
					<Logo src="./img/logo.png" />
					<List>
						<ListItem>Home</ListItem>
						<ListItem>Studio</ListItem>
						<ListItem>Work</ListItem>
						<ListItem>Contract</ListItem>
					</List>
				</Links>
				<Icons>
					<Icon src="./img/search.png" />
					<Button>Hire now </Button>
				</Icons>
			</Container>
		</Section>
	);
};

export default NavBar;
