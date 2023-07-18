import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Experience";

// components
import Interface from "./components/Interface";
import Container from "./components/Container";
function App() {
  return (
    <Container>
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={4} damping={0.2}>
      <Experience />
      <Scroll html>
        <Interface />
      </Scroll>
      </ScrollControls>
    </Canvas>
    </Container>
  );
}

export default App;
