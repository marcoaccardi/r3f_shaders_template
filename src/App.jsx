import "./App.scss";
import * as THREE from "three";
import { useRef, useState, useMemo } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import { shaderMaterial, OrbitControls } from "@react-three/drei";

//VERTEX SHADER
import vertex from "./shaders/vertexShader.glsl";
//FRAGMENT SHADER
import fragment from "./shaders/fragmentShader.glsl";

const Flag = () => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  //UNIFORMS
  const uniforms = useMemo(() => ({}), []);
  // R3F CLOCK ENGINE
  useFrame((state) => {
    const { clock } = state;
    // mesh.current.material.uniforms.u_time.value = clock.getElapsedTime();
  });

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        // uniforms={uniforms}
        // vertexShader={vertex}
        // fragmentShader={fragment}
        wireframe={false}
      />
    </mesh>
  );
};

const Render = () => {
  return (
    <Canvas camera={{ position: [1.0, 1.0, 1.0] }}>
      <axesHelper />
      <Flag />
      <OrbitControls />
    </Canvas>
  );
};

function App() {
  return <Render />;
}

export default App;
