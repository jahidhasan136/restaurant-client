// import chefServe from "../assets/home/chef-service.jpg";

const Cover = ({ heading, subHeading, chefServe }) => {
  return (
    <div
      className="text-center grid items-center justify-center"
      style={{
        backgroundImage: `url(${chefServe})`,
        backgroundSize: "cover",
        width: "100%",
        height: "700px",
      }}
    >
      <div className="bg-[#15151599] p-[128px] text-white">
        <h2 className="text-[45px] font-semibold mb-2 uppercase">{heading}</h2>
        <p className="font-semibold w-[1096px]">{subHeading}</p>
      </div>
    </div>
  );
};

export default Cover;
