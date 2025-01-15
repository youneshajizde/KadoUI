import { Dashboard } from "@/components/Dashboard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <section className="">
      <Navbar />
      <Header />
      <Dashboard />
      <Footer/>
    </section>
  );
}
