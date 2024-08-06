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
  Button,
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
                  Order
                </Link>
              </Badge>
            ) : (
              <Link
                href="/Order"
                className="px-6 py-2 bg-hitam rounded-lg flex items-center text-putih hover:shadow-[inset_2px_2px_4px_rgba(255,_255,_255,_1),inset_-2px_-2px_5px_rgba(255,_255,_255,_0.3)] transition duration-300 ease-linear "
              >
                Order
              </Link>
            )}
            <Link
              className="px-6 py-2 rounded-lg flex items-center text-hitam hover:shadow-[inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)] transition duration-300 ease-linear "
              href="/Location"
            >
              LOCATION
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
                          Order
                        </Link>
                      </Badge>
                    ) : (
                      <Link href="/Order" className="">
                        Order
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
                        <ListItemPrefix>
                          <div className="h-6 w-6">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              enableBackground="new 0 0 64 64"
                              viewBox="0 0 64 64"
                              id="bread"
                            >
                              <path
                                fill="#fff"
                                stroke="#58595b"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                d="M29.490963,20.5186138c-0.2632465-0.1592655-0.5354042-0.3106995-0.816473-0.4542999c-1.606226-0.8206387-3.4011707-1.2428646-5.2093811-1.4623032c-4.1777344-0.5069962-7.8198204-0.2231064-9.9410591,0.0559368c-1.3222561,0.1739388-2.6243773,0.4705982-3.8427324,0.9898186c-0.6058502,0.2581921-1.1751862,0.5484753-1.7079926,0.8708477c-2.5446596,1.5456829-3.5208564,4.3551064-2.6762738,6.851223c0.1429281,0.4249229,0.3997974,0.9775906,0.7244821,1.5821457L5.9688473,47.1971016c-0.0019426,0.6727066,0.5702305,1.2190247,1.2767143,1.2190247h22.973135c0.706501,0,1.2786884-0.5463333,1.2767429-1.2190552l-0.0527534-18.2450886c0.3246861-0.6045551,0.5815563-1.1572227,0.7245502-1.5821457C33.0117531,24.8737202,32.0356216,22.0642967,29.490963,20.5186138z"
                              ></path>
                              <path
                                fill="none"
                                stroke="#58595b"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                d="M9.7333813,28.0003529c-0.3054438-0.6766739-0.4625511-1.2796841-0.537406-1.7789345c-0.1521635-1.0148773,0.5253859-1.9718208,1.5730667-2.2079964"
                              ></path>
                              <line
                                x1="9.972"
                                x2="9.972"
                                y1="44.338"
                                y2="32.29"
                                fill="none"
                                stroke="#58595b"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                              ></line>
                              <line
                                x1="38.095"
                                x2="31.443"
                                y1="20.048"
                                y2="28.952"
                                fill="none"
                                stroke="#58595b"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                              ></line>
                              <path
                                fill="none"
                                stroke="#58595b"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                d="M35.4185944,13.1962881c-0.2631874-0.1592321-0.5353394-0.3106174-0.8163414-0.454216c-1.6036072-0.8193398-3.3872681-1.2398739-5.183363-1.4591656c-4.1543732-0.5072126-7.7816315-0.2314844-9.9146404,0.0458145c-1.3458652,0.175046-2.672617,0.4734707-3.9161148,1.0056133c-0.0119381,0.0051308-0.0238752,0.0102606-0.0358133,0.0153913c-1.0485973,0.4520435-1.9828291,1.1172209-2.8147554,1.8868227c-1.9596338,1.8126993-5.8335643,5.6788187-7.2347875,9.0616884c0.4827642-1.0890942,1.3028145-2.0703201,2.470542-2.779623c0.532804-0.3223877,1.1021628-0.6126633,1.708015-0.8708267c1.2183237-0.5192242,2.5204582-0.8158989,3.8426952-0.9898586c2.1212568-0.2790489,5.763361-0.5629272,9.9410515-0.0558949c1.808218,0.2194118,3.603199,0.6416378,5.209404,1.4623051c0.2810612,0.1435986,0.553215,0.2949829,0.8164635,0.4542751c2.5446415,1.5456638,3.5208111,4.3551025,2.6762676,6.8512096c-0.1430054,0.4249401-0.3998203,0.9776058-0.7245502,1.58218l0.0527611,18.2450638c0.000494,0.1760101-0.0417519,0.3410988-0.1119556,0.4922409l6.5285492-7.6840668c0.1413956-0.1824722,0.217907-0.4050217,0.217907-0.6337891V19.939209C38.9104576,17.4704475,37.9265556,14.7196779,35.4185944,13.1962881z"
                              ></path>
                              <path
                                fill="#fff"
                                stroke="#58595b"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                d="M19.0112896,52.9999962C26.5068893,52.9999962,46.1648026,53,53.6604042,53c2.8327293,0,5.3129234-2.0985985,5.3393364-4.7957802C58.9999123,48.1866951,59,48.1691628,59,48.151619c0-5.9982376-10.1462708-10.8584671-22.6703796-10.8584671c-12.5116577,0-22.6579285,4.8602295-22.6579285,10.8584671c0,0.0175438,0.0000858,0.0350761,0.0002575,0.0526009C13.6983643,50.9014015,16.1785603,53,19.0112896,52.9999962z"
                              ></path>
                              <path
                                fill="none"
                                stroke="#58595b"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="2"
                                d="M23.9175587 42.4023209c0 0 1.0084019-2.2641563 4.0211601-4.3860626M31.3249588 42.4023209c0 0 1.2573891-2.8213043 5.129158-5.109169M38.732357 42.4023209c0 0 1.070652-2.4182625 4.3199463-4.5875816M46.1397591 42.4023209c0 0 .6847153-1.54105 2.6143761-3.2717628"
                              ></path>
                            </svg>
                          </div>
                        </ListItemPrefix>
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
                  Order
                </Link>
              </Badge>
            ) : (
              <Link href="/Order" className="">
                Order
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
