import { motion } from "motion/react";
import imgOverlayBlur from "../../imports/Html→Body/e2efdef9427bfc0b196560064771ee9e20f96bf0.png";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center justify-center px-4 md:px-8 lg:px-[64px] py-[80px] md:py-[120px] overflow-hidden">
      {/* Mobile gradient background */}
      <div className="absolute inset-0 md:hidden opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
        <div
          className="w-full h-full rounded-[12px]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(138, 43, 226, 0.15) 0%, rgba(255, 100, 227, 0.1) 40%, rgba(5, 5, 5, 0.95) 100%)"
          }}
        />
      </div>

      {/* Desktop image background */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 animate-[fadeIn_0.8s_ease-out_forwards]">
        <img
          alt=""
          className="w-full h-full md:h-[809px] object-cover rounded-[12px]"
          src={imgOverlayBlur}
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-[896px] flex flex-col items-center gap-[16px] md:gap-[10px]">
        <h1
          className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[48px] leading-[54px] md:text-[64px] md:leading-[70px] lg:text-[84px] lg:leading-[90px] tracking-[-1.28px] text-center bg-clip-text text-transparent px-4 opacity-0 animate-[slideUp_0.8s_ease-out_0.2s_forwards]"
          style={{
            backgroundImage: "linear-gradient(101.106deg, rgb(244, 226, 255) 2.0273%, rgb(255, 255, 255) 37.217%, rgb(255, 226, 249) 100.01%)",
            textShadow: "0px 0px 16px rgba(0,0,0,0.15)"
          }}
        >
          {t.hero.title}
        </h1>

        <p className="max-w-[672px] font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[24px] md:text-[20px] md:leading-[26px] lg:text-[24px] lg:leading-[28.8px] text-center text-white px-4 opacity-0 animate-[slideUp_0.8s_ease-out_0.4s_forwards]">
          {t.hero.subtitle}
        </p>

        <motion.button
          onClick={scrollToProducts}
          className="mt-[17.11px] backdrop-blur-[10px] bg-[#ff64e3] rounded-[16px] px-[28px] py-[14px] md:px-[32px] md:py-[16px] font-['Inter:Medium',sans-serif] font-medium text-[16px] md:text-[18px] leading-[24px] text-black text-center transition-all duration-300 hover:scale-105 active:scale-95 opacity-0 animate-[slideUp_0.8s_ease-out_0.6s_forwards] relative overflow-hidden group"
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">{t.hero.cta}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-[shimmer_0.8s_ease-in-out]" />
        </motion.button>
      </div>
    </section>
  );
}
