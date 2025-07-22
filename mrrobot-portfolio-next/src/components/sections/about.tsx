"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { personalInfo, skills } from '@/data/portfolio'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !skillsRef.current) return

    // Animate skills cards on scroll
    gsap.fromTo(
      skillsRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    )

    // Animate skill bars
    const skillBars = document.querySelectorAll('.skill-bar')
    skillBars.forEach((bar) => {
      const level = bar.getAttribute('data-level')
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: `${level}%`,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-orbitron font-bold gradient-text">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div ref={skillsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <motion.div key={category} variants={itemVariants}>
                <Card className="glass hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-xl capitalize gradient-text">
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {skillList.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="flex items-center space-x-2">
                            <span className="text-lg">{skill.icon}</span>
                            <span className="font-medium">{skill.name}</span>
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div
                            className="skill-bar h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/20"
                            data-level={skill.level}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Fun Facts */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-6">
            <Card className="glass text-center p-6">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </Card>
            <Card className="glass text-center p-6">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </Card>
            <Card className="glass text-center p-6">
              <div className="text-3xl font-bold gradient-text mb-2">100+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}