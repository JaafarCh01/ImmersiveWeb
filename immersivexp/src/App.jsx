import { Canvas } from "@react-three/fiber";
import Watch from "./modelComps/Watch";
import { OrbitControls, Environment , ScrollControls, useScroll} from "@react-three/drei";
import { getProject, val } from "@theatre/core";

import{
  SheetProvider, PerspectiveCamera, useCurrentSheet
} from "@theatre/r3f"


const App = () => {
  return (
    <>
      <Canvas gl={{physicallyCorrectiLights: true}}>
        <color attach="background" args={["lightblue"]} />
        <Environment preset="city" />
        <OrbitControls />
        <ambientLight intensity={1} />
        <directionalLight intensity={3} />
        <Watch />
      </Canvas>
    </>
  );
};

export default App;
