import FoodCard from "../../components/FoodCard";

const OrderTabs = ({ items }) => {
  return (
    <div>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderTabs;
