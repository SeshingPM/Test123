import Link from 'next/link';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Mail className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">InboxAgency.io</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">Streamline your email marketing with powerful automation tools.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/features/" className="hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/pricing/" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/integrations/" className="hover:text-primary transition-colors">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about/" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/blog/" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/careers/" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-primary">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact/" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/help/" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/privacy/" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms/" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2023 InboxAgency.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;