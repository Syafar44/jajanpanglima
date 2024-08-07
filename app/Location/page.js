"use client";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Footer from "../components/Footer";
import Wa from "../components/Wa";
import AOS from "aos";
import "aos/dist/aos.css";

const Location = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <section className="mt-10 mx-5 lg:px-20 2xl:px-52">
        <h1
          className="text-3xl lg:text-5xl font-bold"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Outlet Location
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 gap-2 lg:gap-5">
          <Link
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            target="_blink"
            href="https://maps.app.goo.gl/o1gBH83qrr8HCJaT7"
            
          >
            <Card
              shadow={false}
              className="relative grid h-[15rem] xl:h-[17rem] 2xl:h-[20rem] w-full  items-end justify-center overflow-hidden text-center shadow-2xl hover:scale-105 ease-in-out transition"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-outlet bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 leading-[1.5] font- text-base lg:text-xl -m-5"
                >
                  Outlet Jajan Juanda <br /> Tap open location
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            target="_blink"
            href="https://maps.app.goo.gl/ykuyPFRMXEE4C7zx8"
          >
            <Card
              shadow={false}
              className="relative grid h-[15rem] xl:h-[17rem] 2xl:h-[20rem] w-full items-end justify-center overflow-hidden text-center shadow-2xl hover:scale-105 ease-in-out transition"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-outlet bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 leading-[1.5] font- text-base lg:text-xl -m-5 "
                >
                  Outlet Jajan Suryanata <br /> Tap open location
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-duration="1600"
            data-aos-easing="ease-in-out"
            target="_blink"
            href="https://maps.app.goo.gl/3oXoDrjL9mR5EsGKA"
          >
            <Card
              shadow={false}
              className="relative grid h-[15rem] xl:h-[17rem] 2xl:h-[20rem] w-full items-end justify-center overflow-hidden text-center shadow-2xl hover:scale-105 ease-in-out transition"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-outlet bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 leading-[1.5] font- text-base lg:text-xl -m-5"
                >
                  Outlet Jajan Sempaja <br /> Tap open location
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-duration="1800"
            data-aos-easing="ease-in-out"
            target="_blink"
            href="https://maps.app.goo.gl/dgW1SthbqNjmi1Xy9"
          >
            <Card
              shadow={false}
              className="relative grid h-[15rem] xl:h-[17rem] 2xl:h-[20rem] w-full items-end justify-center overflow-hidden text-center shadow-2xl hover:scale-105 ease-in-out transition"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-outlet bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 leading-[1.5] font- text-base lg:text-xl -m-5"
                >
                  Outlet Jajan Lambung <br /> Tap open location
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-easing="ease-in-out"
            target="_blink"
            href="https://maps.app.goo.gl/bXLNLbJwBuJTAZQC8"
          >
            <Card
              shadow={false}
              className="relative grid h-[15rem] xl:h-[17rem] 2xl:h-[20rem] w-full items-end justify-center overflow-hidden text-center shadow-2xl hover:scale-105 ease-in-out transition"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-outlet bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 leading-[1.5] font- text-base lg:text-xl -m-5"
                >
                  Outlet Jajan Panjaitan <br /> Tap open location
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-duration="2200"
            data-aos-easing="ease-in-out"
            target="_blink"
            href="https://maps.app.goo.gl/aA6ZbSRYjkt8swow8"
          >
            <Card
              shadow={false}
              className="relative grid h-[15rem] xl:h-[17rem] 2xl:h-[20rem] w-full items-end justify-center overflow-hidden text-center shadow-2xl hover:scale-105 ease-in-out transition"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-outlet bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 leading-[1.5] font- text-base lg:text-xl -m-5"
                >
                  Outlet Jajan Sultan Hasanudin <br /> Tap open location
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-duration="2400"
            data-aos-easing="ease-in-out"
            target="_blink"
            href="https://maps.app.goo.gl/MkHBYce4RM9981qY7"
          >
            <Card
              shadow={false}
              className="relative grid h-[15rem] xl:h-[17rem] 2xl:h-[20rem] w-full items-end justify-center overflow-hidden text-center shadow-2xl hover:scale-105 ease-in-out transition"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-outlet bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 leading-[1.5] font- text-base lg:text-xl -m-5"
                >
                  Outlet Jajan Sambutan <br /> Tap open location
                </Typography>
              </CardBody>
            </Card>
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-duration="2600"
            data-aos-easing="ease-in-out"
            target="_blink"
            href="https://maps.app.goo.gl/MAXbKezx9zmdxhXV8"
          >
            <Card
              shadow={false}
              className="relative grid h-[15rem] xl:h-[17rem] 2xl:h-[20rem] w-full items-end justify-center overflow-hidden text-center shadow-2xl hover:scale-105 ease-in-out transition"
            >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-outlet bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </CardHeader>
              <CardBody className="relative py-14 px-6 md:px-12">
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-6 leading-[1.5] font-teko text-base lg:text-xl -m-5"
                >
                  Outlet Jajan Jakarta <br /> Tap open location
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

export default Location;
