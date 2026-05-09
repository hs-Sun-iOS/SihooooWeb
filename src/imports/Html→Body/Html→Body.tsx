import svgPaths from "./svg-5it421s66b";
import imgBackground from "./0ecc8e143a4108bc43489e38d071dd94f5ea7692.png";
import imgBackground1 from "./be8f3062f36a0087ceb22f6902862e91403ef53d.png";
import imgBackground2 from "./d6be3976208291a5c1f38dfcb8b7e72b82d8566f.png";
import imgBackground3 from "./ddab898a9f25d3bad3d0118e8626493a121fc5ca.png";
import imgOverlayBlur from "./e2efdef9427bfc0b196560064771ee9e20f96bf0.png";
import imgRectangle1 from "./99cf8bac96625ff695e402e103c14b8dcbb223d9.png";
import imgRectangle2 from "./2bbd51ba30061e5c875dfc0c9bf05685523a5335.png";

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[40px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[48px]">Innovative Creations</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <div className="bg-[#ff64e3] h-[4px] relative shrink-0 w-[80px]" data-name="Background" />
    </div>
  );
}

function Background() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]" data-name="Background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgBackground} />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[28px] text-white whitespace-nowrap">
        <p className="leading-[31.2px]">Bluur cam</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background />
      <Heading2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[26px] mb-0">A high-speed aesthetic sports camera, designed for adrenaline</p>
        <p className="leading-[26px]">and precision. Capturing movement with soul.</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #D7C2F8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d7c2f8] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">VIEW ON APP STORE</p>
        </div>
        <Container5 />
      </div>
    </div>
  );
}

function Product1BluurCam() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(20,20,20,0.8)] col-1 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Product 1: Bluur cam">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[41px] relative size-full">
        <Container2 />
        <Link />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]" data-name="Background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgBackground1} />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[28px] text-white whitespace-nowrap">
        <p className="leading-[31.2px]">Tidy</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background1 />
      <Heading3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[26px] mb-0">Organize your desktop with minimalist elegance. Your space,</p>
        <p className="leading-[26px]">refined.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative size-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #D7C2F8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d7c2f8] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">VIEW ON APP STORE</p>
        </div>
        <Container9 />
      </div>
    </div>
  );
}

function Product2Tidy() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(20,20,20,0.8)] col-2 justify-self-stretch relative rounded-[8px] row-1 self-start shrink-0" data-name="Product 2: Tidy">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[41px] relative size-full">
        <Container6 />
        <Link1 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]" data-name="Background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgBackground2} />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[28px] text-white whitespace-nowrap">
        <p className="leading-[31.2px]">PAUSED</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background2 />
      <Heading4 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[26px] mb-0">A countdown tool that is full of beauty and poetry. Time is</p>
        <p className="leading-[26px]">precious; view it with grace.</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #D7C2F8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d7c2f8] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">VIEW ON APP STORE</p>
        </div>
        <Container13 />
      </div>
    </div>
  );
}

function Product3Paused() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(20,20,20,0.8)] col-1 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Product 3: PAUSED">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start p-[41px] relative size-full">
        <Container10 />
        <Link2 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="relative rounded-[16px] shrink-0 size-[64px]" data-name="Background">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgBackground3} />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[28px] text-white whitespace-nowrap">
        <p className="leading-[31.2px]">PopGrid</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Background3 />
      <Heading5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[26px] mb-0">Unlock potential with grids. A unique layout tool for modern</p>
        <p className="leading-[26px]">creators.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pb-[32px] relative size-full">
        <Container15 />
        <Container16 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Container">
          <path d={svgPaths.p1a406200} fill="var(--fill-0, #D7C2F8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d7c2f8] text-[16px] whitespace-nowrap">
          <p className="leading-[24px]">VIEW ON APP STORE</p>
        </div>
        <Container17 />
      </div>
    </div>
  );
}

