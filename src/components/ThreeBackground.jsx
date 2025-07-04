import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { 
  OrbitControls, 
  Stars, 
  Float, 
  Text3D, 
  Center,
  Environment
} from '@react-three/drei';
import { 
  EffectComposer,
  Bloom,
  ChromaticAberration
} from '@react-three/postprocessing';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '../App';

function FloatingGeometry({ position, geometry, color }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.7}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const points = useRef();
  const { isDark } = useTheme();
  
  const particlesCount = 1000;
  const positions = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05;
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={isDark ? "#00ffff" : "#667eea"}
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  const { isDark } = useTheme();
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color={isDark ? "#00ffff" : "#667eea"} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color={isDark ? "#ff00ff" : "#764ba2"} />
      
      <ParticleField />
      
      <FloatingGeometry 
        position={[-8, 2, -5]} 
        geometry={<icosahedronGeometry args={[1, 0]} />}
        color={isDark ? "#00ffff" : "#667eea"}
      />
      
      <FloatingGeometry 
        position={[8, -2, -3]} 
        geometry={<octahedronGeometry args={[1.2]} />}
        color={isDark ? "#ff00ff" : "#764ba2"}
      />
      
      <FloatingGeometry 
        position={[0, 4, -8]} 
        geometry={<tetrahedronGeometry args={[1.5]} />}
        color={isDark ? "#ffff00" : "#ff6b6b"}
      />
      
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1}
      />
    </>
  );
}

export default function ThreeBackground() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1 
    }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <Suspense fallback={null}>
          <Scene />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}