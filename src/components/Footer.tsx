import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const footerLinks = {
  product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Integrations', href: '#' },
  ],
  resources: [
    { name: 'Documentation', href: '#' },
    { name: 'Video Tutorials', href: '#' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'Blog', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ],
  support: [
    { name: 'Help Center', href: '#' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact Support', href: '#contact' },
    { name: 'System Status', href: '#' },
  ],
};

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <footer className="bg-muted/30 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl">WhatsBot</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Automate your WhatsApp business communication with intelligent messaging, 
                reduce no-shows, and grow your business with personalized customer engagement.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">GDPR Compliant</Badge>
                <Badge variant="outline">SOC 2 Certified</Badge>
                <Badge variant="outline">99.9% Uptime</Badge>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h3 className="mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-primary/5 rounded-2xl p-8 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest WhatsBot updates, tips, and success stories delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg border border-border bg-background"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-muted-foreground text-sm">
                © 2024 WhatsBot. All rights reserved.
              </p>
              <div className="flex gap-4">
                {footerLinks.company.slice(2).map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">Made with ❤️ for businesses</span>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <h3 className="mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of businesses already using WhatsBot to transform their customer communication.
            </p>
            <Button size="lg" onClick={() => scrollToSection('#pricing')}>
              Start Your Free Trial Today
            </Button>
          </div>
        </div>
      </footer>
  );
}