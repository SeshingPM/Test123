import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, BarChart, Users, Zap } from 'lucide-react';

const Hero = dynamic(() => import('@/components/Hero'), { ssr: true, loading: () => <div>Loading Hero...</div> });
const Features = dynamic(() => import('@/components/Features'), { ssr: false });
const Pricing = dynamic(() => import('@/components/Pricing'), { ssr: false });
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });
const CTA = dynamic(() => import('@/components/CTA'), { ssr: false });

const whyUsSteps = [
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Expert-Managed Campaigns",
    bullets: [
      "Customized email strategies",
      "Professional content creation",
      "Optimized send times",
      "Continuous performance monitoring"
    ]
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Data-Driven Results",
    bullets: [
      "Advanced analytics and reporting",
      "A/B testing for optimization",
      "Conversion tracking",
      "ROI measurement"
    ]
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Personalized Approach",
    bullets: [
      "Audience segmentation",
      "Dynamic content personalization",
      "Behavioral targeting",
      "Customer journey mapping"
    ]
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>
      
      {/* Why Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Why Choose InboxAgency.io?</h2>
          <p className="text-xl text-center text-muted-foreground mb-12">Discover how our expert-managed service can transform your email marketing</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUsSteps.map((step, index) => (
              <Card key={index} className="flex flex-col overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
                <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col items-center p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="rounded-full bg-primary/20 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-center text-xl font-bold mb-2 relative z-10">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between p-6 bg-gradient-to-br from-background to-background/80">
                  <ul className="space-y-2">
                    {step.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-sm">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Loading Features...</div>}>
        <Features />
      </Suspense>
      
      <Suspense fallback={<div>Loading Pricing...</div>}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<div>Loading CTA...</div>}>
        <CTA />
      </Suspense>
    </div>
  );
}