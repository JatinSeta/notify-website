import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { QrCode, MessageSquare, Clock, BarChart3 } from 'lucide-react';
import { motion, useInView } from 'motion/react';

const steps = [
  {
    number: 1,
    title: 'Connect Customers',
    description: 'Customers add your WhatsApp bot via QR code or link — no downloads needed.',
    icon: QrCode,
  },
  {
    number: 2,
    title: 'Personalize Messages',
    description: 'Create message templates with dynamic fields (names, dates, offers).',
    icon: MessageSquare,
  },
  {
    number: 3,
    title: 'Automate Sending',
    description: 'Your bot sends messages automatically at scheduled times.',
    icon: Clock,
  },
  {
    number: 4,
    title: 'Monitor & Engage',
    description: 'Track message delivery and replies through an intuitive dashboard.',
    icon: BarChart3,
  },
];

export function HowItWorks() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4 glass">
            Simple Setup
          </Badge>
          <h2 className="mb-4 gradient-text">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes with our simple, 4-step process to start automating your WhatsApp messages.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="relative text-center glass hover:glass-strong transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white"
                    style={{ background: 'var(--gradient-primary)' }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: `var(--gradient-${index % 2 === 0 ? 'secondary' : 'accent'})` }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {/* Connection line to next step */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-50" />
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="mb-4">Ready to Start?</h3>
            <p className="text-muted-foreground">
              Get started in minutes with no demo needed — just create your account and start automating!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}