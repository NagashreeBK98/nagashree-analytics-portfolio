import { Award, ExternalLink, ArrowRight } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Cloud Practitioner',
    logo: 'https://cdn2.downdetector.com/static/uploads/logo/aws-logo-icon-PNG-Transparent-Background_5.png',
    credentialLink: 'https://www.credly.com/badges/675654a9-0a70-41f7-ba5e-474a913ff6fc/linked_in_profile',
  },
  {
    name: 'Microsoft Azure Fundamentals (AZ-900)',
    logo: 'https://petri.com/wp-content/uploads/petri-imported-images/1_FELQr_PxJW0CzDjdum9ysw.jpeg',
    credentialLink: null,
  },
  {
    name: 'Lean Six Sigma – Yellow Belt (Foundational)',
    logo: 'https://internationalleansixsigma.org/en/wp-content/uploads/2024/05/1.-Yellow-Belt-LSS.jpg',
    credentialLink: 'https://www.udemy.com/certificate/UC-c63d7d4f-b84b-49e5-ab3a-b8a3360dafae/',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden" style={{ backgroundColor: '#0B0F14' }}>
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
          <p className="text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Industry-recognized certifications validating cloud, analytics, and process excellence.
          </p>
        </div>

        {/* Certifications Grid - 3 per row, matching Projects style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-0.5 flex flex-col items-center text-center"
              style={{
                backgroundColor: '#111827',
                borderColor: 'rgba(255, 255, 255, 0.06)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.25)';
                e.currentTarget.style.boxShadow = '0 0 14px rgba(34, 211, 238, 0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Logo - Top center, balanced size */}
              <div className="w-14 h-14 rounded-xl bg-white p-2 flex items-center justify-center mb-4">
                <img 
                  src={cert.logo}
                  alt={cert.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Certification Name */}
              <h3 className="text-base font-semibold mb-4" style={{ color: '#E5E7EB' }}>
                {cert.name}
              </h3>

              {/* Show Credential CTA */}
              {cert.credentialLink ? (
                <a
                  href={cert.credentialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: '#22D3EE' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#67E8F9';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#22D3EE';
                  }}
                >
                  Show Credential
                  <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-sm font-medium" style={{ color: '#6B7280' }}>
                  Show Credential
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;