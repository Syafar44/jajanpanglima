"use client";
import React, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

import AOS from "aos";
import "aos/dist/aos.css";

const Jajan = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="overflow-x-hidden lg:overflow-x-visible">
      {/* Carausel layar Lebar */}
      <section className="container mx-auto py-16 -mt-6 hidden lg:block lg:h-[580px] xl:h-[700px] 2xl:h-[800px] ">
        <Carousel loop={true} autoplay={true} className="rounded-xl">
          <img
            src="1.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
          <img
            src="2.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
          <img
            src="3.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
        </Carousel>
      </section>
      {/* Carausel layar Kecil */}
      <section className="container px-5 mx-auto py-10 -mt-6 h-[25rem] lg:hidden">
        <Carousel loop={true} autoplay={true} className="rounded-xl">
          <img
            src="1.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
          <img
            src="2.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
          <img
            src="3.png"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
        </Carousel>
      </section>

      <section className="flex mt-10">
        <div className="flex flex-col lg:justify-center px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center w-full gap-28">
          <div
            className="flex flex-col items-center justify-end w-full lg:flex-row lg:w-1/2"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                Teman Ngemil Bersama
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-50">
                Ngemil donat bersama temen lebih asyik dengan Jajan Panglima ni
                Ada banyak pilihan rasa yang memanjakan lidah kalian tentunya 🤤
              </p>
              <div className="mt-6">
                <a
                  href="/Product"
                  className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-black hover:text-white capitalize bg-yellow-600 rounded-lg hover:bg-black lg:mx-0 lg:w-auto focus:outline-none"
                >
                  Ayuk Ngemil
                </a>
              </div>
            </div>
          </div>

          <div
            className="flex items-center justify-start w-full h-96 lg:w-1/2"
            data-aos="fade-down"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img
              className="w-full max-w-xl rounded-md -mt-60 lg:mt-20 z-10"
              src="tes-4.jpg"
              alt="apple watch photo"
            />
          </div>
        </div>
      </section>

      <section className="flex mx-auto -mt-48 lg:mt-0">
        <div className="flex flex-col lg:justify-center px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center gap-28 w-full">
          <div
            className="flex items-center justify-end w-full h-96 lg:w-1/2"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <img
              className=" w-full max-w-xl rounded-md lg:-mt-16"
              src="tes-2.jpg"
              alt="apple watch photo"
            />
          </div>
          <div
            className="flex flex-col items-center justify-start w-full lg:flex-row lg:w-1/2"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="max-w-lg lg:mx-12 lg:order-2 -mt-32 lg:mt-0">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                Teman Ngemil Bersama
              </h1>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Ngemil donat bersama temen lebih asyik dengan Jajan Panglima ni
                Ada banyak pilihan rasa yang memanjakan lidah kalian tentunya 🤤
              </p>
              <div className="mt-6">
                <a
                  href="/Product"
                  className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-black hover:text-white capitalize bg-yellow-600 rounded-lg hover:bg-black lg:mx-0 lg:w-auto focus:outline-none"
                >
                  Ayuk Ngemil
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Jajan;
