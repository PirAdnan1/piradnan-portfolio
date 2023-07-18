import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export const Experience = () => {
  const AnimateFrame = useRef()
  useFrame((state, delta) => {
    AnimateFrame.current.rotation.x += delta * 0.2;
    AnimateFrame.current.rotation.y += delta * 0.2;
    AnimateFrame.current.rotation.z += delta * 0.2;
  })

  return (
    <>
      {/* <OrbitControls /> */}
      <mesh ref={AnimateFrame} position={[1, 0.5, 0 ]}>
        <meshNormalMaterial />
        <boxBufferGeometry />
      </mesh>
    </>
  );
};
