import React from "react";
import Link from "next/link";

type Props = {
  // imgURL: string,
  name: string;
};
const BookNow = ({ name }: Props) => {
  return (
    <div className="w-full flex item-center justify-center">
      <Link
        href={{
          pathname: "/book",
          query: { name: name },
        }}
      >
        <a>
          <button className="flex items-center justify-center text-white pt-2 pb-2 pr-4 pl-4 bg-gradient-to-r from-green-500  to-cyan-400 border-0 items-center rounded-full bg-gradient-to-r from-green-500  hover:to-cyan-400">
            Book Now
          </button>
        </a>
      </Link>
    </div>
  );
};

export default BookNow;
