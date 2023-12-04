import { useEffect, useState } from "react";
import SectionTitle from "../../components/sectionTitle";
import MenuItem from "../../shared/MenuItem";

const OurMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItem = data.filter((item) => item.category === "popular");
        setMenu(popularItem);
      });
  }, []);
  return (
    <div className="container mt-[92px]">
      <SectionTitle subHeader={"Check it Out"} header={"from our menu"} />
      <div className="grid md:grid-cols-2 gap-6">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="btn">View Full Menu</button>
    </div>
  );
};

export default OurMenu;
