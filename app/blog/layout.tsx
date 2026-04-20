import type { ReactNode } from 'react';
import BlogProgress from '@/components/BlogProgress';

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BlogProgress />
      {children}
    </>
  );
}
