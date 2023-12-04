import SectionTitle from "../../components/sectionTitle";
import featuredImg from "../../assets/home/featured.jpg";

const Features = () => {
  return (
    <div className="mt-[130px] featured-img text-white">
      <SectionTitle subHeader={"Chekc it out"} header={"from our menu"} />
      <div className="container flex items-center gap-[68px] text-white">
        <img className="w-[648px] h-[400px]" src={featuredImg} alt="" />
        <div>
          <h3 className="text-2xl">March 20, 2023</h3>
          <h3 className="text-2xl">Where can i get some?</h3>
          <p className="text-xl leading-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="mt-6 border-b-[3px] border-[#fff] rounded-lg px-[30px] py-5 uppercase font-medium text-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-[#fff] hover:text-black">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
