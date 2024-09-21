import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";

const career = [
  {
    id: 1,
    title: "CREW OUTLET JAJAN PANGLIMA",
    postedDate: "21/09/2024",
  },
];

const Career = () => {
  return (
    <div className="h-s">
      <Navbar />
      <div className="flex justify-center items-center mt-[5%] mb-[5%] px-5 gap-5">
        {career.map((jobs) => {
          return (
            <div
              key={jobs.id}
              className="p-5 lg:p-10 border-4 border-kuning  rounded-xl "
            >
              <div className="flex justify-between text-xl">
                <h1 className="font-bold">{jobs.title}</h1>
                <h1>Posted Date: {jobs.postedDate}</h1>
              </div>
              <ul>
                <li>
                  <p>Kualifikasi :</p>
                  <ul className="pl-5">
                    <li>1. Laki-Laki Maksimal 30 Tahun</li>
                    <li>
                      2. Taat Beribadah Wajib & sunnah serta bersedia diatur
                      sesuai Syariat Islam
                    </li>
                    <li>
                      3. Pendidikan Minimal SMA/Sederajat (tidak sedang
                      berkuliah)
                    </li>
                    <li>4. Fresh Graduate Silahkan Melamar</li>
                    <li>5. Wajib memiliki Smartphone</li>
                    <li>
                      6. Memiliki kemampuan Interpesonal dan Komunikasi yang
                      baik
                    </li>
                    <li>7. Jujur, Pekerja Keras & Terpercaya</li>
                    <li>8. Bersedia Bekerja Shift</li>
                    <li>9. Penempatan Samarinda</li>
                  </ul>
                </li>
                <li className="font-bold">
                  BENEFIT: GAJI POKOK, CUTI 18 HARI/TAHUN, FASILITAS KESEHATAN
                </li>
              </ul>
              <a href="https://bit.ly/FormulirLamaranKerjaPRG" target="_blank">
                <button className="bg-kuning p-2 rounded-md w-full mt-2 font-bold hover:bg-gray-500 transition-all ease-in-out duration-300">
                  Apply Now
                </button>
              </a>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Career;
