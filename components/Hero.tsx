import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Elevate Your Email Marketing with Expert Management
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              InboxAgency.io handles your email campaigns, leveraging powerful automation tools to boost engagement and drive results for your business.
            </p>
            <div className="space-x-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80">
                <Link href="/pricing/">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/features/">Services</Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-full filter blur-3xl opacity-20"></div>
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Email marketing illustration"
              width={600}
              height={400}
              className="rounded-lg shadow-2xl relative z-10"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;