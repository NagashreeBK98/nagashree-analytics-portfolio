import { Mail, Phone, MapPin, Linkedin, Github, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'bommenahallikumara.n@northeastern.edu',
    href: 'mailto:bommenahallikumara.n@northeastern.edu',
    copyable: true,
    subtext: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 857 260 8738',
    href: 'tel:+18572608738',
    copyable: true,
    subtext: null,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Boston, MA, USA',
    href: null,
    copyable: false,
    subtext: 'Open to Relocation',
  },
];

const ContactSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    toast.success('Copied to clipboard!');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_3i29qyq',
        'template_onf69so',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'bommenahallikumara.n@northeastern.edu',
        },
        '2Kvw4TfaPPcKecmWO'
      );
      
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Open to discussing data analytics and data engineering opportunities, internships, and collaboration on analytics projects.
          </p>
          
          {/* Availability Badge - Centered, larger font */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-base font-medium text-green-400">Available for Summer & Fall 2026 Internships</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-6">
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
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-foreground hover:text-primary transition-colors font-semibold"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-semibold">{item.value}</p>
                        )}
                        {item.subtext && (
                          <p className="text-sm mt-0.5" style={{ color: '#9CA3AF' }}>{item.subtext}</p>
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

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-sm font-semibold text-muted-foreground mb-4">Connect on Social Media</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/NagashreeBK98" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/nagashreebk/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/40 hover:bg-primary/10 transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="rounded-2xl p-8 border border-border bg-card/50">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Send className="w-4 h-4 text-primary" />
                </div>
                Send a Message
              </h3>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-primary">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-foreground resize-none"
                    placeholder="Briefly tell me what you'd like to connect about…"
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </Button>
              </form>
            </div>
          </div>

          {/* Professional Principle Line */}
          <div className="text-center mt-16">
            <p className="text-sm font-light italic" style={{ color: '#9CA3AF' }}>
              Focused on building scalable, practical solutions with real-world impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;