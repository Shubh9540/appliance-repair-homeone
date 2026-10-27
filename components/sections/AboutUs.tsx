import Image from 'next/image';
import { FaArrowRight, FaClipboardCheck, FaHome, FaTools } from 'react-icons/fa';
import { AboutUsData } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaTools': return <FaTools />;
    case 'FaClipboardCheck': return <FaClipboardCheck />;
    case 'FaHome': return <FaHome />;
    default: return null;
  }
};

export const AboutUs = ({ data }: { data?: AboutUsData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-20 bg-[var(--color-bg-main)] py-10 lg:py-12">
      <Reveal direction="left" fade={false}>
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
        <div className="group relative">
          <div className="relative h-[420px] w-full overflow-hidden sm:h-[520px]">
            <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
          </div>
          <div className="absolute bottom-0 right-0 max-w-[220px] bg-[var(--color-primary)] p-5 text-white sm:p-6">
            <p className="text-3xl font-extrabold text-[var(--color-accent-light)]">{data.experienceValue}</p>
            <p className="mt-2 text-sm leading-6 text-white/75">{data.experienceLabel}</p>
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--color-accent)]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">{data.eyebrow}</p>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-text-light)]">{data.description}</p>
          <div className="mt-7 space-y-5">
            {data.features.map((feature) => (
              <div key={feature.id} className="grid grid-cols-[48px_1fr] gap-4 border-t border-[var(--color-border)] pt-5 transition-transform duration-300 hover:translate-x-1">
                <div className="flex h-12 w-12 items-center justify-center bg-[var(--color-bg-alt)] text-lg text-[var(--color-accent)]">{renderIcon(feature.icon)}</div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary)]">{feature.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--color-text-light)]">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          <a href={data.button.url} className="mt-8 inline-flex items-center gap-3 bg-[var(--color-primary)] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[var(--color-accent)]">
            {data.button.label}<FaArrowRight />
          </a>
        </div>
      </div>
      </Reveal>
    </section>
  );
};
