import React from "react";
import { Timer } from "./timer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  // let timer = 0;
  // setInterval(() => {
  //   timer++;
  //   console.log(timer);
  //   return timer;
  // }, 1000);
  return (
    // <div className="text-center">
    //   <h1 className="text-center mt-5">Hello Rigo!</h1>
    //   <p>
    //     <img src={rigoImage} />
    //   </p>
    //   <a href="#" className="btn btn-success">
    //     If you see this green button... bootstrap is working...
    //   </a>
    //   <p>
    //     Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
    //     love!
    //   </p>
    // </div>
    <Timer />
  );
};

export default Home;
