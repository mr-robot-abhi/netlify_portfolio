"use client"

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Users, Code, Calendar } from 'lucide-react'
import { experience } from '@/data/portfolio'

gsap.registerPlugin(ScrollTrigger)

const typeIcons = {
  freelance: Briefcase,
  mentoring: Users,
  opensource: Code,
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !timelineRef.current) return

    // Animate timeline items
    gsap.fromTo(
      timelineRef.current.children,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    )

    // Animate timeline line
    gsap.fromTo(
      ".timeline-line",
      { height: "0%" },
      {
        height: "100%",
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    )

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
    <section id="experience" ref={sectionRef} className="py-20 relative overflow-hidden">
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
              Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey in software development, from freelancing to mentoring 
              and contributing to open-source projects.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-muted">
              <div className="timeline-line w-full bg-gradient-to-b from-primary to-secondary" />
            </div>

            <div ref={timelineRef} className="space-y-12">
              {experience.map((exp, index) => {
                const Icon = typeIcons[exp.type as keyof typeof typeIcons] || Briefcase
                
                return (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative flex items-start space-x-8"
                  >
                    {/* Timeline Icon */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-4 border-primary rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex-1"
                    >
                      <Card className="glass hover:bg-white/10 dark:hover:bg-black/10 transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="gradient-text text-xl">
                                {exp.title}
                              </CardTitle>
                              <p className="text-lg font-semibold text-muted-foreground mt-1">
                                {exp.company}
                              </p>
                            </div>
                            <Badge variant="outline" className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3" />
                              <span>{exp.period}</span>
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {exp.description}
                          </p>
                          
                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-4 gap-6">
            <Card className="glass text-center p-6">
              <div className="text-3xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground">Years Coding</div>
            </Card>
            <Card className="glass text-center p-6">
              <div className="text-3xl font-bold gradient-text mb-2">50+</div>
              <div className="text-muted-foreground">Projects Built</div>
            </Card>
            <Card className="glass text-center p-6">
              <div className="text-3xl font-bold gradient-text mb-2">100+</div>
              <div className="text-muted-foreground">Students Mentored</div>
            </Card>
            <Card className="glass text-center p-6">
              <div className="text-3xl font-bold gradient-text mb-2">20+</div>
              <div className="text-muted-foreground">Open Source Contributions</div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}