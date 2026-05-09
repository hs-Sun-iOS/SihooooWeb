import { LanguageProvider } from "./context/LanguageContext";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div
        className="min-h-screen"
        style={{
          background: "linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%)"
        }}
      >
        <Navigation />
        <main className="pt-[80px]">
          <Hero />
          <Products />
          <About />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}