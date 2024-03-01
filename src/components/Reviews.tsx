import React from "react";
import Divider from "./Divider";
import { StarIcon } from "@heroicons/react/20/solid";
import About from "./About";
import { Button } from "./Button";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const reviews = [
  {
    id: 1,
    rating: 5,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    author: "Robin Smith",
  },
  {
    id: 2,
    rating: 5,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    author: "John Jones",
  },
  {
    id: 3,
    rating: 5,
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    author: "Toby Johnson",
  },

  // More people...
];

const Reviews = () => {
  return (
    <div className="relative">
      <div className="w-full">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 43.9999C106.667 43.9999 213.333 7.99994 320 7.99994C426.667 7.99994 533.333 43.9999 640 43.9999C746.667 43.9999 853.333 7.99994 960 7.99994C1066.67 7.99994 1173.33 43.9999 1280 43.9999C1386.67 43.9999 1440 19.0266 1440 9.01329V100H0V43.9999Z"
            className="fill-current text-blue-100"></path>
        </svg>
      </div>
      <div className="bg-gradient-to-b from-blue-100 to-blue-300 text-gray-900 text-5xl text-center py-20">
        <h2 className="pb-8">Reviews</h2>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 px-6">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="col-span-1 divide-y divide-gray-200 rounded-2xl bg-white shadow">
              <div className="flex w-full items-center justify-between p-6">
                <div className="flex-1 ">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base text-left font-medium text-gray-900">
                      {review.author}
                    </h3>
                    <div className="flex flex-row">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            review.rating > rating
                              ? "text-gray-700"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-base text-left text-gray-500">
                    &quot;{review.content}&quot;
                  </p>
                </div>
              </div>
              <div></div>
            </li>
          ))}
        </ul>
        <div className="mt-10 mb-10">
          <Button variant="outline" color="white">
            See More
          </Button>
        </div>
      </div>
      <About />
    </div>
  );
};

export default Reviews;
