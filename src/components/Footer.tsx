import { JSX, SVGProps } from "react";

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Financing", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Email",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width={125}
          height={100}
          {...props}>
          <path d="M60 0h50a10 10 0 0 1 7 17L67 67a10 10 0 0 1-13 0L4 17a10 10 0 0 1 7-17z" />
          <path d="M60 90h54a10 10 0 0 0 7-7V23L71 73a15 15 0 0 1-21 0L0 23v60a10 10 0 0 0 7 7z" />
        </svg>
      ),
    },
    {
      name: "Phone",
      href: "#",
      icon: (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          width={125}
          height={100}
          {...props}>
          <path d="M60 0h50a10 10 0 0 1 7 17L67 67a10 10 0 0 1-13 0L4 17a10 10 0 0 1 7-17z" />
          <path d="M60 90h54a10 10 0 0 0 7-7V23L71 73a15 15 0 0 1-21 0L0 23v60a10 10 0 0 0 7 7z" />
        </svg>
      ),
    },
  ],
};

export default function Example() {
  return (
    <footer className="bg-white relative">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2024 Tidwell Air Systems, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
