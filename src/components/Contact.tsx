import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Mail, Phone, Clock, MessageSquare } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need help getting started? Our team is here to help you succeed.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm mb-2">
                    Business Type
                  </label>
                  <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="salon" className="Selected-contact">Beauty & Salon</SelectItem>
                      <SelectItem value="fitness" className="Selected-contact">Fitness & Wellness</SelectItem>
                      <SelectItem value="healthcare" className="Selected-contact">Healthcare</SelectItem>
                      <SelectItem value="retail" className="Selected-contact">Retail & E-commerce</SelectItem>
                      <SelectItem value="restaurant" className="Selected-contact">Restaurant & Food</SelectItem>
                      <SelectItem value="events" className="Selected-contact">Events & Entertainment</SelectItem>
                      <SelectItem value="realestate" className="Selected-contact">Real Estate</SelectItem>
                      <SelectItem value="other" className="Selected-contact">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your business and how we can help..."
                    className="min-h-32"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Email Support</h3>
                    <p className="text-muted-foreground mb-2">
                      Get help from our support team
                    </p>
                    <a href="mailto:support@whatsbot.com" className="text-primary hover:underline">
                      support@whatsbot.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Phone Support</h3>
                    <p className="text-muted-foreground mb-2">
                      Speak directly with our team
                    </p>
                    <a href="tel:+1-555-123-4567" className="text-primary hover:underline">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Live Chat</h3>
                    <p className="text-muted-foreground mb-2">
                      Chat with us in real-time
                    </p>
                    <span className="text-primary">Available on our website</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2">Office Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM EST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="mb-4">Response Times</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl mb-1">2hrs</div>
                  <div className="text-sm text-muted-foreground">Email Response</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-1">24hrs</div>
                  <div className="text-sm text-muted-foreground">Issue Resolution</div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h3 className="mb-4">Follow Us</h3>
              <div className="flex justify-center gap-4">
                <Badge variant="outline">LinkedIn</Badge>
                <Badge variant="outline">Twitter</Badge>
                <Badge variant="outline">Facebook</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}