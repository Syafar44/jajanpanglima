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
import { Teko } from "next/font/google";

import AOS from "aos";
import "aos/dist/aos.css";

const teko = Teko({
  weight: ["300", "700"],
  subsets: ["latin"],
});
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
          <Link href="/Product/Gembung">
            <Card className="hover:scale-105 ease-in-out transition">
              <CardHeader floated={false}>
                {isLoading ? (
                  <div className="skeleton h-48 lg:h-60 xl:h-80"></div>
                ) : (
                  <img src="./produk/gembung/original.jpg" alt="roti gembung" />
                )}
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className={`-my-2 lg:my-0  ${teko.className}`}
                >
                  Gembung
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Pizza">
            <Card className="hover:scale-105 ease-in-out transition">
              <CardHeader floated={false}>
                {isLoading ? (
                  <div className="skeleton h-48 lg:h-60 xl:h-80"></div>
                ) : (
                  <img src="./produk/pizza/Pizza Ayam Kari.jpg" alt="Pizza" />
                )}
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className={`-my-2 lg:my-0  ${teko.className}`}
                >
                  Pizza
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Bakpia">
            <Card className="hover:scale-105 ease-in-out transition">
              <CardHeader floated={false}>
                {isLoading ? (
                  <div className="skeleton h-48 lg:h-60 xl:h-80"></div>
                ) : (
                  <img src="./produk/bakpia/1 Paket Pia.jpg" alt="Bakpia" />
                )}
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className={`-my-2 lg:my-0  ${teko.className}`}
                >
                  Bakpia
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Cromboloni">
            <Card className="hover:scale-105 ease-in-out transition">
              <CardHeader floated={false}>
                {isLoading ? (
                  <div className="skeleton h-48 lg:h-60 xl:h-80"></div>
                ) : (
                  <img
                    src="./produk/cromboloni/Cromboloni Vanila.jpg"
                    alt="Cromboloni"
                  />
                )}
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className={`-my-2 lg:my-0  ${teko.className}`}
                >
                  Cromboloni
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Brownies">
            <Card className="hover:scale-105 ease-in-out transition">
              <CardHeader floated={false}>
                {isLoading ? (
                  <div className="skeleton h-48 lg:h-60 xl:h-80"></div>
                ) : (
                  <img
                    src="./produk/brownies/brwonies mini paket.jpg"
                    alt="Brownies"
                  />
                )}
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className={`-my-2 lg:my-0  ${teko.className}`}
                >
                  Brownies
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Bolen">
            <Card className="hover:scale-105 ease-in-out transition">
              <CardHeader floated={false}>
                {isLoading ? (
                  <div className="skeleton h-48 lg:h-60 xl:h-80"></div>
                ) : (
                  <img src="./produk/bolen/Bolen Pisang Mix.jpg" alt="Bolen" />
                )}
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className={`-my-2 lg:my-0  ${teko.className}`}
                >
                  Bolen
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Roti-tawar">
            <Card className="hover:scale-105 ease-in-out transition">
              <CardHeader floated={false}>
                {isLoading ? (
                  <div className="skeleton h-48 lg:h-60 xl:h-80"></div>
                ) : (
                  <img
                    src="./produk/roti tawar/Roti Tawar.jpg"
                    alt="Roti Tawar"
                  />
                )}
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className={`-my-2 lg:my-0  ${teko.className}`}
                >
                  Roti Tawar
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Untuq-untuq">
            <Card className="hover:scale-105 ease-in-out transition">
              <CardHeader floated={false}>
                {isLoading ? (
                  <div className="skeleton h-48 lg:h-60 xl:h-80"></div>
                ) : (
                  <img
                    src="./produk/untuq-untuq/Untuq Untuq Ayam Kari.jpg"
                    alt="Untuq-untuq"
                  />
                )}
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className={`-my-2 lg:my-0  ${teko.className}`}
                >
                  Untuq-untuq
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link href="/Product/Donat">
            <Card className="hover:scale-105 ease-in-out transition">
              <CardHeader floated={false}>
                {isLoading ? (
                  <div className="skeleton h-48 lg:h-60 xl:h-80"></div>
                ) : (
                  <img src="./produk/donat/Donat Original,.jpg" alt="Donat" />
                )}
              </CardHeader>
              <CardBody className="text-center">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className={`-my-2 lg:my-0  ${teko.className}`}
                >
                  Donat
                </Typography>
              </CardBody>
            </Card>
          </Link>
        </div>
      </section>
      <Footer />
      <Wa />
    </>
  );
};

export default Product;
