import Image from 'next/image';
import { FaArrowRight, FaClipboardCheck, FaFan, FaFire, FaSnowflake, FaTools, FaWind } from 'react-icons/fa';
import { ServicesData } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaSnowflake': return <FaSnowflake />;
    case 'FaTools': return <FaTools />;
    case 'FaWind': return <FaWind />;
    case 'FaClipboardCheck': return <FaClipboardCheck />;
    case 'FaFire': return <FaFire />;
    case 'FaFan': return <FaFan />;
    default: return null;
  }
};

export const Services = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-20 bg-[var(--color-bg-alt)] py-10 lg:py-12">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" fade={false}>
        <div className="mx-auto max-w-4xl border-b border-[var(--color-border)] pb-7 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">{data.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-light)]">{data.description}</p>
        </div>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service, index) => (
            <Reveal key={service.id} direction="up" delay={(index % 3) * 70}>
              <article className="group h-full overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg-main)] transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-accent-muted)] hover:shadow-xl hover:shadow-[var(--color-primary)]/10">
                <div className="relative h-52 overflow-hidden">
                  <Image src={service.image} alt={service.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute left-0 top-0 bg-[var(--color-primary)] px-4 py-3 text-xs font-bold tracking-[0.16em] text-white">{service.number}</span>
                </div>
                <div className="p-6">
                  <div className="flex h-11 w-11 items-center justify-center bg-[var(--color-bg-alt)] text-lg text-[var(--color-accent)]">{renderIcon(service.icon)}</div>
                  <h3 className="mt-5 text-xl font-bold text-[var(--color-primary)]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-text-light)]">{service.description}</p>
                  <a href={service.url} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] transition-colors hover:text-[var(--color-primary)]">
                    {service.linkLabel}<FaArrowRight />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
