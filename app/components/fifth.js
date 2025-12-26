import { Slash } from "./illustrations/slash";
import { Icon1, Icon2, Icon3, Icon4 } from "./illustrations/fifth-icons";
export function Fifth() {
  return (
    <div className="w-full flex justify-center bg-neutral-50 relative">
      <Slash className="absolute z-10 w-[180px] sm:w-[220px] md:w-[260px] h-auto left-1/2 -translate-x-1/2 top-1/4 hidden md:hidden lg:block" />
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[75px] py-12 md:py-16 lg:py-20 inline-flex flex-col justify-center items-center gap-10 md:gap-16 lg:gap-20 relative z-20">
        <div className="w-full max-w-[1290px] flex flex-col justify-start items-center gap-4 md:gap-8">
          <div className="self-stretch text-center justify-start text-[#02203b] text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Roboto'] leading-snug md:leading-[52.80px]">
            우리가 함께 그리는 ‘더 나은 미래’의 지도
          </div>
          <div className="text-center justify-start text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
            대한교수협회가 지향하는 네 가지 축을 한눈에 정리했습니다.
          </div>
        </div>

        <div className="w-full flex flex-col items-center gap-6 md:gap-8 mt-4 md:mt-6">
          <div className="w-full max-w-[760px] mx-auto lg:me-[630px] relative z-20 p-6 bg-white rounded-3xl shadow-[0px_35px_116px_-10px_rgba(154,167,193,0.25)] inline-flex justify-start items-center gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_40px_128px_-10px_rgba(154,167,193,0.30)] hover:bg-[#f9fbff]">
            <div className="size-[73px] px-[21px] py-[9px] bg-[#ebf3ff] rounded-[36.50px] flex justify-start items-center gap-2.5">
              <Icon1 />
            </div>
            <div className="w-full max-w-[454px] inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-black text-lg md:text-[22px] font-semibold font-['Roboto'] capitalize">
                전문성 – 지식의 깊이
              </div>
              <div className="self-stretch justify-start text-[#2a2a2a] text-sm md:text-base font-normal font-['Roboto'] leading-relaxed md:leading-7">
                각 전공의 교수·연구자가 함께 쌓아 온 깊이 있는 지식과 연구를
                기반으로 합니다.
              </div>
            </div>
          </div>

          <div className="w-full max-w-[760px] mx-auto lg:ms-[530px] relative z-20 p-6 bg-white rounded-3xl shadow-[0px_35px_116px_-10px_rgba(154,167,193,0.25)] inline-flex justify-start items-center gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_40px_128px_-10px_rgba(154,167,193,0.30)] hover:bg-[#f9fbff]">
            <div className="size-[73px] px-4 py-[18px] bg-[#ebf3ff] rounded-[36.50px] inline-flex flex-col justify-center items-center gap-2.5">
              <Icon2 />
            </div>
            <div className="w-full max-w-[503px] inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-black text-lg md:text-[22px] font-semibold font-['Roboto'] capitalize">
                공공성 – 사회를 향한 책임
              </div>
              <div className="self-stretch justify-start text-black text-sm md:text-base font-normal font-['Roboto'] leading-relaxed md:leading-7">
                학문적 통찰을 바탕으로 정책·산업·지역사회 문제 해결에 적극
                참여합니다.
              </div>
            </div>
          </div>

          <div className="w-full max-w-[760px] mx-auto lg:me-[600px] relative z-20 p-6 bg-white rounded-3xl shadow-[0px_35px_116px_-10px_rgba(154,167,193,0.25)] inline-flex justify-start items-center gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_40px_128px_-10px_rgba(154,167,193,0.30)] hover:bg-[#f9fbff]">
            <div className="size-[73px] bg-[#ebf3ff] rounded-full flex justify-center items-center">
              <Icon3 />
            </div>
            <div className="w-full max-w-[530px] inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-black text-lg md:text-[22px] font-semibold font-['Roboto'] capitalize">
                열린 거버넌스 – 함께 결정하는 협회
              </div>
              <div className="self-stretch justify-start text-black text-sm md:text-base font-normal font-['Roboto'] leading-relaxed md:leading-7">
                소수 운영진이 아니라 전체 회원의 의견과 토론을 반영해 주요 방향을
                결정합니다.
              </div>
            </div>
          </div>

          <div className="w-full max-w-[760px] mx-auto lg:ms-[520px] relative z-20 p-6 bg-white rounded-3xl shadow-[0px_35px_116px_-10px_rgba(154,167,193,0.25)] inline-flex justify-start items-start gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_40px_128px_-10px_rgba(154,167,193,0.30)] hover:bg-[#f9fbff]">
            <div className="size-[73px] bg-[#ebf3ff] rounded-full flex justify-center items-center">
              <Icon4 />
            </div>
            <div className="w-full max-w-[623px] inline-flex flex-col justify-start items-start gap-2">
              <div className="self-stretch justify-start text-black text-lg md:text-[22px] font-semibold font-['Roboto'] capitalize">
                지속 가능성 – 재정적 자립과 100년 공동체
              </div>
              <div className="self-stretch justify-start text-black text-sm md:text-base font-normal font-['Roboto'] leading-relaxed md:leading-7">
                지식콘텐츠·교육·연구 프로젝트를 통한 건강한 수익 구조로, 다음
                세대까지 이어지는 학문 공동체를 지향합니다.
              </div>
            </div>
          </div>
        </div>

        <div className="w-full p-6 inline-flex justify-center items-center mt-4 md:mt-8">
          <div className="w-full max-w-[640px] text-center justify-start">
            <span className="text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
              미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것”이라는 말처럼,
              대한교수협회는 막연한 기대가 아닌{" "}
            </span>
            <span className="text-black text-base md:text-xl font-semibold font-['Roboto'] leading-relaxed md:leading-9">
              구체적인 실행과 책임
            </span>
            <span className="text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
              으로 다음 세대에 물려줄{" "}
            </span>
            <span className="text-black text-base md:text-xl font-medium font-['Roboto'] leading-relaxed md:leading-9">
              지속 가능한 교수 공동체
            </span>
            <span className="text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
              를 설계합니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
