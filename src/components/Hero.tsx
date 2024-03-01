import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Button } from "./Button";
import { Container } from "./Container";
import Image from "next/image";

export default function Example() {
  return (
    <Container className="">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl pb-24 pt-32 grid grid-cols-1 lg:grid-cols-2 lg:px-8 lg:py-40 gap-10 lg:gap-x-10">
          <div>
            <h1 className="flex flex-col gap-6 text-center lg:text-left">
              <span className="text-4xl font-bold text-gray-900 sm:text-6xl">
                Expert HVAC Services in Baldwin County
              </span>
              <span className=" text-lg text-gray-600 font-medium leading-none">
                Tidwell Air Systems is your best choice for South Baldwin
                heating and air conditioning service and installation.
              </span>
            </h1>
            <div className="mt-10 flex items-center gap-x-6 mx-auto lg:mx-none justify-center md:justify-start">
              <Button href="#contact" className="" color="orange">
                Contact
              </Button>
              <Button color="blue">Services</Button>
            </div>
          </div>

          <div className="relative h-96 ">
            <Image
              src="/van.jpg"
              alt=""
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>{" "}
      </div>
    </Container>
  );
}
