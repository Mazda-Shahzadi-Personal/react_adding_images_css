import React from "react";
import ReactDOM from "react-dom";
//import styles from "../public/styles.css";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable spellCheck="false">
      My Favourite Foods
    </h1>
    <img src={img + "?grayscale"} alt="random" />
    <img
      src="https://cdn.shopify.com/s/files/1/0347/3729/1402/products/JA_AME_Streakybacon_35.jpg?v=1631617066"
      className="img-heading"
      alt="not bacon"
    />
    <img
      src="https://cdn.apartmenttherapy.info/image/upload/v1574440289/k/Photo/Series/2019-11-skills-battle-bacon/bacon-skills.jpg"
      className="img-heading"
      alt="bacon"
    />
    <img
      src="https://static01.nyt.com/images/2019/01/23/dining/as-oven-bacon/as-oven-bacon-master768.jpg"
      className="img-heading"
      alt="not baocn"
    />
  </div>,
  document.getElementById("root")
);
