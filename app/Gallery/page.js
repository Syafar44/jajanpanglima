/* eslint-disable @next/next/no-img-element */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Gallery = () => {
  const data = [
    {
      imageLink:
        "tes-1.jpg",
    },
    {
      imageLink:
        "tes-2.jpg",
    },
    {
      imageLink:
        "tes-3.jpg",
    },
    {
      imageLink:
        "tes-3.jpg",
    },
    {
      imageLink:
        "tes-2.jpg",
    },
    {
      imageLink:
        "tes-1.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="p-10">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {data.map(({ imageLink }, index) => (
            <div key={index}>
              <img
                className="h-[30rem] w-full max-w-full rounded-lg object-cover object-center"
                src={imageLink}
                alt="gallery-photo"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
