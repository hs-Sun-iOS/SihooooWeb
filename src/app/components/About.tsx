import { useState } from "react";
import { motion } from "motion/react";
import svgPaths from "../../imports/Html→Body/svg-5it421s66b";
import imgRectangle1 from "../../imports/Html→Body/99cf8bac96625ff695e402e103c14b8dcbb223d9.png";
import imgRectangle2 from "../../imports/Html→Body/2bbd51ba30061e5c875dfc0c9bf05685523a5335.png";
import { useLanguage } from "../context/LanguageContext";
import ContactModal from "./ContactModal";

export default function About() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="about" className="bg-[rgba(0,0,0,0.5)] py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] md:gap-[60px] lg:gap-[80px] items-center">
          <motion.div
            className="flex flex-col gap-[24px] md:gap-[32px]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="font-['Space_Grotesk:Bold',sans-serif] font-semibold text-[28px] leading-[34px] md:text-[36px] md:leading-[42px] lg:text-[40px] lg:leading-[48px] tracking-[-0.4px] text-white">
              {t.about.title}
            </h2>

            <div className="flex flex-col gap-[16px] md:gap-[24px]">
              <motion.p
                className="font-['Inter:Regular',sans-serif] font-normal text-[16px] leading-[26px] md:text-[17px] md:leading-[28px] lg:text-[18px] lg:leading-[29.25px] text-[rgba(255,255,255,0.8)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t.about.paragraph1}
              </motion.p>

              <motion.p
                className="font-['Inter:Regular',sans-serif] font-normal text-[15px] leading-[24px] md:text-[15.5px] md:leading-[25px] lg:text-[16px] lg:leading-[26px] text-[rgba(255,255,255,0.8)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {t.about.paragraph2}
              </motion.p>

              <motion.div
                className="flex flex-col gap-[12px] md:gap-[16px] pt-[16px] md:pt-[24px] lg:pt-[32px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  className="flex gap-[12px] items-center hover:text-[#ff64e3] transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-[18px] h-[14px] md:w-[20px] md:h-[16px] flex-shrink-0" fill="none" viewBox="0 0 20 16">
                    <path d={svgPaths.p13e73800} fill="#D7C2F8" />
                  </svg>
                  <span className="font-['Inter:Regular',sans-serif] font-normal text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] text-white">
                    {t.about.email}
                  </span>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          <div className="relative h-[300px] md:h-[400px] lg:h-[536px] flex items-center justify-center lg:block">
            {/* 左侧绿色图片 - 逆时针旋转 */}
            <motion.div
              className="absolute w-[180px] h-[248px] md:w-[220px] md:h-[304px] lg:w-[263.426px] lg:h-[364.022px] rounded-[20px] lg:rounded-[24px] overflow-hidden"
              style={{ left: '40px', top: '10px' }}
              initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -8 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: -10 }}
            >
              <div className="absolute inset-0 bg-[#6eda91]" />
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgRectangle1} loading="lazy" />
            </motion.div>

            {/* 右侧粉色图片 - 水平镜像并逆时针旋转 */}
            <motion.div
              className="absolute w-[175px] h-[259px] md:w-[214px] md:h-[316px] lg:w-[256.295px] lg:h-[379.497px] rounded-[20px] lg:rounded-[24px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)] overflow-hidden"
              style={{ right: '30px', top: '80px', scaleX: -1 }}
              initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              whileHover={{ scale: 1.05, rotate: -8 }}
            >
              <div className="absolute inset-0 bg-[#ff8dc0]" />
              <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgRectangle2} loading="lazy" />
            </motion.div>

            {/* 大星星 */}
            <motion.svg
              className="absolute w-[20px] h-[26px] md:w-[24px] md:h-[32px] lg:w-[28.612px] lg:h-[38.15px] animate-[swing_3s_ease-in-out_infinite]"
              style={{ right: '170px', top: '20px' }}
              fill="none"
              viewBox="0 0 34.4264 40.9652"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
            >
              <path d={svgPaths.pc24a030} fill="#FFF81E" />
              <path d={svgPaths.p1e17d500} fill="#FFF81E" />
            </motion.svg>

            {/* 小星星 */}
            <motion.svg
              className="absolute w-[12px] h-[16px] md:w-[14px] md:h-[18px] lg:w-[16.35px] lg:h-[21.8px] animate-[swingSmall_4s_ease-in-out_infinite]"
              style={{ right: '190px', top: '60px' }}
              fill="none"
              viewBox="0 0 22.8005 25.0639"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45, type: "spring" }}
            >
              <path d={svgPaths.p112261c0} fill="#FFF81E" />
              <path d={svgPaths.pef39900} fill="#FFF81E" />
            </motion.svg>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
