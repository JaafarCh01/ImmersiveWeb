import { Canvas, useFrame } from "@react-three/fiber";
import Watch from "./modelComps/Watch";
import { Environment, ScrollControls, useScroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { editable as e, SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <color attach="background" args={["lightblue"]} />
      <Environment preset="city" />
      <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 0, 0]} fov={90} near={0.1} far={70} />
      <ambientLight intensity={1} />
      <directionalLight intensity={3} />
      <Watch />
    </>
  );
};

const App = () => {
  const sheet = getProject('Watch me').sheet('Scene');

  return (
    <Canvas gl={{ physicallyCorrectLights: true, preserveDrawingBuffer: true }}>
      <ScrollControls pages={5}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  );
};

export default App;
