const FoodCard = ({ item }) => {
  console.log(item);
  const { image, name, recipe } = item;
  return (
    // food single card
    <div className="w-[424px] h-[541px] mt-[68px]">
      <img className="w-full" src={image} alt="" />
      <div className="bg-[#F3F3F3] px-[39px] py-[32px]">
        <h3 className="text-2xl font-medium text-[#151515] text-center">
          {name}
        </h3>
        <p className="text-[#737373] leading-[26px] mb-6 mt-2">{recipe}</p>
        <button className="card-btn">Add to cart</button>
      </div>
    </div>
  );
};

export default FoodCard;
