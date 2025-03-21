import FeaturedPosts from "@/components/Posts/FeaturedPosts";
import HeroSection from "@/components/Hero";
import Member from "@/components/Member";
import TopicsSlider from "@/components/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <TopicsSlider />
      <Member />
      <FeaturedPosts />
    </div>
  );
}
