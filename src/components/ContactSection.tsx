import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'bommenahallikumara.n@northeastern.edu',
    href: 'mailto:bommenahallikumara.n@northeastern.edu',
    copyable: true,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 857 260 8738',
    href: 'tel:+18572608738',
    copyable: true,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Boston, MA, USA',
    href: null,
    copyable: false,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nagashreebk',
    username: '@nagashreebk',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/NagashreeBK98',
    username: '@NagashreeBK98',
  },
];

const ContactSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
            Get In Touch
          </p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Open to discussing data engineering opportunities and collaboration on analytics projects
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-6">Contact Information</h3>
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="card-glass rounded-xl p-4 border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors font-medium"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item.value, index)}
                        className="p-2 rounded-lg hover:bg-secondary transition-colors"
                        aria-label="Copy to clipboard"
                      >
                        {copiedIndex === index ? (
                          <Check className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4 text-muted-foreground" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-6">Social Profiles</h3>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block card-glass rounded-xl p-4 border border-border hover:border-primary/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {item.username}
                      </p>
                    </div>
                  </div>
                </a>
              ))}

              {/* Career Focus Note */}
              <div className="mt-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary font-medium">Career Focus:</span> This portfolio is designed 
                  for career opportunities in data engineering, analytics, and cloud-focused roles. 
                  I'm actively seeking positions where I can contribute to building scalable data solutions.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:bommenahallikumara.n@northeastern.edu">
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
