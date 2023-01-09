import React, { useCallback } from "react";
import Particles from "react-tsparticles";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import "./Slider.css";
import content from "../../images/image1.jpg";
import content1 from "../../images/image2.jpg";
import content2 from "../../images/image3.jpg";
import content3 from "../../images/image1.jpg";

const SliderContainer = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      bounce: 0.4,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Slider = () => {
  // const particlesInit = useCallback(async (engine) => {
  //   // console.log(engine);
  //   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
  //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  //   // starting from v2 you can add only the features you need reducing the bundle size
  //   // await loadFull(engine);
  // }, []);

  // const particlesLoaded = useCallback(async (container) => {
  //   // await console.log(container);
  // }, []);

  return (
    <>
      <div className="hidden lg:grid grid-cols-1 text-white">
        <Swiper
          slidesPerView={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{ delay: 5000 }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section
              className="sliderBanner w-full"
              style={{ backgroundImage: `url(${content})` }}
            >
              <div className="overlay w-full text-center py-36 px-4">
                {/* <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              fullScreen: {
                enable: false,
                zIndex: 0,
              },
              fpsLimit: 100,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 100,
                    duration: 0.8,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ffffff",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  directions: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 2,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 900,
                  },
                  value: 90,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 1, max: 5 },
                },
              },
              detectRetina: true,
            }}
          /> */}
                <div className="font-bold text-white uppercase sliderTextAnimation">
                  <p>
                    IT Solution <br />
                    <span>For</span> <span>Your Business</span>
                  </p>
                </div>
                <div
                  className="flex gap-14 mt-8 headerBtn"
                  style={{ justifyContent: "center" }}
                >
                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    About US
                  </a>

                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section
              className="sliderBanner w-full"
              style={{ backgroundImage: `url(${content1})` }}
            >
              <div className="overlay w-full text-center py-36 px-4">
              <div className="font-bold text-white uppercase sliderTextAnimation">
                  <p>
                    IT Solution <br />
                    <span>For</span> <span>Your Business</span>
                  </p>
                </div>
                <div
                  className="flex gap-14 mt-8 headerBtn"
                  style={{ justifyContent: "center" }}
                >
                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    About US
                  </a>

                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section
              className="sliderBanner w-full"
              style={{ backgroundImage: `url(${content2})` }}
            >
              <div className="overlay w-full text-center py-36 px-4">
              <div className="font-bold text-white uppercase sliderTextAnimation">
                  <p>
                    IT Solution <br />
                    <span>For</span> <span>Your Business</span>
                  </p>
                </div>
                <div
                  className="flex gap-14 mt-8 headerBtn"
                  style={{ justifyContent: "center" }}
                >
                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    About US
                  </a>

                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="lg:hidden grid sm:grid-cols-1 md:grid-cols-1 text-white">
        <Swiper
          slidesPerView={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{ delay: 5000 }}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <section
              className="sliderBanner w-full"
              style={{ backgroundImage: `url(${content})` }}
            >
              <div className="overlay w-full text-center py-36 px-4">
              <div className="font-bold text-white uppercase sliderTextAnimation">
                  <p>
                    IT Solution <br />
                    <span>For</span> <span>Your Business</span>
                  </p>
                </div>
                <div
                  className="flex gap-14 mt-8 headerBtn"
                  style={{ justifyContent: "center" }}
                >
                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    About US
                  </a>

                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section
              className="sliderBanner w-full"
              style={{ backgroundImage: `url(${content1})` }}
            >
              <div className="overlay w-full text-center py-36 px-4">
              <div className="font-bold text-white uppercase sliderTextAnimation">
                  <p>
                    IT Solution <br />
                    <span>For</span> <span>Your Business</span>
                  </p>
                </div>
                <div
                  className="flex gap-14 mt-8 headerBtn"
                  style={{ justifyContent: "center" }}
                >
                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    About US
                  </a>

                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </section>
          </SwiperSlide>

          <SwiperSlide>
            <section
              className="sliderBanner w-full"
              style={{ backgroundImage: `url(${content2})` }}
            >
              <div className="overlay w-full text-center py-36 px-4">
              <div className="font-bold text-white uppercase sliderTextAnimation">
                  <p>
                    IT Solution <br />
                    <span>For</span> <span>Your Business</span>
                  </p>
                </div>
                <div
                  className="flex gap-14 mt-8 headerBtn"
                  style={{ justifyContent: "center" }}
                >
                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    About US
                  </a>

                  <a
                    href="/"
                    className="sliderBtn px-8 py-4 text-neutral-600 hover:text-white hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#f11b1b] duration-[400ms,700ms] transition-[color,box-shadow]"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </section>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
