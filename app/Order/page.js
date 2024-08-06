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

  const handleSubmit = async () => {
    const data = {
      nama: name,
      alamat: address,
      metod: metod,
      nomer: nomer,
      produk: cart,
      pembayaran: paymentMethod,
      total: rupiah(calculateTotal()),
    };

    const openModalSucces = () => {
      document.getElementById("my_modal_1").showModal();
    };

    const openModalError = () => {
      document.getElementById("my_modal_2").showModal();
    };

    const request = new XMLHttpRequest();
  request.open("POST", "/api/sendMessage", true); // Pastikan URL sudah benar
  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      openModalSucces();
    } else if (request.readyState === 4) {
      openModalError();
    }
  };
  request.send(JSON.stringify(data));
};

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const isFormComplete = name && nomer && paymentMethod && metod;

  return (
    <>
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
                  <button onClick={() => removeFromCart(product.id)}>
                    <TrashIcon />
                  </button>
                </IconButton>
              </ListItemSuffix>
            </ListItem>
          ))}
        </List>
        <div className="py-5 bg-hitam flex justify-between text-putih font-bold p-7">
          <h1>Total Harga Keseluruhan</h1>
          <h1 className="text-kuning">{rupiah(calculateTotal())}</h1>
        </div>
        <div className="relative p-5 gap-3 grid grid-cols-6">
          <div className="col-start-1 col-span-6 lg:col-span-3">
            <div>
              <Input
                type="text"
                label="Nama Penerima"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=""
                containerProps={{
                  className: "",
                }}
              />
            </div>
          </div>
          <div className="col-span-6 lg:col-span-3">
            <div>
              <Input
                type="text"
                label="Nomer"
                value={nomer}
                onChange={(e) => setNomer(e.target.value)}
                className="w-full"
                containerProps={{
                  className: "",
                }}
              />
            </div>
          </div>
          <div className="col-start-1 col-span-6">
            <Input
              type="text"
              label="Alamat (Opsional)"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              containerProps={{
                className: "min-w-0",
              }}
            />
          </div>
          <div className="col-start-1 col-span-3">
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              label="Select Pembayaran"
              className="select select-bordered select-sm w-full h-full"
            >
              <option value="Transfer Bank">Transfer Bank</option>
              <option value="COD">COD</option>
            </select>
          </div>
          <div className="col-span-3">
            <select
              value={metod}
              onChange={(e) => setMetod(e.target.value)}
              label="Select Metod"
              className="select select-bordered select-sm h-full w-full"
            >
              <option value="Ambil di tempat">Ambil di tempat</option>
              <option value="Antar ke Tempat">Antar ke tempat</option>
            </select>
          </div>
        </div>
        <div className="pb-5 px-5 flex justify-between mt-2">
          <h1 className="text-sm lg:text-xl font-bold text-red-700">
            Pastikan Bahwa Nama Penerima, Alamat, serta Nomer sudah benar!
          </h1>
          <Button
            size="sm"
            color={isFormComplete ? "gray" : "blue-gray"}
            disabled={!isFormComplete}
            className="rounded"
            onClick={handleSubmit}
          >
            Kirim
          </Button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-xl text-kuning bg-hitam rounded-xl text-center py-2">
                Hay Sobat Jajan
              </h3>
              <div className="py-4 font-semibold text-xl">
                <h1 className="text-green-700 text-2xl font-bold">
                  Pesanan anda sudah terkirim!
                </h1>
                <strong className="text-red-600 text-lg">
                  Pastikan nomer whatsapp anda aktif dan akan kami kirimkan pesan{" "}
                  <span className="font-bold text-green-700">KONFIRMASI</span>{" "}
                  paling Lambat 1 jam setelah pesanan ini dilakukan.
                </strong>
                <h3 className="mt-5">Terimakasih.</h3>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-black text-kuning rounded-xl">
                    Tutup
                  </button>
                </form>
              </div>
            </div>
          </dialog>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-xl text-kuning bg-hitam rounded-xl text-center py-2">
                Hay Sobat Jajan
              </h3>
              <div className="py-4 font-semibold text-xl">
                <h1 className="text-red-700 text-2xl">
                  Pesanan anda Gagal terkirim!
                </h1>
                <p className="text-lg">
                  Coba kirim ulang pesanan anda atau Hubungi kami pada nomer
                  whatsapp berikut :
                </p>
                <p>082250851457</p>
                <h3 className="mt-5">Terimakasih.</h3>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn bg-black text-kuning rounded-xl">
                    Tutup
                  </button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </Card>
      <Footer />
      <Wa />
    </>
  );
};

export default Order;
