import React from 'react';

type Props = {
  children?: React.ReactNode;
};

function SectionTitle({ children }: Props) {
  return (
    <h2 className="flex items-center justify-start text-2xl font-light tracking-wide text-zinc-200 lg:text-3xl">
      <span className="mr-2 h-px w-2 bg-zinc-700" />
      {children}
    </h2>
  );
}

export default SectionTitle;
