import { RightArrow } from "./illustrations/right-arrow";
export function Contact() {
  return (
    <div className="w-[1440px] px-[75px] pb-[100px] relative bg-white inline-flex flex-col justify-start items-start gap-[100px] overflow-hidden">
      <div className="w-[1290px] h-[316px] left-[75px] top-[380.25px] absolute z-10">
        {/* <div
          className="w-[1440px] h-[813.31px] left-[-75px] top-0 absolute opacity-30 overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #727272 0, #727272 1px, transparent 1px, transparent 12px), linear-gradient(to right, #727272 0, #727272 1px, transparent 1px, transparent 12px)",
            backgroundSize: "49.54px 12px, 12px 49.54px",
            backgroundRepeat: "repeat",
          }}
        /> */}
        <div className="min-h-screen w-full relative">
          {/* Dashed Grid */}
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
          {/* Your Content/Components */}
        </div>
      </div>
      <div className="relative z-20 self-stretch flex flex-col justify-start items-center gap-20">
        <div className="self-stretch flex flex-col justify-start items-center gap-10">
          <div className="self-stretch text-center justify-center text-[#141414] text-5xl font-semibold font-['Roboto']">
            대한교수협회와 네이버 카페 <br />
            「사회복지와 심리상담의 모든 것」에서
            <br />
            여러분의 지성과 경험, 꿈을 함께 나누어 주십시오.
          </div>
          <div className="self-stretch text-center justify-center text-black text-[26px] font-normal font-['Roboto'] leading-[61.80px]">
            ‘더 나은 미래를 위한’ 여정에 지금 함께해 주시기 바랍니다.
          </div>
        </div>
        <div className="size- inline-flex justify-start items-start gap-10 cursor-pointer">
          <div className="h-[82px] bg-white rounded-lg shadow-[0px_4px_0px_0px_rgba(0,0,0,1.00)] outline outline-2 outline-offset-[-2px] outline-black flex justify-start items-start overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_18px_-6px_rgba(0,0,0,0.30)] hover:bg-[#f7f7f7] active:translate-y-0 active:shadow-[0px_6px_12px_-8px_rgba(0,0,0,0.28)] cursor-pointer">
            <div className="size- px-[25px] py-[30px] bg-[#e1e1e1] flex justify-center items-center gap-2.5">
              <div className="text-center justify-center text-[#141414] text-[22px] font-normal font-['Roboto'] leading-[26px]">
                대한교수협회
              </div>
            </div>
            <div className="size- px-[25px] py-[30px] bg-white flex justify-center items-center gap-2.5">
              <div className="text-center justify-center text-gray-500 text-[21px] font-medium font-['Inter']">
                사회복지와 심리상담의 모든 것
              </div>
            </div>
          </div>
          <div className="h-[82px] rounded-lg shadow-[0px_4px_0px_0px_rgba(0,0,0,1.00)] outline outline-2 outline-offset-[-2px] outline-black flex justify-start items-start overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_10px_18px_-6px_rgba(0,0,0,0.30)] hover:bg-[#f7f7f7] active:translate-y-0 active:shadow-[0px_6px_12px_-8px_rgba(0,0,0,0.28)]">
            <div className="size- px-[25px] py-[30px] bg-white flex justify-center items-center gap-2.5">
              <div className="size- flex justify-start items-center gap-4">
                <div className="text-center justify-center text-[#141414] text-xl font-semibold font-['Roboto'] uppercase leading-[22px] flex items-center gap-3">
                  네이버 카페 바로가기
                  <RightArrow className="w-1.5 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
