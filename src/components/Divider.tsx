import * as React from "react";
const Divider = (
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-300 ease-in-out delay-150 z-50"
    viewBox="0 0 1440 490"
    {...props}>
    <defs>
      <linearGradient id="a" x1="99%" x2="1%" y1="39%" y2="61%">
        <stop offset="5%" stopColor="#0693e1" />
        <stop offset="95%" stopColor="#8ed1fc" />
      </linearGradient>
    </defs>
    <path
      fill="url(#a)"
      fillOpacity={0.4}
      d="M0 500V93c141.1 7.36 282.21 14.71 419 15 136.79.29 269.25-6.5 367-6s160.79 8.29 264 8c103.21-.29 246.6-8.64 390-17v407H0Z"
      className="transition-all duration-300 ease-in-out delay-150 path-0"
    />
    <path
      fill="url(#a)"
      fillOpacity={0.53}
      d="M0 500V218c153.32 13.36 306.64 26.71 411 25 104.36-1.71 159.75-18.5 276-36s293.36-35.71 429-34c135.64 1.71 229.82 23.36 324 45v282H0Z"
      className="transition-all duration-300 ease-in-out delay-150 path-1"
    />
    <path
      fill="url(#a)"
      d="M0 500V343c107-21.54 214-43.07 350-43 136 .07 301 21.75 417 35s183 18.07 287 18c104-.07 245-5.04 386-10v157H0Z"
      className="transition-all duration-300 ease-in-out delay-150 path-2"
    />
  </svg>
);
export default Divider;
