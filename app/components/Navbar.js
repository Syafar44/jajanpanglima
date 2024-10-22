"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
  Badge,
} from "@material-tailwind/react";

import {
  ChevronRightIcon,
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const link1 = [
  {
    id: 1,
    title: "HOME",
    link: "/",
  },
  {
    id: 2,
    title: "ABOUT",
    link: "/About",
  },
  {
    id: 3,
    title: "GALLERY",
    link: "/Gallery",
  },
  {
    id: 4,
    title: "CONTACT",
    link: "/Contact",
  },
];

const link2 = [
  {
    id: 5,
    title: "PRODUCT",
    link: "/Product",
  },
  {
    id: 6,
    title: "LOCATION",
    link: "/Location",
  },
  {
    id: 7,
    title: "CAREER",
    link: "/Career",
  },
];

const produkList = [
  {
    id: 1,
    title: "All",
    link: "/Product",
  },
  {
    id: 2,
    title: "Roti Gembung",
    link: "/Product/Gembung",
  },
  {
    id: 3,
    title: "Pizza",
    link: "/Product/Pizza",
  },
  {
    id: 4,
    title: "Bakpia",
    link: "/Product/Bakpia",
  },
  {
    id: 5,
    title: "Cromboloni",
    link: "/Product/Cromboloni",
  },
  {
    id: 6,
    title: "Donat",
    link: "/Product/Donat",
  },
  {
    id: 7,
    title: "Brownies",
    link: "/Product/Brownies",
  },
  {
    id: 8,
    title: "Bolen",
    link: "/Product/Bolen",
  },
  {
    id: 9,
    title: "Roti Tawar",
    link: "/Product/Roti-tawar",
  },
  {
    id: 10,
    title: "Untuq-untuq",
    link: "/Product/Untuq-untuq",
  },
];

const pages = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/About",
  },
  {
    id: 3,
    title: "Gallery",
    link: "/Gallery",
  },
  {
    id: 4,
    title: "Contact",
    link: "/Contact",
  },
  {
    id: 6,
    title: "Location",
    link: "/Location",
  },
  {
    id: 7,
    title: "Career",
    link: "/Career",
  },
];

const Navbar = () => {
  const [open, setOpen] = React.useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const [totalItems, setTotalItems] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartjajan")) || [];
    const total = savedCart.reduce((sum, product) => sum + product.quantity, 0);
    setTotalItems(total);
  }, []);

  return (
    <>
      {/* Desktop */}
      <nav className="hidden lg:block lg:px-8 lg:py-4 bg-kuning sticky top-0 z-50">
        <div className="flex justify-center gap-20 font-bold">
          <div className="flex items-center gap-5">
            {link1.map((item) => {
              return (
                <Link
                  key={item.id}
                  className="lg:px-2 xl:px-3 2xl:px-6 py-2 rounded-lg flex items-center text-hitam hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
                  href={item.link}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>
          <div>
            <Link href="/">
              <img
                className="w-20 lg:scale-[2] 2xl:scale-[2.2] translate-y-5"
                src="https://raw.githubusercontent.com/Syafar44/assets/main/assets/image/LOGO%20JAJAN%20Panglima-01.png"
              />
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            {link2.map((item) => {
              return (
                <Link
                  key={item.id}
                  className="lg:px-2 xl:px-3 2xl:px-6 py-2 rounded-lg flex items-center text-hitam hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
                  href={item.link}
                >
                  {item.title}
                </Link>
              );
            })}

            {totalItems > 0 ? (
              <Badge className="right-0" content={totalItems}>
                <Link
                  href="/Order"
                  className="px-6 py-2 bg-hitam rounded-lg flex items-center text-putih hover:shadow-[inset_2px_2px_4px_rgba(255,_255,_255,_1),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.3)] transition duration-300 ease-linear "
                >
                  🛒 ORDER
                </Link>
              </Badge>
            ) : (
              <Link
                href="/Order"
                className="px-6 py-2 bg-hitam rounded-lg flex items-center text-putih hover:shadow-[inset_2px_2px_4px_rgba(255,_255,_255,_1),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.3)] transition duration-300 ease-linear "
              >
                🛒 ORDER
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/*Mobile */}
      <nav className="lg:hidden bg-kuning p-2 block sticky top-0 z-50">
        <div className="flex justify-between mx-2">
          <div className="flex gap-3 justify-center items-center">
            <IconButton variant="text" size="lg" onClick={openDrawer}>
              {isDrawerOpen ? (
                <XMarkIcon className="h-8 w-8 stroke-2" />
              ) : (
                <Bars3Icon className="h-8 w-8 stroke-2" />
              )}
            </IconButton>
            <Drawer
              open={isDrawerOpen}
              onClose={closeDrawer}
              className="bg-kuning"
            >
              <Card
                color="transparent"
                shadow={false}
                className="h-[calc(100vh-2rem)] w-full p-4"
              >
                <div className="flex items-center justify-between p-2">
                  <img
                    src="https://raw.githubusercontent.com/Syafar44/assets/main/assets/image/LOGO%20JAJAN%20Panglima-01.png"
                    alt="brand"
                    className="w-20"
                  />
                  <div className="flex mr-5 items-center text-kuning font-bold bg-black px-4 py-1 rounded-xl">
                    {totalItems > 0 ? (
                      <Badge className="-right-3" content={totalItems}>
                        <Link href="/Order" className="">
                          🛒 ORDER
                        </Link>
                      </Badge>
                    ) : (
                      <Link href="/Order" className="">
                        🛒 ORDER
                      </Link>
                    )}
                  </div>
                </div>

                <List>
                  <Accordion
                    className="border border-hitam rounded-xl"
                    open={open === 1}
                    icon={
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${
                          open === 1 ? "rotate-180" : ""
                        }`}
                      />
                    }
                  >
                    <ListItem className="p-0" selected={open === 1}>
                      <AccordionHeader
                        onClick={() => handleOpen(1)}
                        className="border-b-0 p-3"
                      >
                        <Typography
                          color="blue-gray"
                          className="mr-auto font-normal"
                        >
                          Product
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0">
                        {produkList.map((produk) => {
                          return (
                            <Link key={produk.id} href={produk.link}>
                              <ListItem>
                                <ListItemPrefix>
                                  <ChevronRightIcon
                                    strokeWidth={3}
                                    className="h-3 w-5"
                                  />
                                </ListItemPrefix>
                                {produk.title}
                              </ListItem>
                            </Link>
                          );
                        })}
                      </List>
                    </AccordionBody>
                  </Accordion>
                  <hr className="my-2 border-hitam" />
                  <div className="font-bold">
                    {pages.map((page) => {
                      return (
                        <Link key={page.id} href={page.link}>
                          <ListItem>{page.title}</ListItem>
                        </Link>
                      );
                    })}
                  </div>
                </List>
              </Card>
            </Drawer>
            <Link href="/">
              <img
                className="item-center w-16 mr-2"
                src="https://raw.githubusercontent.com/Syafar44/assets/main/assets/image/LOGO%20JAJAN%20Panglima-01.png"
              />
            </Link>
          </div>
          <div className="flex mr-5 items-center text-kuning font-bold bg-black px-4 my-2 rounded-2xl">
            {totalItems > 0 ? (
              <Badge className="-right-3" content={totalItems}>
                <Link href="/Order" className="">
                  🛒 ORDER
                </Link>
              </Badge>
            ) : (
              <Link href="/Order" className="">
                🛒 ORDER
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
