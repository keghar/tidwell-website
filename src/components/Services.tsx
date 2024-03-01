import { Button } from "./Button";
import { Container } from "./Container";

const features = [
  {
    name: "Air Conditioning",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
  },
  {
    name: "Heating",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
  },
  {
    name: "Air Quality",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
  },
  {
    name: "Maintenance",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
  },
  {
    name: "Residential",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
  },
  {
    name: "Commercial",
    description:
      "Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ualiquip ex ea commodo consequat. Duis aute irure dolor reprehenderit in voluptate velit esse",
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
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
