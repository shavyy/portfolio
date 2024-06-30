import React from "react";
import { CV_Xavier_AIGUAVIVA_dev } from "../assets";

const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary green-pink-gradient rounded-[10px] outline-none ${styles}`}>
    <a href={CV_Xavier_AIGUAVIVA_dev} download='CV_Xavier_AIGUAVIVA_dev.pdf'>Télécharger CV</a>
  </button>
);

export default Button;