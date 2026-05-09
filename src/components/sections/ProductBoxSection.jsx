import React from 'react';
import ProductBox from '../content/ProductBox';
import productBoxData from '../../data/productBoxData';

const ProductBoxSection = () => {
  return (
    <section className="px-4 md:px-6 py-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {productBoxData.map((data, index) => (
          <ProductBox key={index} data={data} />
        ))}
      </div>
    </section>
  );
};

export default ProductBoxSection;
