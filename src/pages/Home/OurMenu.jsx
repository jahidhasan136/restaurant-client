import SectionTitle from "../../components/sectionTitle";
import MenuItem from "../../shared/MenuItem";
import useMenu from "../../hooks/useMenu";

const OurMenu = () => {
  const [menu] = useMenu();
  const popularItem = menu.filter((item) => item.category === "popular");
  return (
    <div className="container mt-[92px]">
      <SectionTitle subHeader={"Check it Out"} header={"from our menu"} />
      <div className="grid md:grid-cols-2 gap-6">
        {popularItem.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="btn">View Full Menu</button>
    </div>
  );
};

export default OurMenu;
