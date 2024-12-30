import React from 'react';

function Heading({ title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <h1 className="text-base md:text-xl font-bold text-gray-900">{title}</h1>
      <p className="mt-2 text-sm md:text-base text-gray-600">{subtitle}</p>
    </div>
  );
}

export default Heading;