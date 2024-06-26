"use client";
import CardProducts from "~/components/card-products";
import Link from "next/link";
import { MdSort } from "react-icons/md";
import { BiCategory } from "react-icons/bi";

export default function ProductList() {
  const productData = [
    {
      id: 1,
      nameProduct: "RIVYA BACKHOUSIA ACNE POWER SERUM",
      imageUrl:
        "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2023/03/30140250/PDP-ECOMMERCE-TERBARU-acne-power-serum-920x920.jpg",
      price: 139920,
      description:
        "RIVYA Backhousia Acne Power Serum is formulated with 5 natural active ingredients that can used in every type skin",
    },
    {
      id: 2,
      nameProduct: "RIVYA BACKHOUSIA FACIAL WASH 100ML",
      imageUrl:
        "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2023/03/30140255/PDP-ECOMMERCE-TERBARU-fw-New-920x920.jpg",
      price: 87120,
      description:
        "RIVYA Backhousia Facial Wash is the 1st facial wash in Indonesia with Backhousia Citriodora & Sapindus Mukorossi",
    },
    {
      id: 3,
      nameProduct: "RIVYA BACKHOUSIA SLEEP CARE INFUSED SERUM",
      imageUrl:
        "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/03/29064413/FOTO_720x720_SLEEP-CARE.jpg",
      price: 139920,
      description:
        "RIVYA Backhousia Sleep Care Infused Serum is formulated with 10 natural active ingredients that can be used by various skin types ",
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-start items-center px-7 lg:flex flex-row p-5 justify-start items-center gap-5">
        <button className="btn bg-white border border-black w-[100px]">
          Sort
          <MdSort />
        </button>
        <button className="btn bg-white border border-black w-[120px]">
          Category
          <BiCategory />
        </button>
      </div>
      <div className="grid grid-cols-1 w-auto md:grid-cols-2 w-auto lg:grid-cols-3 min-w-max">
        {
          productData.map((product, index) => {
            return (
              <div key={index}>
                <Link href={`/pages/detail-product/${product.id}`}>
                  <CardProducts
                    key={index}
                    imageUrl={product.imageUrl}
                    price={product.price}
                    nameProduct={product.nameProduct}
                    description={product.description}
                  />
                </Link>
              </div>
            );
          })}
      </div>
    </>
  );
}
