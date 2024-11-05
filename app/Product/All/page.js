"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Chip,
} from "@material-tailwind/react";
import Footer from "../../components/Footer";
import Wa from "@/app/components/Wa";
import Link from "next/link";

const products = [
  {
    id: 11,
    nama: "Pizza Ayam Kari",
    harga: 39000,
    gambar: "../produk/pizza/Pizza Ayam Kari.jpg",
  },
  {
    id: 12,
    nama: "Pizza Beff",
    harga: 43000,
    gambar: "../produk/pizza/Pizza Beef.JPG",
  },
  {
    id: 13,
    nama: "Pizza Chicken",
    harga: 42000,
    gambar: "../produk/pizza/Pizza Chicken.JPG",
  },
  {
    id: 14,
    nama: "Pizza Meat Lovers",
    harga: 50000,
    gambar: "../produk/pizza/PizAa Meat Lovers.JPG",
  },
  {
    id: 15,
    nama: "Pizza Slice Beff",
    harga: 15000,
    gambar: "../produk/pizza/Pizza Slice Beff,.jpg",
  },
  {
    id: 16,
    nama: "Pizza  Slice Chicken",
    harga: 15000,
    gambar: "../produk/pizza/Pizza Slice Chicken.jpg",
  },
  {
    id: 17,
    nama: "Pizza Slice Meat Lovers",
    harga: 15000,
    gambar: "../produk/pizza/Pizza Slice Meat Lovers.jpg",
  },
  {
    id: 18,
    nama: "Pizza Sosis",
    harga: 41000,
    gambar: "../produk/pizza/Sosis.JPG",
  },
  {
    id: 21,
    nama: "Original",
    harga: 10000,
    gambar: "../produk/gembung/original.jpg",
  },
  {
    id: 22,
    nama: "Coklat",
    harga: 15000,
    gambar: "../produk/gembung/Coklat.JPG",
  },
  {
    id: 23,
    nama: "Choco Milo",
    harga: 15000,
    gambar: "../produk/gembung/Chococrunchy.jpg",
  },
  {
    id: 24,
    nama: "Coklat Keju",
    harga: 20000,
    gambar: "../produk/gembung/coklat atau choco keju.jpg",
  },
  {
    id: 25,
    nama: "Coklat Crunchy",
    harga: 16000,
    gambar: "../produk/gembung/Chococrunchy.jpg",
  },
  {
    id: 26,
    nama: "Coklat Crunchy Keju",
    harga: 20000,
    gambar: "../produk/gembung/coklat atau choco keju.jpg",
  },
  {
    id: 27,
    nama: "Durian",
    harga: 24000,
    gambar: "../produk/gembung/durian.jpg",
  },
  {
    id: 28,
    nama: "Durian Keju",
    harga: 27000,
    gambar: "../produk/gembung/Gembung Durian Keju.jpg",
  },
  {
    id: 29,
    nama: "Sarikaya",
    harga: 20000,
    gambar: "../produk/gembung/sarikaya.png",
  },
  {
    id: 221,
    nama: "Sarikaya Keju",
    harga: 24000,
    gambar: "../produk/gembung/Gembung Sarikaya keju.jpg",
  },
  {
    id: 222,
    nama: "Nanas",
    harga: 14000,
    gambar: "../produk/gembung/Nanas.JPG",
  },
  {
    id: 223,
    nama: "Strawberry",
    harga: 15000,
    gambar: "../produk/gembung/Gembung Stawbery.jpg",
  },
  {
    id: 224,
    nama: "Keju Susu",
    harga: 17000,
    gambar: "../produk/gembung/keju susu.jpg",
  },
  {
    id: 225,
    nama: "Green Tea Crunchy",
    harga: 17000,
    gambar: "../produk/gembung/green tea.jpg",
  },
  {
    id: 226,
    nama: "Tiramisu Crunchy",
    harga: 17000,
    gambar: "../produk/gembung/tiramisu 2.jpg",
  },
  {
    id: 227,
    nama: "Sosis Meleleh",
    harga: 33000,
    gambar: "../produk/gembung/Sosis Melelh.png",
  },
  {
    id: 228,
    nama: "Kari Meleleh",
    harga: 30000,
    gambar: "../produk/gembung/ayam kari meleleh.jpg",
  },
  {
    id: 31,
    nama: "Pia coklat",
    harga: 3000,
    gambar: "../produk/bakpia/Pia Coklat.jpg",
  },
  {
    id: 32,
    nama: "Pia keju",
    harga: 3000,
    gambar: "../produk/bakpia/Pia Keju.jpg",
  },
  {
    id: 33,
    nama: "Bakpia tiramisu",
    harga: 3000,
    gambar: "../produk/bakpia/Pia Tiramizu.jpg",
  },
  {
    id: 34,
    nama: "Bakpia Kacang",
    harga: 2000,
    gambar: "../produk/bakpia/Pia Kacang.jpg",
  },
  {
    id: 35,
    nama: "Bakpia Taro",
    harga: 3000,
    gambar: "../produk/bakpia/Pia Taro.jpg",
  },
  {
    id: 36,
    nama: "Paket Pia",
    harga: 3000,
    gambar: "../produk/bakpia/1 Paket Pia.jpg",
  },
  {
    id: 41,
    nama: "Cromboloni Capucino",
    harga: 15000,
    gambar: "../produk/cromboloni/Cromboloni Capucino.jpg",
  },
  {
    id: 42,
    nama: "Cromboloni Coklat",
    harga: 15000,
    gambar: "../produk/cromboloni/Cromboloni Coklat.jpg",
  },
  {
    id: 43,
    nama: "Cromboloni Stawberry",
    harga: 15000,
    gambar: "../produk/cromboloni/Cromboloni Stawberry - Copy.jpg",
  },
  {
    id: 44,
    nama: "Cromboloni Tiramisu",
    harga: 15000,
    gambar: "../produk/cromboloni/Cromboloni Tiramisu.jpg",
  },
  {
    id: 45,
    nama: "Cromboloni Vanilla",
    harga: 15000,
    gambar: "../produk/cromboloni/Cromboloni Vanila.jpg",
  },
  {
    id: 51,
    nama: "Donat Abon",
    harga: 6000,
    gambar: "/produk/donat/Donat Abon.jpg",
  },
  {
    id: 52,
    nama: "Donat Capucino",
    harga: 6000,
    gambar: "/produk/donat/Donat Capucino.jpg",
  },
  {
    id: 53,
    nama: "Donat Coklat Kacang",
    harga: 6000,
    gambar: "/produk/donat/Donat Coklat Kacang.jpg",
  },
  {
    id: 54,
    nama: "Donat Coklat",
    harga: 6000,
    gambar: "/produk/donat/Donat Coklat.jpg",
  },
  {
    id: 55,
    nama: "Donat Keju Glaze Vanila",
    harga: 6000,
    gambar: "/produk/donat/Donat Keju Glaze Vanila.jpg",
  },
  {
    id: 56,
    nama: "Donat Meses Coklat",
    harga: 6000,
    gambar: "/produk/donat/Donat Meses Coklat.jpg",
  },
  {
    id: 57,
    nama: "Donat Oreo",
    harga: 6000,
    gambar: "/produk/donat/Donat Oreo.jpg",
  },
  {
    id: 58,
    nama: "Donat Original",
    harga: 5000,
    gambar: "/produk/donat/Donat Original,.jpg",
  },
  {
    id: 59,
    nama: "Donat Stawberry",
    harga: 5000,
    gambar: "/produk/donat/Donat Stawberry,.jpg",
  },
  {
    id: 551,
    nama: "Donat Taro",
    harga: 6000,
    gambar: "/produk/donat/Donat Taro.jpg",
  },
  {
    id: 552,
    nama: "Donat Tiramisu Almond",
    harga: 6000,
    gambar: "/produk/donat/Donat Tiramisu Almond,.jpg",
  },
  {
    id: 553,
    nama: "Donat Paket 1/2 Lusin",
    harga: 30000,
    gambar: "/produk/donat/donat paket.jpg",
  },
  {
    id: 61,
    nama: "Bolen Coklat",
    harga: 8000,
    gambar: "../produk/bolen/Bolen Pisang Coklat.jpg",
  },
  {
    id: 62,
    nama: "Bolen Keju",
    harga: 8000,
    gambar: "../produk/bolen/Bolen Pisang Keju.jpg",
  },
  {
    id: 63,
    nama: "Bolen Mix",
    harga: 8000,
    gambar: "../produk/bolen/Bolen Pisang Mix.jpg",
  },
  {
    id: 71,
    nama: "Brownies Mini Satuan",
    harga: 5000,
    gambar: "../produk/brownies/brownies mini satuan.jpg",
  },
  {
    id: 72,
    nama: "Brownies Mini Paket",
    harga: 35000,
    gambar: "../produk/brownies/brwonies mini paket.jpg",
  },
  {
    id: 81,
    nama: "Roti Tawar",
    harga: 15000,
    gambar: "../produk/roti tawar/Roti Tawar.jpg",
  },
  {
    id: 91,
    nama: "Untuq-Untuq Inti Kelapa",
    harga: 2000,
    gambar: "../produk/untuq-untuq/Untuq Untuq inti Kelapa.jpg",
  },
  {
    id: 92,
    nama: "Untuq-Untuq Kacang Hijau",
    harga: 2000,
    gambar: "../produk/untuq-untuq/Untuq Untuq Kacang,.jpg",
  },
  {
    id: 93,
    nama: "Untuq-Untuq Kari Ayam",
    harga: 3000,
    gambar: "../produk/untuq-untuq/Untuq Untuq Ayam Kari.jpg",
  },
  {
    id: 94,
    nama: "Untuq-Untuq Pisang Coklat",
    harga: 3000,
    gambar: "../produk/untuq-untuq/Untuq Untuq Pisang Coklat.jpg",
  },
];

