import Image from "next/image";

const CardProducts = ({ image, price, title, description }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-5 mt-5 bg-white border border-blue-gray-400 rounded-xl shadow-xl py-20 w-[400px] m-auto object-cover lg:flex flex-col justify-center items-center text-center">
        <div className="relative">
          <Image
            src={image}
            width={300}
            height={200}
            alt={title}
          />
        </div>
        <h1 className="font-bold text-xl mt-5">Rp. {price.toLocaleString()}</h1>
        <p className="font-semibold">{title}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default CardProducts;