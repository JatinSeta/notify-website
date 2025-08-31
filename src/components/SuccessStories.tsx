import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, TrendingUp, Users, Clock } from 'lucide-react';

const stories = [
  {
    company: 'Bella Beauty Salon',
    industry: 'Beauty & Wellness',
    challenge: 'High no-show rates were costing the salon $2,000+ monthly in lost revenue.',
    solution: 'Implemented automated appointment reminders 24 hours and 2 hours before appointments.',
    results: [
      '40% reduction in no-shows',
      '$1,800 monthly revenue recovery',
      '25% increase in rebooking rate',
    ],
    quote: 'WhatsBot transformed our business. We went from constant scheduling headaches to a smooth, automated system that our clients love.',
    author: 'Sarah Johnson',
    role: 'Owner',
    rating: 5,
  },
  {
    company: 'FitZone Gym',
    industry: 'Fitness',
    challenge: 'Low class attendance and difficulty promoting new programs to members.',
    solution: 'Set up automated class reminders and promotional campaigns for new programs.',
    results: [
      '60% increase in class attendance',
      '35% boost in new program signups',
      '4 hours saved per week on communication',
    ],
    quote: 'Our members stay more engaged and we see better participation in all our programs.',
    author: 'Mike Rodriguez',
    role: 'Manager',
    rating: 5,
  },
  {
    company: 'Downtown Dental',
    industry: 'Healthcare',
    challenge: 'Patients frequently forgot appointments and follow-up care instructions.',
    solution: 'Automated appointment reminders and post-visit care instructions via WhatsApp.',
    results: [
      '50% fewer missed appointments',
      '80% better follow-up compliance',
      'Improved patient satisfaction scores',
    ],
    quote: 'Patient care has improved significantly since we started using automated reminders.',
    author: 'Dr. Lisa Chen',
    role: 'Practice Owner',
    rating: 5,
  },
];

const metrics = [
  {
    value: '500+',
    label: 'Happy Businesses',
    icon: Users,
  },
  {
    value: '2M+',
    label: 'Messages Sent',
    icon: TrendingUp,
  },
  {
    value: '40%',
    label: 'Avg. No-Show Reduction',
    icon: Clock,
  },
];

export function SuccessStories() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="success-stories" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Success Stories
          </Badge>
          <h2 className="mb-4">Real Results from Real Businesses</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how businesses like yours are using WhatsBot to transform their customer communication.
          </p>
        </div>

        {/* Metrics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <metric.icon className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl mb-2">{metric.value}</div>
              <div className="text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-12">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <div>
                        <h3 className="text-xl">{story.company}</h3>
                        <Badge variant="outline">{story.industry}</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{story.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="mb-2">Solution</h4>
                        <p className="text-muted-foreground">{story.solution}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-6">
                      <h4 className="mb-3">Results</h4>
                      <ul className="space-y-2">
                        {story.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-primary">
                            <TrendingUp className="h-4 w-4 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-muted/50 rounded-lg p-6">
                      <div className="flex mb-3">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-muted-foreground mb-4">
                        "{story.quote}"
                      </blockquote>
                      <cite className="text-sm">
                        — {story.author}, {story.role}
                      </cite>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-lg mb-6">
              Join hundreds of businesses already transforming their customer communication with WhatsBot.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('#pricing')}
            >
              Start Growing Your Business Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}