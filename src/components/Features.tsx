import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  MessageSquare, 
  FileText, 
  Calendar, 
  Users, 
  Image, 
  BarChart3, 
  Shield, 
  Zap 
} from 'lucide-react';
import { motion, useInView } from 'motion/react';

const features = [
  {
    title: 'WhatsApp Business Integration',
    description: 'Seamless integration with WhatsApp Business API for reliable messaging.',
    icon: MessageSquare,
  },
  {
    title: 'Customizable Templates',
    description: 'Create personalized message templates with dynamic fields and rich formatting.',
    icon: FileText,
  },
  {
    title: 'Flexible Scheduling',
    description: 'Schedule one-time or recurring messages at optimal times for your business.',
    icon: Calendar,
  },
  {
    title: 'Multi-User Management',
    description: 'Manage multiple users and locations from a single, centralized dashboard.',
    icon: Users,
  },
  {
    title: 'Rich Media Support',
    description: 'Send images, videos, PDFs, and other media files with your messages.',
    icon: Image,
  },
  {
    title: 'Analytics Dashboard',
    description: 'Detailed reporting and analytics to track message performance and engagement.',
    icon: BarChart3,
  },
  {
    title: 'Data Privacy & Security',
    description: 'GDPR compliant with enterprise-grade security and data protection.',
    icon: Shield,
  },
  {
    title: 'No-Code Setup',
    description: 'Easy-to-use interface that requires no technical skills or coding knowledge.',
    icon: Zap,
  },
];

export function Features() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 animate-pulse" 
             style={{ background: 'var(--gradient-accent)' }} />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full opacity-10 animate-pulse" 
             style={{ background: 'var(--gradient-secondary)' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4 glass">
            Powerful Features
          </Badge>
          <h2 className="mb-4 gradient-text">Everything You Need to Automate WhatsApp</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive platform provides all the tools you need to streamline your customer communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const gradients = ['var(--gradient-primary)', 'var(--gradient-secondary)', 'var(--gradient-accent)'];
            const gradient = gradients[index % gradients.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full glass hover:glass-strong transition-all duration-300 group">
                  <CardContent className="p-6">
                    <motion.div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ background: gradient }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <h3 className="mb-3 group-hover:gradient-text transition-all duration-300">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="mb-4 gradient-text">Two-Way Communication</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Not just automated sending — engage in real conversations with your customers through our intuitive messaging interface.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Real-time messaging", "Message history", "File sharing", "Quick replies"].map((text, index) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 1 + (index * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge variant="outline" className="glass">{text}</Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}