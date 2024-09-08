import './App.css'

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei'
import RotatingCube  from './component/RotatingCube.jsx';

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Canvas style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <OrbitControls enableZoom={false} enablePan enableRotation/>
        <directionalLight position={[2.5, 8, 5]} color="red"></directionalLight>

        <RotatingCube></RotatingCube>
        <Sparkles count={100} scale={1} size={5}></Sparkles>
      </Canvas>

    </>
  )
}

export default App
