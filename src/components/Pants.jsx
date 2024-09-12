import React from "react";
import Pants_data from "../data/pants";
import Whatsapp_icon from "./Whatsapp";
function Pants() {

  // bg-[url('./images/Fash_bg.jpg')] bg-fixed bg-no-repeat
  return (
    <>
      <h1 className="text-white text-xl py-4 ">Some of our best in collection</h1>
      <div className="grid grid-cols-1 py-16 md:grid-cols-2 lg:grid-cols-3 bg-[url('./images/Fash_bg.jpg')] bg-fixed bg-cover bg-center items-center justify-center gap-14 lg:gap-0 p-3">
        {Pants_data &&
          Pants_data.map(({ source, item, price }) => {
            return (
              <div className=" bg-white/50 w-10/12 m-auto rounded-3xl shadow-xl z-40 transform transition-transform scale-10 backdrop-blur-md lg:mt-8">
                <img
                  src={source}
                  alt=""
                  className="w-80 h-80 m-auto my-auto rounded-3xl"
                />
                 <div className="w-[65%] h-16 mx-[20%] my-2 rounded-full "> {/*//bg-transparent fixed bottom-0 */}
                  <span className="text-black text-2xl">{item}</span>
                  <h3 className="text-blue-700  text-lg">{price}</h3>
                </div>
              </div>
            );
          })}
          <p className="w-full bg-white rounded-xl text-lg p-1 md:col-span-2 ">This are our best collections for more visit the store</p>
      </div>
      <Whatsapp_icon/>
    </>
  );
}

export default Pants;




{/* <div className="bg-gray-700 w-10/12 m-auto rounded-2xl shadow-xl z-40 transform transition-transform scale-10">
                <img
                  src={source}
                  alt=""
                  className="w-11/12 h-80 m-auto my-4 rounded"
                />
                <span className="text-white text-2xl">{item}</span>
                <h3 className="text-cyan-500  text-lg">{price}</h3>
              </div> */}