import Image from 'next/image';
import { FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';
import { TeamData } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';

export const Team = ({ data }: { data?: TeamData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-20 bg-[var(--color-bg-main)] py-10 lg:py-12">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <Reveal direction="up" fade={false}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">{data.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-light)]">{data.description}</p>
        </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.members.map((member, index) => (
            <Reveal key={member.id} direction="up" delay={index * 70}>
            <article className="group h-full border border-[var(--color-border)] bg-[var(--color-bg-main)] transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-accent-muted)] hover:shadow-xl hover:shadow-[var(--color-primary)]/10">
              <div className="relative aspect-[4/4.7] w-full overflow-hidden">
                <Image src={member.image} alt={member.imageAlt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[var(--color-primary)]">{member.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-accent)]">{member.role}</p>
                <div className="mt-4 flex gap-2 border-t border-[var(--color-border)] pt-4">
                  <a href={member.phoneUrl} aria-label={data.phoneLabel} className="flex h-10 w-10 items-center justify-center border border-[var(--color-border)] text-sm text-[var(--color-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><FaPhoneAlt /></a>
                  <a href={member.linkedinUrl} aria-label={data.linkedinLabel} className="flex h-10 w-10 items-center justify-center border border-[var(--color-border)] text-sm text-[var(--color-primary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"><FaLinkedinIn /></a>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
