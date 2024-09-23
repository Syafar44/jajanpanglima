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
      <nav className="hidden lg:block lg:px-8 lg:py-4 bg-kuning sticky top-0 z-50">
        <div className="flex justify-center gap-20 font-bold">
          <div className="flex items-center gap-5">
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-hitam hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/"
            >
              HOME
            </Link>
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-hitam hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/About"
            >
              ABOUTE
            </Link>
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-hitam hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/Gallery"
            >
              GALLERY
            </Link>
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-hitam hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/Contact"
            >
              CONTACT
            </Link>
          </div>
          <div>
            <Link href="/">
              <img
                className="w-20 scale-[2.2] translate-y-5"
                src="https://raw.githubusercontent.com/Syafar44/assets/main/assets/image/LOGO%20JAJAN%20Panglima-01.png"
              />
            </Link>
          </div>
          <div className="flex gap-5 items-center">
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-hitam hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/Product"
            >
              PRODUCT
            </Link>
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
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-hitam hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/Location"
            >
              LOCATION
            </Link>
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-hitam hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/Career"
            >
              CAREER
            </Link>
          </div>
        </div>
      </nav>
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
                        <Link href="/Product">
                          <ListItem>
                            <ListItemPrefix>
                              <ChevronRightIcon
                                strokeWidth={3}
                                className="h-3 w-5"
                              />
                            </ListItemPrefix>
                            All
                          </ListItem>
                        </Link>
                        <Link href="/Product/Gembung">
                          <ListItem>
                            <ListItemPrefix>
                              <ChevronRightIcon
                                strokeWidth={3}
                                className="h-3 w-5"
                              />
                            </ListItemPrefix>
                            Roti Gembung
                          </ListItem>
                        </Link>
                        <Link href="/Product/Pizza">
                          <ListItem>
                            <ListItemPrefix>
                              <ChevronRightIcon
                                strokeWidth={3}
                                className="h-3 w-5"
                              />
                            </ListItemPrefix>
                            Pizza
                          </ListItem>
                        </Link>
                        <Link href="/Product/Bakpia">
                          <ListItem>
                            <ListItemPrefix>
                              <ChevronRightIcon
                                strokeWidth={3}
                                className="h-3 w-5"
                              />
                            </ListItemPrefix>
                            Bakpia
                          </ListItem>
                        </Link>
                        <Link href="/Product/Cromboloni">
                          <ListItem>
                            <ListItemPrefix>
                              <ChevronRightIcon
                                strokeWidth={3}
                                className="h-3 w-5"
                              />
                            </ListItemPrefix>
                            Cromboloni
                          </ListItem>
                        </Link>
                        <Link href="/Product/Donat">
                          <ListItem>
                            <ListItemPrefix>
                              <ChevronRightIcon
                                strokeWidth={3}
                                className="h-3 w-5"
                              />
                            </ListItemPrefix>
                            Donat
                          </ListItem>
                        </Link>
                      </List>
                    </AccordionBody>
                  </Accordion>
                  <hr className="my-2 border-hitam" />
                  <div className="font-bold">
                    <Link href="/">
                      <ListItem>Home</ListItem>
                    </Link>
                    <Link href="/About">
                      <ListItem>About</ListItem>
                    </Link>
                    <Link href="/Contact">
                      <ListItem>Contact</ListItem>
                    </Link>
                    <Link href="/Location">
                      <ListItem>Location</ListItem>
                    </Link>
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
