"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Modal } from "../Modal";

export type Product = {
  title: string;
  price: number;
  image: string;
  description: string;
};
function ProductCard({
  product,
  buttonText,
}: {
  product: Product;
  buttonText: string;
}) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  return (
    <div className="shadow-[0px_1px_6px_0px_rgba(0,0,0,0.11)] rounded-xl">
      <Modal
        isOpen={Boolean(selectedProduct)}
        onDismiss={() => setSelectedProduct(null)}
      >
        <div>
          <h1 className='text-slate-950 font-semibold'>
            {selectedProduct?.title}
          </h1>
        </div>
        <div className='flex lg:flex-row flex-col items-center'>
          <div className='flex-1'>
            {selectedProduct?.image && (
              <div className='relative h-[400px] flex items-center justify-center'>
                <Image
                  src={selectedProduct?.image}
                  alt=''
                  height={272}
                  width={280}
                  className='object-contain'
                />
              </div>
            )}
          </div>

          <div className='flex-1'>
            <p>{selectedProduct?.description}</p>
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            className='
              bg-[#79AC78] 
              w-fit 
              px-8 
              text-white 
              py-2 
              rounded-md
            ' 
            onClick={() =>setSelectedProduct(null)}
          >
            Add
          </button>
        </div>
      </Modal>

      <div className="group">
        <div 
          className='
            relative 
            flex 
            items-center 
            justify-center 
            h-[300px] 
            cursor-pointer
            hover:scale-105
            hover:duration-200
            hover:ease-linear'
          >
          <Image
            src={product.image}
            alt={product.title}
            height={180}
            width={180}
            className='object-contain object-center'
            unoptimized
          />
        </div>
        <div className='p-4 border-t border-slate-100 rounded-b-xl grid gap-2'>
          <h1 className="font-semibold text-xl text-[#79AC78]">{product.title}</h1>
          <span className="font-semibold">${product.price}</span>
          <button
            onClick={() => handleSelect(product)}
            className='bg-[#79AC78] px-4 py-2 text-white rounded-md w-fit'
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
