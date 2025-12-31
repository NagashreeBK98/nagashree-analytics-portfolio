import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'MS in Data Analytics Engineering',
    institution: 'Northeastern University',
    location: 'Boston, MA',
    period: 'Expected 2027',
    current: true,
  },
  {
    degree: 'Bachelor of Engineering',
    institution: 'Dayananda Sagar College of Engineering',
    field: 'Telecommunication',
    location: 'Bangalore, India',
    period: '2019',
    current: false,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <div>
              <p className="text-primary font-medium tracking-wider uppercase text-sm mb-2">
                About Me
              </p>
              <h2 className="section-title">
                Driven by Data,
                <br />
                <span className="gradient-text">Powered by Curiosity</span>
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a <span className="text-foreground font-medium">Data Analytics Engineering graduate student</span> at 
                Northeastern University, bringing over <span className="text-foreground font-medium">5 years of industry 
                experience</span> from my tenure at DXC Technology.
              </p>
              <p>
                My passion lies at the intersection of <span className="text-primary">data engineering</span>, 
                <span className="text-primary"> cloud platforms</span>, and <span className="text-primary">analytics</span>. 
                I specialize in building scalable ETL pipelines, designing insightful dashboards, and implementing 
                cloud-native data solutions.
              </p>
              <p>
                With hands-on experience in AWS, Azure, Power BI, Python, and SQL, I transform complex datasets 
                into actionable business intelligence. My goal is to continue growing as a data-driven engineer 
                in a global tech environment, solving challenging problems through innovative data solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">50%</p>
                <p className="text-sm text-muted-foreground">Efficiency Gains</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">99.9%</p>
                <p className="text-sm text-muted-foreground">System Uptime</p>
              </div>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              Education
            </h3>

            <div className="space-y-4">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`card-glass rounded-xl p-6 border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 ${
                    edu.current ? 'border-primary/30' : 'border-border'
                  }`}
                >
                  {edu.current && (
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                      Current
                    </span>
                  )}
                  <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                  {edu.field && (
                    <p className="text-muted-foreground text-sm">{edu.field}</p>
                  )}
                  <p className="text-primary font-medium mt-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="relative h-32 mt-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 border border-primary/20 rounded-full" />
                <div className="absolute w-32 h-32 border border-primary/30 rounded-full" />
                <div className="absolute w-16 h-16 bg-primary/10 rounded-full animate-pulse-glow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
