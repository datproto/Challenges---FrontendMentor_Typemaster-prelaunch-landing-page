import Image from 'next/image';
import React from 'react';
import Button from '@/components/button';

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <div className="relative w-10 h-10">
        <Image
          src="/assets/shared/logo.svg"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Button type="gray">pre-order now</Button>
    </div>
  );
}

export default Navbar;
