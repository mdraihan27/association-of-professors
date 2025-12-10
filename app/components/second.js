import { HeadTalk } from "./illustrations/head-talk";
import { Puzzle } from "./illustrations/puzzle";
import { Dot } from "lucide-react";

export function Second() {
  return (
    <div className="w-[1440px] px-[75px] py-20 bg-white inline-flex flex-col justify-center items-center gap-20">
      <div className="self-stretch flex flex-col justify-start items-center gap-10">
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <div className="w-[280px] text-center justify-start text-[#666666] text-[22px] font-medium font-['Roboto'] uppercase leading-6 tracking-widest">
            왜 대한교수협회인가
          </div>
          <div className="self-stretch text-center justify-start text-[#02203b] text-5xl font-extrabold font-['Roboto'] leading-[52.80px]">
            분절된 지식을, 하나의 목소리로
          </div>
        </div>
        <div className="text-center justify-start text-black text-xl font-normal font-['Roboto'] leading-9">
          각 분야의 지식과 정보는 넘쳐나지만,
          <br />
          사회와 다음 세대가 믿을 수 있는 기준점은 많지 않습니다.
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-[75px]">
        <div className="flex-1 h-[302px] bg-white rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.07)] shadow-lg outline outline-[5px] outline-[#e0e0e6] inline-flex flex-col justify-center items-start overflow-hidden">
          <div className="self-stretch p-8 flex flex-col justify-center items-start gap-8">
            <div className="w-[346px] inline-flex justify-center items-center gap-[21px]">
              <Puzzle className="w-[43px] h-[43px] " />
              <div className="justify-start text-black text-[22px] font-bold font-['Roboto'] leading-10">
                흩어진 지식, 멀어진 사회
              </div>
            </div>
            <div className="self-stretch justify-start text-slate-900 ">
              <div className="flex items-center">
                <Dot className="" />
                <span className=" text-xl font-semibold font-['Roboto'] leading-9 flex items-center">
                  대학·대학원, 연구소, 현장
                </span>
                <span className="text-slate-900 text-xl font-normal font-['Roboto'] leading-9 flex items-center">
                  은 제각각 움직이고a
                </span>
              </div>
              <div className="flex items-center">
                <Dot />
                <span className="text-slate-900 text-xl font-semibold font-['Roboto'] leading-9 flex items-center">
                  학생·시민·언론
                </span>
                <span className="text-slate-900 text-xl font-normal font-['Roboto'] leading-9">
                  은 검증된 정보를 한눈에 찾기 어렵고
                </span>
              </div>
              <div className="flex items-center text-slate-900 text-xl font-['Roboto'] leading-9">
                <Dot />
                <span className="font-semibold">연구 성과</span>
                <span className="font-normal">
                  는 논문과 보고서에 머무른 채, 사회와 정책으로
                </span>
              </div>
              <div className="ms-6">
                <span className="text-slate-900 text-xl font-normal font-['Roboto'] leading-9">
                  충분히 이어지지 못하고 있습니다.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[657px] bg-[#f7f3ec] rounded-[10px] shadow-[0px_0px_6px_0px_rgba(0,0,0,0.15)] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.15)] outline outline-[5px] outline-[#beb29f] inline-flex flex-col justify-center items-start overflow-hidden">
          <div className="self-stretch p-8 flex flex-col justify-center items-start gap-8">
            <div className="w-[460px] inline-flex justify-center items-center gap-[21px]">
              <HeadTalk className="w-[55px] h-[46px]" />
              <div className="size- inline-flex flex-col justify-center items-start">
                <div className="justify-start text-black text-lg font-normal font-['Roboto'] leading-8">
                  대한교수협회의 방향
                </div>
                <div className="justify-start text-black text-[22px] font-bold font-['Roboto'] leading-10">
                  대한교수협회가 제안하는 새로운 기준
                </div>
              </div>
            </div>
            <div className="self-stretch justify-start">
              <div className="flex items-center text-black">
                <Dot />
                <span className="text-black text-xl font-normal font-['Roboto'] leading-9">
                  대한교수협회는 이 흐름을 바꾸고자 합니다.
                </span>
              </div>

              <div className="flex items-center text-black">
                <Dot />
                <div className="flex text-black text-xl font-['Roboto'] leading-9">
                  <span>각 전공 교수들이 ‘</span>
                  <span className="text-black text-xl font-bold font-['Roboto'] leading-9">
                    하나 된 목소리 
                  </span>
                  <span>
                    ’로 신뢰할 수 있는 기준 정보를 제시
                  </span>
                </div>
              </div>

              <span className="text-black text-xl font-normal font-['Roboto'] leading-9 ms-6">
                하고, 연구와 강의, 사회 현장을 잇는 공적인 지식 플랫폼을 세우는
              </span>
              <span className="text-black text-xl font-normal font-['Roboto'] leading-9 ms-6">
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
