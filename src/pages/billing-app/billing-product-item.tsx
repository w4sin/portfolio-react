import { useEffect, useRef, useState } from "react";

import { TProduct } from "../../types/product";

import { FaMinus, FaPlus } from "react-icons/fa";
import NoImage from "../../components/no-image";

const Product = ({ name, price, imageUrl }: TProduct) => {
  return (
    <div className="card bg-base-200 shadow-md border border-gray-200 overflow-hidden">
      <ProductImage imageUrl={imageUrl} name={name} />
      <div className="card-body p-3 justify-evenly gap-0.5">
        <ProductName name={name} />
        <p className="text-base-content/50 font-bold">{`${price}฿`}</p>
        <div className="divider my-0.5" />
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <button className="btn btn-sm btn-success px-2">
              <FaPlus />
            </button>
            <input
              type="text"
              className="input input-md w-full text-center mx-2 md:mx-1 lg:mx-2"
              onFocus={(e) => e.target.select()}
            />
            <button className="btn btn-sm btn-error px-2">
              <FaMinus />
            </button>
          </div>
          <button className="btn btn-success w-full">Add to Billing</button>
        </div>
      </div>
    </div>
  );
};

const ProductName = ({ name }: { name: string }) => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    if (nameRef.current) {
      const lineHeight = parseFloat(
        window.getComputedStyle(nameRef.current).lineHeight
      );
      const isOverflow = nameRef.current.offsetHeight > lineHeight;
      setIsOverflowing(isOverflow);
    }
  }, [name]);

  return isOverflowing ? (
    <div className="tooltip tooltip-bottom" data-tip={name}>
      <h2 ref={nameRef} className="card-title line-clamp-1 cursor-default">
        {name}
      </h2>
    </div>
  ) : (
    <h2 ref={nameRef} className="card-title cursor-default">
      {name}
    </h2>
  );
};

const ProductImage = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: string;
}) => {
  const [imgState, setImgState] = useState<"loading" | "success" | "error">(
    imageUrl ? "loading" : "error"
  );

  const handleOnLoad = () => {
    setImgState(() => "success");
  };

  const handleOnError = () => {
    setImgState(() => "error");
  };

  return (
    <figure className="flex-none w-64 h-28 max-w-full max-h-28 self-center p-0.5">
      {imgState === "error" ? (
        <NoImage />
      ) : (
        <img
          className={`w-full h-full object-cover rounded-lg ${
            imgState === "loading" && "skeleton"
          }`}
          src={imageUrl}
          alt={`${name} image`}
          onLoad={handleOnLoad}
          onError={handleOnError}
        />
      )}
    </figure>
  );
};

export default Product;
