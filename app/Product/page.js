"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Link from "next/link";
import Footer from "../components/Footer";
import Wa from "../components/Wa";
import { Rubik } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";

const rubik = Rubik({
  weight: ["400"],
  subsets: ["latin"],
});

const pageProduk = [
  {
    id: 1,
    title: "Gembung",
    image: "produk/gembung/original.jpg",
    link: "/Product/Gembung",
  },
  {
    id: 2,
    title: "Pizza",
    image: "produk/pizza/Pizza Ayam Kari.jpg",
    link: "/Product/Pizza",
  },
  {
    id: 3,
    title: "Bakpia",
    image: "produk/bakpia/1 Paket Pia.jpg",
    link: "/Product/Bakpia",
  },
  {
    id: 4,
    title: "Cromboloni",
    image: "produk/cromboloni/Cromboloni Tiramisu.jpg",
    link: "/Product/Cromboloni",
  },
  {
    id: 5,
    title: "Brownies",
    image: "produk/brownies/brwonies mini paket.jpg",
    link: "/Product/Brownies",
  },
  {
    id: 6,
    title: "Bolen",
    image: "produk/bolen/Bolen Pisang Mix.jpg",
    link: "/Product/Bolen",
  },
  {
    id: 7,
    title: "Roti-tawar",
    image: "/produk/roti tawar/Roti Tawar.jpg",
    link: "/Product/Roti-tawar",
  },
  {
    id: 8,
    title: "Untuq-untuq",
    image: "produk/untuq-untuq/Untuq Untuq Ayam Kari.jpg",
    link: "/Product/Untuq-untuq",
  },
  {
    id: 9,
    title: "Donat",
    image: "produk/donat/donat paket.jpg",
    link: "/Product/Donat",
  },
  {
    id: 10,
    title: "All",
    image: "produk/all.jpg",
    link: "/Product/All",
  },
];


const Product = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <section className="mt-12 px-5 md:px-20 xl:px-30 2xl:px-52">
        <h1
          className="text-2xl lg:text-3xl xl:text-4xl font-bold"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Product Kategori
        </h1>
        <div
          className={`grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 mt-6 gap-2 lg:gap-5`}
        >
          {pageProduk.map((page) => {
            return (
              <Link key={page.id} href={page.link}>
                <Card className="hover:scale-105 ease-in-out transition">
                  <CardHeader floated={false}>
                    {isLoading ? (
                      <div className="skeleton h-48 lg:h-60 xl:h-80"></div>
                    ) : (
                      <img src={page.image} alt={page.title} />
                    )}
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography
                      variant="h5"
                      color="blue-gray"
                      className={`-my-2 lg:my-0  ${rubik.className}`}
                    >
                      {page.title}
                    </Typography>
                  </CardBody>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
      <Wa />
    </>
  );
};

export default Product;
