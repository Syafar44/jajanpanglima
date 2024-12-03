'use client';
import React, { useEffect } from 'react';
import { Carousel } from '@material-tailwind/react';

import AOS from 'aos';
import 'aos/dist/aos.css';

const posterDesktop = [
  {
    id: 1,
    image: './poster/promo ongkir web-01.jpg',
    title: 'Sarapan Panglima',
  },
  {
    id: 2,
    image: './poster/Stiker Box.jpg',
    title: 'stiker box Jajan Panglima',
  },
  {
    id: 3,
    image: './poster/Poster Sarapan.jpg',
    title: 'Jgratis ongkir jajan Panglima',
  },
];

const posterMobile = [
  {
    id: 4576,
    image: './poster/Feed Roti Gembung Hangat.jpg',
    title: 'Jajan Panglima',
  },
  {
    id: 5463,
    image: './poster/roti tawar post-01.jpg',
    title: 'Jajan Panglima',
  },
  {
    id: 3245,
    image: './poster/web jajan.jpg',
    title: 'Jajan Panglima',
  },
  {
    id: 3249,
    image: './poster/gratis ongkir feed ig.-01.jpg',
    title: 'Jajan Panglima',
  },
  {
    id: 3244,
    image: './poster/Post Feed Promo Donat-01.jpg',
    title: 'Jajan Panglima',
  },
];

const postRight = [
  {
    id: 3245,
    image: 'postingan/5213196f-8616-4732-a6ab-b7da3b981fba.jpeg',
    judul: 'Jajan Enak, Gak Pake Ribet ',
    deskripsi:
      'Nggak perlu bingung lagi! Sekarang jajan di Jajan Panglima GRATIS ongkir sampai 15 November aja! Cukup belanja minimal 20 ribu, langsung nikmatin promo yang bikin dompet senyum!',
    deskripsiOpsional:
      'Tunggu apa lagi? Cepet checkout sebelum promo ini keburu lewat!',
  },
];

const postLeft = [
  {
    id: 3245,
    image: 'postingan/roti tawar post-01.jpg',
    judul: 'Tahukah Kamu',
    deskripsi:
      'Dengan ROTI TAWAR JAJAN PANGLIMA setiap 100 gram-nya kasih kamu 304 kkal energi buat mulai hari, 18% protein buat daya tahan, dan cuma 3% lemak buat jaga kesehatan jantung. Plus, bahannya simpel dan transparan: tepung, gula, susu, ragi, dan mentega 👌',
    deskripsiOpsional:
      'Mulai hari dengan nutrisi seimbang yang simpel dan bernutrisi sebagai 𝒑𝒊𝒍𝒊𝒉𝒂𝒏 𝒂𝒎𝒂𝒏 𝒖𝒏𝒕𝒖𝒌 𝒌𝒆𝒍𝒖𝒂𝒓𝒈𝒂 😉',
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

      {postRight.map((post) => {
        return (
          <section className="flex mt-80 md:mt-10" key={post.id}>
            <div className="flex flex-col-reverse lg:justify-center px-6 mx-auto md:space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center gap-5 md:gap-40">
              <div
                className="flex flex-col items-center justify-end w-full lg:flex-row"
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="max-w-lg lg:mx-12 lg:order-2">
                  <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                    {post.judul}
                  </h1>
                  <p className="mt-4 text-gray-800 dark:text-gray-50 font-sans">
                    {post.deskripsi}
                  </p>
                  <p className="mt-4 text-gray-800 dark:text-gray-50 font-sans">
                    {post.deskripsiOpsional}
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
                className="flex items-center justify-start w-full md:h-96"
                data-aos="fade-down"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <img
                  className="w-full lg:w-[500px] max-w-xl rounded-md -mt-60 lg:mt-20 z-10"
                  src={post.image}
                  alt={post.judul}
                />
              </div>
            </div>
          </section>
        );
      })}

      {postLeft.map((post) => {
        return (
          <section key={post.id} className="flex mt-5 md:-mt-32 lg:mt-0">
            <div className="flex flex-col lg:justify-center px-6 py-4 space-y-6 lg:h-[32rem] lg:py-0 lg:flex-row lg:items-center gap-28 md:gap-40 w-full ">
              <div
                className="flex items-center justify-end w-full h-96"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
              >
                <img
                  className="w-full lg:w-[500px] rounded-md lg:-mt-16"
                  src={post.image}
                  alt={post.judul}
                />
              </div>
              <div
                className="flex flex-col items-center justify-start w-full lg:flex-row"
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="max-w-lg lg:mx-12 lg:order-2 -mt-32 lg:mt-0">
                  <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                    {post.judul}
                  </h1>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 font-sans">
                    {post.deskripsi}
                  </p>
                  <p className="mt-4 text-gray-600 dark:text-gray-300 font-sans">
                    {post.deskripsiOpsional}
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
        );
      })}
    </main>
  );
};

export default Jajan;
