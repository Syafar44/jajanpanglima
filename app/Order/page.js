"use client";

import React from "react";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
  Chip,
  Button,
  Input,
} from "@material-tailwind/react";
import Footer from "../components/Footer";
import { Teko } from "next/font/google";
import Wa from "../components/Wa";

const teko = Teko({
  weight: ["300", "700"],
  subsets: ["latin"],
});

function TrashIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const Order = () => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nomer, setNomer] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Transfer bank");
  const [metod, setMetod] = useState("Ambil di tempat");
  const [outlet, setOutlet] = useState("Outlet 1");
  const [pickupTime, setPickupTime] = useState(""); // Menambahkan state untuk jam pengambilan makanan

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cartjajan")) || [];
    setCart(savedCart);
  }, []);

  const increaseQuantity = (productId) => {
    const newCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(newCart);
    localStorage.setItem("cartjajan", JSON.stringify(newCart));
  };

  const decreaseQuantity = (productId) => {
    const newCart = cart.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(newCart);
    localStorage.setItem("cartjajan", JSON.stringify(newCart));
  };

  const removeFromCart = (productId) => {
    const newCart = cart.filter((product) => product.id !== productId);
    setCart(newCart);
    localStorage.setItem("cartjajan", JSON.stringify(newCart));
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, product) => total + product.harga * product.quantity,
      0
    );
  };

  const sendMessageToWhatsApp = () => {
    let message = `*JAJAN PANGLIMA*\nNama Penerima: *${name}*\nProduk:\n`;

    cart.forEach((item) => {
      message += `- *${item.nama}*, Harga: ${item.harga}, Jumlah: *${item.quantity}*\n`;
    });

    if (metod === "Ambil di tempat") {
      message += `\nOutlet: *${outlet}*`;
      if (pickupTime) {
        message += `\nJam Pengambilan: *${pickupTime}*`;
      }
    } else {
      message += `\nAlamat: _${address}_`;
    }

    message += `\nPembayaran: *${paymentMethod}*\nMetode: *${metod}*\nTotal Dibayar: *${rupiah(
      calculateTotal()
    )}*`;

    const phoneNumber = "+6282220002237"; // Nomor WhatsApp toko
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

    window.location.href = whatsappURL;

    localStorage.removeItem("cartjajan");
  };

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const isFormComplete =
    name &&
    nomer &&
    paymentMethod &&
    metod &&
    (metod === "Diantar" ? address : outlet) &&
    (metod !== "Ambil di tempat" || pickupTime); // Menambahkan pengecekan untuk jam pengambilan

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Card className="lg:mx-20 xl:mx-52 2xl:mx-96">
        <div className="p-5 lg:py-10 mb-2 bg-hitam flex justify-between text-putih font-bold lg:px-7">
          <h1 className="text-sm lg:text-base">Produk</h1>
          <div className="flex gap-2 text-sm lg:text-base lg:gap-12">
            <h1>Harga Satuan</h1>
            <h1 className="lg:px-14 px-2">Jumlah</h1>
            <h1>Total Harga</h1>
            <h1>Aksi</h1>
          </div>
        </div>
        <List>
          {cart.map((product, index) => (
            <ListItem
              className={`${teko.className} py-1 lg:pl-4`}
              key={index}
              ripple={false}
            >
              <h2 className="font-bold text-sm lg:text-xl">{product.nama}</h2>
              <ListItemSuffix className="flex lg:gap-10">
                <p className="text-sm lg:text-xl">{rupiah(product.harga)}</p>
                <div className="flex gap-1 lg:gap-2 bg-kuning scale-[0.6] lg:scale-100 lg:px-3 lg:mx-6 py-2 rounded-lg -mx-4">
                  <Button
                    className="px-4"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    -
                  </Button>
                  <Chip
                    value={product.quantity}
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
                <p className="text-sm lg:text-xl">
                  {rupiah(product.harga * product.quantity)}
                </p>
                <IconButton variant="text" color="blue-gray" className="-mr-3">
                  <span onClick={() => removeFromCart(product.id)}>
                    <TrashIcon />
                  </span>
                </IconButton>
              </ListItemSuffix>
            </ListItem>
          ))}
        </List>
        <div className="py-5 bg-hitam flex justify-between text-putih font-bold p-7">
          <h1>Total Harga Keseluruhan</h1>
          <h1 className="text-kuning">{rupiah(calculateTotal())}</h1>
        </div>
        <div className="p-5 grid grid-cols-1 gap-5">
          <div>
            <Input
              type="text"
              label="Nama Penerima"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <Input
              type="number"
              label="No. Telepon"
              value={nomer}
              onChange={(e) => setNomer(e.target.value)}
            />
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <select
                label="Metode Pengiriman"
                value={metod}
                onChange={(e) => setMetod(e.target.value)}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
              >
                <option value="ambil di tempat">Ambil di tempat</option>
                <option value="diantar">Diantar</option>
              </select>
              {metod === "diantar" ? (
                <Input
                  type="text"
                  label="Alamat"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              ) : (
                <>
                  <select
                    label="Pilih Outlet"
                    value={outlet}
                    onChange={(e) => setOutlet(e.target.value)}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-state"
                  >
                    <option value="outlet jajan juanda">
                      Outlet Jajan Juanda
                    </option>
                    <option value="outlet jajan suryanata">
                      Outlet Jajan Suryanata
                    </option>
                    <option value="outlet jajan sempaja">
                      Outlet Jajan Sempaja
                    </option>
                    <option value="outlet jajan lambung">
                      Outlet Jajan Lambung
                    </option>
                    <option value="outlet jajan panjaitan">
                      Outlet Jajan Panjaitan
                    </option>
                    <option value="outlet jajan sultan hasanudin">
                      Outlet Jajan Sultan Hasanudin
                    </option>
                    <option value="outlet jajan sambutan">
                      Outlet Jajan Sambutan
                    </option>
                    <option value="outlet jajan jakarta">
                      Outlet Jajan Jakarta
                    </option>
                    <option value="outlet jajan bungtomo">
                      Outlet Jajan Bungtomo
                    </option>
                  </select>
                  <Input
                    type="time"
                    label="Jam Pengambilan"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    placeholder="HH:MM"
                  />
                </>
              )}
            </div>
          </div>
          <div>
            <select
              label="Metode Pembayaran"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
            >
              <option value="transfer bank">Transfer bank</option>
              <option value="kartu kredit/debit">Kartu kredit/debit</option>
              <option value="tunai">Tunai</option>
            </select>
          </div>
        </div>
        <div className="flex justify-center my-5 px-5">
          <Button
            className={`w-full ${teko.className}`}
            disabled={!isFormComplete}
            onClick={sendMessageToWhatsApp}
          >
            Kirim Pesanan
          </Button>
        </div>
      </Card>
      <Wa />
      <Footer />
    </div>
  );
};

export default Order;
