import './Image.css';

type imgProps = {
  src: string;
  alt: string;
};

export function Image({ src, alt }: imgProps) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={src} alt={alt} />
      </div>
    </div>
  );
}
