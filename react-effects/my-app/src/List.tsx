/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import { readItems, type Item } from './read';

export function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState<unknown>();

  // Your code here:
  //  - When the component mounts:
  //    - Read the items using `readItems` and update state so the list displays
  //    - Handle errors from `readItems`
  useEffect(() => {
    const fetchData = async () => {
      try {
        const readData = await readItems();
        setIsLoading(false);
        setItems(readData);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    if (isLoading) fetchData();
  }, [isLoading]);

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
    <>
      <button onClick={() => setIsLoading(true)}>click</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id}: {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}