function Product4PopGrid() {
  return (
    <div className="backdrop-blur-[8px] bg-[rgba(20,20,20,0.8)] col-2 justify-self-stretch relative rounded-[8px] row-2 self-start shrink-0" data-name="Product 4: PopGrid">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col items-start justify-between p-[41px] relative size-full">
        <Container14 />
        <Link3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[__278px_278px] relative shrink-0 w-full" data-name="Container">
      <Product1BluurCam />
      <Product2Tidy />
      <Product3Paused />
      <Product4PopGrid />
    </div>
  );
}

function ProductsSection() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-[640px] max-w-[1280px] px-[64px] py-[120px] right-[640px] top-[899px]" data-name="Products Section">
      <Container />
      <Container1 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-center justify-center" data-name="Container">
      <div className="h-[809px] relative rounded-[12px] shrink-0 w-full" data-name="Overlay+Blur">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[12px] size-full" src={imgOverlayBlur} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-text flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[84px] text-[transparent] text-center text-shadow-[0px_0px_16px_rgba(0,0,0,0.15)] tracking-[-1.28px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(101.106deg, rgb(244, 226, 255) 2.0273%, rgb(255, 255, 255) 37.217%, rgb(255, 226, 249) 100.01%)" }}>
        <p className="leading-[90px] mb-0">Crafting Products with</p>
        <p className="leading-[90px]">Utility and Soul.</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] pb-[0.69px] relative shrink-0 w-[672px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white whitespace-nowrap">
        <p className="leading-[28.8px] mb-0">Refusing the mediocre. Every line of code and every single pixel is</p>
        <p className="leading-[28.8px]">meticulously shaped to bring inspiration and warmth to your daily life.</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="backdrop-blur-[10px] bg-[#ff64e3] relative rounded-[16px] self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[32px] py-[16px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black text-center whitespace-nowrap">
            <p className="leading-[24px]">Explore Products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[73.11px] items-start justify-center pt-[17.11px] relative shrink-0 w-full" data-name="Container">
      <Link4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center max-w-[896px] relative shrink-0" data-name="Container">
      <Heading />
      <Container20 />
      <Container21 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="absolute content-stretch flex flex-col items-center justify-center left-0 min-h-[819px] overflow-clip px-[64px] py-[241.31px] right-0 top-[80px]" data-name="Hero Section">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[40px] text-white tracking-[-0.4px] w-full">
        <p className="leading-[48px] mb-0">About Sihoooo Network</p>
        <p className="leading-[48px]">Technology Co Ltd</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[29.25px] mb-0">Sihoooo Network Technology Co Ltd is an independent studio,</p>
        <p className="leading-[29.25px] mb-0">{`we started in 2023. Our slogan is "Crafting products with utility`}</p>
        <p className="leading-[29.25px]">{`and soul".`}</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-full">
        <p className="leading-[26px] mb-0">We focus on creating small and beautiful mobile applications. We</p>
        <p className="leading-[26px] mb-0">refuse the mediocre. Every line of code and every single pixel is</p>
        <p className="leading-[26px]">meticulously shaped to bring inspiration and warmth to your daily life.</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16px] relative shrink-0 w-[20px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
        <g id="Container">
          <path d={svgPaths.p13e73800} fill="var(--fill-0, #D7C2F8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">min@sihoooo.cn</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[20px] relative shrink-0 w-[16px]" data-name="Container">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Container">
          <path d={svgPaths.p1869180} fill="var(--fill-0, #D7C2F8)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">{`No. 18 Gaoxin 1st Road, Xi'an City`}</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[32px] relative shrink-0 w-full" data-name="Container">
      <Container28 />
      <Container31 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container23() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Heading6 />
      <Container24 />
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-self-start leading-[0] place-items-start relative row-1 self-start shrink-0">
      <div className="col-1 flex h-[396.253px] items-center justify-center ml-[64px] mt-0 relative row-1 w-[310.159px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-7.76deg]">
          <div className="h-[364.022px] relative rounded-[22px] w-[263.426px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[22px]">
              <div className="absolute bg-[#6eda91] inset-0 rounded-[22px]" />
              <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgRectangle1} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[397.986px] items-center justify-center ml-[302.3px] mt-[100.22px] relative row-1 w-[284.566px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-175.61deg]">
          <div className="h-[379.497px] relative rounded-[22px] shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)] w-[256.295px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[22px]">
              <div className="absolute bg-[#ff8dc0] inset-0 rounded-[22px]" />
              <img alt="" className="absolute max-w-none object-cover rounded-[22px] size-full" src={imgRectangle2} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[43.348px] items-center justify-center ml-[400.41px] mt-[52.67px] relative row-1 w-[36.049px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-12.24deg]">
          <div className="h-[38.15px] relative w-[28.612px]">
            <div className="absolute inset-[0_-10.97%_-7.38%_-9.35%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.4264 40.9652">
                <g id="Vector 20">
                  <path d={svgPaths.pc24a030} fill="var(--fill-0, #FFF81E)" />
                  <path d={svgPaths.p1e17d500} fill="var(--stroke-0, #FFF81E)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 flex h-[24.77px] items-center justify-center ml-[370px] mt-[79px] relative row-1 w-[20.6px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[-12.24deg]">
          <div className="h-[21.8px] relative w-[16.35px]">
            <div className="absolute inset-[-1.07%_-20.3%_-13.9%_-19.15%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.8005 25.0639">
                <g id="Vector 21">
                  <path d={svgPaths.p112261c0} fill="var(--fill-0, #FFF81E)" />
                  <path d={svgPaths.pef39900} fill="var(--stroke-0, #FFF81E)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_536px] max-w-[inherit] px-[64px] relative size-full">
        <Container23 />
        <Group />
      </div>
    </div>
  );
}

