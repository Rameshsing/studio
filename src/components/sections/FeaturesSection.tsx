import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Zap, Users, BarChart3, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-10 w-10 text-primary mb-4" />,
    title: 'Streamlined Workflow',
    description: 'Optimize your processes with our intuitive tools, designed for maximum efficiency and productivity.',
    id: 'feature-workflow'
  },
  {
    icon: <Users className="h-10 w-10 text-primary mb-4" />,
    title: 'Collaborative Environment',
    description: 'Work seamlessly with your team, share insights, and foster innovation in a unified platform.',
    id: 'feature-collaboration'
  },
  {
    icon: <BarChart3 className="h-10 w-10 text-primary mb-4" />,
    title: 'Insightful Analytics',
    description: 'Gain valuable data-driven insights to make informed decisions and track your project’s progress.',
    id: 'feature-analytics'
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary mb-4" />,
    title: 'Secure & Reliable',
    description: 'Trust in our robust security measures and dependable infrastructure to keep your data safe.',
    id: 'feature-security'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            HatchNest is packed with powerful features to help you bring your ideas to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <Card key={feature.id} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer flex flex-col" aria-labelledby={feature.id}>
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle id={feature.id} className="font-headline text-xl font-semibold text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-muted-foreground">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
