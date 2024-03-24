'use client'
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

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
                <a>SHOP</a>
                <ul className="p-2">
                  <li>
                    <a>Product 1</a>
                  </li>
                </ul>
              </li>
            
              <li>
              <Link href='/pages/about'>
                ABOUT US
              </Link>
              </li>
             
              <li>
                <a>NEWS</a>
              </li>
            </ul>
          </div>
          <img src="https://jubelio-store.s3.ap-southeast-1.amazonaws.com/rivyaofficialshop/2022/09/27043432/LOGO_header.png" alt="Rivya Logo" className="w-[100px] ml-3"/>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <Link href='/'>
              HOME
            </Link>
            </li>
            <li>
              <details className="z-10">
                <summary>SHOP</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
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
