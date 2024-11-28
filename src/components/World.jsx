import { Canvas, useThree, useFrame} from '@react-three/fiber';
import { OrbitControls, RandomizedLight, Stage } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect } from 'react';


function Model() {
    const gltf = useLoader(GLTFLoader, '/lamborghini_terzo_millennio.glb')
    return <primitive object={gltf.scene} />
  }
function CameraLogger() {
const { camera } = useThree();

useFrame(() => {
    console.log(camera.position);
});

return null;
}
  
function World(){
    return (
      <div className='h-screen w-screen'>
          <Canvas
            camera={{ position: [0, 2, -1.5], fov: 40 }}
          >
            <CameraLogger />
            <Stage adjustCamera={false} intensity={0.1} shadows="contact" environment="city">
                <Model />
            </Stage>
            <OrbitControls />
            <color attach="background" args={['#FDFBD4']} />
        </Canvas>
      </div>
    );
};

export default World;