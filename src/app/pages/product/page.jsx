'use client'
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import CardProducts from "~/components/card-products";
import Link from "next/link";


export default function ProductList() {
  const [products, setProducts] = useState(null);

  const onFetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
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
        <div>
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
