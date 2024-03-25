"use client";

import { GoDiamond } from "react-icons/go";
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div
        className="hero bg-cover h-[400px]"
        style={{
          backgroundImage:
            "url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifwc3VHxTzqBBsw6w7SPCdL40illGUl9HXYLPJ8D0HZgrhP1M5xfBQKbHW53WdzA4JKXpOgVcVSJraPlt9PjkSn-acewQEMW70OSc9CNcIXj8eRIn8QIy_ulQGnE56r4QbJMyarzwzAQZVhHDk0E1uDiYVInArU9w9tdBNMsXWEWhNi09lA_k7haImNw/s1166/WhatsApp%20Image%202022-03-29%20at%2022.36.58.jpeg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-sm">
            <h1 className="mb-5 text-5xl font-bold text-white">ABOUT US</h1>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-xl mt-5">ABOUT</h1>
        <GoDiamond size={5} />
        <h1 className="text-3xl font-semibold">RIVYA</h1>
        <div className="flex flex-row justify-start gap-5 px-10 py-10">
          <p>
            A Vegan Indonesian skincare product envision by Alfa Priliana, who
            also plays an active role as a board member of D'Cost Seafood
            Restaurant Group, Gold's Gym and Business Development Advisor for
            Berrybenka. Rivya was built to help people to become the best
            version of themselves through a range of skincare products that are
            innovative yet natural, effective yet affordable and easy to use.
            Moreover, each product that Rivya launches will always be unique
            compared to other skincare products in Indonesia. Rivya contains
            Natural Active Ingredients that are suitable for all skin types and
            do not contain parabens, sulfates, phosphates, alcohol, artificial
            fragrance and colors.
          </p>
          <p>
            Rivya does not contain Retin-A, Retinol, Retynil Palmitate, Tazorac
            and accutane, Benzoyl Peroxide and Salicylic Acids, Hydroquinone,
            Formaldehyde, Phthalates, Tetracycline nor chemical sunscreens that
            are not good for pregnancy. Rivya is against animal testing and each
            product launched contains a natural active ingredient that was
            supported by in-vivo studies in humans. Rivya combines the best of
            nature with the best raw material processing using modern technology
            from countries such as Australia, South Korea, Switzerland, France,
            Canada, United States, Spain, Italy, Burkina Faso, China, India,
            Indonesia.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-xl">OUR VALUES</h1>
        <div className="flex flex-col justify-center items-center text-center px-5 lg:flex flex-col justify-start py-5">
          <ul>
            <li>
              DARE TO BE DIFFERENT - We encourage every team player to dare to
              be different in healthy debates to passionately create Innovative,
              market winning products
            </li>
            <li>
              SELF-ACCEPTANCE – We encourage people to fully accept themselves
              and be comfortable with it meanwhile striving to be the best
              version of themselves
            </li>
            <li>
              LEAD BY EXAMPLE – We encourage every leader in the company to lead
              by example.
            </li>
            <li>
              TRUSTWORTHY – We strive to always provide trustworthy methods and
              information with integrity and respect to human beings and mother
              nature.
            </li>
            <li>
              EMPOWER HUMAN – We strive to make a contribution to human
              empowerment.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-5 mt-5 bg-white border border-blue-gray-400 rounded-xl shadow-xl py-20 w-[400px] m-auto gap-9 lg:flex flex-col justify-center items-center text-center">
        <div className="relative w-[300px] h-[300px] bg-red-100">
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/28044702/FOTO_FOUNDER.png"
            width={300}
            height={200}
            className="max-w-full min-h-full object-cover"
          />
        </div>
        <h1 className="font-bold text-xl mt-10">Founder</h1>
        <p>Alfa Apriliana</p>
      </div>
      <div className="flex flex-col justify-center items-center mb-5 mt-5 bg-white border border-blue-gray-400 rounded-xl shadow-xl py-20 w-[400px] m-auto gap-9 lg:flex flex-col justify-center items-center text-center">
        <div className="relative w-[300px] h-[300px] bg-red-100">
          <Image
            src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/10/01023841/FOTO_COFOUNDER.png"
            width={300}
            height={200}
            className="max-w-full min-h-full object-cover"
          />
        </div>
        <h1 className="font-bold text-xl mt-10">Co-Founder</h1>
        <p>Gamma Febriyandi</p>
      </div>
    </>
  );
}
