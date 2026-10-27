import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FooterData } from '@/types/templates.types';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF': return <FaFacebookF />;
    case 'FaInstagram': return <FaInstagram />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    default: return null;
  }
};

export const Footer = ({ data }: { data?: FooterData }) => {
  if (!data) return null;

  return (
    <footer className="bg-[var(--color-footer)] text-white">
      <div className="mx-auto grid max-w-[1250px] grid-cols-1 gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8 lg:py-12">
        <div className="md:col-span-2">
          <div className="inline-flex bg-[var(--color-bg-main)] p-3 transition-transform duration-500 hover:-translate-y-1">
            <Image src={data.logo} alt={data.logoAlt} width={2170} height={725} className="h-14 w-auto object-contain" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">{data.description}</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/55">{data.socialLabel}</p>
          <div className="mt-3 flex gap-2">
            {data.socialLinks.map((link) => (
              <a key={link.id} href={link.url} aria-label={link.label} className="flex h-10 w-10 items-center justify-center border border-white/20 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent-light)] hover:bg-[var(--color-accent-light)] hover:text-[var(--color-footer)]">
                {renderIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        {data.columns.map((column) => (
          <div key={column.id}>
            <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white">{column.title}</h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.id}>
                  <a href={link.url} className="text-sm leading-6 text-white/65 transition-all duration-300 hover:pl-1 hover:text-[var(--color-accent-light)]">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1250px] flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>{data.copyright}</p>
          <p>{data.legalText}</p>
        </div>
      </div>
    </footer>
  );
};
