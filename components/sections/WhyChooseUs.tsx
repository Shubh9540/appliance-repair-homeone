import Image from 'next/image';
import { FaClock, FaHeadset, FaPhoneAlt, FaSearch, FaShieldAlt } from 'react-icons/fa';
import { WhyChooseUsData } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaClock': return <FaClock />;
    case 'FaSearch': return <FaSearch />;
    case 'FaShieldAlt': return <FaShieldAlt />;
    case 'FaHeadset': return <FaHeadset />;
    default: return null;
  }
};

export const WhyChooseUs = ({ data }: { data?: WhyChooseUsData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-20 bg-[var(--color-primary)] py-10 text-white lg:py-12">
      <Reveal direction="right" fade={false}>
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">{data.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="mt-5 text-base leading-8 text-white/65">{data.description}</p>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            {data.features.map((feature) => (
              <div key={feature.id} className="border-t border-white/15 pt-5 transition-transform duration-300 hover:translate-x-1">
                <div className="flex items-center gap-3">
                  <span className="text-lg text-[var(--color-accent-light)]">{renderIcon(feature.icon)}</span>
                  <h3 className="font-bold">{feature.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
          <a href={data.ctaUrl} className="mt-8 inline-flex items-center gap-4 border border-white/25 px-5 py-4 transition-colors hover:border-[var(--color-accent-light)]">
            <FaPhoneAlt className="text-[var(--color-accent-light)]" />
            <span>
              <span className="block text-xs text-white/55">{data.ctaLabel}</span>
              <span className="mt-1 block text-base font-bold">{data.ctaValue}</span>
            </span>
          </a>
        </div>
        <div className="group relative h-[420px] w-full overflow-hidden sm:h-[520px]">
          <Image src={data.image} alt={data.imageAlt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
        </div>
      </div>
      </Reveal>
    </section>
  );
};
