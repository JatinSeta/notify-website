import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Scissors, 
  Dumbbell, 
  Stethoscope, 
  ShoppingBag, 
  Calendar, 
  UtensilsCrossed, 
  Home 
} from 'lucide-react';

const businesses = [
  {
    title: 'Barbershops & Salons',
    description: 'Appointment reminders, new style promotions, and follow-up care tips.',
    icon: Scissors,
    useCases: ['Appointment reminders', 'New style promotions', 'Product recommendations'],
  },
  {
    title: 'Fitness Centers & Trainers',
    description: 'Class schedules, membership renewals, and workout reminders.',
    icon: Dumbbell,
    useCases: ['Class schedules', 'Membership renewals', 'Workout tips'],
  },
  {
    title: 'Clinics & Healthcare',
    description: 'Appointment reminders, health tips, and follow-up care instructions.',
    icon: Stethoscope,
    useCases: ['Appointment reminders', 'Health reminders', 'Test results'],
  },
  {
    title: 'Retail & Boutiques',
    description: 'Sales announcements, new arrivals, and loyalty reward notifications.',
    icon: ShoppingBag,
    useCases: ['Sales alerts', 'New arrivals', 'Loyalty rewards'],
  },
  {
    title: 'Event Organizers',
    description: 'Ticket reminders, event updates, and last-minute announcements.',
    icon: Calendar,
    useCases: ['Ticket reminders', 'Event updates', 'Schedule changes'],
  },
  {
    title: 'Restaurants & Cafés',
    description: 'Reservation confirmations, special offers, and menu updates.',
    icon: UtensilsCrossed,
    useCases: ['Reservation confirmations', 'Special offers', 'Menu updates'],
  },
  {
    title: 'Real Estate Agents',
    description: 'Buyer follow-ups, property alerts, and viewing appointments.',
    icon: Home,
    useCases: ['Property alerts', 'Viewing reminders', 'Market updates'],
  },
];

export function TargetBusinesses() {
  return (
    <section id="businesses" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Perfect For
          </Badge>
          <h2 className="mb-4">Which Businesses Can Use WhatsBot?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            If your business relies on staying connected with customers via WhatsApp, WhatsBot works for you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {businesses.map((business, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <business.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3">{business.title}</h3>
                <p className="text-muted-foreground mb-4">{business.description}</p>
                <div className="flex flex-wrap gap-2">
                  {business.useCases.map((useCase, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {useCase}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="mb-4">Don't See Your Business?</h3>
            <p className="text-lg mb-6">
              WhatsBot works for any business that communicates with customers via WhatsApp. From small local shops to large enterprises, our platform scales to meet your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary">Any industry</Badge>
              <Badge variant="secondary">Any business size</Badge>
              <Badge variant="secondary">Global reach</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}