const Bakpia = () => {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartjajan")) || [];
    setCart(savedCart);
    setIsLoading(false);
  }, []);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);
    let newCart;
    if (existingProductIndex >= 0) {
      newCart = cart.map((item, index) =>
        index === existingProductIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(newCart);
    localStorage.setItem("cartjajan", JSON.stringify(newCart));
  };

  const decreaseQuantity = (productId) => {
    const newCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(newCart);
    localStorage.setItem("cartjajan", JSON.stringify(newCart));
  };

  const increaseQuantity = (productId) => {
    const newCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(newCart);
    localStorage.setItem("cartjajan", JSON.stringify(newCart));
  };

  const [imageLoaded, setImageLoaded] = React.useState({});

  // convert IDR
  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  return (
    <>
      <Navbar />
      <section className="mt-12 px-5 lg:px-20 xl:px-30 2xl:px-60">
        <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold">
          <Link href="/Product" className="hover:text-gray-500">
            Product
          </Link>{" "}
          / Bakpia
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6 gap-5">
          {products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);
            return (
              <Card key={product.id} className="flex justify-between">
                <div>
                  <CardHeader floated={false}>
                    {isLoading ? (
                      <div className="skeleton h-60 lg:h-64 xl:h-96"></div>
                    ) : (
                      <div className="relative">
                        {!imageLoaded[product.id] && (
                          <div className="skeleton h-60 lg:h-64 xl:h-96 absolute inset-0"></div>
                        )}
                        <img
                          src={product.gambar}
                          alt={product.nama}
                          onLoad={() =>
                            setImageLoaded((prev) => ({
                              ...prev,
                              [product.id]: true,
                            }))
                          }
                          className={`transition-opacity ${
                            imageLoaded[product.id]
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardBody className="text-center">
                    <Typography
                      variant="h4"
                      className="font-teko text-sm lg:text-xl"
                    >
                      {product.nama}
                    </Typography>
                    <Typography variant="h5" className="-mt-1 font-teko">
                      {rupiah(product.harga)}
                    </Typography>
                  </CardBody>
                </div>
                <CardFooter className="flex justify-center -mt-10">
                  {cartItem ? (
                    cartItem.quantity > 0 ? (
                      <div className="flex transition ease-in-out gap-1 lg:gap-2 bg-kuning scale-[0.7] lg:scale-75 -mt-3 lg:-mt-2 -mb-3 lg:px-3 px-2 lg:mx-6 py-3 rounded-lg">
                        <Button
                          className="px-4"
                          onClick={() => decreaseQuantity(product.id)}
                        >
                          -
                        </Button>
                        <Chip
                          value={cartItem.quantity}
                          variant="ghost"
                          size="lg"
                          className="rounded-lg"
                        />
                        <Button
                          className="px-4"
                          onClick={() => increaseQuantity(product.id)}
                        >
                          +
                        </Button>
                      </div>
                    ) : (
                      <Button
                        onClick={() => addToCart(product)}
                        className="bg-kuning text-hitam font-teko text-center"
                      >
                        Tambah
                      </Button>
                    )
                  ) : (
                    <Button
                      onClick={() => addToCart(product)}
                      className="bg-kuning text-hitam font-teko text-center"
                    >
                      Tambah
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>
      <Footer />
      <Wa />
    </>
  );
};

export default Bakpia;
