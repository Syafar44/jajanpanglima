"use client";

import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from "emailjs-com";
import Wa from "../components/Wa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userName = form.current.user_name.value;
    const userEmail = form.current.user_email.value;
    const message = form.current.message.value;

    const openModal = () => {
      document.getElementById("my_modal").showModal();
    };

    if (userName && userEmail && message) {
      emailjs
        .sendForm(
          "service_1fuvlhb",
          "template_16e03bs",
          form.current,
          "B8oVCTWwUh-g2gZ3Y"
        )
        .then(
          (result) => {
            openModal();
            form.current.reset();
          },
          (error) => {
            console.error("Email sending failed:", error.text);
          }
        );
    } else {
      alert("harap isi semua data terlebih dahulu");
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <section className="flex mx-auto lg:mt-10 xl:mt-20 lg:mb-32">
        <div className="flex flex-col lg:justify-center px-6 lg:px-20 py-4 mx-auto space-y-6 lg:h-[32rem] xl:py-16 lg:flex-row lg:items-center z-20 bg-white w-full">
          <div className="flex items-center justify-end w-full h-96 lg:w-1/2">
            <img
              className=" w-full max-w-xl rounded-md"
              src="pesan.png"
              alt="message foto"
            />
          </div>
          <div className="mt-8 lg:w-2/3 lg:mx-6">
            <div className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
              <h1 className="text-lg font-semibold text-gray-900">
                Contact Us
              </h1>
              <div className="lg:flex gap-10 ml-3">
                <div className="flex lg:block gap-2 text-lg font-medium text-gray-700">
                  <h1>Chat:</h1>
                  <h1>08 222 000 2237 </h1>
                </div>
                <div className="flex lg:block gap-2 text-lg font-medium text-gray-700">
                  <h1>Email:</h1>
                  <h1>gembungpanglima@gmail.com</h1>
                </div>
              </div>

              <form ref={form} onSubmit={sendEmail} className="mt-6">
                <div className="flex-1">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder="John Doe"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="flex-1 mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="johndoe@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div className="w-full mt-6">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Message
                  </label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Message"
                  ></textarea>
                </div>

                <input
                  value="Send"
                  type="submit"
                  className="btn w-full text-center px-6 py-3 mt-6 text-sm font-bold hover:text-white tracking-wide  capitalize transition-colors duration-300 transform bg-kuning rounded-md hover:bg-hitam focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-opacity-50"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-kuning bg-hitam rounded-xl text-center py-2">
            Hay Sobat Jajan
          </h3>
          <div className="py-4 font-semibold text-xl">
            <h1 className="text-green-700 text-2xl">
              Pesanan anda sudah kami terima!
            </h1>
            <p className="text-lg">
              Terimakasih atas kritik dan masukannya akan kami kirim balasan
              secepatnya
            </p>
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
      <Footer />
      <Wa />
    </div>
  );
};

export default Contact;
