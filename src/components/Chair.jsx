/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/chair.gltf 
*/

import React from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

const Chair = (props) => {
  const { nodes, materials } = useGLTF('./models/chair.gltf')

  const leatherTextureProps = useTexture({
    // map: "./textures/leather/Leather_008_Base Color.jpg",
    normalMap: "./textures/leather/Leather_008_Normal.jpg",
    roughnessMap: "./textures/leather/Leather_008_Roughness.jpg",
    aoMap: "./textures/leather/Leather_008_Ambient Occlusion.jpg",
  });

  const fabricTextureProps = useTexture({
    // map: "./textures/fabric/Fabric_Knitted_006_basecolor.jpg",
    normalMap: "./textures/fabric/Fabric_Knitted_006_normal.jpg",
    roughnessMap: "./textures/fabric/Fabric_Knitted_006_roughness.jpg",
    aoMap: "./textures/fabric/Fabric_Knitted_006_ambientOcclusion.jpg",
  });
  return (
    <group {...props} dispose={null}>
       <mesh geometry={nodes.Chair.geometry} >
        <meshStandardMaterial
         {...leatherTextureProps}
        />
      </mesh>
      <mesh geometry={nodes.Chair.geometry} material={materials.Chair} />
      <mesh geometry={nodes.Cushion.geometry} material={materials.Cushion} position={[0, 0.064, 0.045]} />
      <mesh geometry={nodes.Legs1.geometry} material={materials.Legs} />
      <mesh geometry={nodes.Legs2.geometry} material={materials.Legs} visible={false}/>
    </group>
  )
}

useGLTF.preload('./models/chair.gltf')
export default Chair