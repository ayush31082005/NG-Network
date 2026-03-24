const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => {
  const isCenter = align === 'center';

  return (
    <div
      className={`${isCenter ? 'text-center mx-auto' : ''
        } max-w-3xl`}
    >
      {eyebrow && (
        <p className="mb-4 text-sm uppercase tracking-[0.28em] text-brand-200">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;