import React from "react";
import { NextPage } from "next";

const Profiles: NextPage = () => {
  return (
    <div className="body genealogy-body genealogy-scroll">
      <div className="genealogy-tree">
        <ul>
          <li>
            <a href="#founderandceo">
              <div className="member-view-box">
                <div className="member-image designation">
                  <div className="member-details">
                    <h3>Founder and CEO</h3>
                  </div>
                </div>
              </div>
            </a>
            <ul className="active">
              <li>
                <a
                  href="https://www.linkedin.com/in/nikkykumarjha/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="member-view-box">
                    <div className="member-image">
                      <img src="./src/team/nikky-jha.webp" alt="nikky jha" />
                      <div className="member-details">
                        <h4>Nikky Jha</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#rashmijha">
                  <div className="member-view-box">
                    <div className="member-image">
                      <img src="./src/team/rashmi-jha.webp" alt="Member" />
                      <div className="member-details">
                        <h4>Rashmi Jha</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="genealogy-tree">
        <ul>
          <li>
            <a href="#creativeteam">
              <div className="member-view-box">
                <div className="member-image designation">
                  <div className="member-details">
                    <h3>Our Creative Team</h3>
                  </div>
                </div>
              </div>
            </a>
            <ul className="active">
              <li>
                <a
                  href="https://www.linkedin.com/in/shivani-jha-701776185/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="member-view-box">
                    <div className="member-image">
                      <img src="./src/team/shivani-jha.webp" alt="Shivani Jha" />
                      <div className="member-details">
                        <h4>Ms. Shivani Jha</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#saurabh">
                  <div className="member-view-box">
                    <div className="member-image">
                      <img
                        src="./src/team/saurabh-sharma.webp"
                        alt="Mr. Saurabh Sharma"
                      />
                      <div className="member-details">
                        <h4>Mr. Saurabh Sharma</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sourab-tiwary-6a0680201"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="member-view-box">
                    <div className="member-image">
                      <img
                        src="./src/team/sourabh.webp"
                        alt="Mr. Sourabh Tiwary"
                      />
                      <div className="member-details">
                        <h4>Mr. Sourabh Tiwary</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="genealogy-tree">
        <ul>
          <li>
            <a href="#advisoryboardmembers">
              <div className="member-view-box advisoryBoard">
                <div className="member-image designation">
                  <div className="member-details">
                    <h3>Advisory Board Members</h3>
                  </div>
                </div>
              </div>
            </a>
            <ul className="active">
              <li>
                <a
                  href="https://www.linkedin.com/in/drjramkr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="member-view-box advisoryBoard">
                    <div className="member-image">
                      <img
                        src="./src/team/j-ramkumar.webp"
                        alt="Dr. J Ramkumar"
                      />
                      <div className="member-details">
                        <h4>Dr. J Ramkumar</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/amitabha-bandyopadhyay-bb943a22/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="member-view-box advisoryBoard">
                    <div className="member-image">
                      <img
                        src="./src/team/amitabha.webp"
                        alt="Prof. Amitabha Bandyopadhyay"
                      />
                      <div className="member-details">
                        <h4>Prof. Amitabha Bandyopadhyay</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/jagadeeshsunkad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="member-view-box advisoryBoard">
                    <div className="member-image">
                      <img
                        src="./src/team/jagdesh-suknad.webp"
                        alt="Jagdeesh Suknad"
                      />
                      <div className="member-details">
                        <h4>Jagdeesh Suknad</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
				<li>
                <a
                  href="https://www.linkedin.com/in/ann-molin-89416191"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="member-view-box advisoryBoard">
                    <div className="member-image">
                      <img src="./src/team/AnnMolin.jpeg" alt="Ann Molin" />
                      <div className="member-details">
                        <h4>Ann Molin</h4>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profiles;
