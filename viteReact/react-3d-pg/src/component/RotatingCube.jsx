import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

/**
 * A simple rotating cube component.
 *
 * This component uses the useFrame hook from react-three-fiber to
 * rotate the cube on each frame.
 *
 * @returns {JSX.Element} A JSX representation of a rotating cube.
 */
const RotatingCube = () => {

    // Create a ref to the mesh
    const meshRef = useRef();

    // Define the animation
    useFrame(() => {
        // Rotate the cube on each frame
        meshRef.current.rotation.x += 0.01;
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.z += 0.01;
    });

    // Return the JSX representation of the cube
    return (
        <mesh ref={meshRef}>
            {/* The cube's geometry. */}
            <boxGeometry />

            {/* The cube's material. */}
            <meshNormalMaterial color="#9CDBA6" />
        </mesh>
    )
}

export default RotatingCube;