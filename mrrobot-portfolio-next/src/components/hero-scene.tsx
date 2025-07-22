"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export default function HeroScene() {
  const sceneRef = useRef<HTMLDivElement>(null)
  const monitorRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const codeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sceneRef.current) return

    const tl = gsap.timeline({ repeat: -1 })
    
    // Animate the cursor blinking
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      })
    }

    // Animate monitor glow
    if (monitorRef.current) {
      gsap.to(monitorRef.current, {
        boxShadow: "0 0 50px rgba(0, 255, 255, 0.3), 0 0 100px rgba(0, 255, 255, 0.1)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
    }

    // Animate code typing effect
    if (codeRef.current) {
      const codeLines = codeRef.current.children
      gsap.set(codeLines, { opacity: 0, x: -20 })
      
      gsap.to(codeLines, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.3,
        repeat: -1,
        repeatDelay: 3,
        ease: "power2.out"
      })
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div ref={sceneRef} className="relative w-full h-full flex items-center justify-center">
      {/* Desk */}
      <div className="relative">
        {/* Desk surface */}
        <div className="w-96 h-4 bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg shadow-2xl transform perspective-1000 rotateX-12" />
        
        {/* Monitor setup */}
        <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
          {/* Main ultrawide monitor */}
          <div 
            ref={monitorRef}
            className="relative w-80 h-44 bg-gray-900 rounded-lg border-4 border-gray-800 shadow-2xl"
          >
            {/* Screen */}
            <div className="w-full h-full bg-black rounded-md p-2 overflow-hidden">
              <div ref={codeRef} className="text-green-400 font-ubuntu text-xs leading-relaxed">
                <div className="flex items-center mb-1">
                  <span className="text-blue-400">const</span>
                  <span className="ml-2 text-yellow-400">developer</span>
                  <span className="text-white ml-2">=</span>
                  <span className="text-orange-400 ml-2">{`{`}</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">name:</span>
                  <span className="text-green-300 ml-2">'mr-robot-abhi'</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">skills:</span>
                  <span className="text-blue-300 ml-2">['React', 'Node.js']</span>
                  <span className="text-white">,</span>
                </div>
                <div className="ml-4">
                  <span className="text-purple-400">passion:</span>
                  <span className="text-green-300 ml-2">'Building the future'</span>
                </div>
                <div className="text-orange-400">{`}`}</div>
                <div className="flex items-center mt-2">
                  <span className="text-green-400">❯</span>
                  <span ref={cursorRef} className="ml-1 w-2 h-4 bg-green-400"></span>
                </div>
              </div>
            </div>
            
            {/* Monitor stand */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-gray-800 rounded-b-lg" />
          </div>

          {/* Secondary monitor */}
          <div className="absolute -top-4 -right-20 w-32 h-20 bg-gray-900 rounded-md border-2 border-gray-800 shadow-xl transform rotate-12">
            <div className="w-full h-full bg-black rounded-sm p-1">
              <div className="w-full h-2 bg-blue-500 rounded-sm mb-1"></div>
              <div className="w-3/4 h-1 bg-gray-600 rounded-sm mb-1"></div>
              <div className="w-1/2 h-1 bg-gray-600 rounded-sm"></div>
            </div>
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gray-800 rounded-b-md" />
          </div>
        </div>

        {/* Person silhouette */}
        <div className="absolute -top-20 -left-16">
          {/* Head */}
          <div className="w-8 h-8 bg-gradient-to-b from-amber-600 to-amber-700 rounded-full mb-1" />
          {/* Body */}
          <div className="w-12 h-16 bg-gradient-to-b from-blue-600 to-blue-700 rounded-lg mx-auto" />
          {/* Arms */}
          <div className="absolute top-8 -left-2 w-6 h-2 bg-amber-600 rounded-full transform -rotate-45" />
          <div className="absolute top-8 -right-2 w-6 h-2 bg-amber-600 rounded-full transform rotate-45" />
        </div>

        {/* Bonsai tree (Groot-style) */}
        <div className="absolute -top-8 right-8">
          {/* Pot */}
          <div className="w-6 h-4 bg-gradient-to-b from-red-800 to-red-900 rounded-b-lg" />
          {/* Tree trunk */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-amber-800" />
          {/* Leaves */}
          <motion.div 
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Small branches */}
          <div className="absolute -top-6 left-1 w-2 h-0.5 bg-amber-700 transform rotate-45" />
          <div className="absolute -top-6 right-1 w-2 h-0.5 bg-amber-700 transform -rotate-45" />
        </div>

        {/* Keyboard */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gray-800 rounded-md shadow-lg">
          <div className="grid grid-cols-12 gap-0.5 p-1 h-full">
            {Array.from({ length: 36 }).map((_, i) => (
              <motion.div
                key={i}
                className="bg-gray-700 rounded-sm"
                animate={{ 
                  backgroundColor: Math.random() > 0.95 ? "#00ffff" : "#374151"
                }}
                transition={{ 
                  duration: 0.1,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 2
                }}
              />
            ))}
          </div>
        </div>

        {/* Mouse */}
        <div className="absolute -top-2 right-16 w-4 h-6 bg-gray-800 rounded-lg shadow-md" />

        {/* Coffee mug */}
        <div className="absolute -top-4 left-8">
          <div className="w-4 h-6 bg-gradient-to-b from-blue-800 to-blue-900 rounded-b-lg" />
          <div className="absolute top-1 right-0 w-1 h-2 border border-blue-700 rounded-r-full" />
          {/* Steam */}
          <motion.div
            className="absolute -top-2 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-0.5 h-4 bg-gray-400 rounded-full opacity-50" />
          </motion.div>
        </div>

        {/* Ambient lighting effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>
    </div>
  )
}