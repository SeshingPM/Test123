import ROICalculator from '@/components/ROICalculator';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, TrendingUp } from 'lucide-react';

export default function ROICalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Calculate Your Potential ROI</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">See how InboxAgency.io can boost your revenue</p>
      <ROICalculator />
      
      <div className="mt-24 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">How We Boost Your ROI</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <Target className="h-8 w-8 text-primary mb-4" />,
              title: "Advanced Segmentation",
              description: "Target the right audience with precision, increasing engagement and conversions.",
              benefits: [
                "Demographic and behavioral segmentation",
                "Dynamic content personalization",
                "Improved relevance and engagement",
                "Higher open and click-through rates"
              ]
            },
            {
              icon: <Zap className="h-8 w-8 text-primary mb-4" />,
              title: "AI-Powered Optimization",
              description: "Leverage machine learning to optimize send times and content for maximum impact.",
              benefits: [
                "Smart send time prediction",
                "Subject line optimization",
                "Content recommendations",
                "Continuous performance improvement"
              ]
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-primary mb-4" />,
              title: "Conversion-Focused Strategies",
              description: "Implement proven tactics to guide subscribers towards making a purchase.",
              benefits: [
                "Persuasive email copywriting",
                "Strategic call-to-action placement",
                "Abandoned cart recovery campaigns",
                "Upsell and cross-sell automation"
              ]
            }
          ].map((item, index) => (
            <Card key={index} className="bg-secondary/30 border-primary/10 hover:border-primary/30 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center">
                  {item.icon}
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{item.description}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}