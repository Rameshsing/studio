import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'Founder, TechStartup Co.',
    quote: "HatchNest revolutionized how we manage our projects. The collaboration tools are top-notch and have significantly boosted our team's productivity!",
    avatarSrc: 'https://www.opera-online.com/media/images/avatar/performer/3684/xl_avatar.jpg',
    avatarFallback: 'SL',
    rating: 5,
    id: 'testimonial-sarah'
  },
  {
    name: 'John B.',
    title: 'Product Manager, Innovate Solutions',
    quote: "The analytics features are incredibly insightful. HatchNest helps us make data-driven decisions with ease. Highly recommended!",
    avatarSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK3pDKuFfIWMXUbwJ0MaQH2-cVaies8JX8Xg&s',
    avatarFallback: 'JB',
    rating: 5,
    id: 'testimonial-john'
  },
  {
    name: 'Emily K.',
    title: 'Freelance Designer',
    quote: "As a freelancer, HatchNest keeps me organized and on track. It's intuitive, reliable, and has become an indispensable part of my workflow.",
    avatarSrc: 'https://i.pinimg.com/280x280_RS/ce/91/dc/ce91dc9cfc3a9a8a33d2a4b3a793df3a.jpg',
    avatarFallback: 'EK',
    rating: 4,
    id: 'testimonial-emily'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Loved by Innovators Worldwide
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear what our users have to say about their experience with HatchNest.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col" aria-labelledby={`${testimonial.id}-name`}>
              <CardContent className="pt-6 flex flex-col flex-grow">
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground/50'}`} />
                  ))}
                </div>
                <blockquote className="text-foreground italic mb-4 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center mt-auto">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p id={`${testimonial.id}-name`} className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
