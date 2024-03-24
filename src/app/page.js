"use client";

import { GoDiamond } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const dataTestimonial = [
    {
      name: "Prabu Addin Almuhasibi",
      imgProfile:
        "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/10/01062936/Screenshot-2022-10-01-132837.jpg",
      review:
        "Produk yang dipakai sangat cocok untuk kulit saya, pemakaian serum dari rivya sangat efektif",
    },
    {
      name: "Jane Doe",
      imgProfile:
        "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/10/01062645/Screenshot-2022-10-01-132627.jpg",
      review:
        "Pertama kalinya mencoba skincare lokal, dan wow hasilnya sangat memuaskan",
    },
    {
      name: "Kusuma Dwipa",
      imgProfile:
        "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/10/01062255/Mille-Haryanto-115x115.jpg",
      review:
        "Terima kasih rivya untuk produk serumnya, saya sangat cocok memakai serum ini!",
    },
    {
      name: "Nabhila",
      imgProfile:
        "https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/10/01063332/Screenshot-2022-10-01-133313-115x115.jpg",
      review:
        "Wangi banget saat diaplikasikan ke wajah. Tidak lengket atau bikin kusam",
    },
  ];

  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgqhuYCXLBSzV-Pp0ESYg5gDdJ_ZBEkqd7fgbiXP2y4NM-sNz43lySlJj6M4iVa3jIWTYUZxAxqmcVFKuOa33_Q15FubpwgOfnTvOvmW4XCwL7Z2hrrwWBqf9g1qj1_SY_OOKqmpzE6xIX5qdGCUHfaGTDjiNUjC0EPwnN8U6bsyzqHxrvibDE-ALJR/w1200-h630-p-k-no-nu/IMG-20220328-WA0001-01.jpeg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Revealing The Best For You
            </h1>
            <p className="mb-5">
              Rivya was built to help people to become the best version of
              themselves through a range of skincare products that are
              innovative yet natural, effective yet affordable and easy to use.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 px-32 py-10 gap-3">
        <div>
          <img
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/10/01102118/SKANDY-B-copy.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/29073219/ACNE-FIGHTER-GEL.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/29073240/FACIAL-WASH.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/29073253/SLEEP-CARE-INFUSED-SERUM.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2023/01/13092815/CATEGORY_logo.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/29073234/ACNE-POWER-SERUM.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2023/01/13064941/CATEGORY_glowingessencetoner.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2023/03/30084347/CATEGORY_rejuvenationcream-1.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/12/20090032/CATEGORY_dayinfusedserum.png"
            alt=""
          />
        </div>
      </div>
      <div className="grid justify-items-center gap-3">
        <h1 className="text-xl">OUR SHOP</h1>
        <GoDiamond size={5} />
        <h1 className="text-3xl font-semibold">PRODUCTS</h1>
        <div className="grid justify-items-center gap-3 bg-gray-100">
          <div className="carousel carousel-center p-4 space-x-4 bg-transparent rounded-box">
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                className="rounded-box"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid justify-items-center gap-3 bg-brown-100">
        <h1 className="text-xl mt-5">OUR CUSTOMER</h1>
        <GoDiamond size={5} />
        <h1 className="text-3xl font-semibold">TESTIMONIAL REVIEW</h1>
        <div className="carousel carousel-center w-full p-4 space-x-4 bg-transparent rounded-box">
          <div className="w-full carousel-item flex flex-col justify-center text-center items-center lg:w-[400px]">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-full w-[100px] h-[100px]"
            />
            <p className="font-semibold">Prabu Addin Almuhasibi</p>
            <p>"Produk yang dipakai sangat cocok sekali dengan kulit wajah saya"</p>
          </div>
          <div className="w-full carousel-item flex flex-col justify-center text-center items-center lg:w-[400px]">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-full w-[100px] h-[100px]"
            />
            <p className="font-semibold">Jane Doe</p>
            <p>"Terima kasih rivya untuk produk serumnya, saya sangat cocok memakai serum ini!"</p>
          </div>
          <div className="w-full carousel-item flex flex-col justify-center text-center items-center lg:w-[400px]">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-full w-[100px] h-[100px]"
            />
            <p className="font-semibold">Kusuma Dwipa</p>
            <p>"Pertama kalinya mencoba skincare lokal, dan wow hasilnya sangat memuaskan"</p>
          </div>
          <div className="w-full carousel-item flex flex-col justify-center text-center items-center lg:w-[400px]">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-full w-[100px] h-[100px]"
            />
            <p className="font-semibold">Nabhila</p>
            <p>"Wangi banget saat diaplikasikan ke wajah. Tidak lengket atau bikin kusam"</p>
          </div>
        </div>
      </div>
    </>
  );
}
