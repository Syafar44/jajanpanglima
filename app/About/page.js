"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Wa from "../components/Wa";

import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <section className="bg-putih dark:bg-gray-900 -mt-20 md:-mt-10 xl:-mt-32 overflow-x-hidden">
        <div className="relative flex lg:z-10">
          <div className="lg:min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 xl:px-20 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1
              className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
              data-aos="fade-in"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              Visi Misi <br />
              <span className="text-2xl text-kuning bg-hitam p-1 rounded-lg opacity-80">
                Jajan Panglima
              </span>
            </h1>

            <div className="mt-10 lg:mt-10 lg:flex lg:items-center">
              <img
                className="object-cover object-center w-full h-[15rem] md:w-[30rem] xl:w-full xl:h-auto xl:-ml-40 rounded-lg h-96"
                src="visiMisi.jpg"
                alt="visi dan misi jajan panglima"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              />

              <div className="mt-8 md:mt-0 px-2 md:pl-5 xl:pl-32 xl:mt-0 text-gray-800 text-sm xl:text-base">
                <h3
                  className="text-3xl font-semibold mt-6"
                  data-aos="fade-left"
                  data-aos-duration="1400"
                  data-aos-easing="ease-in-out"
                >
                  Visi
                </h3>
                <p
                  className="max-w-lg  text-gray-600 dark:text-gray-400"
                  data-aos="fade-left"
                  data-aos-duration="1600"
                  data-aos-easing="ease-in-out"
                >
                  Menginspirasi Indonesia! Menjadi Perusahaan Syariah Kelas
                  Dunia Yang Dicintai, Berperan Dalam Peradaban Mulia, Dan
                  Bermanfaat Bagi Semua.
                </p>
                <h3
                  className="text-3xl font-semibold mt-3"
                  data-aos="fade-left"
                  data-aos-duration="1800"
                  data-aos-easing="ease-in-out"
                >
                  Misi
                </h3>
                <ul
                  className="list-disc text-gray-600 ml-4"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  data-aos-easing="ease-in-out"
                >
                  <li>
                    Mengelola perusahaan Murni sesuai Syariat Islam oleh
                    individu yang Saleh dengan standart Kelas Dunia
                  </li>
                  <li>
                    Menyediakan produk yang halal, berkualitas dan memberi nilai
                    yang terbaik bagi pelanggan
                  </li>
                  <li>
                    Menyebar manfaat serta berperan nyata dalam peradaban mulia
                  </li>
                  <li>
                    Bertumbuh dengan Cepat dan Berkesinambungan sehingga dapat
                    Semakin Bermanfaat Bagi Semua
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-putih dark:bg-gray-900 md:-mt-20 xl:-mt-36 2xl:-mt-72 -mt-52 -mb-10 z-20 overflow-x-hidden">
        <div className="relative flex">
          <div className="min-h-screen lg:w-1/3"></div>
          <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div className="container flex flex-col justify-center w-full min-h-screen px-6 md:px-5 xl:px-16 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1
              className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
              data-aos="fade-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Core
              <span className="text-kuning bg-hitam px-1 rounded-lg opacity-80">
                Value
              </span>
              <br />
              Janan Panglima
            </h1>

            <div className="lg:-mt-5 lg:flex justify-between lg:items-center">
              <div className="xl:px-10 lg:mt-0 text-gray-800">
                <ul className="text-gray-800 text-2xl lg:text-4xl 2xl:text-5xl font-bold p-2">
                  <li
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    Syar&apos;i
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-duration="1300"
                    data-aos-easing="ease-in-out"
                  >
                    Profesional
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out"
                  >
                    Customer Centric
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-duration="1700"
                    data-aos-easing="ease-in-out"
                  >
                    Innovation
                  </li>
                  <li
                    data-aos="fade-right"
                    data-aos-duration="1900"
                    data-aos-easing="ease-in-out"
                  >
                    Helpful
                  </li>
                </ul>
              </div>
              <img
                className="object-cover object-center 2xl:ml-40 md:w-[30rem] rounded-lg h-96"
                src="value.jpg"
                alt="outlet juanda"
                data-aos="fade-left"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Wa />
    </>
  );
};

export default About;
