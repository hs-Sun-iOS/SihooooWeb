import { motion } from "motion/react";
import ProductCard from "./ProductCard";
import { useLanguage } from "../context/LanguageContext";
import imgBackground from "@/imports/Html→Body/0ecc8e143a4108bc43489e38d071dd94f5ea7692.png?w=256&format=webp&quality=86";
import imgBackground1 from "@/imports/Html→Body/be8f3062f36a0087ceb22f6902862e91403ef53d.png?w=256&format=webp&quality=86";
import imgBackground2 from "@/imports/Html→Body/d6be3976208291a5c1f38dfcb8b7e72b82d8566f.png?w=256&format=webp&quality=86";
import imgBackground3 from "@/imports/Html→Body/ddab898a9f25d3bad3d0118e8626493a121fc5ca.png?w=256&format=webp&quality=86";

export default function Products() {
  const { t } = useLanguage();

  const products = [
    {
      icon: imgBackground,
      nameKey: 'bluurCam' as const,
      link: "https://apps.apple.com/us/app/bluur-cam-blur-effect-editor/id6503138787"
    },
    {
      icon: imgBackground1,
      nameKey: 'tidy' as const,
      link: "https://apps.apple.com/us/app/photo-deleter-camera-cleaner/id6476911431"
    },
    {
      icon: imgBackground2,
      nameKey: 'paused' as const,
      link: "https://apps.apple.com/us/app/paused-screen-time-control/id6451398522"
    },
    {
      icon: imgBackground3,
      nameKey: 'popGrid' as const,
      link: "https://apps.apple.com/us/app/popgrid-live-photo-collage/id6449901617"
    }
  ];

  return (
    <section id="products" className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[64px] py-[60px] md:py-[80px] lg:py-[120px]">
      <motion.div
        className="flex flex-col gap-[12px] md:gap-[16px] mb-[40px] md:mb-[64px]"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-['Space_Grotesk:Bold',sans-serif] font-semibold text-[32px] leading-[38px] md:text-[40px] md:leading-[48px] tracking-[-0.4px] text-white">
          {t.products.title}
        </h2>
        <motion.div
          className="bg-[#ff64e3] h-[4px]"
          initial={{ width: 0 }}
          whileInView={{ width: "80px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[20px] lg:gap-[24px]">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            icon={product.icon}
            nameKey={product.nameKey}
            link={product.link}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
