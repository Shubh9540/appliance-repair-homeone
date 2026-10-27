import rawData from '@/data/templates.json';
import { HomeOneTemplateData } from '@/types/templates.types';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { NotFound } from '@/components/sections/NotFound';

export default function NotFoundPage() {
  const templateData: HomeOneTemplateData = rawData;
  const sectionData = templateData.categories.HomeOne.sections;

  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      <Header data={sectionData.Header.variants.HomeOneHeader2} />
      <NotFound data={sectionData.NotFound.variants.HomeOneNotFound2} />
      <Footer data={templateData.common.Footer.variants.HomeOneFooter2} />
    </main>
  );
}
