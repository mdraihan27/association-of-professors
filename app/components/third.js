import { ThirdBlueIcon } from "./illustrations/third-blue-icon";
import { ThirdDarkIcon } from "./illustrations/third-dark-icon";
import { ThirdGoldenIcon } from "./illustrations/third-golden-icon";

export function Third() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1440px] self-stretch px-4 sm:px-6 md:px-[75px] py-12 md:py-16 lg:py-20 bg-[#f7f3ec] inline-flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-10 lg:gap-[108px]">
          <div className="w-full lg:w-[639px] inline-flex flex-col justify-start items-start gap-8">
            <div className="self-stretch justify-start text-[#02203b] text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Roboto'] leading-snug md:leading-[52.80px] tracking-wider">
              대한민국 교수들이
              <br />
              함께 만드는
              <br />
              지식허브
            </div>

            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-start">
                <span className="text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                  대한교수협회는<br></br> 대한민국 여러 대학의{" "}
                </span>
                <span className="text-black text-base md:text-xl font-semibold font-['Roboto'] leading-relaxed md:leading-9">
                  모든 전공 교수·연구자·박사들이 <br />
                  함께 만드는 지식 네트워크
                </span>
                <span className="text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                  입니다.
                </span>
              </div>

              <div className="self-stretch justify-start text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                우리는 각자의 강의와 연구, 현장 역할을 지키면서도 <br></br>이론과 실천을
                잇는 ‘지성 공동체’를 지향합니다.
              </div>

              <div className="self-stretch justify-start">
                <span className="text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                  앞으로 더 많은 교수·연구자, 실무 전문가가 합류해{" "}
                </span>
                <br></br>
                <span className="text-black text-base md:text-xl font-semibold font-['Roboto'] leading-relaxed md:leading-9">
                  수많은 지성이 연결되는 플랫폼형 협회
                </span>
                <span className="text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
                  로 성장하는 것을 목표로 합니다.
                </span>
              </div>
            </div>
          </div>

          <div className="hidden w-full lg:w-[543px] lg:h-[529px] relative mt-8 lg:mt-0 flex justify-center lg:block">
            {/* Mobile / tablet layout for images */}
            <div className="w-full max-w-sm flex flex-col items-center gap-4 lg:hidden">
              <img
                className="w-full rounded-lg overflow-hidden"
                src="/images/table.png"
                alt="회의 테이블 사진"
              />
              <img
                className="w-full rounded-lg shadow-[10px_20px_20px_0px_rgba(0,0,0,0.20)] bg-green-300"
                src="/images/meeting.png"
                alt="회의 중인 모습"
              />
            </div>

            {/* Desktop layout for images (original composition preserved) */}
            <div className="hidden lg:block w-[543px] h-[529px] relative">
              <img
                className="w-[379px] h-[418px] left-[165px] top-[111px] absolute rounded-lg overflow-hidden"
                src="/images/table.jpg"
                alt="회의 테이블 사진"
              />
              <img
                className="absolute rounded-lg shadow-[10px_20px_20px_0px_rgba(0,0,0,0.20)] bg-green-300"
                src="/images/meeting.jpg"
                width={352}
                alt="회의 중인 모습"
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[1290px] flex flex-col md:flex-row justify-start items-stretch gap-6 md:gap-8 mt-8">
          <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_15px_35px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-[#e5eaf4] flex justify-start items-start gap-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_20px_45px_0px_rgba(0,0,0,0.12)] hover:outline-[#d4deee]">
            <div className="w-9 h-[37px] relative">
              <ThirdBlueIcon className="size-9 left-0 top-0 absolute" />
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch justify-start text-[#161c2d] text-xl font-normal font-['Roboto']">
                교수·연구자
              </div>
              <div className="self-stretch justify-start text-[#5a7184] text-sm md:text-base font-normal font-['Roboto'] leading-relaxed md:leading-7">
                강의·연구로 쌓인 지식을 나누고,<br></br> 신뢰할 기준을 함께 세웁니다.
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_15px_35px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-[#e5eaf4] flex justify-start items-start gap-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_20px_45px_0px_rgba(0,0,0,0.12)] hover:outline-[#d4deee]">
            <div className="w-9 h-[37px] relative">
              <ThirdGoldenIcon className="w-[30px] h-9 left-[3px] top-[0.50px] absolute" />
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch justify-start text-[#161c2d] text-xl font-normal font-['Roboto']">
                박사·전문가
              </div>
              <div className="self-stretch justify-start text-[#5a7184] text-sm md:text-base font-normal font-['Roboto'] leading-relaxed md:leading-7">
                전문 연구와 현장 사례를 잇고,<br></br> 현실에 쓸 수 있는 모델과 매뉴얼을
                만듭니다.
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 bg-white rounded-2xl shadow-[0px_15px_35px_0px_rgba(0,0,0,0.05)] outline outline-1 outline-offset-[-1px] outline-[#e5eaf4] flex justify-start items-start gap-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_20px_45px_0px_rgba(0,0,0,0.12)] hover:outline-[#d4deee]">
            <div className="w-9 h-[37px] relative">
              <ThirdDarkIcon className="w-9 h-[34px] left-0 top-[1.50px] absolute" />
            </div>
            <div className="flex-1 inline-flex flex-col justify-start items-start gap-1.5">
              <div className="self-stretch justify-start text-[#161c2d] text-xl font-normal font-['Roboto']">
                현장 실무자
              </div>
              <div className="justify-start text-[#5a7184] text-sm md:text-base font-normal font-['Roboto'] leading-relaxed md:leading-7">
                학교·기관·기업·지역의 경험을 나누며<br></br> 연구와 제안의 실제 효과를
                함께 점검합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
