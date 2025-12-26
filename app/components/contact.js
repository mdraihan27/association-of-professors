import { RightArrow } from "./illustrations/right-arrow";
export function Contact() {
  return (
    <div className="w-full flex justify-center relative bg-white overflow-hidden">
      {/* Dashed grid background, centered and height-limited for smaller screens */}
      <div className="absolute inset-x-0 top-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1290px] h-[220px] sm:h-[260px] md:h-[316px] relative">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `
        linear-gradient(to right, #72727270 1px, transparent 1px),
        linear-gradient(to bottom, #72727270 1px, transparent 1px)
      `,
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 0",
              maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
              WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
          />
        </div>
      </div>

      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[75px] pt-16 md:pt-20 pb-16 md:pb-[100px] flex flex-col items-center gap-10 md:gap-[100px] relative z-10">
        <div className="w-full flex flex-col items-center gap-6 md:gap-8">
          <div className="w-full text-center text-[#141414] text-3xl sm:text-4xl md:text-5xl font-semibold font-['Roboto'] leading-snug md:leading-[1.3]">
            대한교수협회와 네이버 카페 <br />
            「사회복지와 심리상담의 모든 것」에서
            <br />
            여러분의 지성과 경험, 꿈을 함께 나누어 주십시오.
          </div>
          <div className="w-full max-w-[720px] text-center text-black text-base md:text-[26px] font-normal font-['Roboto'] leading-relaxed md:leading-[61.80px]">
            ‘더 나은 미래를 위한’ 여정에 지금 함께해 주시기 바랍니다.
          </div>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-center items-stretch gap-4 sm:gap-6 cursor-pointer">
          <div className="w-full sm:w-auto h-[82px] bg-white rounded-lg shadow-[0px_4px_0px_0px_rgba(0,0,0,1.00)] outline outline-2 outline-offset-[-2px] outline-black flex justify-start items-stretch overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_18px_-6px_rgba(0,0,0,0.30)] hover:bg-[#f7f7f7] active:translate-y-0 active:shadow-[0px_6px_12px_-8px_rgba(0,0,0,0.28)]">
            <div className="px-5 sm:px-[25px] py-4 sm:py-[30px] bg-[#e1e1e1] flex justify-center items-center">
              <div className="text-center text-[#141414] text-lg sm:text-[22px] font-normal font-['Roboto'] leading-[26px]">
                대한교수협회
              </div>
            </div>
            <div className="flex-1 px-5 sm:px-[25px] py-4 sm:py-[30px] bg-white flex justify-center items-center">
              <div className="text-center text-gray-500 text-base sm:text-[21px] font-medium font-['Inter']">
                사회복지와 심리상담의 모든 것
              </div>
            </div>
          </div>

          <div className="w-full sm:w-auto h-[82px] rounded-lg shadow-[0px_4px_0px_0px_rgba(0,0,0,1.00)] outline outline-2 outline-offset-[-2px] outline-black flex justify-start items-stretch overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_18px_-6px_rgba(0,0,0,0.30)] hover:bg-[#f7f7f7] active:translate-y-0 active:shadow-[0px_6px_12px_-8px_rgba(0,0,0,0.28)]">
            <div className="w-full px-5 sm:px-[25px] py-4 sm:py-[30px] bg-white flex justify-center items-center">
              <div className="flex justify-center items-center gap-3 text-[#141414] text-base sm:text-xl font-semibold font-['Roboto'] uppercase leading-[22px]">
                네이버 카페 바로가기
                <RightArrow className="w-2 h-3 sm:w-3 sm:h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
