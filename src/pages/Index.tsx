import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Nagashree B K | Data Analytics Engineering Portfolio</title>
        <meta 
          name="description" 
          content="Data Analytics Engineering graduate student and professional with 5+ years experience in data engineering, cloud platforms, and business intelligence. Explore projects, skills, and experience." 
        />
        <meta name="keywords" content="Data Engineer, Data Analytics, Power BI, Azure, AWS, Python, SQL, ETL, Cloud Engineering" />
        <meta property="og:title" content="Nagashree B K | Data Analytics Engineering Portfolio" />
        <meta property="og:description" content="Transforming complex data into actionable insights using cloud-native analytics." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
