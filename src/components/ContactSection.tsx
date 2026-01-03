import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send, Sparkles, ArrowUpRight } from 'lucide-react';
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
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 857 260 8738',
    href: 'tel:+18572608738',
    copyable: true,
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Boston, MA, USA',
    href: null,
    copyable: false,
    color: 'from-orange-500 to-red-500',
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nagashreebk',
    username: '@nagashreebk',
    color: 'from-blue-600 to-blue-400',
    hoverBg: 'hover:bg-blue-500/10',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/NagashreeBK98',
    username: '@NagashreeBK98',
    color: 'from-gray-400 to-gray-600',
    hoverBg: 'hover:bg-gray-500/10',
  },
];

const ContactSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        
        {/* Radial Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${4 + i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Send className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to discussing data engineering opportunities and collaboration on analytics projects
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                Contact Information
              </h3>
              
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl p-5 border border-border bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px] transition-transform duration-300 group-hover:scale-110`}>
                        <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors font-semibold text-lg"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-semibold text-lg">{item.value}</p>
                        )}
                      </div>
                    </div>
                    {item.copyable && (
                      <button
                        onClick={() => handleCopy(item.value, index)}
                        className="p-3 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all"
                        aria-label="Copy to clipboard"
                      >
                        {copiedIndex === index ? (
                          <Check className="w-5 h-5 text-green-400" />
                        ) : (
                          <Copy className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links & Career Focus */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
                Social Profiles
              </h3>

              <div className="grid gap-4">
                {socialLinks.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative rounded-2xl p-5 border border-border bg-card/50 hover:border-primary/40 transition-all duration-300 ${item.hoverBg}`}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} p-[1px] transition-all duration-300 ${
                          hoveredSocial === index ? 'scale-110 shadow-lg' : ''
                        }`}>
                          <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="text-foreground font-semibold text-lg group-hover:text-primary transition-colors">
                            {item.username}
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Career Focus */}
              <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-primary font-bold">Career Focus</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    This portfolio is designed for career opportunities in{' '}
                    <span className="text-foreground font-medium">data engineering</span>,{' '}
                    <span className="text-foreground font-medium">analytics</span>, and{' '}
                    <span className="text-foreground font-medium">cloud-focused roles</span>. 
                    I'm actively seeking positions where I can contribute to building scalable data solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <div className="relative inline-block">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
              <Button variant="hero" size="xl" asChild className="relative">
                <a href="mailto:bommenahallikumara.n@northeastern.edu">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Me an Email
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              I typically respond within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
