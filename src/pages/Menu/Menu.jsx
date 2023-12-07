import { Helmet } from "react-helmet-async";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory";
import chefServe from "../../assets/home/chef-service.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const offeredItem = menu.filter((item) => item.category === "offered");
  console.log(offeredItem);
  const dessertItem = menu.filter((item) => item.category === "dessert");
  const pizzaItem = menu.filter((item) => item.category === "pizza");
  const saladItem = menu.filter((item) => item.category === "salad");
  const soupItem = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* OFFERED SECTION */}
      <div>
        <MenuCategory
          img={chefServe}
          heading="Our Menu"
          subHeading="Would you like to try a dish?"
          title="offered"
          item={offeredItem}
        />
      </div>
      {/* DESSERTS SECTIONS */}
      <div>
        <MenuCategory
          img={chefServe}
          heading="desserts"
          subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="dessert"
          item={dessertItem}
        />
      </div>
      {/* PIZZA SECTION */}
      <div>
        <MenuCategory
          img={chefServe}
          heading="pizza"
          subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="pizza"
          item={pizzaItem}
        />
      </div>
      {/* SALADS SECTION */}
      <div>
        <MenuCategory
          img={chefServe}
          heading="salads"
          subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="salad"
          item={saladItem}
        />
      </div>
      {/* SOUP SECTION */}
      <div>
        <MenuCategory
          img={chefServe}
          heading="soup"
          subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="soup"
          item={soupItem}
        />
      </div>
    </div>
  );
};

export default Menu;
