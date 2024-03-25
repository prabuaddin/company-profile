'use client'
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";



export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMenu size={40} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
              <Link href='/'>
                HOME
              </Link>
              </li>
              <li>
                <Link href='/pages/product'>
                  PRODUCT
                </Link>
              </li>
              <li>
              <Link href='/pages/about'>
                ABOUT US
              </Link>
              </li>
            </ul>
          </div>
          <Image src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/27043432/LOGO_header.png" width={100} height={100} alt="Rivya Logo" className="ml-3"/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link href='/'>
              HOME
            </Link>
            </li>
            <li>
              <Link href='/pages/product'>
                PRODUCT
              </Link>
            </li>
            <li>
            <Link href='/pages/about'>
                ABOUT US
            </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-5 px-3">
          <button>
          <CiSearch
          size={20}
          />
          </button>
          <button>
          <AiOutlineUser
          size={20}
          />
          </button>
          <button>
          <MdOutlineShoppingBag
          size={20}
          />
          </button>
        </div>
      </div>
    </>
  );
}
