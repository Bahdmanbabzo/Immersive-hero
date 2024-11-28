import { Canvas, useThree, useFrame} from '@react-three/fiber';
import { OrbitControls, RandomizedLight, Stage } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { animate } from 'motion';


function Model() {
    const gltf = useLoader(GLTFLoader, '/lamborghini_terzo_millennio.glb')
    return <primitive object={gltf.scene} />
  }
function AnimateCamera() {
    const { camera } = useThree();
    animate(camera.position, { x: 2, y: 0, z: 3 }, { duration: 4, ease: 'easeInOut', delay:0.75 });
    return null;
}
  
function World(){
    return (
      <div className='h-screen w-screen fixed top-0'>
          <Canvas
            camera={{ position: [1, 1, -3], fov: 30 }}
          >
            <AnimateCamera />
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