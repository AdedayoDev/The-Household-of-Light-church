import { BankName, CheckBox } from "./CheckBox";

const OfflineGiving = () => {
  return (
    <section className="w-full ">
      <div className="w-10/12 mx-auto   ">
        <div className="space-y-4">
          <h2>
            Due to the CBN Policy on cash deposits and movements, we encourage
            the use of:
          </h2>

          <ol>
            {[
              "Online platforms via our website office.",
              "Cheques may also be brought through the church.",
              "Direct debit from any bank to this account number accordingly.",
            ].map((item, index) => (
              <li key={index} className="flex gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full  text-sm text-black">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>

          <p className="font-medium">
            Please find below our bank account details
          </p>
        </div>

        {/* Bank details section */}
        <div className="w-full bg-[#200026] mt-6 rounded-xl space-y-4 text-white p-4 ">
          {/* Bank Name and Account Number */}
          <div className="flex gap-4 ">
            {/* Bank Name */}
            <div className="w-full">
              <BankName />
            </div>
            {/*Account Number  */}
            <div className="w-full">
              <CheckBox value="813662154" />
            </div>
          </div>

          {/* Account name */}
          <div className="bg-white rounded-xl ">
            <button className="flex flex-col items-start px-4 py-2 ">
              <span className="capitalize bankname-text">Acount name</span>
              <span className="bank-text uppercase">the household of light</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfflineGiving;
