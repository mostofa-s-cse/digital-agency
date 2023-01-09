import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div>
      <footer class="bg-[#232044] text-white">
        <div class="container px-6 pt-6">
          <div class="grid lg:grid-cols-4 md:grid-cols-2">
            <div class="mb-6">
              <h5 class="uppercase font-bold mb-2.5">Touch With Us</h5>

              <ul class="list-none mb-0">
                <li>
                  <span>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faLocationDot}
                    ></FontAwesomeIcon>
                    Dhaka,Bangladesh.
                  </span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faPhone}
                    ></FontAwesomeIcon>
                    017000000000
                  </span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faEnvelope}
                    ></FontAwesomeIcon>
                    info@agence.com
                  </span>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h5 class="uppercase font-bold mb-2.5">FaceBook Page</h5>
              <div
                className="fb-page"
                data-href="https://www.facebook.com/bangladesh"
                data-tabs="timeline"
                data-width=""
                data-height="100"
                data-small-header="false"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="false"
              >
                <blockquote
                  cite="https://www.facebook.com/bangladesh"
                  className="fb-xfbml-parse-ignore"
                >
                  <a href="https://www.facebook.com/projmantech">Facebook</a>
                </blockquote>
              </div>
            </div>

            <div class="mb-6">
              <h5 class="uppercase font-bold mb-2.5">company</h5>

              <ul class="list-none mb-0">
                <li>
                  <a href="#!" class="text-white">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Press kit
                  </a>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <h5 class="uppercase font-bold mb-2.5">SERVICES</h5>

              <ul class="list-none mb-0">
                <li>
                  <a href="#!" class="text-white">
                    Design
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          <span>
            &copy; {new Date().getFullYear()} All right reserved by
            <a href="#" className="ml-1">
              MOSTOFA
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
