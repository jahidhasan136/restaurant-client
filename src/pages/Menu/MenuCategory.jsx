import { Link } from "react-router-dom";

import Cover from "../../shared/Cover";
import MenuItem from "../../shared/MenuItem";

const MenuCategory = ({ heading, subHeading, item, img }) => {
  return (
    <div>
      <Cover img={img} heading={heading} subHeading={subHeading} />
      <div className="container grid md:grid-cols-2 gap-6 mt-[85px] mb-[55px]">
        {item.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to="#">
        <button className="btn mb-[43px]">View your favourite food</button>
      </Link>
    </div>
  );
};

export default MenuCategory;
