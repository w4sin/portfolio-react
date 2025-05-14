import { useEffect, useRef, useState } from "react";

import { TProduct } from "../../@types/product";

import { FaMinus, FaPlus } from "react-icons/fa";
import NoImage from "../../components/no-image";
import { useBillingStore } from "../../state-management/billing-store";
import { LocalizedStrings } from "../../@types/language";
import { useConfigStore } from "../../state-management/config-store";

const Product = (data: TProduct) => {
  const { name, price, imageUrl } = data;
  const { addItem } = useBillingStore();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const quantity = formData.get("quantity");
    addItem({ ...data, quantity: parseInt(quantity as string) });
  };

  return (
    <div className="card bg-base-200 shadow-md border border-gray-200 overflow-hidden">
      <ProductImage imageUrl={imageUrl} name={name} />
      <form
        onSubmit={onSubmit}
        className="card-body p-3 justify-evenly gap-0.5"
      >
        <ProductName name={name} />
        <p className="text-base-content/50 font-bold">{`${price}฿`}</p>
        <div className="divider my-0.5" />
        <div className="flex flex-col">
          <ProductQuantity />
          <button type="submit" className="btn btn-success w-full">
            Add to Billing
          </button>
        </div>
      </form>
    </div>
  );
};

const ProductName = ({ name }: { name: LocalizedStrings }) => {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const { lng } = useConfigStore();

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
        {name[lng]}
      </h2>
    </div>
  ) : (
    <h2 ref={nameRef} className="card-title cursor-default">
      {name[lng]}
    </h2>
  );
};

const ProductImage = ({
  imageUrl,
  name,
}: {
  imageUrl: string;
  name: LocalizedStrings;
}) => {
  const [imgState, setImgState] = useState<"loading" | "success" | "error">(
    imageUrl ? "loading" : "error"
  );
  const { lng } = useConfigStore();

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
          alt={`${name[lng]} image`}
          onLoad={handleOnLoad}
          onError={handleOnError}
        />
      )}
    </figure>
  );
};

const ProductQuantity = () => {
  const [value, setValue] = useState<string>("1");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseInt(e.target.value);
    if (isNaN(parsedValue) || parsedValue < 1) setValue(() => "1");
    else if (parsedValue > 99) setValue(() => "99");
    else setValue(() => parsedValue.toString());
  };

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => e.target.select();

  const onChangeQuantity = (isPlus: boolean) => () => {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue)) return;
    if (isPlus) {
      if (parsedValue < 99) setValue(() => (parsedValue + 1).toString());
    } else {
      if (parsedValue > 1) setValue(() => (parsedValue - 1).toString());
    }
  };

  return (
    <div className="flex justify-between items-center mb-2">
      <button
        type="button"
        onClick={onChangeQuantity(false)}
        className="btn btn-sm btn-error px-2"
      >
        <FaMinus />
      </button>
      <input
        name="quantity"
        value={value}
        type="text"
        className="input input-md w-full text-center mx-2 md:mx-1 lg:mx-2"
        onFocus={onFocus}
        onChange={onChange}
      />
      <button
        type="button"
        onClick={onChangeQuantity(true)}
        className="btn btn-sm btn-success px-2"
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Product;
