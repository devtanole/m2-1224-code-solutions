interface BannerProps {
  items: string[];
}

export function Wrap({ items }: BannerProps) {
  return (
    <>
      <div className="rotate">
        <h2>Banner</h2>
      </div>
      <div className="content">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
