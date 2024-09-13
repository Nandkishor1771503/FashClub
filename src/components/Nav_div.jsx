import React from "react";

function Nav_div() {
  return (
    <>
      <div className="grid grid-cols-2 bg-slate-300 rounded-xl w-11/12 h-56 p-2 my-12 mx-6 shadow-gray-700 shadow-2xl z-40 md:h-80 lg:h-auto lg:bg-transparent lg:shadow-none">
        <div className="text-black lg:text-white grid m-4 gap-0">
          <span className="grid-cols-2 grid text-3xl  font-Playwrite md:text-5xl lg:text-6xl ">
            Fashion
          </span>
          <span className="grid text-3xl md:text-3xl lg:text-4xl  font-Playwrite ">is</span>{" "}
          <span className="grid-cols-3 grid text-2xl md:text-3xl lg:text-6xl font-Playwrite lg:text-gray-400">my</span>
          <span className="text-3xl md:text-5xl lg:text-6xl ml-8 font-Playwrite">obsession</span>
        </div>

        <img
          src="https://i.pinimg.com/originals/2b/42/0f/2b420f9fd0607479adbdcb444f989db5.jpg"
          alt=""
          className="w-[82%] h-52 my-auto mx-9 z-50 shadow-xl rounded-2xl  md:w-[85%] md:h-64 md:mx-9 lg:w-[75%] lg:mx-40 lg:shadow-gray-800 lg:shadow-xl "
        />
      </div>
    </>
  );
}

export default Nav_div;
