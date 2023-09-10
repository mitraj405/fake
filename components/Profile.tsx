import React, { FC } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

type ProfileProps = {
  imgURL: string;
  fbURL: string;
  twURL: string;
  liURL: string;
  name: string;
  designation: string;
};

const Profile: FC<ProfileProps> = ({
  imgURL,
  fbURL,
  twURL,
  liURL,
  name,
  designation,
}) => {
  return (
    <>
      {/**  <!-- Single Advisor--> **/}
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single_advisor_profile wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp",
          }}
        >
          {/** <!-- Team Thumb--> **/}
          <div className="advisor_thumb">
            <Image
              src={imgURL}
              width={300}
              height={300}
              className="object-contain"
              alt=""
            ></Image>
            {/** <!-- Social Info--> **/}
            <div className="social-info">
              <a href={fbURL}>
                {" "}
                <FaFacebookF />{" "}
              </a>
              <a href={twURL}>
                {" "}
                <FaTwitter />{" "}
              </a>
              <a href={liURL}>
                {" "}
                <FaLinkedin />
              </a>
            </div>
          </div>
          {/** <!-- Team Details--> **/}
          <div className="single_advisor_details_info">
            <h6 className="text-lg font-bold">{name}</h6>
            <p className="designation">{designation}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
