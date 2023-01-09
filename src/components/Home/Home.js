import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./home.css";
import about from "../../images/about.jpg";
import Counter from "./Counter";
import CounerImage1 from "../../images/fun1.png";
import CounerImage2 from "../../images/fun2.png";
import CounerImage3 from "../../images/fun3.png";
import CounerImage4 from "../../images/fun4.png";
import Slider from "../Slider/Slider";

const portfolio = [
  {
    title: "My best client",
    name: "Lorem ipsum is simple dummy text on the printing and typesetting industry.",
    category: ["all", "frontend", "ux-ui"],
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp",
    link: "#",
  },
  {
    title: "My favorite case",
    name: "Lorem ipsum is simple dummy text on the printing and typesetting industry.",
    category: ["all", "mobile", "ux-ui"],
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp",
    link: "#",
  },
  {
    title: "A old job",
    name: "Lorem ipsum is simple dummy text on the printing and typesetting industry.",
    category: ["all", "frontend"],
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp",
    link: "#",
  },
  {
    title: "It is a really cool website",
    name: "Lorem ipsum is simple dummy text on the printing and typesetting industry.",
    category: ["all", "frontend", "ux-ui"],
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp",
    link: "#",
  },
  {
    title: "Something more",
    name: "Lorem ipsum is simple dummy text on the printing and typesetting industry.",
    category: ["all", "others"],
    image:
      "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp",
    link: "#",
  },
];

