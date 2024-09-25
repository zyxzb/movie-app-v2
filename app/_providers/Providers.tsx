'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar />
    </>
  );
};

export default Providers;
