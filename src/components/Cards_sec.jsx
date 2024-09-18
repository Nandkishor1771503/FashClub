import React from "react";
import { Link } from "react-router-dom";

function Cards_sec() {
  return (
    <>
      <div
        className="grid grid-cols-2 grid-rows-2  mt-16 mb-8 md:mb-0 lg:mt-28 
        h-auto text-white font-mono text-lg gap-2 lg:gap-0 md:mx-[2%] md:text-3xl  lg:grid-cols-3"
      >
        <Link to="/shirts">
          <div className="grid bg-black w-10/12 md:w-9/12 h-24 m-4 cursor-pointer ">
            <img
              src="https://i5.walmartimages.com/asr/ac15a99d-28d7-40d0-960b-512afe7ad757_1.4c3d7e1ba776c2042517d867c28aa95e.jpeg"
              alt=""
              className="rounded-2xl  transition-transform transform hover:-translate-y-4 ease-in-out "
            />
            <span>Shirts</span>
          </div>
        </Link>
        <Link to="/pants">
          <div className="grid w-10/12 md:w-9/12 cursor-pointer">
            <img
              src="https://i.etsystatic.com/25090033/r/il/49e34c/3009396454/il_fullxfull.3009396454_fs33.jpg"
              alt=""
              className=" rounded-2xl shadow transition-transform transform hover:-translate-y-4 ease-in-out "
            />
            <span cl>pants</span>
          </div>
        </Link>

        <Link to="/accessories" className=" grid m-auto cursor-pointer md:w-8/12 lg:w-11/12"> 
          <div >
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.LTjMQLq4b9szHp42cFn0VQHaHa&pid=Api&P=0&h=180"
              alt=""
              className="w-11/12 ml-2 mt-2 md:w-[100%] rounded-2xl shadow transition-transform transform hover:-translate-y-4 ease-in-out"
            />
            <span>Accesories</span>
          </div>
        </Link>
        {/* <Link to="/shoes"> */}
      <Link to="/shoes" className=" grid m-auto cursor-pointer md:w-8/12 lg:w-11/12">
      
      <div  >
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.mU6fzZOy2vloE34R6d7dhAAAAA&pid=Api&P=0&h=180"
            alt=""
            className="h-40 w-11/12 ml-1 md:w-10/12 md:h-48 lg:h-60 rounded-2xl shadow transition-transform transform hover:-translate-y-4 ease-in-out "
          />
          <span>Shoes</span>
        </div>
      
      </Link>
        {/* </Link> */}
      </div>
    </>
  );
}

export default Cards_sec;
