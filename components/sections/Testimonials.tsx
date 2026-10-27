import Image from 'next/image';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { TestimonialsData } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';

export const Testimonials = ({ data }: { data?: TestimonialsData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-20 border-y border-[var(--color-border)] bg-[var(--color-bg-alt)] py-10 lg:py-12">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <Reveal direction="left" fade={false}>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">{data.eyebrow}</p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">{data.title}</h2>
          </div>
          <p className="text-base leading-8 text-[var(--color-text-light)]">{data.description}</p>
        </div>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {data.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} direction="up" delay={index * 80}>
            <article className="flex h-full flex-col border border-[var(--color-border)] bg-[var(--color-bg-main)] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--color-accent-muted)] hover:shadow-xl hover:shadow-[var(--color-primary)]/10">
              <div className="flex items-center justify-between">
                <FaQuoteLeft className="text-2xl text-[var(--color-accent)]" />
                <div className="flex items-center gap-1 text-sm text-[var(--color-accent-light)]" aria-label={`${testimonial.rating} ${data.ratingLabel}`}>
                  {Array.from({ length: testimonial.rating }, (_, index) => <FaStar key={`${testimonial.id}-${index}`} />)}
                </div>
              </div>
              <p className="mt-6 flex-1 text-base leading-8 text-[var(--color-text)]">{testimonial.quote}</p>
              <div className="mt-6 flex items-center gap-4 border-t border-[var(--color-border)] pt-5">
                <Image src={testimonial.avatar} alt={testimonial.avatarAlt} width={48} height={48} className="h-12 w-12 object-cover" />
                <div>
                  <h3 className="font-bold text-[var(--color-primary)]">{testimonial.name}</h3>
                  <p className="mt-1 text-xs text-[var(--color-text-light)]">{testimonial.role}</p>
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
