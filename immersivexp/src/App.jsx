import { Canvas, useFrame } from "@react-three/fiber";
import Watch from "./modelComps/Watch";
import { Environment, ScrollControls, useScroll, Scroll } from "@react-three/drei";
import { getProject, val } from "@theatre/core";
import { editable as e, SheetProvider, PerspectiveCamera, useCurrentSheet } from "@theatre/r3f";
import ScrollPageContainer from "./UI/ScrollPageContainer";
import ContentContainer from "./UI/ContentContainer";

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <color attach="background" args={["black"]} />
      <Environment preset="city" />
      <PerspectiveCamera theatreKey="Camera" makeDefault position={[0, 0, 0]} fov={90} near={0.1} far={70} />
      <e.spotLight theatreKey="spot light" intensity={1} position={[0,0,0]}/>
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
        <Scroll html >
          <ScrollPageContainer>
            <ContentContainer>
            <h1 className="text-3xl font-bald underline" >Hello</h1>
            </ContentContainer>
          </ScrollPageContainer>
       
          <ScrollPageContainer>
            <ContentContainer>
            <h1 className="text-3xl font-bald underline" >Hello</h1>
            </ContentContainer>
          </ScrollPageContainer>
       
          <ScrollPageContainer>
            <ContentContainer>
            <h1 className="text-3xl font-bald underline" >Hello</h1>
            </ContentContainer>
          </ScrollPageContainer>
       
          <ScrollPageContainer>
            <ContentContainer>
            <h1 className="text-3xl font-bald underline" >Hello</h1>
            </ContentContainer>
          </ScrollPageContainer>
       
         
        </Scroll>
      </ScrollControls>
    </Canvas>
  );
};

export default App;