const Home = () => {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolio);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = portfolio.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));
    setProjects(filtered);
  }, [filter]);

  return (
    <>
      {/* -- ====== Benner Section Start -- */}
      <section>
        <Slider />
      </section>
      {/* -- ====== Benner Section end -- */}

      {/* -- ====== ABOUT US Section start -- */}
      <section id="aboutUs" className="">
        <div className="container grid lg:grid-cols-2 gap-12 md:grid-cols-1 justify-between py-16">
          <div className="w-full">
            <h2 className="text-[#f11b1b] font-bold text-[2.5em] uppercase">
              <span className="text-black animate-charcter">ABOUT</span> US
            </h2>
            <div className="flex mt-2">
              <div className="w-40 bg-red-600" style={{ height: "4px" }}></div>
              <div
                className="w-2 ml-2 bg-black"
                style={{ height: "4px" }}
              ></div>
              <div
                className="w-2 ml-1 bg-black"
                style={{ height: "4px" }}
              ></div>
            </div>
            <div className="flex gap-8 py-8">
              <a
                href="/"
                className="aboutUsBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                Our mission
              </a>

              <a
                href="/"
                className="aboutUsBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                our vision
              </a>
            </div>

            <p className="mt-2 text-justify">
              Piusto odio dignissimos ducimus qui blanditiis praesentium
              voluptatum del eniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident, similique sunt
              in culpa qui officia.
              <br />
              <br />
              Mollitia animi, id est laborum et dolorum fuga. Et harum quidem
              rerum facil est et expedita distinctio. Nam libero tempore, cum
              soluta nobis esteligendi optio cumque nihil impedit quo minus id
              quod maxime.
            </p>
            <div className="mt-20 text-end">
              <a
                href="/"
                className="sliderBtn px-4 py-2 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
              >
                read more...
              </a>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <img src={about} className="rounded-md" alt="About" />
          </div>
        </div>
      </section>
      {/* -- ====== ABOUT US Section End --*/}
      {/* -- ====== Services Section start -- */}
      <section id="services" className="bg-[#232044]">
        <div className="container mx-auto py-16">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <p className="text-[#f11b1b] font-medium">
                Our Exclusive Services
              </p>
              <h2 className="text-[#f11b1b] font-bold text-[2.5em] uppercase">
                <span className="text-white serviceAnimate-charcter">
                  WE DO AWESOME
                </span>{" "}
                DESIGN & CODE
              </h2>
              <div className="flex mt-2">
                <div
                  className="w-40 bg-red-600"
                  style={{ height: "4px" }}
                ></div>
                <div
                  className="w-2 ml-2 bg-red-600"
                  style={{ height: "4px" }}
                ></div>
                <div
                  className="w-2 ml-1 bg-black"
                  style={{ height: "4px" }}
                ></div>
              </div>
              <div className="lg:w-[57rem] md:w-full mb-8 mt-8">
                <p className="mt-4 text-justify font-medium text-white">
                  Piusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum del eniti atque corrupti quos dolores cati
                  cupiditate non provident, similique sunt in culpa qui officia.
                  Mollitia animi, id est laborum.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap mt-5">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-md bg-white p-10 md:px-7 xl:px-10">
                <span className="serviceIcon">
                  <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                </span>
                <h4 className="text-[#f11b1b] mb-3 text-xl font-semibold">
                  Website Design
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-md bg-white p-10 md:px-7 xl:px-10">
                <span className="serviceIcon">
                  <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                </span>
                <h4 className="text-[#f11b1b] mb-3 text-xl font-semibold">
                  Website Design
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mb-8 rounded-md bg-white p-10 md:px-7 xl:px-10">
                <span className="serviceIcon">
                  <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                </span>
                <h4 className="text-[#f11b1b] mb-3 text-xl font-semibold">
                  Website Design
                </h4>
                <p className="text-body-color">
                  We dejoy working with discerning clients, people for whom
                  qualuty, service, integrity & aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -- ====== Services Section End -- */}
      {/* -- ====== FEATURES Section Start -- */}
      <section id="features" className="bg-white">
        <div className="container mx-auto py-16 text-center">
          <h2 className="text-[#232044] font-bold uppercase animate-charcter">
            BEST FEATURES
          </h2>
          <div className="flex mt-2 place-content-center">
            <div className="w-40 bg-red-600" style={{ height: "4px" }}></div>
            <div
              className="w-2 ml-2 bg-red-600"
              style={{ height: "4px" }}
            ></div>
            <div className="w-2 ml-1 bg-black" style={{ height: "4px" }}></div>
          </div>

          <p className="py-5">
            Piusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum cati cupiditate non provident,
            <br /> similique sunt in culpa qui.
          </p>
          <div className="mx-auto px-4">
            <div className="-mx-4 flex flex-wrap mt-8">
              <div className="px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="features_card hover:bg-[#232044] hover:text-white shadow-md"
                  style={{ padding: "40px" }}
                >
                  <span className="featuresIcon">
                    <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                  </span>
                  <h4 className="text-[#232044] text-xl font-semibold">
                    Website Design
                  </h4>
                  <p className="mt-3">
                    We dejoy working with discerning clients, people for whom
                    qualuty, service, integrity & aesthetics.
                  </p>
                </div>
              </div>
              <div className="px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="features_card hover:bg-[#232044] hover:text-white shadow-md"
                  style={{ padding: "40px" }}
                >
                  <span className="featuresIcon">
                    <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                  </span>
                  <h4 className="text-[#232044] text-xl font-semibold">
                    Website Design
                  </h4>
                  <p className="mt-3">
                    We dejoy working with discerning clients, people for whom
                    qualuty, service, integrity & aesthetics.
                  </p>
                </div>
              </div>
              <div className="px-4 md:w-1/2 lg:w-1/3">
                <div
                  className="features_card hover:bg-[#232044] hover:text-white shadow-md"
                  style={{ padding: "40px" }}
                >
                  <span className="featuresIcon">
                    <FontAwesomeIcon icon={faLaptopCode}></FontAwesomeIcon>
                  </span>
                  <h4 className="text-[#232044] text-xl font-semibold">
                    Website Design
                  </h4>
                  <p className="mt-3">
                    We dejoy working with discerning clients, people for whom
                    qualuty, service, integrity & aesthetics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -- ====== FEATURES Section End -- */}
      {/* -- ====== portfolioFilter Section Start -- */}
      <section className="text-gray-700 text-center">
        <div className="container mx-auto py-16">
          <h2 className="text-[#232044] font-bold animate-charcter uppercase">
            PORTFOLIO
          </h2>
          <div className="flex mt-2 place-content-center">
            <div className="w-40 bg-red-600" style={{ height: "4px" }}></div>
            <div
              className="w-2 ml-2 bg-red-600"
              style={{ height: "4px" }}
            ></div>
            <div className="w-2 ml-1 bg-black" style={{ height: "4px" }}></div>
          </div>

          <p className="py-5">
            Piusto odio dignissimos ducimus qui blanditiis praesentium
            voluptatum cati cupiditate non provident, similique sunt in culpa
            qui.
          </p>

          <div className="text-center mb-8 mt-8 text-[#f83256]">
            <button
              onClick={() => setFilter("all")}
              className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                All
              </span>
            </button>
            <button
              onClick={() => setFilter("frontend")}
              className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
            >
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Frontend
              </span>
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Mobile
              </span>
            </button>
            <button
              onClick={() => setFilter("ux-ui")}
              className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
            >
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                UX/UI
              </span>
            </button>
            <button
              onClick={() => setFilter("others")}
              className="inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
            >
              <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Others
              </span>
            </button>
          </div>
          <div className="flex flex-wrap">
            {projects.map((item) =>
              item.filtered === true ? (
                <>
                  <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                    <div className="card">
                      <div className="image">
                        <img src={item.image} />
                      </div>
                      <div className="details overflow-hidden">
                        <div className="center" key={item.title}>
                          <h1>{item.title}</h1>
                          <p>{item.name}</p>
                          <a
                            href={item.link}
                            type="button"
                            className="mt-4 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"
                          >
                            <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                              Visite Site
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </section>
      {/* -- ====== portfolioFilter Section End -- */}
      {/* -- ====== counterBenner Section Start -- */}
      <section className="text-gray-700 text-center">
        <div className="counterBenner w-full mt-8 mb-8">
          <div className="overlay w-full mx-auto text-center text-white py-28 px-4">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
              <Counter
                number={105}
                CountIcon={CounerImage1}
                title="Satisfied Clients"
              />
              <Counter
                number={5175}
                CountIcon={CounerImage2}
                title="Users Loved"
              />
              <Counter
                number={468}
                CountIcon={CounerImage3}
                title="Project Complated"
              />
              <Counter
                number={468}
                CountIcon={CounerImage4}
                title="Cup Coffe"
              />
            </div>
          </div>
        </div>
      </section>
      {/* -- ====== counterBenner Section End -- */}
      {/* <!-- ====== Team Section Start --> */}
      <section className="">
        <div className="container mx-auto py-16">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-5">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <h2 className="text-[#232044] font-bold text-[2.5em] uppercase text-center">
                  Our Awesome Team
                </h2>
                <div className="flex mt-2 place-content-center">
                  <div
                    className="w-40 bg-red-600"
                    style={{ height: "4px" }}
                  ></div>
                  <div
                    className="w-2 ml-2 bg-red-600"
                    style={{ height: "4px" }}
                  ></div>
                  <div
                    className="w-2 ml-1 bg-black"
                    style={{ height: "4px" }}
                  ></div>
                </div>
                <p className="text-body-color text-base mt-5">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/2 xl:w-1/4 px-4">
              <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-01.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                      <h3 className="text-dark text-base font-semibold">
                        Coriss Ambady
                      </h3>
                      <p className="text-body-color text-sm mb-3">
                        Web Developer
                      </p>
                      <ul className="flex place-content-center space-x-4 sm:mt-0">
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <div>
                        <span className="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16"
                              cy="45"
                              r="45"
                              fill="#13C296"
                              fillOpacity="0.11"
                            />
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/4 px-4">
              <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-02.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                      <h3 className="text-dark text-base font-semibold">
                        Glorius Cristian
                      </h3>
                      <p className="text-body-color text-sm mb-3">
                        App Developer
                      </p>
                      <ul className="flex place-content-center space-x-4 sm:mt-0">
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <div>
                        <span className="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16"
                              cy="45"
                              r="45"
                              fill="#13C296"
                              fillOpacity="0.11"
                            />
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/4 px-4">
              <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-03.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                      <h3 className="text-dark text-base font-semibold">
                        Jackie Sanders
                      </h3>
                      <p className="text-body-color text-sm mb-3">
                        UI/UX Designer
                      </p>
                      <ul className="flex place-content-center space-x-4 sm:mt-0">
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <div>
                        <span className="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16"
                              cy="45"
                              r="45"
                              fill="#13C296"
                              fillOpacity="0.11"
                            />
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/4 px-4">
              <div className="mx-auto mb-10 w-full max-w-[370px]">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/team/team-01/image-04.jpg"
                    alt="image"
                    className="w-full"
                  />
                  <div className="absolute bottom-5 left-0 w-full text-center">
                    <div className="relative mx-5 overflow-hidden rounded-lg bg-white py-5 px-3">
                      <h3 className="text-dark text-base font-semibold">
                        Nikolas Brooten
                      </h3>
                      <p className="text-body-color text-sm mb-3">
                        Sales Manager
                      </p>
                      <ul className="flex place-content-center space-x-4 sm:mt-0">
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul>
                      <div>
                        <span className="absolute left-0 bottom-0">
                          <svg
                            width="61"
                            height="30"
                            viewBox="0 0 61 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="16"
                              cy="45"
                              r="45"
                              fill="#13C296"
                              fillOpacity="0.11"
                            />
                          </svg>
                        </span>
                        <span className="absolute top-0 right-0">
                          <svg
                            width="20"
                            height="25"
                            viewBox="0 0 20 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle
                              cx="0.706257"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 0.706257 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 6.39669 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 12.0881 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="24.3533"
                              r="0.646687"
                              transform="rotate(-90 17.7785 24.3533)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 0.706257 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 6.39669 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 12.0881 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="18.6624"
                              r="0.646687"
                              transform="rotate(-90 17.7785 18.6624)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 0.706257 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 6.39669 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 12.0881 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="12.9717"
                              r="0.646687"
                              transform="rotate(-90 17.7785 12.9717)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 0.706257 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 6.39669 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 12.0881 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="7.28077"
                              r="0.646687"
                              transform="rotate(-90 17.7785 7.28077)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="0.706257"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 0.706257 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="6.39669"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 6.39669 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="12.0881"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 12.0881 1.58989)"
                              fill="#3056D3"
                            />
                            <circle
                              cx="17.7785"
                              cy="1.58989"
                              r="0.646687"
                              transform="rotate(-90 17.7785 1.58989)"
                              fill="#3056D3"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====== Team Section End --> */}
      {/* -- ====== Contact Section Start -- */}
      <section id="contact" class="overflow-hidden bg-white">
        <div class="container mx-auto py-16">
          <div class="-mx-4 flex flex-wrap lg:justify-between">
            <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div class="mb-12 max-w-[570px] lg:mb-0 px-4">
                <h2 class="animate-charcter font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>

                <div className="flex mt-2 mb-4">
                  <div
                    className="w-40 bg-red-600"
                    style={{ height: "4px" }}
                  ></div>
                  <div
                    className="w-2 ml-2 bg-red-600"
                    style={{ height: "4px" }}
                  ></div>
                  <div
                    className="w-2 ml-1 bg-black"
                    style={{ height: "4px" }}
                  ></div>
                </div>
                <div class="mb-8 flex w-full max-w-[370px]">
                  <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      class="fill-current"
                    >
                      <path d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z" />
                    </svg>
                  </div>
                  <div class="w-full">
                    <h4 class="mb-1 text-xl font-bold text-dark">
                      Our Location
                    </h4>
                    <p class="text-base text-body-color">Dhaka,Bangladesh</p>
                  </div>
                </div>

                <div class="mb-8 flex w-full max-w-[370px]">
                  <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="24"
                      height="26"
                      viewBox="0 0 24 26"
                      class="fill-current"
                    >
                      <path d="M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z" />
                      <path d="M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z" />
                      <path d="M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z" />
                    </svg>
                  </div>
                  <div class="w-full">
                    <h4 class="mb-1 text-xl font-bold text-dark">
                      Phone Number
                    </h4>
                    <p class="text-base text-body-color">
                      (+62)81 414 257 9980
                    </p>
                  </div>
                </div>

                <div class="mb-3 flex w-full max-w-[370px]">
                  <div class="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width="28"
                      height="19"
                      viewBox="0 0 28 19"
                      class="fill-current"
                    >
                      <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z" />
                    </svg>
                  </div>
                  <div class="w-full">
                    <h4 class="mb-1 text-xl font-bold text-dark">
                      Email Address
                    </h4>
                    <p class="text-base text-body-color">info@agence.com</p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 mb-4">
                <iframe
                  class="w-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746841.1351297237!2d88.10015636820113!3d23.495625356900998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1673108930917!5m2!1sen!2sbd"
                  height="200"
                ></iframe>
              </div>
            </div>
            <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div class="rounded-lg bg-white p-8 shadow-lg sm:p-12">
                <form>
                  <div class="mb-6">
                    <input
                      type="text"
                      placeholder="Your Name"
                      class="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="email"
                      placeholder="Your Email"
                      class="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div class="mb-6">
                    <input
                      type="text"
                      placeholder="Your Phone"
                      class="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    />
                  </div>
                  <div class="mb-6">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      class="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      class="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* -- ====== Contact Section End -- */}
    </>
  );
};

export default Home;