function AboutUsSection() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex flex-col items-start left-0 px-[640px] py-[120px] right-0 top-[1851px]" data-name="About Us Section">
      <Container22 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[2627px] relative shrink-0 w-full" data-name="Main">
      <ProductsSection />
      <HeroSection />
      <AboutUsSection />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Sihoooo Network Technology Co Ltd</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[24px]">Crafting products with utility and soul.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[288px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[24px]">SihooooTech@2023</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] whitespace-nowrap">
        <p className="leading-[24px]">{`No. 18 Gaoxin 1st Road, High tech Zone, Xi'an City`}</p>
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d7c2f8] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">min@sihoooo.cn</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-end relative shrink-0" data-name="Container">
      <Container39 />
      <Container40 />
      <Link5 />
    </div>
  );
}

function Container34() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[64px] relative size-full">
          <Container35 />
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#141414] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[48px] pt-[49px] px-[640px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Space_Grotesk:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ff64e3] text-[24px] tracking-[-1.2px] whitespace-nowrap">
        <p>
          <span className="leading-[31.2px]">Sihoooo</span>
          <span className="leading-[31.2px] text-white">Tech</span>
        </p>
      </div>
    </div>
  );
}

function Link6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[6px] relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#ff64e3] border-b-2 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Home</p>
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">Products</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
        <p className="leading-[24px]">About Us</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="Container">
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Button">
          <path d={svgPaths.p237be000} fill="var(--fill-0, white)" id="Icon" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-[1280px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between max-w-[inherit] px-[64px] relative size-full">
        <Container42 />
        <Container43 />
        <Button />
      </div>
    </div>
  );
}

function TopNavBar() {
  return (
    <div className="absolute backdrop-blur-[12px] bg-[rgba(20,20,20,0.7)] content-stretch flex h-[80px] items-center justify-center left-0 pb-px top-0 w-[2560px]" data-name="TopNavBar">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Container41 />
    </div>
  );
}

export default function HtmlBody() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[2812px] relative size-full" style={{ backgroundImage: "linear-gradient(90deg, rgb(5, 5, 5) 0%, rgb(5, 5, 5) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} data-name="Html → Body">
      <Main />
      <Footer />
      <TopNavBar />
    </div>
  );
}