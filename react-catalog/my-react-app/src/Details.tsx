import { useEffect, useState } from 'react';
import { type Product } from '../lib/data';
import { readProduct } from '../lib/read';
import { useParams, Link } from 'react-router-dom';
import { toDollars } from '../lib/to-dollars';

export function Details() {
  const [product, setProduct] = useState<Product>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();
  const { productId } = useParams();

  useEffect(() => {
    async function loadProduct(productId: number) {
      try {
        const product = await readProduct(productId);
        setProduct(product);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (productId) {
      setIsLoading(true);
      loadProduct(+productId);
    }
  }, [productId]);

  if (isLoading) return <div>Loading...</div>;
  if (error || !product) {
    return (
      <div>
        Error Loading Item {productId}:{' '}
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }
  const { name, price, imageUrl, longDescription, shortDescription } = product;
  return (
    <div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link
            to="/"
            className=" flex space-x-4 p-3 text-gray-600 cursor-pointer text-left">
            &lt; Back to Catalog
          </Link>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4 flex items-stretch">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-full sm:w-1/2 md:w-3/5 px-4">
              <h2 className="text-left font-bold">{name}</h2>
              <p className=" text-left text-xl text-gray-700 font-semibold mt-2">
                {toDollars(price)}
              </p>
              <p className="text-left text-gray-700 mt-2">{shortDescription}</p>
            </div>
          </div>
          <div className="px-4 mt-4">
            <p className="text-left whitespace-pre-wrap">{longDescription}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-start mt-4 px-4 mt-4">
        <button
          onClick={() => alert(`added ${name} to cart`)}
          className="px-4 py-2 rounded">
          Add to cart
        </button>
      </div>
    </div>
  );
}

/*
<div className="container">
      <div className="flex flex-col">
        <div className="flex-auto p-6">
          <Link
            to="/"
            className="p-3 text-gray-600 cursor-pointer flex space-x-4">
            &lt; Back to Catalog{''}
          </Link>
          <div className="flex flex-wrap mb-4">
            <div className="w-full sm:w-1/2 md:w-2/5 pt-2 px-4">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-80 object-contain"
              />
            </div>
            <h2 className="w-full sm:w-1/2 md:w-3/5 px-4 font-bold">{name}</h2>
            <p className="text-xl text-gray-700 font-semibold">
              {toDollars(price)}
            </p>
          </div>
          <div>
              <p className='px-4 whitespace-pre-wrap'>{shortDescription}</p>
            </div>
          <div className="px-4">
            <p className="whitespace-pre-wrap">{longDescription}</p>
          </div>
        </div>
      </div>
    </div>
*/
