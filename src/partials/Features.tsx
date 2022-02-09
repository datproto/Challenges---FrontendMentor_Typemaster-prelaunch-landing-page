import React from 'react';

import Image from 'next/image';

import features from '@/data/features.json';

function Features() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-16">
      {features.map((f) => (
        <div
          key={f.id}
          className="flex flex-col items-center md:items-start text-center md:text-left gap-6"
        >
          <div className="relative flex items-center justify-center bg-orange-default rounded-2xl h-16 w-16">
            <Image
              src={`/assets/shared/icon-${f.icon.name}.svg`}
              alt={`icon-${f.id}`}
              width={f.icon.width}
              height={f.icon.height}
              className="mx-auto"
            />
          </div>
          <h3 className="flex flex-col mt-6">
            <span>{f.title.line_1}</span>
            <span>{f.title.line_2}</span>
          </h3>
          <p>{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Features;
