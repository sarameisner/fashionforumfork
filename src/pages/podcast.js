import Footer from "@/components/Footer";
import UndermenuPod from "@/components/UndermenuPod";
export default function Podcast() {
    return (
      <div className="lg:ml-[240px] lg:mr-[50px]">
 <div className="flex items-start gap-6 px-4 py-10">
  {/* Venstre: Video */}
  <div>
    <video
      src="/podcast.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-[400px] h-auto"
    />
  </div>

  {/* Højre: Menu */}
  <div className="flex flex-col">
    <UndermenuPod />
  </div>
</div>


        <Footer></Footer>
      </div>
    );
  }

