import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { ContactUsData } from '@/types/templates.types';
import { Reveal } from '@/components/ui/Reveal';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaPhoneAlt': return <FaPhoneAlt />;
    case 'FaEnvelope': return <FaEnvelope />;
    case 'FaMapMarkerAlt': return <FaMapMarkerAlt />;
    default: return null;
  }
};

export const ContactUs = ({ data }: { data?: ContactUsData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="scroll-mt-20 bg-[var(--color-bg-main)] py-10 lg:py-12">
      <Reveal direction="right" fade={false}>
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14 lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-accent)]">{data.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">{data.title}</h2>
          <p className="mt-5 text-base leading-8 text-[var(--color-text-light)]">{data.description}</p>
          <div className="mt-8 space-y-4">
            {data.details.map((detail) => (
              <a key={detail.id} href={detail.url} className="grid grid-cols-[48px_1fr] items-center gap-4 border-t border-[var(--color-border)] pt-4 transition-transform duration-300 hover:translate-x-1">
                <span className="flex h-12 w-12 items-center justify-center bg-[var(--color-bg-alt)] text-[var(--color-accent)]">{renderIcon(detail.icon)}</span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.14em] text-[var(--color-text-light)]">{detail.label}</span>
                  <span className="mt-1 block text-sm font-bold text-[var(--color-primary)] sm:text-base">{detail.value}</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form className="border border-[var(--color-border)] bg-[var(--color-bg-alt)] p-5 transition-shadow duration-300 hover:shadow-xl hover:shadow-[var(--color-primary)]/10 sm:p-7 lg:p-8">
          <h3 className="text-2xl font-extrabold text-[var(--color-primary)]">{data.formTitle}</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--color-text-light)]">{data.formDescription}</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {data.fields.map((field) => (
              <label key={field.id} className="flex flex-col gap-2 first:sm:col-span-2">
                <span className="text-sm font-semibold text-[var(--color-primary)]">{field.label}</span>
                <input name={field.name} type={field.type} placeholder={field.placeholder} className="h-12 border border-[var(--color-border)] bg-white px-4 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
              </label>
            ))}
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--color-primary)]">{data.serviceLabel}</span>
              <select name="service" defaultValue="" className="h-12 border border-[var(--color-border)] bg-white px-4 text-sm text-[var(--color-text)] outline-none transition-colors focus:border-[var(--color-accent)]">
                <option value="" disabled>{data.servicePlaceholder}</option>
                {data.serviceOptions.map((option) => <option key={option.id} value={option.value}>{option.label}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-2 sm:col-span-2">
              <span className="text-sm font-semibold text-[var(--color-primary)]">{data.messageLabel}</span>
              <textarea name="message" rows={5} placeholder={data.messagePlaceholder} className="border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition-colors placeholder:text-[var(--color-text-light)] focus:border-[var(--color-accent)]" />
            </label>
          </div>
          <button type="submit" className="mt-5 w-full bg-[var(--color-accent)] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[var(--color-primary)] sm:w-auto">{data.submitLabel}</button>
        </form>
      </div>
      </Reveal>
    </section>
  );
};
