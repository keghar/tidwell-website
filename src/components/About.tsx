import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      {" "}
      <div className="bg-gradient-to-b from-orange-400/80 via-yellow-300/80 to-yellow-200/80 text-gray-900 text-5xl text-center py-48">
        <div className="flex justify-center flex-col px-10 ">
          <h2 className="mb-20">About</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <p className="text-lg max-w-prose px-6 text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est
              odio, voluptate hic, quaerat consequatur dicta earum deserunt fuga
              repudiandae quo placeat necessitatibus cum, ut et vitae tempora
              neque. Aperiam, minima. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Autem exercitationem accusantium blanditiis quo
              libero! Neque maiores et beatae minima? Aliquam.
            </p>
            <div className="relative h-96 px-9 mt-10">
              <Image
                src="/van.jpg"
                alt="van"
                fill
                className=" rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full rotate-180 ">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-yellow-200/80"></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
