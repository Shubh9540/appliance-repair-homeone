import Image from 'next/image';
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa';
import { HeroData } from '@/types/templates.types';

export const Hero = ({ data }: { data?: HeroData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="group relative min-h-[680px] scroll-mt-20 overflow-hidden bg-[var(--color-primary)]">
      <Image src={data.image} alt={data.imageAlt} fill priority sizes="100vw" className="object-cover object-[68%_center] transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-primary)]/90 to-[var(--color-primary)]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/85 via-transparent to-transparent" />

      <div className="relative mx-auto flex min-h-[680px] max-w-[1250px] flex-col justify-center px-4 pb-40 pt-14 sm:px-6 lg:px-8 lg:pb-36 lg:pt-16">
        <div className="max-w-2xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-10 bg-[var(--color-accent-light)]" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent-light)]">{data.eyebrow}</p>
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.title} <span className="text-[var(--color-accent-light)]">{data.highlightedTitle}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">{data.description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={data.primaryButton.url} className="inline-flex items-center justify-center gap-3 bg-[var(--color-accent)] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-accent-light)] hover:text-[var(--color-primary)]">
              {data.primaryButton.label}<FaArrowRight />
            </a>
            <a href={data.secondaryButton.url} className="inline-flex items-center justify-center border border-white/50 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[var(--color-primary)]">
              {data.secondaryButton.label}
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t border-white/15 bg-[var(--color-footer)]">
          <div className="mx-auto flex max-w-[1250px] flex-col px-4 sm:px-6 lg:flex-row lg:items-stretch lg:px-8">
            <div className="flex items-center gap-4 border-b border-white/15 py-5 text-white lg:w-[34%] lg:border-b-0 lg:border-r lg:pr-8">
              <FaPhoneAlt className="text-xl text-[var(--color-accent-light)]" />
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-white/60">{data.serviceLabel}</p>
                <p className="mt-1 text-base font-bold sm:text-lg">{data.serviceValue}</p>
              </div>
            </div>
            <div className="grid flex-1 grid-cols-3 py-4 lg:py-0">
              {data.stats.map((stat) => (
                <div key={stat.id} className="flex flex-col justify-center border-r border-white/15 px-3 py-2 first:pl-0 last:border-r-0 lg:px-7 lg:first:pl-8">
                  <p className="text-xl font-extrabold text-[var(--color-accent-light)] sm:text-2xl">{stat.value}</p>
                  <p className="mt-1 text-xs leading-5 text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
