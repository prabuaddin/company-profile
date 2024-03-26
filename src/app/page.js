"use client";

import { GoDiamond } from "react-icons/go";
import CardProducts from "~/components/card-products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { data } from "autoprefixer";

export default function Home() {

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
      <div
        className="hero h-auto lg:h-[350px]"
        style={{
          backgroundImage:
            "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqhuYCXLBSzV-Pp0ESYg5gDdJ_ZBEkqd7fgbiXP2y4NM-sNz43lySlJj6M4iVa3jIWTYUZxAxqmcVFKuOa33_Q15FubpwgOfnTvOvmW4XCwL7Z2hrrwWBqf9g1qj1_SY_OOKqmpzE6xIX5qdGCUHfaGTDjiNUjC0EPwnN8U6bsyzqHxrvibDE-ALJR/w1200-h630-p-k-no-nu/IMG-20220328-WA0001-01.jpeg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-lg font-bold lg:text-3xl">
              Revealing The Best For You
            </h1>
            <p className="mb-5 text-md lg:text-xl">
              Rivya was built to help people to become the best version of
              themselves through a range of skincare products that are
              innovative yet natural, effective yet affordable and easy to use.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center mt-5">
        <h1 className="text-2xl font-semibold">Company Overview</h1>
        <hr className="w-[20%] mt-1" />
        <p className="mt-5 text-center px-10 text-sm lg:text-lg">
          A Vegan Indonesian skincare product envision by Alfa Priliana, who
          also plays an active role as a board member of D'Cost Seafood
          Restaurant Group, Gold's Gym and Business Development Advisor for
          Berrybenka. Rivya combines the best of nature with the best raw
          material processing using modern technology from countries such as
          Australia, South Korea, Switzerland, France, Canada, United States,
          Spain, Italy, Burkina Faso, China, India, Indonesia.
        </p>
      </div>
      <div className="grid grid-cols-1 mr-6 md:grid-cols-2 lg:grid-cols-3 px-40 py-10 ml-10 gap-3">
        <div>
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/10/01102118/SKANDY-B-copy.jpg"
            alt="image1"
            width={300}
            height={200}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/29073219/ACNE-FIGHTER-GEL.jpg"
            alt="image2"
            width={300}
            height={200}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/29073240/FACIAL-WASH.jpg"
            alt="image3"
            width={300}
            height={200}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/29073253/SLEEP-CARE-INFUSED-SERUM.jpg"
            alt="image3"
            width={300}
            height={200}
          />
        </div>
        <div>
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2023/01/13092815/CATEGORY_logo.png"
            alt="image4"
            width={300}
            height={200}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/29073234/ACNE-POWER-SERUM.jpg"
            alt="image5"
            width={300}
            height={200}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2023/01/13064941/CATEGORY_glowingessencetoner.png"
            alt="image6"
            width={300}
            height={200}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2023/03/30084347/CATEGORY_rejuvenationcream-1.png"
            alt="image7"
            width={300}
            height={200}
            loading="lazy"
          />
        </div>
        <div>
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/12/20090032/CATEGORY_dayinfusedserum.png"
            alt="image8"
            width={300}
            height={200}
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-xl">OUR SHOP</h1>
        <GoDiamond size={5} />
        <h1 className="text-3xl font-semibold">PRODUCTS</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-w-max">
        {productData.map((product, index) => {
          return (
            <div key={index}>
              <Link href={`/pages/detail-product/${product.id}`}>
                <CardProducts
                  key={index}
                  imageUrl={product.imageUrl}
                  price={product.price}
                  nameProduct={product.title}
                  description={product.description}
                />
              </Link>
            </div>
          );
        })}
      </div>
      <div className="grid justify-items-center gap-3">
        <h1 className="text-xl mt-5">OUR CUSTOMER</h1>
        <GoDiamond size={5} />
        <h1 className="text-3xl font-semibold">TESTIMONIAL REVIEW</h1>
        <div className="carousel carousel-center w-full p-4 space-x-4 bg-transparent rounded-full">
          <div className="w-full carousel-item flex flex-col justify-center text-center items-center lg:w-[400px]">
            <Image
              src="https://media.licdn.com/dms/image/D5603AQFqAkaNiOjG8g/profile-displayphoto-shrink_400_400/0/1704163444287?e=1717027200&v=beta&t=ZiExzDoFixajKF0RDPAHVsCUY6b6CwOEXJ8WW64m5xU"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="font-semibold">Prabu Addin Almuhasibi</p>
            <p>
              "Produk yang dipakai sangat cocok sekali dengan kulit wajah saya"
            </p>
          </div>
          <div className="w-full carousel-item flex flex-col justify-center text-center items-center lg:w-[400px]">
            <Image
              src="https://i2.wp.com/mrshsfavouritethings-com.stackstaging.com/wp-content/uploads/2018/03/the-person-behind-mrs-hs-favourite-things-a-random-q-a-mrs-hs-favourite-things-1.jpg?resize=1080%2C1440"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="font-semibold">Jane Doe</p>
            <p>
              "Terima kasih rivya untuk produk serumnya, saya sangat cocok
              memakai serum ini!"
            </p>
          </div>
          <div className="w-full carousel-item flex flex-col justify-center text-center items-center lg:w-[400px]">
            <Image
              src="https://imageio.forbes.com/specials-images/imageserve/64053b413b66613f66c91ff8/Portrait-of-a-businesswoman-standing-in-a-a-modern-office/960x0.jpg?format=jpg&width=960"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="font-semibold">Mary Jane</p>
            <p>
              "Pertama kalinya mencoba skincare lokal, dan wow hasilnya sangat
              memuaskan"
            </p>
          </div>
          <div className="w-full carousel-item flex flex-col justify-center text-center items-center lg:w-[400px]">
            <Image
              src="https://img.freepik.com/free-photo/portrait-beautiful-blond-model-dressed-summer-hipster-clothes_158538-5478.jpg"
              width={100}
              height={100}
              className="rounded-full"
            />
            <p className="font-semibold">Nabhila</p>
            <p>
              "Wangi banget saat diaplikasikan ke wajah. Tidak lengket atau
              bikin kusam"
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
