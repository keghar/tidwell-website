import { SVGProps } from "react";
import { Button } from "./Button";
import { Container } from "./Container";
import { isContext } from "vm";

const features = [
  {
    name: "Air Conditioning",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="#9bc9fe"
        {...props}>
        <defs>
          <linearGradient id="myGradient" gradientTransform="rotate(10)">
            <stop offset="5%" stop-color="blue" />
            <stop offset="95%" stop-color="#9bc9fe" />
          </linearGradient>
        </defs>
        <path
          fill="url('#myGradient')"
          d="M224 0c13.3 0 24 10.7 24 24v46.1l23-23c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-57 57v76.5l66.2-38.2L335 98.5c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-8.4 31.3 37.1-21.4c11.5-6.6 26.2-2.7 32.8 8.8s2.7 26.2-8.8 32.8L397 183.8l31.5 8.4c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-77.8-20.9L272 256l66.2 38.2 77.8-20.9c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-31.4 8.5 37.1 21.4c11.5 6.6 15.4 21.3 8.8 32.8s-21.3 15.4-32.8 8.8L373 369.8l8.4 31.5c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-20.9-77.8-66.1-38.3v76.5l57 57c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23v46c0 13.3-10.7 24-24 24s-24-10.7-24-24v-46.1l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l57-57v-76.4L134 335.8l-20.9 77.8c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l8.3-31.4-37.1 21.4c-11.5 6.6-26.2 2.7-32.8-8.8s-2.7-26.2 8.8-32.8L51 328.2l-31.5-8.4c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l77.8 20.9L176 256l-66.2-38.2-77.9 20.8c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l31.5-8.4-37.1-21.4c-11.5-6.6-15.4-21.3-8.8-32.8s21.3-15.4 32.8-8.8L75 142.2l-8.4-31.5c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l20.9 77.8 66.1 38.3v-76.5L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l23 23V24c0-13.3 10.7-24 24-24z"
        />
      </svg>
    ),
  },
  {
    name: "Heating",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" {...props}>
        <defs>
          <linearGradient id="myGradient2" gradientTransform="rotate(90)">
            <stop offset="5%" stop-color="gold" />
            <stop offset="95%" stop-color="orange" />
          </linearGradient>
        </defs>
        <path
          fill="url('#myGradient2')"
          d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7.1 27.6 25.9 53.5 53.8 77.7 84 11-14.4 23.5-30.1 37-42.9 7.9-7.4 20.1-7.4 28 .1 34.6 33 63.9 76.6 84.5 118 20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512 98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-16.5-21-46-58.5-62.8-79.8-6.3-8-18.3-8.1-24.7-.1-33.8 42.5-50.8 69.3-50.8 99.4.1 68.5 50.7 109.1 113.8 109.1z"
        />
      </svg>
    ),
  },
  {
    name: "Air Quality",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <defs>
          <linearGradient id="myGradient3" gradientTransform="rotate(10)">
            <stop offset="5%" stop-color="lightgray" />
            <stop offset="95%" stop-color="gray" />
          </linearGradient>
        </defs>
        <path
          fill="url('#myGradient3')"
          d="M258.6 0c-1.7 0-3.4.1-5.1.5C168 17 115.6 102.3 130.5 189.3c2.9 17 8.4 32.9 15.9 47.4L32 224h-2.6C13.2 224 0 237.2 0 253.4c0 1.7.1 3.4.5 5.1C17 344 102.3 396.4 189.3 381.5c17-2.9 32.9-8.4 47.4-15.9L224 480v2.6c0 16.2 13.2 29.4 29.4 29.4 1.7 0 3.4-.1 5.1-.5 85.5-16.5 137.9-101.8 123-188.8-2.9-17-8.4-32.9-15.9-47.4L480 288h2.6c16.2 0 29.4-13.2 29.4-29.4 0-1.7-.1-3.4-.5-5.1-16.5-85.5-101.8-137.9-188.8-123-17 2.9-32.9 8.4-47.4 15.9L288 32v-2.6C288 13.2 274.8 0 258.6 0zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
        />
      </svg>
    ),
  },
  {
    name: "Maintenance",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
        <defs>
          <linearGradient id="myGradient4" gradientTransform="rotate(0)">
            <stop offset="5%" stop-color="gray" />
            <stop offset="95%" stop-color="black" />
          </linearGradient>
        </defs>
        <path
          fill="url('#myGradient4')"
          d="M352 320c88.4 0 160-71.6 160-160 0-15.3-2.2-30.1-6.2-44.2-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16v-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0c-88.4 0-160 71.6-160 160 0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1 0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9l181.6-181.6c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
        />
      </svg>
    ),
  },
  {
    name: "Residential",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" {...props}>
        <defs>
          <linearGradient id="myGradient5" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="lightgreen" />
            <stop offset="95%" stop-color="green" />
          </linearGradient>
        </defs>

        <path
          fill="url('#myGradient5')"
          d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40h-16c-1.1 0-2.2 0-3.3-.1-1.4.1-2.8.1-4.2.1H392c-22.1 0-40-17.9-40-40v-88c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v88c0 22.1-17.9 40-40 40h-55.9c-1.5 0-3-.1-4.5-.2-1.2.1-2.4.2-3.6.2h-16c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9.1-2.8v-69.6H32c-18 0-32-14-32-32.1 0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7l255.4 224.5c8 7 12 15 11 24z"
        />
      </svg>
    ),
  },
  {
    name: "Commercial",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
    icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" {...props}>
        <defs>
          <linearGradient id="myGradient6" gradientTransform="rotate(0)">
            <stop offset="0%" stop-color="#3c70ff" />
            <stop offset="95%" stop-color="gray" />
          </linearGradient>
        </defs>
        <path
          fill="url('#myGradient6')"
          d="M480 48c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v48h-64V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v72h-64V24c0-13.3-10.7-24-24-24S64 10.7 64 24v72H48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V240c0-26.5-21.5-48-48-48H480V48zm96 320v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zm-336 48h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm-112-16c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm432-144c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32zm-304-80v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zm-144-16c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32zm144 144c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32zm-144 16H80c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16zm304-48v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16zM400 64c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32zm16 112v32c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16z"
        />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <Container>
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <img
            src="/air.jpg"
            alt=""
            className="h-96 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-4xl tracking-tight text-gray-900 md:text-5xl">
              Our Services
            </h2>
            <p className="mt-4 text-gray-500">
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>

          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-center h-12 w-12 rounded-md ">
                  <feature.icon className="h-10 w-10  " aria-hidden="true" />
                </div>
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div className="flex justify-center mt-8 gap-8">
            <Button color="orange">Contact</Button>
            <Button color="blue">Services</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
