import React from "react";

function Highlights() {
  return (
    <>
      <h2 className="text-white mx-10 my-5 text-3xl">Qualities we provide</h2>
      <div className="grid md:grid-cols-2 border-gray-300 text-white">
        <div className="w-12/12 h-32 flex justify-between bg-orange-600 m-2 rounded-2xl transition-transform transform hover:-translate-y-2 text-3xl ease-in-out">
          <span className="m-auto">Quality cloth</span>
          <img src="https://tse2.mm.bing.net/th?id=OIP._7DUNF4LoEGOpN5_PUQKtwHaHa&pid=Api&P=0&h=180" alt="" className="rounded-lg" />
        </div>
        <div className="w-12/12 h-32 flex bg-[#2991db] m-2 rounded-2xl transition-transform transform hover:-translate-y-2 text-3xl ease-in-out">
          <span className="m-auto"> Affordable price</span>
          <img src="https://tse2.mm.bing.net/th?id=OIP._7DUNF4LoEGOpN5_PUQKtwHaHa&pid=Api&P=0&h=180" alt="" className="rounded-lg" />
        </div>
        <div className="w-12/12 h-32 flex bg-[#1bd374]  m-2 rounded-2xl transition-transform transform hover:-translate-y-2 text-3xl ease-in-out">
          <span className="m-auto p-2">Unique & Trendy designs</span>
          <img src="https://tse2.mm.bing.net/th?id=OIP._7DUNF4LoEGOpN5_PUQKtwHaHa&pid=Api&P=0&h=180" alt="" className="rounded-lg" />
        </div>
        <div className="w-12/12 h-32  flex bg-red-500 m-2 rounded-2xl transition-transform transform hover:-translate-y-2 text-3xl ease-in-out">
          <span className="m-auto">Fashion for all seasons</span>
          <img src="https://tse2.mm.bing.net/th?id=OIP._7DUNF4LoEGOpN5_PUQKtwHaHa&pid=Api&P=0&h=180" alt="" className="rounded-lg" />
        </div>
      </div>
    </>
  );
}

export default Highlights;
