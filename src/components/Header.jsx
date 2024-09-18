import React, { useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Nav_div from "./Nav_div";
import logo from "../images/fashClub.jpg";
import { Link } from "react-router-dom";

function Header() {
  const [ham, setHam] = useState(true);
  const hamRef = useRef();
  console.log(ham);

  // if (ham == true) {
  //   hamRef.current.style.display = "none"
  // }

  function hamburger() {
    setHam(!ham);
    ham
      ? (hamRef.current.style.display = "block")
      : (hamRef.current.style.display = "none");
  }

  return (
    // https://tse2.mm.bing.net/th?id=OIP.rBk19h_qlexuFjPZVxMnOgHaEK&pid=Api&P=0&h=180
    <div>
      <nav className="bg-black w-full overflow-x-hidden -z-40">
        {/* bg-[url('./images/catuals_bg2.jpg')]  */}
        <div className="flex flex-row gap-12 items-center shadow rounded py-1 bg-opacity-50 ">
          <img
            src={logo}
            alt="logo"
            className="w-16 h-2/12 rounded-full ml-2 my-2"
          />

          <h1 className=" p-3 ml-3 md:ml-0 m-auto text-white rounded-3xl text-xl md:text-3xl font-serif ">
            ꟻash Club
          </h1>

          <div className="hidden flex-row gap-8 items-center md:flex">
            
            {/* flex  change the display from hidden to flex onclick of hamburger  */}
            <a href="/" className="cursor-pointer hover:border-b-4  text-white p-3  shadow-white/50">
              HOME
            </a>
            <a href="#" className="cursor-pointer hover:border-b-4  text-white p-3 ">
              PRODUCTS
            </a>
            <Link to="/about">
            <a className="cursor-pointer hover:border-b-4  text-white p-3">
              
              ABOUT US
            </a>
            </Link>
          </div>
          <RxHamburgerMenu
            className={`w-16 h-10 text-xl text-white cursor-pointer rounded-b-lg ${
              !ham ? "border-b-2 shadow-xl" : ""
            }  ml-auto md:hidden`}
            onClick={hamburger}
          />
        </div>

        <div className="hidden items-center mt-5 h-full z-10" ref={hamRef}>
          {" "}
          {/* mistake made here passing class as none instead of hidden */}
          <a href="/" className="text-white p-3 block rounded-3xl mb-4">
            HOME
          </a>
          <a href="#" className="text-white p-3 block rounded-3xl shadow mb-4" >
            PRODUCTS
          </a>
          <Link to="/about">
            <a href="#" className="text-white p-3  rounded-3xl block shadow mb-4 ">
              {" "}
              ABOUT US
            </a>
          </Link>
          <hr />
          <div className="flex">
            <Link to="/contact">
              <button className="text-white p-3 border text-lg mt-6 mx-5 block rounded-xl shadow-md">
                Contact us
              </button>
            </Link>
            {/* <button className="text-white p-3 border text-lg mt-6 mx-5 block rounded-xl shadow-md">
              Search
            </button> */}
          </div>
        </div>
        <Nav_div />
      </nav>
      {/* component to be injected */}
      
    </div>
  );
}

export default Header;
