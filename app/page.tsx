import rawData from '@/data/templates.json';
import { HomeOneTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Hero } from '@/components/sections/Hero';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';
import { ContactUs } from '@/components/sections/ContactUs';

export default function Home() {
  const templateData: HomeOneTemplateData = rawData;
  const sectionData = templateData.categories.HomeOne.sections;
  const footerData = templateData.common.Footer.variants.HomeOneFooter2;

  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <Header data={sectionData.Header.variants.HomeOneHeader2} />
      <Hero data={sectionData.Hero.variants.HomeOneHero2} />
      <AboutUs data={sectionData.AboutUs.variants.HomeOneAboutUs2} />
      <Services data={sectionData.Services.variants.HomeOneServices2} />
      <WhyChooseUs data={sectionData.WhyChooseUs.variants.HomeOneWhyChooseUs2} />
      <Team data={sectionData.Team.variants.HomeOneTeam2} />
      <Testimonials data={sectionData.Testimonials.variants.HomeOneTestimonials2} />
      <ContactUs data={sectionData.ContactUs.variants.HomeOneContactUs2} />
      <Footer data={footerData} />
    </main>
  );
}
