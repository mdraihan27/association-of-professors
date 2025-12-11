import { FourthTree } from "./illustrations/fourth-tree";
export function Fourth() {
  return (
    <div className="w-[1440px] px-[75px] py-20 bg-white inline-flex flex-col justify-center items-center gap-20">
      <div className="w-[1290px] flex flex-col justify-start items-center gap-10">
        <div className="self-stretch text-center justify-start text-[#02203b] text-5xl font-extrabold font-['Roboto'] leading-[52.80px]">
          대한교수협회 조직 구성
        </div>
        <div className="text-center justify-start text-black text-xl font-normal font-['Roboto'] leading-9">
          대한교수협회는 다음과 같은 조직으로 운영되며,<br></br> 모든 의사결정은 학문적
          독립성과 공공성을 원칙으로 합니다.
        </div>
      </div>
      <FourthTree/>
    </div>
  );
}
