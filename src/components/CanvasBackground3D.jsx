import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const ParticleSwarm = ({ count = 400 }) => {
  const pointsRef = useRef(null);
  
  // Pre-generate random point coordinates in a sphere
  const [particles] = useState(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 15;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);     // x
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      arr[i * 3 + 2] = radius * Math.cos(phi);                  // z
    }
    return arr;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    // Slow rotational drift
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    
    // Subtle mouse attraction (shifting camera/points group slightly)
    const mx = state.pointer.x * 2;
    const my = state.pointer.y * 2;
    pointsRef.current.position.x += (mx - pointsRef.current.position.x) * 0.05;
    pointsRef.current.position.y += (my - pointsRef.current.position.y) * 0.05;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ff2d55"
        size={0.06}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.4}
        depthWrite={false}
        blending={2} // Additive blending
      />
    </points>
  );
};

const FloatingObject = () => {
  const meshRef = useRef(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={[4, 2, -5]}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshBasicMaterial 
        color="#ff2d55" 
        wireframe={true} 
        transparent={true} 
        opacity={0.08} 
      />
    </mesh>
  );
};

const CanvasBackground3D = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none',
      backgroundColor: '#030304'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 70% 30%, rgba(255, 45, 85, 0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <Canvas
        camera={{ position: [0, 0, 15], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ParticleSwarm count={350} />
          <FloatingObject />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CanvasBackground3D;
