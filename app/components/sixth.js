import { Logo } from "./illustrations/logo";

export function Sixth() {
  return (
    <div className="w-full flex justify-center bg-white relative overflow-hidden">
      <Logo className="hidden sm:block w-[260px] sm:w-[360px] md:w-[480px] lg:w-[783px] h-auto absolute z-10 left-1/2 -translate-x-1/2 top-20 sm:top-24 md:top-28 lg:left-[836px] lg:top-[353.33px] lg:translate-x-0" />
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[75px] py-12 md:py-16 lg:py-20 flex flex-col justify-center items-center gap-10 md:gap-16 lg:gap-20 relative z-20">
        <div className="w-full max-w-[1290px] flex flex-col justify-start items-center gap-4 md:gap-6">
          <div className="self-stretch text-center justify-start text-[#02203b] text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Roboto'] leading-snug md:leading-[52.80px]">
            대한교수협회 선언문
          </div>
          <div className="text-center justify-start text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
            참된 교육자와 연구자로서 사회와 미래 세대에 대한 깊은 책임감을
            인식하며,
            <br></br> 대한교수협회 회원 일동은 다음과 같이 엄숙히 선언한다.
          </div>
        </div>

        <div className="w-full max-w-[856px] flex flex-col justify-center items-stretch gap-4 md:gap-6 relative z-30">
          <div className="w-full px-6 sm:px-8 md:px-10 py-4 bg-white rounded-lg shadow-[0px_5px_5px_0px_rgba(0,0,0,0.20)] inline-flex justify-start items-center gap-6 sm:gap-8 md:gap-10 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_12px_24px_0px_rgba(0,0,0,0.16)] hover:bg-[#f9fbff]">
            <div className="w-[4px] h-[50px] bg-black"></div>
            <div className="flex-1 text-center justify-start text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
              하나. 우리는 대한교수협회의 본분을 다하며, 정의롭고 공정한 교육을
              실천한다.
            </div>
          </div>

          <div className="w-full px-6 sm:px-8 md:px-10 py-4 bg-white rounded-lg shadow-[0px_5px_5px_0px_rgba(0,0,0,0.20)] inline-flex justify-start items-center gap-6 sm:gap-10 md:gap-12 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_12px_24px_0px_rgba(0,0,0,0.16)] hover:bg-[#f9fbff]">
            <div className="w-[4px] h-[50px] bg-black"></div>
            <div className="flex-1 text-center justify-start text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
              하나. 우리는 학문의 자유를 수호하며, 교수 본연의 학문적 사명을
              변함없이 실천한다.
            </div>
          </div>

          <div className="w-full px-6 sm:px-8 md:px-10 py-4 bg-white rounded-lg shadow-[0px_5px_5px_0px_rgba(0,0,0,0.20)] inline-flex justify-start items-center gap-6 sm:gap-10 md:gap-12 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_12px_24px_0px_rgba(0,0,0,0.16)] hover:bg-[#f9fbff]">
            <div className="w-[4px] h-[50px] bg-black"></div>
            <div className="flex-1 text-center justify-start text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
              하나. 우리는 소통과 상호 존중을 바탕으로 사회의 품위를 지키고,
              <br></br>
              협회의 가치와 규범을 실천하여 학술 환경의 질적 향상에 협력한다.
            </div>
          </div>

          <div className="w-full px-6 sm:px-8 md:px-10 py-4 bg-white rounded-lg shadow-[0px_5px_5px_0px_rgba(0,0,0,0.20)] inline-flex justify-start items-center gap-6 sm:gap-10 md:gap-14 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_12px_24px_0px_rgba(0,0,0,0.16)] hover:bg-[#f9fbff]">
            <div className="w-[4px] h-[50px] bg-black"></div>
            <div className="flex-1 text-center justify-start text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
              하나. 우리는 대한민국의 미래를 가꾸는 책임 있는 지식인으로서
              <br></br>
              대한교수협회의 지속 가능한 발전에 기여한다.
            </div>
          </div>
        </div>

        <div className="w-full max-w-[856px] flex flex-col justify-start items-center gap-4 md:gap-6 mt-4 md:mt-6">
          <div className="text-center justify-center text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
            대한교수협회는 이 선언을 바탕으로 교육, 학문, 사회 전반의 발전에
            기여하며,
            <br></br> 더 나은 학문 공동체를 구축해 나갈 것을 엄숙히 선언한다.
          </div>
          <div className="text-center justify-center font-semibold">
            <span className="text-black text-base md:text-xl font-['Roboto'] leading-relaxed md:leading-9">
              대한교수협회 회장
            </span>
            <span className="text-black text-base md:text-xl font-['Roboto'] leading-relaxed md:leading-9 tracking-wide">
              성 무 진
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
