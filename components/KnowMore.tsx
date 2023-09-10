import React from "react";
import Link from "next/link";

type Props = {
  //   imgURL: string;
  name: string;
};
const KnowMore = ({ name }: Props) => {
  return (
    <div className="w-full h-1/4 flex items-center justify-center">
      <Link
        href={{
          pathname: "/book",
          query: { name: name },
        }}
      >
        <a>
          <button className="btn btn-primary rounded-full">Book Now</button>
        </a>
      </Link>
    </div>
  );
};

export default KnowMore;
