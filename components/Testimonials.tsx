"use client"

import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: 'InboxAgency.io has revolutionized our email marketing strategy. The automation features have saved us countless hours and improved our engagement rates significantly.'
    },
    {
      name: 'Michael Chen',
      role: 'Founder',
      company: 'GrowthStartup',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: 'As a startup founder, I needed a solution that could scale with my business. InboxAgency.io has been the perfect fit, offering powerful features at a competitive price.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Digital Marketing Specialist',
      company: 'AgencyPro',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "The analytics and reporting tools in InboxAgency.io have given us unprecedented insights into our campaigns. It's been a game-changer for our agency."
    },
    {
      name: 'Sophia Lee',
      role: 'Customer Success Manager',
      company: 'HappyClients',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "The customer support from InboxAgency.io is unparalleled. They're always there to help, and their expertise has been invaluable in optimizing our campaigns."
    },
    {
      name: 'Alex Patel',
      role: 'E-commerce Manager',
      company: 'ShopSmart',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "InboxAgency.io's segmentation tools have helped us create highly targeted campaigns, resulting in a significant boost in our conversion rates."
    },
    {
      name: 'Olivia Thompson',
      role: 'Content Strategist',
      company: 'MediaMasters',
      image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "The AI-powered content suggestions from InboxAgency.io have dramatically improved our email open rates and click-through rates."
    },
    {
      name: 'David Kim',
      role: 'CTO',
      company: 'TechInnovate',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "InboxAgency.io's robust API and integrations have allowed us to seamlessly incorporate email marketing into our product ecosystem."
    },
    {
      name: 'Rachel Foster',
      role: 'Sales Director',
      company: 'GrowthGenius',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "The automated drip campaigns from InboxAgency.io have significantly improved our lead nurturing process and increased our sales conversion rates."
    },
    {
      name: 'Thomas Wright',
      role: 'Nonprofit Coordinator',
      company: 'CharityConnect',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "InboxAgency.io's user-friendly interface and powerful features have made it easy for our small team to create impactful email campaigns for our donors."
    },
    {
      name: 'Natalie Chen',
      role: 'Product Manager',
      company: 'SaaS Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
      quote: "The A/B testing capabilities of InboxAgency.io have been crucial in optimizing our product announcement emails and driving user engagement."
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      const interval = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(interval);
    }
  }, [emblaApi]);

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 px-4">
                  <Card className="bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-primary/10 hover:border-primary/30 transition-colors duration-300">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={50}
                          height={50}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="italic text-base">&ldquo;{testimonial.quote}&rdquo;</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex justify-center mt-8">
          {scrollSnaps.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`mx-1 p-0 w-3 h-3 rounded-full ${
                index === selectedIndex ? 'bg-primary' : 'bg-primary/20'
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;