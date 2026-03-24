import MainLayout from './layout/MainLayout';
import HeroSection from './components/HeroSection';
import ImpactSection from './components/ImpactSection';
import AboutSection from './components/AboutSection';
import AdmissionSection from './components/AdmissionSection';
import TestimonialsSection from './components/TestimonialsSection';
import YoutubeSection from './components/YoutubeSection';
import NitinSection from './components/NitinSection';

const App = () => {
  return (
    <MainLayout>
      <HeroSection />
      <ImpactSection />
      <AboutSection />
      <AdmissionSection />
      <TestimonialsSection />
      <YoutubeSection />
      <NitinSection />
    </MainLayout>
  );
};

export default App;
