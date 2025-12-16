import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

type ValueProp = {
  value: string;
};

export const CheckBox = ({ value }: ValueProp) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy");
    }
  };

  return (
    <div className="bg-white rounded-xl  ">
      <div className="px-4 py-2 ">
        <span className="capitalize bankname-text">Account number</span>
        <button
          onClick={handleCopy}
          className="flex items-center justify-between w-full bank-text uppercase cursor-pointer"
        >
          <span>{value}</span>
          {copied ? <FaCheck size={18} /> : <FaRegCopy size={18} />}
        </button>
      </div>
    </div>
  );
};

export const BankName = () => {
  return (
    <div className="bg-white rounded-xl ">
      <button className="flex flex-col items-start px-4 py-2 ">
        <span className="capitalize bankname-text">Bank Name</span>
        <span className="bank-text uppercase">moniepoint bank</span>
      </button>
    </div>
  );
};
