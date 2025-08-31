import React from 'react'
import { Navigation } from './Navigation.tsx';
import { HeroSection } from './HeroSection.tsx';
import { HowItWorks } from './HowItWorks.tsx';
import { Features } from './Features.tsx';
import { TargetBusinesses } from './TargetBusinesses.tsx';
import { Pricing } from './Pricing';
import { SuccessStories } from './SuccessStories.tsx';
import { Reviews } from './Reviews.tsx';
import { FAQ } from './FAQ.tsx';
import { Contact } from './Contact.tsx';
import { Footer } from './Footer.tsx';
import { motion } from 'motion/react';
export default function Home() {
  return (
   <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation />
      <main className="relative">
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <motion.div
            className="absolute top-1/4 right-8 w-1 h-24 rounded-full bg-primary/10"
            animate={{
              scaleY: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-8 w-1 h-20 rounded-full bg-accent/10"
            animate={{
              scaleY: [1, 1.5, 1],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-secondary/20"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
        
        <div className="relative z-10">
          <HeroSection />
          <HowItWorks />
          <Features />
          <TargetBusinesses />
          <Pricing />
          <SuccessStories />
          <Reviews />
          <FAQ />
          <Contact />
        </div>
       
      </main>
      <Footer />
    </motion.div>
  )
}
