import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button asChild size="lg" className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/80 hover:to-purple-600/80 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
        <Link href="/pricing/">
          Start Free Trial
        </Link>
      </Button>
    </div>
  );
};

export default FloatingCTA;