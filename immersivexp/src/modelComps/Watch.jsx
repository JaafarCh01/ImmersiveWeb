import {useGLTF , useAnimations} from '@react-three/drei';

const Watch = () => {
    const model= useGLTF('./steampunk_watch-v1.glb');

    return (
        <>

        <mesh>
            <primitive object={model.scene}  />
        </mesh>
        </>
    )
}

export default Watch;