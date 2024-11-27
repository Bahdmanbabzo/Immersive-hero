import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


function Model() {
    const gltf = useLoader(GLTFLoader, '/lamborghini_terzo_millennio.glb')
    return <primitive object={gltf.scene} />
  }
  

function World(){
    return (
      <div className='h-screen w-screen'>
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Model />
            <OrbitControls />
        </Canvas>
      </div>
    );
};

export default World;