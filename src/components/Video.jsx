import React from "react";
import Video1 from "../videos/Video1.mp4"
import Video2 from "../videos/Video2.mp4"
import Video3 from "../videos/Video3.mp4"


function Video() {
  return (
    <div>
      <h2>Video Player</h2>
      <div className="videos lg:flex ">
        <video width="400"  className="m-auto rounded-xl" controls>
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="400" className="m-auto my-8 rounded-xl" controls>
          <source src={Video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video width="400" className="m-auto mb-6 rounded-xl" controls>
          <source src={Video3}  type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Video;
