import React from "react";
import contactImg from "../images/fashClub.jpg"
function Contact_us() {
  return (
    <>
      <center>
        <div className="main bg-slate-700 rounded-xl  h-screen p-2 md:w-[40%] ">
          <img
            src={contactImg}
            alt=""
            className="w-8/12 m-auto rounded-[50%] "
          />

          <h1 className="text-white font-serif text-2xl my-2">Fash Club</h1>
          <a href="#store Location link">
            <h2 className="text-green-400 my-2">Ziyaguda, Hyderabad</h2>
          </a>

          <p className="my-5 text-xl text-white">"Where fashion meets comfort!"</p>

          <a href="#">
            <div className="links bg-slate-400 m-4 rounded-full text-xl p-2">
              <h3> LinkedIn</h3>
            </div>
          </a>

          <a href="#">
            <div className="links bg-slate-400 m-4 rounded-full text-xl p-2">
              <h3> Twitter</h3>
            </div>
          </a>

          <a href="#">
            <div className="links bg-slate-400 m-4 rounded-full text-xl p-2">
              <h3> Instagram</h3>
            </div>
          </a>
        </div>
      </center>
    </>
  );
}

export default Contact_us;
