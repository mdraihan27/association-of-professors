import { FourthTree } from "./illustrations/fourth-tree";
export function Fourth() {
  return (
    <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[75px] py-6 md:py-14 lg:py-20 bg-white inline-flex flex-col justify-center items-center gap-6 md:gap-14 lg:gap-20">
      <div className="w-full max-w-[1290px] flex flex-col justify-start items-center gap-3 md:gap-8">
        <div className="self-stretch text-center justify-start text-[#02203b] text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Roboto'] leading-snug md:leading-[52.80px]">
          대한교수협회 조직 구성
        </div>
        <div className="text-center justify-start text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
          대한교수협회는 다음과 같은 조직으로 운영되며,<br></br> 모든 의사결정은 학문적
          독립성과 공공성을 원칙으로 합니다.
        </div>
      </div>
      <div className="w-full flex justify-center overflow-x-auto">
        <FourthTree className="w-full max-w-[900px] md:max-w-[1200px] h-auto max-h-[260px] sm:max-h-[320px] md:max-h-none" />
      </div>
    </div>
  );
}
