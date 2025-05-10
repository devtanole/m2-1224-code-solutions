import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './search.css';

type ListProps = {
  quotes: string[];
};

export function SearchBar({ quotes }: ListProps) {
  const [search, setSearch] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const filteredQuotes = quotes.filter((quote) =>
    quote.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="bar-container">
        <div className="icon">
          <i className="fa fa-search"></i>
        </div>
        <input placeholder="Search" onChange={handleChange} value={search} />
      </div>
      <ul>
        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((quote: string, index: number) => (
            <li key={index}>{quote}</li>
          ))
        ) : (
          <li>No results.</li>
        )}
      </ul>
    </>
  );
}
