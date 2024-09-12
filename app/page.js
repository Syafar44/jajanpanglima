import Footer from "./components/Footer";
import Jajan from "./components/Jajan";
import Navbar from "./components/Navbar";
import Wa from "./components/Wa";

export default function Home() {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Jajan />
      <Footer />
      <Wa />
    </div>
  );
}
