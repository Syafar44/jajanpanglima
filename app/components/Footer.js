import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10 bg-kuning dark:bg-gray-900">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <div className="flex gap-10">
                <a href="/">
                  <img
                    className="w-auto h-20"
                    src="https://raw.githubusercontent.com/Syafar44/assets/main/assets/image/LOGO%20JAJAN%20Panglima-01.png"
                    alt=""
                  />
                </a>

                <img
                  className="w-auto h-20"
                  src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Halal_Indonesia.svg"
                  alt=""
                />
              </div>

              <div className="flex mt-6 -mx-2">
                <a
                  target="_blank"
                  href="https://www.instagram.com/jajanpanglima"
                  className="mx-2 text-hitam transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Reddit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    id="instagram-alt"
                  >
                    <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                    <circle cx="11.994" cy="11.979" r="3.003"></circle>
                  </svg>
                </a>

                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UCbl6mJTsu77ACwLFp6Nd8uw"
                  className="mx-2 text-hitam transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="24"
                    height="24"
                    id="youtube"
                  >
                    <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
                  </svg>
                </a>

                <a
                  target="_blank"
                  href="https://www.facebook.com/jajanpanglima/"
                  className="mx-2 text-hitam transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="24"
                    height="24"
                    id="facebook-square"
                  >
                    <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325 1.42-3.592 3.5-3.592.699-.002 1.399.034 2.095.107v2.42h-1.435c-1.128 0-1.348.538-1.348 1.325v1.735h2.697l-.35 2.725h-2.348V21H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"></path>
                  </svg>
                </a>

                <a
                  target="_blank"
                  href="https://www.tiktok.com/@jajanpanglimasamarinda"
                  className="mx-2 text-hitam transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                  aria-label="Github"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="24"
                    height="24"
                    id="tiktok"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-hitam dark:text-gray-400 hover:underline"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-hitam dark:text-gray-400 hover:underline"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-hitam dark:text-gray-400 hover:underline"
                >
                  Contact
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
                <a
                  href="/Product/Gembung"
                  className="block mt-2 text-sm text-hitam dark:text-gray-400 hover:underline"
                >
                  Recomend
                </a>
                <a
                  href="/Product/Pizza"
                  className="block mt-2 text-sm text-hitam dark:text-gray-400 hover:underline"
                >
                  Best seller
                </a>
                <a
                  href="/Product/Donat"
                  className="block mt-2 text-sm text-hitam dark:text-gray-400 hover:underline"
                >
                  Hits
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-hitam dark:text-gray-400 hover:underline">
                  08 222 000 2237
                </span>
                <span className="block mt-2 text-sm text-hitam dark:text-gray-400 hover:underline">
                  gembungpanglima@gmail.com
                </span>
              </div>
              <h3 className="p-5">JAM OPERASIONAL 06.30 - 22.00WITA</h3>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-700 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-600 dark:text-gray-400">
            ©2024 Jajan Panglima. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
