import { Slash } from "./illustrations/slash";
import { Icon1, Icon2, Icon3, Icon4 } from "./illustrations/fifth-icons";
export function Fifth() {
  return (
    <div className="w-[1440px] relative px-[75px] py-20 bg-neutral-50 inline-flex flex-col justify-center items-center gap-20">
        <Slash className="absolute z-10"/>
      <div className=" relative w-[1290px] flex flex-col justify-start items-center gap-10 z-20 ">
        <div className="self-stretch text-center justify-start text-[#02203b] text-5xl font-extrabold font-['Roboto'] leading-[52.80px]">
          우리가 함께 그리는 ‘더 나은 미래’의 지도
        </div>
        <div className="text-center justify-start text-black text-xl font-normal font-['Roboto'] leading-9">
          대한교수협회가 지향하는 네 가지 축을 한눈에 정리했습니다.
        </div>
      </div>
      <div className="me-[630px] relative z-20 p-6 bg-white rounded-3xl shadow-[0px_35px_116px_-10px_rgba(154,167,193,0.25)] inline-flex justify-start items-center gap-4">
        <div className="size-[73px] px-[21px] py-[9px] bg-[#ebf3ff] rounded-[36.50px] flex justify-start items-center gap-2.5">
          <Icon1 />
        </div>
        <div className="w-[454px] inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-black text-[22px] font-semibold font-['Roboto'] capitalize">
            전문성 – 지식의 깊이
          </div>
          <div className="self-stretch justify-start text-[#2a2a2a] text-base font-normal font-['Roboto'] leading-7">
            각 전공의 교수·연구자가 함께 쌓아 온 깊이 있는 지식과 연구를
            기반으로 합니다.
          </div>
        </div>
      </div>
      <div className="ms-[530px] relative z-20 p-6 bg-white rounded-3xl shadow-[0px_35px_116px_-10px_rgba(154,167,193,0.25)] inline-flex justify-start items-center gap-4">
        <div className="size-[73px] px-4 py-[18px] bg-[#ebf3ff] rounded-[36.50px] inline-flex flex-col justify-center items-center gap-2.5">
          <Icon2 />
        </div>
        <div className="w-[503px] inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-black text-[22px] font-semibold font-['Roboto'] capitalize">
            공공성 – 사회를 향한 책임
          </div>
          <div className="self-stretch justify-start text-black text-base font-normal font-['Roboto'] leading-7">
            학문적 통찰을 바탕으로 정책·산업·지역사회 문제 해결에 적극
            참여합니다.
          </div>
        </div>
      </div>
      <div className="me-[600px] relative z-20 p-6 bg-white rounded-3xl shadow-[0px_35px_116px_-10px_rgba(154,167,193,0.25)] inline-flex justify-start items-center gap-4">
        <div className="size-[73px] bg-[#ebf3ff] rounded-full flex justify-center items-center">
          <Icon3 />
        </div>
        <div className="w-[530px] inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-black text-[22px] font-semibold font-['Roboto'] capitalize">
            열린 거버넌스 – 함께 결정하는 협회
          </div>
          <div className="self-stretch justify-start text-black text-base font-normal font-['Roboto'] leading-7">
            소수 운영진이 아니라 전체 회원의 의견과 토론을 반영해 주요 방향을
            결정합니다.
          </div>
        </div>
      </div>
      <div className="ms-[520px] relative z-20 w-[760px] p-6 bg-white rounded-3xl shadow-[0px_35px_116px_-10px_rgba(154,167,193,0.25)] inline-flex justify-start items-start gap-4">
        <div className="size-[73px] bg-[#ebf3ff] rounded-full flex justify-center items-center">
          <Icon4 />
        </div>
        <div className="w-[623px] inline-flex flex-col justify-start items-start gap-2">
          <div className="self-stretch justify-start text-black text-[22px] font-semibold font-['Roboto'] capitalize">
            지속 가능성 – 재정적 자립과 100년 공동체
          </div>
          <div className="self-stretch justify-start text-black text-base font-normal font-['Roboto'] leading-7">
            지식콘텐츠·교육·연구 프로젝트를 통한 건강한 수익 구조로, 다음
            세대까지 이어지는 학문 공동체를 지향합니다.
          </div>
        </div>
      </div>
      <div className="size- p-6 inline-flex justify-center items-center gap-2.5">
        <div className="w-[640px] h-[105px] text-center justify-start">
          <span className="text-black text-xl font-normal font-['Roboto'] leading-9">
            미래를 예측하는 가장 좋은 방법은 미래를 창조하는 것”이라는 말처럼,
            대한교수협회는 막연한 기대가 아닌{" "}
          </span>
          <span className="text-black text-xl font-semibold font-['Roboto'] leading-9">
            구체적인 실행과 책임
          </span>
          <span className="text-black text-xl font-normal font-['Roboto'] leading-9">
            으로 다음 세대에 물려줄{" "}
          </span>
          <span className="text-black text-xl font-medium font-['Roboto'] leading-9">
            지속 가능한 교수 공동체
          </span>
          <span className="text-black text-xl font-normal font-['Roboto'] leading-9">
            를 설계합니다.
          </span>
        </div>
      </div>
    </div>
  );
}
