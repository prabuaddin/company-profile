'use client'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import CardProducts from "~/components/card-products";
import Link from "next/link";
import { MdSort } from "react-icons/md";
import { BiCategory } from "react-icons/bi";



export default function ProductList() {
  const [products, setProducts] = useState(null);

  const onFetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/products')
      console.log(res)
      setProducts(res.data);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    onFetchProducts();
  }, []);

  return (
    <>
    <div className="flex flex-row justify-start items-center px-7 lg:flex flex-row p-5 justify-start items-center gap-5">
      <button className="btn bg-white border border-black w-[100px]">Sort<MdSort/></button>
      <button className="btn bg-white border border-black w-[120px]">Category<BiCategory /></button>
    </div>    
        <div className="grid grid-cols-1 w-auto md:grid-cols-2 w-auto lg:grid-cols-3 min-w-max">
          {
            products?.map((product, index) => {
              return(
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
              )
            })
          }
      </div>
    </>
  );
}
