import { useState } from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need a WhatsApp Business account?',
    answer: 'Yes, you need a WhatsApp Business account to use WhatsBot. If you don\'t have one, we provide step-by-step instructions to set it up during onboarding.',
  },
  {
    question: 'Can I send bulk messages to my customers?',
    answer: 'Yes, WhatsBot supports bulk messaging within WhatsApp\'s guidelines. You can send promotional messages to customers who have opted in and maintain compliance with WhatsApp\'s policies.',
  },
  {
    question: 'How secure is my customer data?',
    answer: 'We take data security seriously. WhatsBot is GDPR compliant with enterprise-grade encryption. Your customer data is encrypted in transit and at rest, and we never share your data with third parties.',
  },
  {
    question: 'Can I customize my messages?',
    answer: 'Absolutely! You can create custom message templates with dynamic fields like customer names, appointment times, and personalized offers. You can also include media files, links, and formatting.',
  },
  {
    question: 'What are the message limits for each plan?',
    answer: 'Starter plan includes 500 messages/month, Growth plan includes 2,500 messages/month, and Enterprise plan offers unlimited messages. Additional messages are charged at $0.05 each.',
  },
  {
    question: 'How does billing work?',
    answer: 'We bill monthly or annually based on your chosen plan. All plans include a 14-day free trial. You can upgrade, downgrade, or cancel anytime. No setup fees or hidden charges.',
  },
  {
    question: 'Do you offer customer support?',
    answer: 'Yes! Starter plans get email support, Growth plans get priority support, and Enterprise customers get a dedicated account manager. We also have comprehensive documentation and video tutorials.',
  },
  {
    question: 'How quickly can I set up WhatsBot?',
    answer: 'Most businesses are up and running within 30 minutes. Our setup wizard guides you through connecting your WhatsApp Business account, creating your first template, and sending your first automated message.',
  },
  {
    question: 'Can I integrate WhatsBot with my existing systems?',
    answer: 'Yes, we offer integrations with popular CRM systems, booking platforms, and e-commerce tools. Enterprise customers also get access to our API for custom integrations.',
  },
  {
    question: 'What happens if I exceed my message limit?',
    answer: 'We\'ll notify you before you reach 80% of your limit. If you exceed your limit, additional messages are charged at $0.05 each. You can also upgrade your plan at any time.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time with no penalties. Your account will remain active until the end of your current billing period.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 14-day free trial so you can test WhatsBot risk-free. After that, we offer refunds on a case-by-case basis for annual subscriptions within the first 30 days.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h2 className="mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Get answers to the most common questions about WhatsBot.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <h3 className="pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
            <h3 className="mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline">support@whatsbot.com</Badge>
              <Badge variant="outline">Live chat available</Badge>
              <Badge variant="outline">Response within 2 hours</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}