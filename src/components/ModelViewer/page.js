"use client"
import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react"; 
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three"; 
import { useFrame } from "@react-three/fiber";

const Logo3D = ({src}) => {
  
  const Modelsrc = useGLTF(src);


  // Create a custom material to change the color of the model
  const customMaterial = new MeshStandardMaterial({
    color: "orange",
    roughness: 0.2,
    metalness: 0.8,
  });

  // Apply the custom material to all meshes in the model to change the color of the model
  // Modelsrc.scene.traverse((child) => {
  //   if (child.isMesh) {
  //     child.material = customMaterial;
  //   }
  // });
  return (
    <primitive object={Modelsrc.scene} scale={2} position={[0,-4,0]} rotation={[0,-50,0]} />
  );
};

const ModelViewer = ({src}) => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 8,    //Field of view of the camera, representing how wide the camera's view is
        near: 0.1,  //Near clipping plane distance. Objects closer than this won't be rendered.
        far: 0,     //Far clipping plane distance. Normally, objects farther than this won't be rendered
        position: [50, 50, 30],    //The initial position of the camera. It's an array representing the x, y, and z coordinates of the camera in the scene.
      }}
      style={{display:'flex', width: "auto", height: "300px" }}
    >
      <Suspense >
        <OrbitControls
          autoRotate={false}
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        /> {/* Add directional light */}
        <directionalLight intensity={5} position={[10, 10, 5]} />

        <Logo3D src={src}/>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;


