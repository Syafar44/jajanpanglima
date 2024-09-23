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

const outlets = [
  {
    id: 1,
    namaOutlet: "Outlet Jajan Juanda",
    lokasiOutlet: "https://maps.app.goo.gl/o1gBH83qrr8HCJaT7",
    fotoOutlet: "bg-outlet-juanda",
  },
  {
    id: 2,
    namaOutlet: "Outlet Jajan Suryanata",
    lokasiOutlet: "https://maps.app.goo.gl/ykuyPFRMXEE4C7zx8",
    fotoOutlet: "bg-outlet-suryanata",
  },
  {
    id: 3,
    namaOutlet: "Outlet Jajan Sempaja",
    lokasiOutlet: "https://maps.app.goo.gl/3oXoDrjL9mR5EsGKA",
    fotoOutlet: "bg-outlet-sempaja",
  },
  {
    id: 4,
    namaOutlet: "Outlet Jajan Lambung",
    lokasiOutlet: "https://maps.app.goo.gl/dgW1SthbqNjmi1Xy9",
    fotoOutlet: "bg-outlet-lambung",
  },
  {
    id: 5,
    namaOutlet: "Outlet Jajan Panjaitan",
    lokasiOutlet: "https://maps.app.goo.gl/bXLNLbJwBuJTAZQC8",
    fotoOutlet: "bg-outlet-lambung",
  },
  {
    id: 6,
    namaOutlet: "Outlet Jajan Sultan Hasanudin",
    lokasiOutlet: "https://maps.app.goo.gl/aA6ZbSRYjkt8swow8",
    fotoOutlet: "bg-outlet-brimob",
  },
  {
    id: 7,
    namaOutlet: "Outlet Jajan Sambutan",
    lokasiOutlet: "https://maps.app.goo.gl/MkHBYce4RM9981qY7",
    fotoOutlet: "bg-outlet-sambutan",
  },
  {
    id: 8,
    namaOutlet: "Outlet Jajan Jakarta",
    lokasiOutlet: "https://maps.app.goo.gl/MAXbKezx9zmdxhXV8",
    fotoOutlet: "bg-outlet-jakarta",
  },
  {
    id: 9,
    namaOutlet: "Outlet Jajan Bungtomo",
    lokasiOutlet: "",
    fotoOutlet: "bg-outlet-bungtomo",
  },
];

const Location = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar />
      <section className="mt-10 mx-5 lg:px-20 2xl:px-52 overflow-x-hidden lg:overflow-x-visible">
        <h1
          className="text-3xl lg:text-5xl font-bold"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          Outlet Location
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 gap-2 lg:gap-5">
          {outlets.map((outlet) => {
            return (
              <Link
                key={outlet.id}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
                target="_blink"
                href={outlet.lokasiOutlet}
              >
                <Card
                  shadow={false}
                  className="relative grid h-[15rem] xl:h-[17rem] 2xl:h-[20rem] w-full  items-end justify-center overflow-hidden text-center shadow-2xl hover:scale-105 ease-in-out transition"
                >
                  <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className={`absolute inset-0 m-0 h-full w-full rounded-none ${outlet.fotoOutlet} bg-cover bg-center`}
                  >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                  </CardHeader>
                  <CardBody className="relative py-14 px-6 md:px-12">
                    <Typography
                      variant="h2"
                      color="white"
                      className="mb-6 leading-[1.5] font- text-base lg:text-xl -m-5"
                    >
                      {outlet.namaOutlet} <br /> Tap open location
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

export default Location;
