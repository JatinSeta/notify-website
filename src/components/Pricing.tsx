import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star } from 'lucide-react';
import { motion, useInView } from 'motion/react';

const plans = [
  {
    name: 'Starter',
    price: '29',
    period: 'month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 500 messages/month',
      '2 WhatsApp numbers',
      'Basic templates',
      'Email support',
      'Basic analytics',
      'Single user access',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '79',
    period: 'month',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 2,500 messages/month',
      '5 WhatsApp numbers',
      'Advanced templates',
      'Priority support',
      'Advanced analytics',
      'Team collaboration (5 users)',
      'Message scheduling',
      'Custom branding',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large businesses with complex needs',
    features: [
      'Unlimited messages',
      'Unlimited WhatsApp numbers',
      'Custom templates',
      'Dedicated account manager',
      'Enterprise analytics',
      'Unlimited users',
      'API access',
      'Custom integrations',
      'White-label solution',
    ],
    popular: false,
  },
];

export function Pricing() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="mb-4 glass">
            Simple Pricing
          </Badge>
          <h2 className="mb-4 gradient-text">Choose Your Plan</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Card className={`relative h-full ${
                plan.popular 
                  ? 'glass-strong border-2' 
                  : 'glass hover:glass-strong'
              } transition-all duration-300`}
              style={{
                borderImage: plan.popular ? 'var(--gradient-primary) 1' : undefined,
                borderColor: plan.popular ? 'transparent' : undefined
              }}>
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.2 }}
                  >
                    <Badge 
                      className="text-white animate-pulse-glow"
                      style={{ background: 'var(--gradient-primary)' }}
                    >
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="mt-4">
                    {plan.price === 'Custom' ? (
                      <span className="text-3xl gradient-text">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl gradient-text">${plan.price}</span>
                        <span className="text-muted-foreground">/{plan.period}</span>
                      </>
                    )}
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: 0.8 + index * 0.2 + idx * 0.1 }}
                      >
                        <Check className="h-4 w-4 mt-1 mr-3 flex-shrink-0" 
                               style={{ color: 'var(--primary-solid)' }} />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full transition-all duration-300" 
                    variant={plan.popular ? 'default' : 'outline'}
                    style={plan.popular ? { background: 'var(--gradient-primary)' } : {}}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div 
          className="glass rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-center mb-8 gradient-text">Pricing FAQ</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "What happens if I exceed my message limit?",
                answer: "You'll be charged $0.05 per additional message. We'll notify you before you reach your limit."
              },
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees, no hidden costs. You only pay for your chosen plan."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
              >
                <h4 className="mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}