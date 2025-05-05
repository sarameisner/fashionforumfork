import DiagonalStripe from "@/components/Design";
import Cards from "@/components/Card";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="pl-6 md:pl-[180px]">
      <DiagonalStripe color="#FFE3F5" height="350px" />
      <Cards />
      <Footer />
    </div>
  );
}
