import React from "react";
import { styled } from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CubeObject from "./CubeObject";

//???
const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	display: flex;
	justify-content: center;
`;

const Container = styled.div`
	height: 100vh;
	scroll-snap-align: center;
	width: 1400px;
	display: flex;
	justify-content: center;
`;

//everything from the left in the hero component
const Left = styled.div`
	flex: 1;
	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

//everything from the right in the hero component
const Right = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 20px;
	@media only screen and (max-width: 768px) {
		align-items: center;
		text-align: center;
	}
`;

const Title = styled.h1`
	font-size: 74px;
	@media only screen and (max-width: 768px) {
		font-size: 60px;
	}
`;

const WhatIDo = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const Line = styled.img`
	height: 5px;
`;

const Subtitle = styled.h2`
	color: #da4ea2;
`;

const Desc = styled.p`
	font-size: 24px;
	color: lightgray;
`;

const Button = styled.button`
	background-color: #da4ea2;
	color: white;
	font-weight: 500;
	width: 100px;
	height: 50px;
	border: none;
	border-radius: 50px;
	cursor: pointer;
`;

const Who = () => {
	return (
		<Section>
			<Container>
				<Left>
					<Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
						{/* allows you to orbit around the element and zoom in and out if it is not disable */}
						<OrbitControls enableZoom={false} autoRotate={true} />
						{/* enableZoom={false} */}

						{/* give light equals to every corner of the render    we can also change the intensity*/}
						<ambientLight intensity={1} />
						<directionalLight position={[3, 2, 1]} />
						<CubeObject />
					</Canvas>
				</Left>
				<Right>
					<Title> Think think out the square space</Title>
					<WhatIDo>
						<Line src="./img/line.png" />
						<Subtitle> who i am </Subtitle>
					</WhatIDo>
					<Desc>a creative individual for software development</Desc>
					<Button> see my work </Button>
				</Right>
			</Container>
		</Section>
	);
};

export default Who;
