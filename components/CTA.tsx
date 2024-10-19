import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Email Marketing?</h2>
        <p className="text-xl mb-8 opacity-90">Join our satisfied clients and let us take your campaigns to the next level.</p>
        <Button size="lg" variant="secondary">Schedule a Consultation</Button>
      </div>
    </section>
  );
};

export default CTA;