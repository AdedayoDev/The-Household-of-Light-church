import { useState } from "react";
import { FaPaypal, FaCcVisa } from "react-icons/fa";

const OnlineGiving = () => {
  const [method, setMethod] = useState<"paypal" | "card">("paypal");

  return (
    <div className="w-10/12 mx-auto space-y-4">
      {/* ================= PAYPAL OPTION ================= */}
      <div
        onClick={() => setMethod("paypal")}
        className={`cursor-pointer rounded-lg border p-4 transition
          ${method === "paypal" ? "bg-gray-100 border-gray-400" : "bg-white"}
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="radio" checked={method === "paypal"} readOnly />
            <span className="font-medium">PayPal</span>
          </div>
          <FaPaypal size={26} color="#003087" />
        </div>

        {/* PayPal plugin placeholder */}
        {method === "paypal" && (
          <div className="mt-4">
            <button
              className="w-full rounded-md py-3 font-medium text-white"
              style={{ backgroundColor: "#003087" }}
            >
              Continue with PayPal
            </button>
          </div>
        )}
      </div>

      {/* ================= CARD OPTION ================= */}
      <div
        onClick={() => setMethod("card")}
        className={`cursor-pointer rounded-lg border p-4 transition
          ${method === "card" ? "bg-gray-100 border-gray-400" : "bg-white"}
        `}
      >
        <div className="flex items-center justify-between">
          <div className="w-full flex items-center justify-between  gap-3">
            <div className="flex  gap-2 items-start  ">
              <input type="radio" checked={method === "card"} readOnly />
              <div className="flex flex-col ">
                <span className="font-medium">Credit</span>
                <span className="font-normal text-black/60 text-sm">
                  Pay securely using your Visa or Mastercard
                </span>
              </div>
            </div>

            <div className="flex gap-2">
              <FaCcVisa size={22} color="#1A1F71" />
              {/* <FaCcMastercard size={22} color="#EB001B" />
              <FaCcAmex size={22} color="#2E77BC" /> */}
            </div>
          </div>
        </div>

        {/* Card plugin placeholder */}
        {method === "card" && (
          <div className="mt-4 space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full rounded-md border px-3 py-2"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Cardholder Name"
                className="w-full rounded-md border px-3 py-2"
              />
              <input
                type="text"
                placeholder="MM / YY"
                className="rounded-md border px-3 py-2"
              />

              <input
                type="password"
                placeholder="CVV"
                className="rounded-md border px-3 py-2"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineGiving;
