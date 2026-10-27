import { FaArrowLeft } from 'react-icons/fa';
import { NotFoundData } from '@/types/templates.types';

export const NotFound = ({ data }: { data?: NotFoundData }) => {
  if (!data) return null;

  return (
    <section id={data.id} className="flex min-h-[60vh] items-center bg-[var(--color-bg-alt)] py-12">
      <div className="mx-auto w-full max-w-[1250px] px-4 text-center sm:px-6 lg:px-8">
        <p className="text-7xl font-extrabold text-[var(--color-accent)] sm:text-8xl">{data.code}</p>
        <h1 className="mt-4 text-3xl font-extrabold text-[var(--color-primary)] sm:text-4xl">{data.title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-[var(--color-text-light)]">{data.description}</p>
        <a href={data.button.url} className="mt-7 inline-flex items-center gap-3 bg-[var(--color-primary)] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[var(--color-accent)]">
          <FaArrowLeft />{data.button.label}
        </a>
      </div>
    </section>
  );
};
