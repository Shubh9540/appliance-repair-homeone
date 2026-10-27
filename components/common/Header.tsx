'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaBars, FaPhoneAlt, FaTimes } from 'react-icons/fa';
import { HeaderData } from '@/types/templates.types';

export const Header = ({ data }: { data?: HeaderData }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!data) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-main)] shadow-sm">
      <div className="mx-auto flex min-h-24 max-w-[1250px] items-center justify-between gap-5 px-4 sm:px-6 lg:px-8">
        <a href="#home" className="shrink-0" onClick={() => setIsOpen(false)}>
          <Image src={data.logo} alt={data.logoAlt} width={2170} height={725} priority className="h-16 w-auto object-contain lg:h-20" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex xl:gap-8">
          {data.navLinks.map((link) => (
            <a key={link.id} href={link.url} className="text-sm font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-accent)]">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a href={data.phoneUrl} className="flex items-center gap-3 border-l border-[var(--color-border)] pl-5">
            <FaPhoneAlt className="text-[var(--color-accent)]" />
            <span className="flex flex-col">
              <span className="text-xs text-[var(--color-text-light)]">{data.callLabel}</span>
              <span className="text-sm font-bold text-[var(--color-primary)]">{data.phone}</span>
            </span>
          </a>
          <a href={data.cta.url} className="bg-[var(--color-accent)] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[var(--color-primary)]">
            {data.cta.label}
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? data.menuCloseLabel : data.menuOpenLabel}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center border border-[var(--color-border)] text-xl text-[var(--color-primary)] lg:hidden"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-main)] px-4 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-[1250px] flex-col">
            {data.navLinks.map((link) => (
              <a key={link.id} href={link.url} onClick={() => setIsOpen(false)} className="border-b border-[var(--color-border)] py-3 text-base font-semibold text-[var(--color-primary)]">
                {link.label}
              </a>
            ))}
            <a href={data.cta.url} onClick={() => setIsOpen(false)} className="mt-5 bg-[var(--color-accent)] px-5 py-3 text-center text-sm font-bold text-white">
              {data.cta.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
