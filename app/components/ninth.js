import { Dot } from "lucide-react";

export function Ninth() {
  return (
    <div className="w-full flex justify-center bg-neutral-100 overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[75px] py-12 md:py-16 lg:py-20 flex flex-col justify-center items-start gap-0 lg:gap-12 md:gap-16 lg:gap-20">
        {/* 회장 인사말 섹션 */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10">
          <div className="w-full lg:w-[639px] flex flex-col justify-start items-start gap-8">
            <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-6">
              <div className="w-full max-w-[280px] text-[#666666] text-base sm:text-lg md:text-[22px] font-medium font-['Roboto'] uppercase">
                성무진 회장의 약속
              </div>
              <div className="w-full text-black text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Roboto'] leading-snug md:leading-[52.80px]">
                더 나은 미래를 위한 행동
              </div>
            </div>

            <div className="w-full relative bg-[#f9fbfe] rounded-lg p-6 md:p-8 lg:p-10 inline-flex justify-center items-center">
              <div className="text-[#183b56] text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                “ 대한교수협회 초대 회장으로 추대해 주심에 깊이 감사드립니다. 저는
                말이 아닌 행동으로, 구호가 아닌 실천으로 협회의 미래를
                증명하겠다는 다짐으로 이 자리에 섰습니다. ”
              </div>
              <div className="pointer-events-none left-[40px] top-[10.25px] absolute opacity-5 text-center text-[#183b56] text-[64px] md:text-[80px] font-black font-['Font_Awesome_5_Free']">
                quote-left
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-6">
              <div className="w-full text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                <span className="flex items-start">
                  <Dot />
                  <span className="ml-2">도전과 차이를 성장의 에너지로 삼겠습니다.</span>
                </span>
                <span className="flex items-start">
                  <Dot />
                  <span className="ml-2">서로의 관점을 인정하고, 존중하는 문화를 만들겠습니다.</span>
                </span>
                <span className="flex items-start">
                  <Dot />
                  <span className="ml-2">오늘 심는 한 그루의 나무가 내일 그늘이 될 것이라.</span>
                </span>
              </div>
              <div className="w-full text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                회원 여러분의 성장과 협회의 품격 있는 발전을 위해 언제나 신중히
                선택하고, 책임 있게 실행하겠습니다.
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[542px] h-auto lg:h-[574px] relative rounded-lg shadow-[10px_20px_20px_0px_rgba(0,0,0,0.20)] overflow-hidden">
            <img
              className="w-full h-full object-cover absolute inset-0"
              src="/ninth/human1.png"
              alt="회장 사진"
            />
          </div>
        </div>

        {/* 이사장 인사말 섹션 */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-10">
          <div className="w-full lg:w-[645px] h-auto lg:h-[614px] relative rounded-lg shadow-[10px_20px_20px_0px_rgba(0,0,0,0.20)] overflow-hidden">
            <img
              className="w-full h-full object-cover absolute inset-0"
              src="/ninth/human2.png"
              alt="이사장 사진"
            />
          </div>

          <div className="w-full lg:w-[639px] flex flex-col justify-start items-start gap-8">
            <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-6">
              <div className="w-full max-w-[280px] text-[#666666] text-base sm:text-lg md:text-[22px] font-medium font-['Roboto'] uppercase">
                이사장 인사말
              </div>
              <div className="w-full text-black text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Roboto'] leading-snug md:leading-[52.80px]">
                대한교수협회의 든든한 뿌리가 되겠습니다.
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-6">
              <div className="w-full text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                대한교수협회는 대한민국 곳곳에서 강의와 연구, 그리고 다양한
                현장을 지키고 계신 교수님들의 지성과 경험을 모아, 학문과 사회가
                더 촘촘히 연결되는 기반을 만들기 위해 출발했습니다.
              </div>
              <div className="w-full text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                이사장으로서 저는 협회가 단순한 친목 모임이 아니라, 각 분야
                교수님들의 지식과 현장 경험이 모이고 순환되는 지적 인프라이자
                신뢰할 수 있는 공적 플랫폼으로 자리 잡을 수 있도록
                재정·조직·네트워크의 뿌리를 단단히 다지는 역할을 맡고자 합니다.
              </div>
              <div className="w-full text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                대한교수협회가 지금 함께하는 교수님들께는 든든한 동료 공동체가
                되고, 다음 세대 연구자와 학생들에게는 자부심 있게 이어받을 수
                있는 학문 공동체가 될 수 있도록, 보이지 않는 자리에서 묵묵히
                뿌리를 지지하겠습니다.
              </div>
            </div>
          </div>
        </div>

        <SimpleMovingCarousel />
      </div>
    </div>
  );
}
const carouselImages = [
  "/images/ninth/slide1.jpg",
  "/images/ninth/slide2.jpg",
  "/images/ninth/slide3.jpg",
  "/images/ninth/slide1.jpg",
  "/images/ninth/slide2.jpg",
  "/images/ninth/slide3.jpg",
  "/images/ninth/slide1.jpg",
];

export function SimpleMovingCarousel() {
  const duplicated = [...carouselImages, ...carouselImages];
  const singleSetWidth =
    carouselImages.length * 400 + (carouselImages.length - 1) * 50;

  return (
    <div className="w-full overflow-hidden py-10">
      <style>{`
        @keyframes ninth-carousel-slide {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-${singleSetWidth}px, 0, 0); }
        }

        .ninth-carousel-track:hover {
          animation-play-state: paused;
        }

        .ninth-carousel-track {
          animation: ninth-carousel-slide 40s linear infinite;
          will-change: transform;
        }
      `}</style>
      <div
        className="flex items-center ninth-carousel-track"
        style={{
          gap: "50px",
          width: "max-content",
        }}
      >
        {duplicated.map((src, idx) => (
          <div
            key={`${src}-${idx}`}
            className="flex-none w-[400px] h-[240px] overflow-hidden rounded-lg bg-neutral-200 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_18px_45px_-20px_rgba(0,0,0,0.4)]"
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
