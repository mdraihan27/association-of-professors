import { Logo } from "./illustrations/logo";
import { Dot } from "lucide-react";
import { Tick } from "./illustrations/tick";

export function Eighth() {
  return (
    <div className="w-[1440px] px-[75px] py-20 relative bg-white inline-flex flex-col justify-center items-center gap-20 overflow-hidden">
      <Logo className="w-[585px] h-[611px] left-[-43px] top-[600.33px] absolute rotate-180 z-10" />
      <div className="self-stretch flex flex-col justify-start items-center gap-10 relative z-30">
        <div className="self-stretch flex flex-col justify-start items-center gap-6 relative z-30">
          <div className="self-stretch text-center justify-start text-[#02203b] text-5xl font-extrabold font-['Roboto'] leading-[52.80px]">
            어떻게 함께할 수 있나요?
          </div>
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-10 relative z-30">
        <div className="flex-1 self-stretch pb-10 bg-white rounded-[18px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] outline outline-[1.70px] outline-offset-[-1.70px] outline-[#e0e4ec] inline-flex flex-col justify-start items-center gap-10 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-center">
            <div className="self-stretch px-10 py-6 bg-[#f4f6fb] flex flex-col justify-start items-start gap-[15px]">
              <div className="justify-start text-black text-[22px] font-bold font-['Roboto'] tracking-widest">
                카페 일반회원
              </div>
              <div className="justify-start text-[#3c3c3c] text-xl font-normal font-['Roboto']">
                일반회원
              </div>
            </div>
            <div className="self-stretch h-0 rounded-[17.01px] border-[1.50px] border-[#0b2131]/50" />
          </div>
          <div className="self-stretch px-6 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex justify-start items-start gap-4">
              <div className="size-6 relative">
                <Tick />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-3.5">
                <div className="self-stretch justify-start text-black text-xl font-medium font-['Roboto']">
                  대상
                </div>
                <div className="self-stretch justify-start text-black text-lg font-normal font-['Roboto']">
                  사회복지·심리상담에 관심 있는 학생·실무자·일반 시민 누구나
                </div>
              </div>
            </div>
            <div className="self-stretch h-[1px] bg-[#8a8a8a80]" />
            <div className="self-stretch inline-flex justify-start items-start gap-4">
              <div className="size-6 relative">
                <Tick />
              </div>
              <div className="size- inline-flex flex-col justify-start items-start gap-3.5">
                <div className="self-stretch justify-start text-black text-xl font-medium font-['Roboto']">
                  할 수 있는 일
                </div>
                <div className="justify-start text-black text-lg font-normal font-['Roboto'] leading-9">
                  <span className="flex items-center">
                    {" "}
                    <Dot />
                   전공·진로·현장 고민 질문하기
                  </span>
                  <span className="flex items-cente">
                    {" "}
                    <Dot />
                     세무·법률·사업 등 실무자의 답변 받기
                  </span>
                  <span className="flex items-cente">
                    {" "}
                    <Dot />
                    세미나·강의·스터디 등 각종 정보를 한 번에 확인
                  </span>
                
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 pb-10 bg-white/80 rounded-[18px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] outline outline-[1.70px] outline-offset-[-1.70px] outline-[#e0e4ec] inline-flex flex-col justify-start items-center gap-10 overflow-hidden">
          <div className="self-stretch flex flex-col justify-start items-center">
            <div className="self-stretch px-10 py-6 bg-[#1f3550] flex flex-col justify-start items-start gap-[15px]">
              <div className="self-stretch justify-start text-white text-[22px] font-bold font-['Roboto']">
                교수·박사 회원
              </div>
              <div className="self-stretch justify-start text-[#dcdcdc] text-xl font-normal font-['Roboto']">
                협회 정회원
              </div>
            </div>
            <div className="self-stretch h-0 rounded-[17.01px] border-[1.50px] border-[#0b2131]/50" />
          </div>
          <div className="self-stretch px-6 flex flex-col justify-start items-start gap-6">
            <div className="self-stretch inline-flex justify-start items-start gap-4">
              <div className="size-6 relative">
                <Tick />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-3.5">
                <div className="self-stretch justify-start text-black text-xl font-medium font-['Roboto']">
                  대상
                </div>
                <div className="self-stretch justify-start text-black text-lg font-normal font-['Roboto']">
                  사회복지·심리상담 및 관련 분야 박사학위 소지자
                </div>
              </div>
            </div>
            <div className="self-stretch h-[1px] bg-[#8a8a8a80]" />
            <div className="self-stretch inline-flex justify-start items-start gap-4">
              <div className="size-6 relative">
                <Tick />
              </div>
              <div className="w-[403.08px] inline-flex flex-col justify-start items-start gap-3.5">
                <div className="self-stretch justify-start text-black text-xl font-medium font-['Roboto']">
                  절차
                </div>
                <div className="w-[542px] justify-start text-black text-lg font-normal font-['Roboto']">
                  협회 심의 절차를 거쳐 정회원으로 위촉
                </div>
              </div>
            </div>
            <div className="self-stretch h-[1px] bg-[#8a8a8a80]" />
            <div className="self-stretch inline-flex justify-start items-start gap-4">
              <div className="size-6 relative">
                <Tick />
              </div>
              <div className="flex-1 inline-flex flex-col justify-start items-start gap-3.5">
                <div className="self-stretch justify-start text-black text-xl font-medium font-['Roboto']">
                  역할
                </div>
                <div className="self-stretch justify-start text-black text-lg font-normal font-['Roboto'] leading-9">
                  <span className="flex items-cente">
                    {" "}
                    <Dot />
                    협회 비전·정책·사업 방향을 함께 설계
                  </span>
                  <span className="flex items-cente">
                    {" "}
                    <Dot />
                    공공정책 자문, 연구·교육 프로젝트 주도
                  </span>
                  <span className="flex items-cente">
                    {" "}
                    <Dot />
                    콘텐츠·사업화 프로젝트에 핵심 파트너로 참여
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center justify-center text-black text-xl font-normal font-['Roboto'] leading-9">
        사회복지·심리상담에 관심 있는 분들은
        <br />
        대한교수협회 산하 네이버 카페에서 일반회원으로,
        <br />
        대학교수·연구자·박사님들은 협회 정회원으로 함께하실 수 있습니다.
      </div>
    </div>
  );
}
