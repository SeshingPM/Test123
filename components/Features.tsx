import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, BarChart, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: <Mail className="h-12 w-12 mb-4 text-primary" />,
    title: "Managed Campaigns",
    description: "We create and manage email campaigns on your behalf, using our intuitive tools and expertise."
  },
  {
    icon: <BarChart className="h-12 w-12 mb-4 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights with real-time tracking and comprehensive reporting on your campaign performance."
  },
  {
    icon: <Users className="h-12 w-12 mb-4 text-primary" />,
    title: "Audience Segmentation",
    description: "We target the right audience with powerful segmentation and personalization strategies."
  },
  {
    icon: <Zap className="h-12 w-12 mb-4 text-primary" />,
    title: "AI-Powered Optimization",
    description: "Our team leverages machine learning to optimize send times and content for maximum engagement."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Expert-Managed Email Marketing Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10 hover:border-primary/30 transition-colors duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 rounded-full p-4 mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;