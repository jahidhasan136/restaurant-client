const MenuItem = ({ item }) => {
  const { name, recipe, price, image } = item;

  return (
    <div className="flex items-center">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="mr-8 w-[118px] h-[104px]"
        src={image}
        alt=""
      />
      <div className="flex">
        <div className="mr-1 grid gap-2">
          <h3 className="text-[#151515] text-xl">{name} ------------------</h3>
          <p className="text-[#737373]">{recipe}</p>
        </div>
        <p className="text-[#BB8506] text-xl">${price}</p>
      </div>
    </div>
  );
};

export default MenuItem;
