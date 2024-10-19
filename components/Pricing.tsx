"use client"

import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: 'Starter',
    price: '$299',
    description: 'Perfect for small businesses and startups',
    features: [
      'Up to 5,000 recipients',
      '2 campaigns per month',
      'Basic audience segmentation',
      'Email support'
    ]
  },
  {
    name: 'Pro',
    price: '$799',
    description: 'Ideal for growing agencies and businesses',
    features: [
      'Up to 25,000 recipients',
      '5 campaigns per month',
      'Advanced audience segmentation',
      'A/B testing',
      'Priority email support'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations and agencies',
    features: [
      'Unlimited recipients',
      'Unlimited campaigns',
      'Custom integrations',
      'Dedicated account manager',
      'Priority phone support'
    ]
  }
];

const Pricing = () => {
  const handleGetStarted = () => {
    console.log('Stripe integration is currently disabled');
    // When ready to implement Stripe, replace this with actual payment logic
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose the Right Plan for Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col border-primary/10 hover:border-primary/30 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-4xl font-bold mb-4 text-primary">{plan.price}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80" onClick={handleGetStarted}>
                  Get Started (Disabled)
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;