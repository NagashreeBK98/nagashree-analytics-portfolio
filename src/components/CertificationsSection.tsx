import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    icon: 'https://cdn2.downdetector.com/static/uploads/logo/aws-logo-icon-PNG-Transparent-Background_5.png',
    credentialLink: 'https://www.credly.com/badges/675654a9-0a70-41f7-ba5e-474a913ff6fc/linked_in_profile',
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    icon: 'https://brandlogos.net/wp-content/uploads/2022/07/microsoft_azure-logo_brandlogos.net_mlyt6-300x300.png',
    credentialLink: null,
  },
  {
    name: 'Lean Six Sigma – Yellow Belt (Foundational)',
    icon: 'https://internationalleansixsigma.org/en/wp-content/uploads/2024/05/1.-Yellow-Belt-LSS.jpg',
    credentialLink: 'https://www.udemy.com/certificate/UC-c63d7d4f-b84b-49e5-ab3a-b8a3360dafae/',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Professional Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
        </div>

        {/* Certifications Line */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 p-6 rounded-2xl bg-card/50 border border-border">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <img 
                  src={cert.icon}
                  alt={cert.name}
                  className="w-4 h-4 object-contain"
                />
                <span className="text-sm font-medium text-foreground">{cert.name}</span>
                {index < certifications.length - 1 && (
                  <span className="text-muted-foreground mx-2">·</span>
                )}
              </div>
            ))}
          </div>

          {/* Credential Links */}
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            {certifications.filter(c => c.credentialLink).map((cert, index) => (
              <a
                key={index}
                href={cert.credentialLink!}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Show Credential ({cert.name.split(' ')[0]})
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;