import React from 'react';
import { Button } from '@/components/ui/8bit/button';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 right-0 z-50 px-4 py-2">
      <Link href="/about-us">
        <Button
          className="p-2 transition w-10 h-10 text-md"
          aria-label="Info"
          variant="default"
        >
          i
        </Button>
      </Link>
    </nav>
  );
}