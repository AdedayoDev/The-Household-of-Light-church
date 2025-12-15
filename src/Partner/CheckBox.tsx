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
    <div>
      <button onClick={handleCopy} className="flex items-center justify-between">
        <span>{value}</span>
        {copied ? <FaCheck size={18} /> : <FaRegCopy size={18} />}
      </button>
    </div>
  );
};

export const BankName = () => {

  
  return (
    <div>
    <button>
      <span>Bank Name</span>
      moniepoint bank
    </button>
  </div>
  )
  
};
