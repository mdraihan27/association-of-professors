import { HeadTalk } from "./illustrations/head-talk";
import { Puzzle } from "./illustrations/puzzle";
import { Dot } from "lucide-react";

export function Second() {
  return (
    <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[75px] py-12 md:py-16 lg:py-20 bg-white inline-flex flex-col justify-center items-center gap-12 md:gap-16 lg:gap-20">
      <div className="w-full flex flex-col justify-start items-center gap-6 md:gap-10">
        <div className="w-full flex flex-col justify-start items-center gap-4 md:gap-6">
          <div className="text-center justify-start text-[#666666] text-sm sm:text-base md:text-[22px] font-medium font-['Roboto'] uppercase leading-5 md:leading-6 tracking-[0.18em]">
            왜 대한교수협회인가
          </div>
          <div className="w-full text-center justify-start text-[#02203b] text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Roboto'] leading-snug md:leading-[52.80px]">
            분절된 지식을, 하나의 목소리로
          </div>
        </div>
        <div className="max-w-[720px] text-center justify-start text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
          각 분야의 지식과 정보는 넘쳐나지만,
          <br />
          사회와 다음 세대가 믿을 수 있는 기준점은 많지 않습니다.
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-6 md:gap-[75px]">
        <div className="flex-1 bg-white rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.07)] shadow-lg outline outline-[5px] outline-[#e0e0e6] inline-flex flex-col justify-center items-start overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_16px_30px_0px_rgba(0,0,0,0.12)] hover:outline-[#d6d6de]">
          <div className="w-full p-6 sm:p-7 md:p-8 flex flex-col justify-center items-start gap-6 md:gap-8">
            <div className="w-full max-w-[346px] inline-flex justify-start items-start gap-[21px]">
              <Puzzle className="w-[43px] h-[43px] " />
              <div className="justify-start text-black text-[22px] font-bold font-['Roboto'] leading-10">
                흩어진 지식, 멀어진 사회
              </div>
            </div>
            <div className="self-stretch justify-start text-slate-900 text-base md:text-xl font-['Roboto'] leading-relaxed md:leading-9">
              <div className="flex items-start gap-1">
                <Dot className="" />
                <span className="font-semibold flex items-center">
                  대학·대학원, 연구소, 현장
                </span>
                <span className="text-slate-900 font-normal flex items-center">
                  은 제각각 움직이고
                </span>
              </div>
              <div className="flex items-start gap-1">
                <Dot />
                <span className="text-slate-900 font-semibold flex items-center">
                  학생·시민·언론
                </span>
                <span className="text-slate-900 font-normal">
                  은 검증된 정보를 한눈에 찾기 어렵고
                </span>
              </div>
              <div className="flex items-start gap-1 text-slate-900">
                <Dot />
                <span className="font-semibold">연구 성과</span>
                <span className="font-normal">
                  는 논문과 보고서에 머무른 채, 사회와 정책으로
                </span>
              </div>
              <div className="ms-6">
                <span className="text-slate-900 font-normal">
                  충분히 이어지지 못하고 있습니다.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[657px] bg-[#f7f3ec] rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.15)] outline outline-[5px] outline-[#beb29f] inline-flex flex-col justify-center items-start overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_18px_32px_0px_rgba(0,0,0,0.14)] hover:outline-[#d1c5b2]">
          <div className="w-full p-6 sm:p-7 md:p-8 flex flex-col justify-center items-start gap-6 md:gap-8">
            <div className="w-full max-w-[460px] inline-flex justify-start items-start gap-[21px]">
              <HeadTalk className="w-[55px] h-[46px]" />
              <div className="size- inline-flex flex-col justify-center items-start">
                <div className="justify-start text-black text-base md:text-lg font-normal font-['Roboto'] leading-7 md:leading-8">
                  대한교수협회의 방향
                </div>
                <div className="justify-start text-black text-xl md:text-[22px] font-bold font-['Roboto'] leading-8 md:leading-10">
                  대한교수협회가 제안하는 새로운 기준
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start text-black text-base md:text-xl font-['Roboto'] leading-relaxed md:leading-9">
              <div className="flex items-start gap-1">
                <Dot />
                <span className="text-black font-normal">
                  대한교수협회는 이 흐름을 바꾸고자 합니다.
                </span>
              </div>

              <div className="flex items-start gap-1 text-black">
                <Dot />
                <div className="flex flex-wrap text-black font-['Roboto']">
                  <span>각 전공 교수들이 ‘</span>
                  <span className="text-black font-bold">
                    하나 된 목소리 
                  </span>
                  <span>
                    ’로 신뢰할 수 있는 기준 정보를 제시
                  </span>
                </div>
              </div>

              <span className="block text-black font-normal font-['Roboto'] ms-6">
                하고, 연구와 강의, 사회 현장을 잇는 공적인 지식 플랫폼을 세우는
              </span>
              <span className="block text-black font-normal font-['Roboto'] ms-6">
                 것을
                목표로 합니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
