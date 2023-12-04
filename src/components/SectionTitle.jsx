const SectionTitle = ({ subHeader, header }) => {
  return (
    <div className="grid justify-center text-center pb-12">
      <p className="text-[#D99904] text-xl italic border-[#E8E8E8] border-b-[4px] pb-4">
        ---{subHeader}---
      </p>
      <h2 className="text-[40px] text-[#151515] border-b-[4px] border-[#E8E8E8] pt-5 pb-6 uppercase">
        {header}
      </h2>
    </div>
  );
};

export default SectionTitle;
