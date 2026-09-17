import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ComparisonSection } from "@/components/ComparisonSection";
import { ProductsSection } from "@/components/ProductsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ComparisonSection />
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
}
