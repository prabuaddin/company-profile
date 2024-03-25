import Image from "next/image";

const CardProducts = ({ imageUrl, price, nameProduct, description }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-5 mt-5 bg-white border border-blue-gray-400 rounded-xl shadow-xl py-20 w-[400px] m-auto lg:flex flex-col justify-center items-center text-center">
        <div className="relative w-[300px] h-[300px] bg-red-100">
          <Image
            src={imageUrl}
            width={300}
            height={200}
            className="max-w-full min-h-full object-cover"
          />
        </div>
        <h1 className="font-bold text-xl mt-5">Rp. {price.toLocaleString()}</h1>
        <p className="font-semibold">{nameProduct}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default CardProducts;