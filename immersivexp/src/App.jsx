import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <Canvas>
        <color attach="background" args={["lightblue"]} />
      </Canvas>
    </>
  );
};

export default App;
