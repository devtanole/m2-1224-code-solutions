import { useEffect, useState } from 'react';
import { readCatalog } from '../lib/read';
import { Link } from 'react-router-dom';
import { type Product } from '../lib/data';
import { toDollars } from '../lib/to-dollars';

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadProducts() {
      try {
        const values = await readCatalog();
        setProducts(values);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Error! {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="flex space-x-4">Catalog</h1>
      <hr className="py-1" />
      <div className="flex flex-wrap">
        {products?.map((product) => (
          <div
            key={product.productId}
            className="w-full md:w-1/2 lg:w1-3 pr-4 pl-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

type CardProps = {
  product: Product;
};

function ProductCard({ product }: CardProps) {
  return (
    <Link
      to={`/details/${product.productId}`}
      className="font-bold mb-3 block cursor-pointer
     text-gray-900 rounded border border-gray-300 mb-4 flex-
     auto p-6">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <div className="product-name">{product.name}</div>
      <div className="product-price text-xl text-gray-600">
        {toDollars(product.price)}
      </div>
      <div className="product-description text-sm text-gray-500 mt-2">
        {product.shortDescription}
      </div>
    </Link>
  );
}
/* <Link to={`/details/${product.productId}`}
    className='font-bold mb-3 block cursor-pointer
     text-gray-900 rounded border border-gray-300 mb-4 flex-
     auto p-6'>
      <img src={product.imageUrl} alt={product.name} className='w-full h-48 object-cover rounded mb-4'/>
      <div className='product-name'>{product.name}</div>
      <div className='product-price text-xl text-gray-600'>{toDollars(product.price)}</div>
      <div className='product-description text-sm text-gray-500 mt-2'>{product.shortDescription}</div>
    </Link> */
