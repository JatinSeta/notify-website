import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MessageCircle, Users, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-20 pb-16 overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20"
          style={{ background: 'var(--gradient-primary)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-20"
          style={{ background: 'var(--gradient-secondary)' }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 glass animate-pulse-glow">
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by 500+ businesses worldwide
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl max-w-4xl mx-auto mb-6 gradient-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Never Miss a Customer — Automate WhatsApp Reminders & Boost Your Business
          </motion.h1>
          
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Send personalized, automated WhatsApp messages for appointments, promotions, and more. Save time, reduce no-shows, and increase repeat business.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#pricing')}
              className="relative overflow-hidden group animate-pulse-glow"
              style={{ background: 'var(--gradient-primary)' }}
            >
              <span className="relative z-10">Start Your Free Trial</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => scrollToSection('#how-it-works')}
              className="glass hover:glass-strong transition-all duration-300"
            >
              Learn How It Works
            </Button>
          </motion.div>

          {/* What is WhatsBot section */}
          <motion.div 
            className="glass rounded-2xl p-8 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="mb-4">What is WhatsBot?</h2>
            <p className="text-lg text-muted-foreground">
              WhatsBot automates WhatsApp messages so you can save time, reduce no-shows, and increase repeat business — all without lifting a finger.
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { icon: MessageCircle, title: "Save Time", description: "Automated messaging saves hours each week", gradient: "var(--gradient-primary)" },
              { icon: Users, title: "Reduce No-Shows", description: "Cut missed appointments by up to 40%", gradient: "var(--gradient-secondary)" },
              { icon: TrendingUp, title: "Increase Sales", description: "Boost revenue with timely promotions", gradient: "var(--gradient-accent)" }
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + (index * 0.2) }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
                  style={{ background: benefit.gradient }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <benefit.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Customer Testimonial */}
          <motion.div 
            className="rounded-2xl p-8 max-w-3xl mx-auto mb-12 glass"
            style={{ background: 'var(--gradient-primary)' }}
            initial={{ opacity: 0, rotateX: 45 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <blockquote className="text-xl mb-4 text-white">
              "WhatsBot helped us reduce no-shows by 40% and increased our booking rate significantly!"
            </blockquote>
            <cite className="text-white/80">— Sarah Johnson, Salon Owner</cite>
          </motion.div>

          {/* Trust Signals */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
          >
            {["500+ Businesses", "GDPR Compliant", "No Setup Fees"].map((text, index) => (
              <motion.div 
                key={text}
                className="flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Badge variant="outline" className="glass">{text}</Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
          >
            <Button 
              size="lg" 
              onClick={() => scrollToSection('#pricing')}
              className="relative overflow-hidden"
              style={{ background: 'var(--gradient-accent)' }}
            >
              <motion.span
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Get Started Now — No Credit Card Needed
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}