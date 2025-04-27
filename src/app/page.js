import FeaturedPosts from "@/components/Posts/FeaturedPosts";
import HeroSection from "@/components/Hero";
import Member from "@/components/Member";
import TopicsSlider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 py-5 md:gap-20 md:py-20">
      <HeroSection />
      <FeaturedPosts />
      <Member />
    </div>
  );
}
