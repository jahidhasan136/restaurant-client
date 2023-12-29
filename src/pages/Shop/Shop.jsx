import Cover from "../../shared/Cover";
// shop img
import shopImg from "../../assets/shop/banner2.jpg";
// react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import OrderTabs from "./OrderTabs";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Shop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const dessertItem = menu.filter((item) => item.category === "dessert");
  const pizzaItem = menu.filter((item) => item.category === "pizza");
  const saladItem = menu.filter((item) => item.category === "salad");
  const soupItem = menu.filter((item) => item.category === "soup");
  const drinksItem = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Shop</title>
      </Helmet>
      {/* BANNER SECTION */}
      <Cover
        img={shopImg}
        heading="Our shop"
        subHeading={"would you like to try a dish?"}
      />
      {/* Food order tabs */}
      <div className="container mt-[130px] flex justify-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="uppercase text-[#151515] font-medium text-xl text-center">
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTabs items={saladItem} />
          </TabPanel>
          <TabPanel>
            <OrderTabs items={pizzaItem} />
          </TabPanel>
          <TabPanel>
            <OrderTabs items={soupItem} />
          </TabPanel>
          <TabPanel>
            <OrderTabs items={dessertItem} />
          </TabPanel>
          <TabPanel>
            <OrderTabs items={drinksItem} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
