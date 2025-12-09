const OurServices = () => {
  interface Services {
    id: number;
    image: string;
    day: string;
    meeting: string;
    time: number;
    am_pm: string;
  }

  const ServiceDays: Services[] = [
    {
      id: 1,
      image: "leadPastor.svg",
      day: "sunday",
      meeting: "sunday service",
      time: 9,
      am_pm: "am",
    },
    {
      id: 2,
      image: "leadPastor.svg",
      day: "tuesday",
      meeting: "prayer meeting",
      time: 5,
      am_pm: "pm",
    },
    {
      id: 3,
      image: "leadPastor.svg",
      day: "friday",
      meeting: "bible study",
      time: 5,
      am_pm: "pm",
    },
    {
      id: 4,
      image: "leadPastor.svg",
      day: "every first tuesday",
      meeting: "healing & miracle service",
      time: 5,
      am_pm: "pm",
    },
  ];
  return (
    <div className="w-full py-10">
      <div className="w-10/12 mx-auto flex flex-col items-center justify-center space-y-6 ">
        <h2 className="uppercase text-transparent bg-linear-to-t from-[#9b28b0] to-black bg-clip-text text-4xl font-bold ">
          our services
        </h2>
        <p className="font-medium text-black dark:text-slate-100 text-center px-42">
          Our services are centered on worship, the Word, and spiritual growth.
          Each gathering helps believers understand Christ better and walk in
          all God has accomplished for them. Join us to experience clarity,
          fellowship, and transformation in His presence
        </p>
      </div>

      <div className="w-10/12 mx-auto">
        <div className="w-10/12 md:w-7/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-30 gap-y-10 py-10 ">
          {ServiceDays.map((item) => (
            <div key={item.id} className=" rounded-4xl relative">
              <div className="flex h-[150px]">
                <div className="w-1/2  h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.meeting}
                    className="object-cover rounded-l-4xl w-full h-full"
                  />
                </div>
                <div
                  className={`
                    w-1/2 rounded-r-4xl flex flex-col items-end pr-5 justify-center
                    ${item.id === 1 ? "bg-fuchsia-800 " : ""}
                    ${item.id === 2 ? "bg-pink-950 " : ""}                   
                    ${item.id === 3 ? "bg-yellow-800 " : ""}
                     ${item.id === 3 ? "bg-slate-900 " : ""}
                    ${item.id === 4 ? "bg-slate-300 " : ""}    
                  `}
                >
                  <p
                    className={`${
                      item.id === 4
                        ? "text-xs uppercase text-white"
                        : "text-lg uppercase text-white"
                    }`}
                  >
                    {item.day}
                  </p>
                  <p className={`${
                      item.id === 4
                        ? "text-2xl text-end uppercase text-white"
                        : "text-3xl uppercase text-end text-white"
                    }`}>
                    {item.id === 4 ? (
                      <>
                        {item.meeting.split(" ")[0]}{" "}
                        {item.meeting.split(" ")[1]}
                        <br />
                        {item.meeting.split(" ")[2]} <br />
                        {item.meeting.split(" ")[3]} <br />
                      </>
                    ) : (
                      <>
                        {item.meeting.split(" ")[0]} <br />
                        {item.meeting.split(" ")[1]}
                      </>
                    )}
                  </p>
                </div>
              </div>


              <div className={`
                    w-13 rounded-r-3xl flex flex-col items-start justify-center absolute  uppercase text-end text-white top-8 -right-13 shadow p-2
                    ${item.id === 1 ? "bg-fuchsia-800 " : ""}
                    ${item.id === 2 ? "bg-pink-950 " : ""}                   
                    ${item.id === 3 ? "bg-yellow-800 " : ""}
                     ${item.id === 3 ? "bg-slate-900 " : ""}
                    ${item.id === 4 ? "bg-slate-300 " : ""}    
                  `}>
                <p  className="font-bold text-3xl">{item.time}</p>
                <p className="font-medium text-2xl">{item.am_pm}</p>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
