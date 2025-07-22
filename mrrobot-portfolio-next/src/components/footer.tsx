"use client"

import { motion } from 'framer-motion'
import { Heart, Code, Coffee } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border/50 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-orbitron font-bold gradient-text">
              mr-robot-abhi
            </h3>
            <p className="text-muted-foreground mt-2">
              Full-Stack Developer & Digital Architect
            </p>
          </div>

          {/* Made with love */}
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>and</span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code className="w-4 h-4 text-blue-500" />
            </motion.div>
            <span>and lots of</span>
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Coffee className="w-4 h-4 text-amber-600" />
            </motion.div>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Built with Next.js 15, Tailwind CSS, Framer Motion & GSAP
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}