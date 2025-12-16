import ContactInfo from "./ContactInfo";
import FormSection from "./FormSection";

const ContactUsAndForm = () => {
  return (
    <section className="w-full pb-72 pt-12 ">
      <div className="mx-auto w-10/12 flex items-center justify-between">
        {/* Detailed Address */}
        <div className="w-1/2">
          <ContactInfo />
        </div>

        {/* Contact us Form */}
        <div className="w-1/2">
          <FormSection />
        </div>
      </div>
    </section>
  );
};

export default ContactUsAndForm;
