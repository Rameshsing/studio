import Link from 'next/link';
import { Feather, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
];

const footerLinks = [
  { title: 'Product', links: [{label: 'Features', href: '#features'}, {label: 'Pricing', href: '#pricing'}, {label: 'Integrations', href: '#'}, {label: 'Updates', href: '#'}] },
  { title: 'Company', links: [{label: 'About Us', href: '#'}, {label: 'Careers', href: '#'}, {label: 'Press', href: '#'}, {label: 'Contact', href: '#'}] },
  { title: 'Resources', links: [{label: 'Blog', href: '#'}, {label: 'Support', href: '#'}, {label: 'API Docs', href: '#'}, {label: 'Community', href: '#'}] },
  { title: 'Legal', links: [{label: 'Privacy Policy', href: '#'}, {label: 'Terms of Service', href: '#'}, {label: 'Cookie Policy', href: '#'}] },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/40 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4" aria-label="HatchNest Home">
              <Feather className="h-7 w-7 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">HatchNest</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Nurturing ideas from concept to reality. Join us and hatch your next success.
            </p>
          </div>
          {footerLinks.slice(0,3).map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} HatchNest. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link key={social.label} href={social.href} aria-label={social.label} className="text-muted-foreground hover:text-primary transition-colors">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
