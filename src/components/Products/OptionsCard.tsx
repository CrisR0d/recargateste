
export const ProductOption = ({ title, price, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg flex justify-between items-center ${bgColor}`}>
      <div>
        <h3 className="text-xl text-white">{title}</h3>
        <p className="text-white">{price}</p>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded-lg">Buy Now</button>
    </div>
  );
};

