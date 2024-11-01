"use client";
import React, { useEffect } from "react";
import { Carousel } from "@material-tailwind/react";

import AOS from "aos";
import "aos/dist/aos.css";

const posterDesktop = [
  {
    id: 1,
    image: "./poster/promo ongkir web-01.jpg",
    title: "Sarapan Panglima",
  },
  {
    id: 2,
    image: "./poster/Stiker Box.jpg",
    title: "stiker box Jajan Panglima",
  },
  {
    id: 3,
    image: "./poster/Poster Sarapan.jpg",
    title: "Jgratis ongkir jajan Panglima",
  },
];

const posterMobile = [
  {
    id: 1,
    image: "./poster/Feed Roti Gembung Hangat.jpg",
    title: "Jajan Panglima",
  },
  {
    id: 2,
    image: "./poster/roti tawar post-01.jpg",
    title: "Jajan Panglima",
  },
  {
    id: 3,
    image: "./poster/web jajan.jpg",
    title: "Jajan Panglima",
  },
  {
    id: 4,
    image: "./poster/gratis ongkir feed ig.-01.jpg",
    title: "Jajan Panglima",
  },
];

const Jajan = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <main className="overflow-x-hidden lg:overflow-x-visible">
      {/* Desktop */}
      <section className="container mx-auto px-28 2xl:px-0 pt-16 -mt-6 hidden lg:block lg:h-[480px] xl:h-[550px] 2xl:h-[800px] z-10">
        <Carousel loop={true} autoplay={true} className="rounded-xl shadow-lg">
          {posterDesktop.map((poster) => {
            return (
              <img
                key={poster.id}
                src={poster.image}
                alt={poster.title}
                className="h-full w-full object-cover object-top"
              />
            );
          })}
        </Carousel>
      </section>

      {/* Mobile */}
      <section className="container px-5 mx-auto py-6 mt-2 h-[25rem] lg:hidden">
        <Carousel loop={true} autoplay={true} className="rounded-xl shadow-lg">
          {posterMobile.map((poster) => {
            return (
              <img
                key={poster.id}
                src={poster.image}
                alt={poster.title}
                className="w-full object-cover object-center"
              />
            );
          })}
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
