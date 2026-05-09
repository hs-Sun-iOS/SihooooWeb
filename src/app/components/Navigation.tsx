import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/Html→Body/svg-5it421s66b";
import { useLanguage } from "../context/LanguageContext";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <motion.nav
      className="fixed backdrop-blur-[12px] bg-[rgba(20,20,20,0.7)] w-full h-[80px] top-0 z-50 border-b border-[rgba(255,255,255,0.1)]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[64px] h-full flex items-center justify-between">
        <div className="font-['Space_Grotesk:Bold',sans-serif] font-bold text-[20px] md:text-[24px] tracking-[-1.2px]">
          <span className="text-[#ff64e3]">{t.nav.logoFirst}</span>
          <span className="text-white">{t.nav.logoSecond}</span>
        </div>

        <div className="hidden md:flex gap-[24px] lg:gap-[40px] items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-white leading-[24px] pb-[6px] border-b-2 border-[#ff64e3]"
          >
            {t.nav.home}
          </button>
          <button
            onClick={() => scrollToSection('products')}
            className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-white leading-[24px] hover:text-[#ff64e3] transition-colors"
          >
            {t.nav.products}
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-white leading-[24px] hover:text-[#ff64e3] transition-colors"
          >
            {t.nav.about}
          </button>
        </div>

        <button
          onClick={toggleLanguage}
          className="hidden md:block w-[20px] h-[20px] hover:opacity-80 transition-opacity"
          aria-label="Toggle language"
        >
          <svg className="w-full h-full" fill="none" viewBox="0 0 20 20">
            <path d={svgPaths.p237be000} fill="white" />
          </svg>
        </button>

        <button
          className="md:hidden w-[40px] h-[40px] flex flex-col justify-center items-center gap-[5px] relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-[24px] h-[2px] bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-[24px] h-[2px] bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-[24px] h-[2px] bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[80px] left-0 right-0 backdrop-blur-[12px] bg-[rgba(20,20,20,0.95)] border-b border-[rgba(255,255,255,0.1)] z-50">
          <div className="flex flex-col px-4 py-6 gap-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-white leading-[24px] text-left py-3 border-b-2 border-[#ff64e3] w-full"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-white leading-[24px] text-left py-3 hover:text-[#ff64e3] transition-colors w-full"
            >
              {t.nav.products}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-white leading-[24px] text-left py-3 hover:text-[#ff64e3] transition-colors w-full"
            >
              {t.nav.about}
            </button>
            <button
              onClick={toggleLanguage}
              className="font-['Inter:Regular',sans-serif] font-normal text-[16px] text-white leading-[24px] text-left py-3 hover:text-[#ff64e3] transition-colors w-full border-t border-[rgba(255,255,255,0.1)] mt-2"
            >
              {language === 'en' ? '中文' : 'English'}
            </button>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
