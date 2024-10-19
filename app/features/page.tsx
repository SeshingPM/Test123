import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, BarChart, Users, Zap, Lock, Puzzle, Headphones, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: <Mail className="h-8 w-8 mb-4" />,
    title: "Managed Campaigns",
    description: "We create and manage email campaigns on your behalf, using our intuitive tools and expertise.",
    bullets: [
      "Customized campaign strategies",
      "A/B testing for optimal performance",
      "Responsive design for all devices",
      "Automated follow-up sequences"
    ],
    benefit: "Save time and boost engagement with expert-crafted campaigns"
  },
  {
    icon: <BarChart className="h-8 w-8 mb-4" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with real-time tracking and comprehensive reporting on your campaign performance.",
    bullets: [
      "Real-time open and click-through rates",
      "Conversion tracking and ROI analysis",
      "Geographical and device-based insights",
      "Custom report generation"
    ],
    benefit: "Make data-driven decisions to continuously improve your campaigns"
  },
  {
    icon: <Users className="h-8 w-8 mb-4" />,
    title: "Audience Segmentation",
    description: "We target the right audience with powerful segmentation and personalization strategies.",
    bullets: [
      "Behavioral and demographic segmentation",
      "Dynamic content personalization",
      "Predictive analytics for targeting",
      "Automated list management"
    ],
    benefit: "Increase relevance and engagement with tailored content"
  },
  {
    icon: <Zap className="h-8 w-8 mb-4" />,
    title: "AI-Powered Optimization",
    description: "Our team leverages machine learning to optimize send times and content for maximum engagement.",
    bullets: [
      "Smart send time optimization",
      "AI-driven subject line suggestions",
      "Content recommendations based on user behavior",
      "Predictive performance modeling"
    ],
    benefit: "Harness the power of AI to maximize your email marketing ROI"
  },
  {
    icon: <Lock className="h-8 w-8 mb-4" />,
    title: "Advanced Security",
    description: "We protect your data and comply with regulations using our robust security features.",
    bullets: [
      "End-to-end encryption for all data",
      "GDPR and CCPA compliance tools",
      "Regular security audits and updates",
      "Multi-factor authentication"
    ],
    benefit: "Ensure peace of mind with state-of-the-art data protection"
  },
  {
    icon: <Puzzle className="h-8 w-8 mb-4" />,
    title: "Third-Party Integrations",
    description: "We connect with your favorite tools and services to streamline your marketing workflow.",
    bullets: [
      "CRM system integrations",
      "E-commerce platform connections",
      "Social media synchronization",
      "Custom API development for unique needs"
    ],
    benefit: "Create a seamless marketing ecosystem with powerful integrations"
  },
  {
    icon: <Headphones className="h-8 w-8 mb-4" />,
    title: "24/7 Support",
    description: "Get help when you need it with our round-the-clock customer support team.",
    bullets: [
      "24/7 live chat and email support",
      "Dedicated account managers",
      "Regular strategy consultations",
      "Comprehensive knowledge base and tutorials"
    ],
    benefit: "Never feel alone with our always-available expert support"
  }
];

export default function FeaturesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-4">Our Expert-Managed Features</h1>
      <p className="text-xl text-center text-muted-foreground mb-12">Discover how our professional tools can elevate your email marketing strategy</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col overflow-hidden border-primary/10 hover:border-primary/30 transition-all duration-300 group hover:shadow-lg">
            <CardHeader className="bg-gradient-to-br from-primary/5 to-primary/10 flex flex-col items-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              <div className="rounded-full bg-primary/20 p-3 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <CardTitle className="text-center text-2xl font-bold mb-2 relative z-10">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-between p-6 bg-gradient-to-br from-background to-background/80">
              <div>
                <CardDescription className="text-center mb-6 text-base leading-relaxed">{feature.description}</CardDescription>
                <ul className="space-y-3 mb-6">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start group/item">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5 group-hover/item:text-green-500 transition-colors duration-300" />
                      <span className="text-sm group-hover/item:text-primary transition-colors duration-300">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-4 border-t border-primary/10">
                <p className="text-sm font-semibold text-primary text-center italic">
                  {feature.benefit}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
          <Link href="/pricing/">
            Explore Our Pricing Options
          </Link>
        </Button>
      </div>
    </div>
  );
}