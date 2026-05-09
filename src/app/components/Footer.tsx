import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import ContactModal from "./ContactModal";

export default function Footer() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-[#141414] border-t border-[rgba(255,255,255,0.1)] py-[32px] md:py-[40px] lg:py-[48px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[64px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[24px] md:gap-0">
          <div className="flex flex-col gap-[8px]">
            <p className="font-['Inter:Semi_Bold',sans-serif] font-bold text-[14px] md:text-[15px] lg:text-[16px] leading-[22px] md:leading-[24px] text-white">
              {t.footer.company}
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-[rgba(255,255,255,0.8)]">
              {t.footer.slogan}
            </p>
          </div>

          <div className="flex flex-col gap-[6px] md:gap-[8px] md:items-end">
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-[rgba(255,255,255,0.8)]">
              {t.footer.copyright}
            </p>
            <p className="font-['Inter:Regular',sans-serif] font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-[rgba(255,255,255,0.8)]">
              {t.footer.address}
            </p>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="font-['Inter:Regular',sans-serif] font-normal text-[13px] md:text-[14px] lg:text-[16px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-[#d7c2f8] hover:text-[#e9d9ff] transition-colors text-left md:text-right"
            >
              {t.footer.email}
            </button>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
}
