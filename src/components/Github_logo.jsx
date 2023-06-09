/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 github_logo.gltf --transform
Author: pissang (https://sketchfab.com/YiChen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/github-octocat-c8a4795ce3fe4b21a4c40895cb9cb6a5
Title: GitHub Octocat
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
	const { nodes, materials } = useGLTF("/github_logo-transformed.glb");
	return (
		<group {...props} dispose={null}>
			<mesh
				geometry={nodes.Object_4.geometry}
				material={materials.material_0}
				position={[0, 9.99, 0.64]}
				scale={0.05}
			/>
			<mesh
				geometry={nodes.Object_6.geometry}
				material={materials.material_1}
				position={[0, 10, 1.49]}
				scale={0.05}
			/>
			<mesh
				geometry={nodes.Object_8.geometry}
				material={materials.material_2}
				position={[0, 9.99, 1.81]}
				scale={0.05}
			/>
			<mesh
				geometry={nodes.Object_10.geometry}
				material={materials.material_3}
				position={[0, 9.99, 1.8]}
				scale={0.05}
			/>
			<mesh
				geometry={nodes.Object_12.geometry}
				material={materials.material_3}
				position={[0, 10, 1.81]}
				scale={0.05}
			/>
			<mesh
				geometry={nodes.Object_14.geometry}
				material={materials.material_3}
				position={[0.01, 10, 1.76]}
				scale={0.05}
			/>
			<mesh
				geometry={nodes.Object_16.geometry}
				material={materials.material_6}
				position={[0, 9.99, 1.33]}
				scale={0.05}
			/>
		</group>
	);
}

useGLTF.preload("/github_logo-transformed.glb");
