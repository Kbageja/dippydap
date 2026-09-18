import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ProductsSection } from "@/components/ProductsSection";
import { StorySection } from "@/components/StorySection";
import { InstagramSection } from "@/components/InstagramSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ComparisonSection />
        <ProductsSection />
        <StorySection />
        <InstagramSection />
      </main>
      <Footer />
    </>
  );
}
