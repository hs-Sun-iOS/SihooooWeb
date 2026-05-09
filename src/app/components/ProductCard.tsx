import { motion } from "motion/react";
import svgPaths from "../../imports/Html→Body/svg-5it421s66b";
import { useLanguage } from "../context/LanguageContext";

interface ProductCardProps {
  icon: string;
  nameKey: 'bluurCam' | 'tidy' | 'paused' | 'popGrid';
  link: string;
  index: number;
}

export default function ProductCard({ icon, nameKey, link, index }: ProductCardProps) {
  const { t } = useLanguage();
  const product = t.products[nameKey];
  return (
    <motion.div
      className="backdrop-blur-[8px] bg-[rgba(20,20,20,0.8)] rounded-[8px] border border-[rgba(255,255,255,0.1)] p-[24px] md:p-[32px] lg:p-[41px] flex flex-col justify-between min-h-[240px] md:min-h-[280px]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-[16px] md:gap-[24px]">
        <div className="flex gap-[12px] md:gap-[16px] items-center">
          <div className="w-[48px] h-[48px] md:w-[56px] md:h-[56px] lg:w-[64px] lg:h-[64px] rounded-[12px] md:rounded-[16px] overflow-hidden flex-shrink-0 transition-transform duration-300 hover:scale-110">
          <img
              alt={product.name}
              className="w-full h-full object-cover"
              src={icon}
              width={128}
              height={128}
              sizes="(max-width: 768px) 48px, (max-width: 1024px) 56px, 64px"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 className="font-['Space_Grotesk:Bold',sans-serif] font-semibold text-[22px] leading-[26px] md:text-[26px] md:leading-[29px] lg:text-[28px] lg:leading-[31.2px] text-white">
            {product.name}
          </h3>
        </div>

        <p className="font-['Inter:Regular',sans-serif] font-normal text-[14px] leading-[22px] md:text-[15px] md:leading-[24px] lg:text-[16px] lg:leading-[26px] text-[rgba(255,255,255,0.8)]">
          {product.description}
        </p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-[8px] items-center mt-[24px] md:mt-[32px] group"
      >
        <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-[#d7c2f8] group-hover:text-[#e9d9ff] transition-colors">
          {t.products.viewStore}
        </span>
        <svg
          className="w-[14px] h-[14px] md:w-[16px] md:h-[16px] flex-shrink-0 animate-[breathe_2s_ease-in-out_infinite]"
          fill="none"
          viewBox="0 0 16 16"
        >
          <path d={svgPaths.p1a406200} fill="#D7C2F8" />
        </svg>
      </a>
    </motion.div>
  );
}
