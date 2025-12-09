const LeadPastor = () => {
  return (
    <div className="w-full py-12 text-justify">
      <div className="flex items-center justify-between w-10/12 mx-auto gap-10">
        <div className="w-1/2">
          <img src="leadPastor.svg" alt="Our Lead Pastor" className="w-[481px] h-[483px]" />
        </div>

        <div className="w-1/2 space-y-10">
          <h2 className="uppercase font-semibold text-3xl text-transparent bg-clip-text bg-linear-to-r from-[#9b28b0] to-black">our lead pastor</h2>
          <p className="flex flex-col w-[592p]  space-y-4  pr-20">
            <span className="">
              Pastor Ipaye Isaac is a passionate minister of the Gospel,
              committed to unveiling the revelation of Christ and raising
              believers into the full stature of who they are in Him. Known for
              his clarity of teaching, depth of understanding, and strong
              alignment with the Scriptures, he carries a unique grace to
              illuminate the finished works of Christ and bring men into
              maturity.
            </span>
            <span>
              Driven by a burning desire to see believers grow beyond religion
              into true spiritual understanding, Pastor Isaac teaches with
              simplicity, accuracy, and the power of the Spirit. His ministry is
              marked by a strong emphasis on identity in Christ, spiritual
              growth, sound doctrine, and the practical expression of God’s
              love.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadPastor;
