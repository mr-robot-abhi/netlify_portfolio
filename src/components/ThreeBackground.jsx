import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef, useMemo } from 'react';
import { 
  OrbitControls, 
  Stars, 
  Float, 
  Text3D, 
  Center,
  Environment,
  Sphere,
  MeshDistortMaterial,
  Html,
  useProgress
} from '@react-three/drei';
import { 
  EffectComposer,
  Bloom,
  ChromaticAberration,
  Glitch,
  Noise
} from '@react-three/postprocessing';
import * as THREE from 'three';
import { useTheme } from '../App';

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: 'white', fontSize: '2rem' }}>
        Loading... {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

function FloatingGeometry({ position, geometry, color, speed = 1 }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.4;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 2) * 0.8;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef} position={position}>
        {geometry}
        <MeshDistortMaterial 
          color={color} 
          transparent 
          opacity={0.8}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const points = useRef();
  const { isDark } = useTheme();
  
  const particlesCount = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.02;
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
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
        size={0.1}
        color={isDark ? "#00ffff" : "#667eea"}
        transparent
        opacity={0.9}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function CyberGrid() {
  const gridRef = useRef();
  const { isDark } = useTheme();
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      gridRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <group ref={gridRef} position={[0, -20, -10]}>
      <gridHelper 
        args={[100, 50, isDark ? "#00ffff" : "#667eea", isDark ? "#ff00ff" : "#764ba2"]} 
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

function Scene() {
  const { isDark } = useTheme();
  
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={2} color={isDark ? "#00ffff" : "#667eea"} />
      <pointLight position={[-10, -10, -10]} intensity={1} color={isDark ? "#ff00ff" : "#764ba2"} />
      <spotLight 
        position={[0, 20, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={2} 
        color={isDark ? "#ffff00" : "#ff6b6b"}
      />
      
      <ParticleField />
      <CyberGrid />
      
      <FloatingGeometry 
        position={[-12, 3, -8]} 
        geometry={<icosahedronGeometry args={[2, 1]} />}
        color={isDark ? "#00ffff" : "#667eea"}
        speed={0.8}
      />
      
      <FloatingGeometry 
        position={[12, -3, -6]} 
        geometry={<octahedronGeometry args={[2.5]} />}
        color={isDark ? "#ff00ff" : "#764ba2"}
        speed={1.2}
      />
      
      <FloatingGeometry 
        position={[0, 8, -12]} 
        geometry={<tetrahedronGeometry args={[3]} />}
        color={isDark ? "#ffff00" : "#ff6b6b"}
        speed={0.6}
      />
      
      <FloatingGeometry 
        position={[-8, -6, -4]} 
        geometry={<dodecahedronGeometry args={[1.8]} />}
        color={isDark ? "#ff6b6b" : "#667eea"}
        speed={1.5}
      />
      
      <Stars 
        radius={150} 
        depth={80} 
        count={8000} 
        factor={6} 
        saturation={0} 
        fade 
        speed={2}
      />
    </>
  );
}

export default function ThreeBackground() {
  const { isDark } = useTheme();
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: -1 
    }}>
      <Canvas 
        camera={{ position: [0, 0, 15], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
          <Environment preset={isDark ? "night" : "sunset"} />
          <EffectComposer>
            <Bloom 
              intensity={isDark ? 2 : 1} 
              luminanceThreshold={0.2} 
              luminanceSmoothing={0.9} 
            />
            <ChromaticAberration offset={[0.002, 0.002]} />
            {isDark && <Glitch delay={[1.5, 3.5]} duration={[0.6, 1.0]} strength={[0.3, 1.0]} />}
            <Noise opacity={0.02} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}