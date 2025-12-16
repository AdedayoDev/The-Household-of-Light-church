interface ContactInfoItem {
  id: number;
  icon: string;
  heading: string;
  subText: string;
  address: string;
  type: "whatsapp" | "email" | "address" | "phone";
}

const infoData: ContactInfoItem[] = [
  {
    id: 1,
    icon: "/whatsappLive.svg",
    heading: "WhatsApp Live Chat",
    subText: "Speak to us quickly",
    address: "https://wa.me/2348136621545",
    type: "whatsapp",
  },
  {
    id: 2,
    icon: "/liveTicket.svg",
    heading: "Submit Ticket",
    subText: "Reach us via our email",
    address: "mailto:thehouseholdoflight@gmail.com",
    type: "email",
  },
  {
    id: 3,
    icon: "/address.svg",
    heading: "Our Address",
    subText: "Visit us at our address",
    address:
      "https://maps.google.com/?q=Hall 1, Kings Primary School, Aduin Area, Ogbomoso",
    type: "address",
  },
  {
    id: 4,
    icon: "/call.svg",
    heading: "Give Us A Call",
    subText: "Talk to us over the phone",
    address: "tel:+2348136621545",
    type: "phone",
  },
];

const ContactInfo = () => {
  return (
    <section className="w-full  ">
      <div className="bg-[#FADEFF] w-[519px] py-7 rounded-xl"> 
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoData.map((item) => (
            <a
              key={item.id}
              href={item.address}
              target={item.type === "address" ? "_blank" : undefined}
              rel={item.type === "address" ? "noopener noreferrer" : undefined}
              className="
              flex flex-col items-start gap-4 p-6 bg-white rounded-2xl
              shadow-sm hover:shadow-md transition-all duration-300
              hover:-translate-y-1
            "
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#9b28b0]/10">
                <img src={item.icon} alt={item.heading} className="w-6 h-6" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.heading}
                </h3>
                <p className="text-sm text-gray-600">{item.subText}</p>
                <span className="text-sm font-medium text-[#9b28b0] break-all">
                  {item.type === "address"
                    ? "View on map"
                    : item.address.replace(/(mailto:|tel:|https:\/\/)/g, "")}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
