import { Logo } from "./illustrations/logo";
import { Dot } from "lucide-react";
import { Tick } from "./illustrations/tick";

export function Eighth() {
  return (
    <div className="w-full flex justify-center relative bg-white overflow-hidden">
      <Logo className="hidden sm:block w-[260px] sm:w-[360px] md:w-[480px] lg:w-[585px] h-auto absolute rotate-180 z-10 left-1/2 -translate-x-1/2 top-[520px] lg:left-[-43px] lg:top-[600.33px] lg:translate-x-0" />
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[75px] py-12 md:py-16 lg:py-20 flex flex-col items-center gap-10 md:gap-16 lg:gap-20 relative z-20">
        <div className="w-full flex flex-col items-center gap-6">
          <div className="w-full text-center text-[#02203b] text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Roboto'] leading-snug md:leading-[52.80px]">
            어떻게 함께할 수 있나요?
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row justify-start items-stretch gap-6 lg:gap-10">
          {/* 카페 일반회원 카드 */}
          <div className="flex-1 pb-0  bg-white rounded-[18px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] outline outline-[1.70px] outline-offset-[-1.70px] outline-[#e0e4ec] flex flex-col items-stretch gap-8 md:gap-10 overflow-hidden">
            <div className="w-full flex flex-col items-stretch">
              <div className="w-full px-6 sm:px-8 md:px-10 py-6 bg-[#f4f6fb] flex flex-col items-start gap-[15px]">
                <div className="text-black text-[22px] font-bold font-['Roboto'] tracking-widest">
                  카페 일반회원
                </div>
                <div className="text-[#3c3c3c] text-xl font-normal font-['Roboto']">일반회원</div>
              </div>
              <div className="w-full h-0 rounded-[17.01px] border-[1.50px] border-[#0b2131]/50" />
            </div>

            <div className="w-full px-6 flex flex-col items-start gap-6">
              <div className="w-full inline-flex justify-start items-start gap-4">
                <div className="size-6 relative">
                  <Tick />
                </div>
                <div className="flex-1 flex flex-col items-start gap-3.5">
                  <div className="text-black text-xl font-medium font-['Roboto']">대상</div>
                  <div className="text-black text-base md:text-lg font-normal font-['Roboto'] leading-relaxed md:leading-9">
                    사회복지·심리상담에 관심 있는 학생·실무자·일반 시민 누구나
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#8a8a8a80]" />

              <div className="w-full inline-flex justify-start items-start gap-4">
                <div className="size-6 relative">
                  <Tick />
                </div>
                <div className="flex flex-col items-start gap-3.5">
                  <div className="text-black text-xl font-medium font-['Roboto']">할 수 있는 일</div>
                  <div className="text-black text-base md:text-lg font-normal font-['Roboto'] leading-relaxed md:leading-9">
                    <span className="flex items-center">
                      <Dot />
                      <span className="ml-2">전공·진로·현장 고민 질문하기</span>
                    </span>
                    <span className="flex items-center">
                      <Dot />
                      <span className="ml-2">세무·법률·사업 등 실무자의 답변 받기</span>
                    </span>
                    <span className="flex items-center">
                      <Dot />
                      <span className="ml-2">세미나·강의·스터디 등 각종 정보를 한 번에 확인</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 교수·박사 회원 카드 */}
          <div className="flex-1 pb-22 md:pb-8 lg:pb-10 bg-white/80 rounded-[18px] shadow-[0px_3px_3px_0px_rgba(0,0,0,0.25)] outline outline-[1.70px] outline-offset-[-1.70px] outline-[#e0e4ec] flex flex-col items-stretch gap-8 md:gap-10 overflow-hidden">
            <div className="w-full flex flex-col items-stretch">
              <div className="w-full px-6 sm:px-8 md:px-10 py-6 bg-[#1f3550] flex flex-col items-start gap-[15px]">
                <div className="w-full text-white text-[22px] font-bold font-['Roboto']">
                  교수·박사 회원
                </div>
                <div className="w-full text-[#dcdcdc] text-xl font-normal font-['Roboto']">
                  협회 정회원
                </div>
              </div>
              <div className="w-full h-0 rounded-[17.01px] border-[1.50px] border-[#0b2131]/50" />
            </div>

            <div className="w-full px-6 flex flex-col items-start gap-6">
              <div className="w-full inline-flex justify-start items-start gap-4">
                <div className="size-6 relative">
                  <Tick />
                </div>
                <div className="flex-1 flex flex-col items-start gap-3.5">
                  <div className="text-black text-xl font-medium font-['Roboto']">대상</div>
                  <div className="text-black text-base md:text-lg font-normal font-['Roboto'] leading-relaxed md:leading-9">
                    사회복지·심리상담 및 관련 분야 박사학위 소지자
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#8a8a8a80]" />

              <div className="w-full inline-flex justify-start items-start gap-4">
                <div className="size-6 relative">
                  <Tick />
                </div>
                <div className="w-full flex flex-col items-start gap-3.5">
                  <div className="text-black text-xl font-medium font-['Roboto']">절차</div>
                  <div className="w-full md:w-[542px] text-black text-base md:text-lg font-normal font-['Roboto'] leading-relaxed md:leading-9">
                    협회 심의 절차를 거쳐 정회원으로 위촉
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#8a8a8a80]" />

              <div className="w-full inline-flex justify-start items-start gap-4">
                <div className="size-6 relative">
                  <Tick />
                </div>
                <div className="flex-1 flex flex-col items-start gap-3.5">
                  <div className="text-black text-xl font-medium font-['Roboto']">역할</div>
                  <div className="text-black text-base md:text-lg font-normal font-['Roboto'] leading-relaxed md:leading-9">
                    <span className="flex items-center">
                      <Dot />
                      <span className="ml-2">협회 비전·정책·사업 방향을 함께 설계</span>
                    </span>
                    <span className="flex items-center">
                      <Dot />
                      <span className="ml-2">공공정책 자문, 연구·교육 프로젝트 주도</span>
                    </span>
                    <span className="flex items-center">
                      <Dot />
                      <span className="ml-2">콘텐츠·사업화 프로젝트에 핵심 파트너로 참여</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-8 text-center text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
          사회복지·심리상담에 관심 있는 분들은
          <br />
          대한교수협회 산하 네이버 카페에서 일반회원으로,
          <br />
          대학교수·연구자·박사님들은 협회 정회원으로 함께하실 수 있습니다.
        </div>
      </div>
    </div>
  );
}
