import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Maria Gonzalez',
    business: 'Casa Bella Restaurant',
    rating: 5,
    review: 'WhatsBot has been a game-changer for our reservation system. We\'ve seen a 50% reduction in no-shows and our customers love the automated reminders.',
    avatar: 'MG',
  },
  {
    name: 'David Kim',
    business: 'TechFix Repair Shop',
    rating: 5,
    review: 'Setting up was incredibly easy. Within 30 minutes, we were sending automated updates to customers about their repair status. Customer satisfaction has improved dramatically.',
    avatar: 'DK',
  },
  {
    name: 'Jennifer Walsh',
    business: 'Yoga Studio Zen',
    rating: 5,
    review: 'The personalized class reminders and promotional messages have increased our class attendance by 40%. Our members feel more connected than ever.',
    avatar: 'JW',
  },
  {
    name: 'Carlos Rodriguez',
    business: 'Elite Barbershop',
    rating: 5,
    review: 'I love how easy it is to send appointment confirmations and follow-ups. My clients appreciate the professional communication and I save hours each week.',
    avatar: 'CR',
  },
  {
    name: 'Amanda Foster',
    business: 'Pet Care Clinic',
    rating: 5,
    review: 'The automated medication reminders and appointment follow-ups have improved our patient care significantly. Pet owners really appreciate the reminders.',
    avatar: 'AF',
  },
  {
    name: 'Robert Chen',
    business: 'Urban Fitness',
    rating: 5,
    review: 'WhatsBot integrates perfectly with our booking system. The analytics dashboard helps us understand which messages work best for our members.',
    avatar: 'RC',
  },
];

const overallRating = {
  average: 4.9,
  total: 347,
  breakdown: [
    { stars: 5, count: 312 },
    { stars: 4, count: 28 },
    { stars: 3, count: 5 },
    { stars: 2, count: 1 },
    { stars: 1, count: 1 },
  ],
};

export function Reviews() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="reviews" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Customer Reviews
          </Badge>
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied businesses who trust WhatsBot for their customer communication.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="bg-muted/50 rounded-2xl p-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-6 w-6 ${i < Math.floor(overallRating.average) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                  />
                ))}
              </div>
              <span className="text-2xl ml-2">{overallRating.average}</span>
            </div>
            <p className="text-muted-foreground">
              Based on {overallRating.total} reviews from verified customers
            </p>
            
            <div className="grid grid-cols-5 gap-2 mt-6 max-w-md mx-auto">
              {overallRating.breakdown.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-sm mb-1">{item.stars}★</div>
                  <div className="bg-muted h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-primary h-full rounded-full" 
                      style={{ width: `${(item.count / overallRating.total) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{item.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <div className="text-sm">{review.name}</div>
                    <div className="text-xs text-muted-foreground">{review.business}</div>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="h-4 w-4 text-muted-foreground mb-2" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {review.review}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h3 className="mb-4">Video Testimonials</h3>
            <p className="text-muted-foreground mb-6">
              Hear directly from business owners about their experience with WhatsBot.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((video) => (
                <div key={video} className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <div className="w-0 h-0 border-l-4 border-r-0 border-t-2 border-b-2 border-l-primary-foreground border-t-transparent border-b-transparent ml-1"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">Watch Testimonial {video}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Review CTA */}
        <div className="text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="mb-4">Share Your Experience</h3>
            <p className="text-lg mb-6">
              Are you a WhatsBot customer? We'd love to hear about your experience and how we've helped your business grow.
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('#contact')}
            >
              Submit Your Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}