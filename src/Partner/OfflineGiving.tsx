import {BankName, CheckBox} from "./CheckBox";

const OfflineGiving = () => {
  return (
    <section className="w-full ">
      <div className="w-10/12 mx-auto inline-block ">
        <div className="">
          <h2>
            Due to the CBN Policy on cash deposits and movements, we encourage
            the use of:
          </h2>

          <ol>
            <li>Online platforms via our website office.</li>
            <li>Cheques may also be brought through the church.</li>
            <li>
              Direct debit from any bank to this account number accordingly.
            </li>
          </ol>

          <p className="font-medium">
            Please find below our bank account details
          </p>
        </div>

        {/* Bank details section */}
        <div>
          {/* Bank Name and Account Number */}
          <div className="flex gap-8 ">
            {/* Bank Name */}
            <div>
              <BankName />
            </div>
            {/*Account Number  */}
            <div>
              <CheckBox value="813662154" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default OfflineGiving;
