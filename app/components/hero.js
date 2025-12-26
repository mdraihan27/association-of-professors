import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full flex justify-center bg-[#02203b] overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[75px] py-12 md:py-16 lg:py-20 inline-flex flex-col items-center gap-12 md:gap-16 lg:gap-20">
        <div className="w-full flex flex-col items-center gap-6 md:gap-8">
          <div className="w-full flex flex-col items-center gap-4 md:gap-6">
            <p className="w-full text-center text-[#d8c292] text-xs sm:text-sm md:text-[22px] font-medium font-['Roboto'] uppercase leading-5 md:leading-6 tracking-[0.18em]">
              대한민국 교수들의 연대, 대한교수협회
            </p>
            <h1 className="w-full text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-extrabold font-['Roboto'] leading-snug sm:leading-tight md:leading-[70.40px] tracking-widest">
              더 나은 미래를 위한
              <br />
              지성의 개척, 미래를 향한 서사
            </h1>
          </div>
          <p className="max-w-[720px] text-center text-slate-300 text-sm sm:text-base md:text-lg font-normal font-['Roboto'] leading-relaxed md:leading-[28.80px]">
            대한민국 여러 대학, 다양한 전공의 교수들이 모였습니다.
            <br />
            대한교수협회는 지성의 힘으로 더 나은 미래를 설계하는 공동체입니다.
          </p>
          <div className="w-full max-w-[528px] inline-flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-[29px] mt-2">
            <button className="flex-1 p-3 sm:p-4 bg-[#b89752] rounded-lg outline outline-1 outline-offset-[-1px] outline-[#846932] flex justify-center items-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#c8a860] active:translate-y-0 active:shadow-md active:bg-[#a27e3e] cursor-pointer">
              <span className="px-2 sm:px-4 text-black text-base sm:text-lg font-bold font-['Roboto'] leading-6 tracking-wide">
                협회 소개 보기
              </span>
            </button>
            <button className="flex-1 p-3 sm:p-4 bg-[#3a485d] rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-600 flex justify-center items-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#4b5c77] active:translate-y-0 active:shadow-md active:bg-[#303a4d] cursor-pointer">
              <span className="px-2 sm:px-4 text-white text-base sm:text-lg font-medium font-['Roboto'] leading-6 tracking-wide">
                네이버 카페 바로가기
              </span>
            </button>
          </div>
        </div>

        <Image
          width={266}
          height={266}
          alt="Bool sprading light"
          src="/illustrations/book.png"
          className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[266px] lg:h-[266px] object-contain"
        />
      </div>
    </section>
  );
}
