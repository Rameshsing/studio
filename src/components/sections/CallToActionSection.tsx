import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export default function CallToActionSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <Rocket className="h-16 w-16 text-accent mx-auto mb-6" />
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
          Ready to Launch Your Next Big Idea?
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Join thousands of successful creators who trust HatchNest to bring their visions to life. 
          Start your journey today and experience the difference.
        </p>
        <Button 
          variant="secondary" 
          size="lg" 
          className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105 text-lg px-8 py-6"
        >
          Sign Up Now - It&apos;s Free!
        </Button>
      </div>
    </section>
  );
}
