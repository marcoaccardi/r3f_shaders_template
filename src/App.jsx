import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import "./App.scss";

const WaveShaderMaterial = shaderMaterial(
  //Uniform
  {},
  //Vertex Shader
  glsl`...`,
  // Fragment Shader
  glsl`...`
);

// shaders as JSX component
extend({ WaveShaderMaterial });

const Cube = () => {
  const mesh = useRef();
  <mesh ref={mesh}>
    {/* GEOMETRY */}
    <waveShaderMaterial wireframe={false} />
  </mesh>;
};

const Render = () => {
  return (
    <Canvas>
      <Cube />
    </Canvas>
  );
};

function App() {
  return <Render />;
}

export default App;
