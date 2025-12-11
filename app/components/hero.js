import Image from "next/image";
export function Hero() {
  return (
    <div className="self-stretch px-[75px] py-20 bg-[#02203b] inline-flex flex-col justify-start items-center gap-20 overflow-hidden">
  <div className="self-stretch flex flex-col justify-start items-center gap-8">
    <div className="self-stretch flex flex-col justify-start items-center gap-6">
      <div className="self-stretch text-center justify-start text-[#d8c292] text-[22px] font-medium font-['Roboto'] uppercase leading-6 tracking-widest">대한민국 교수들의 연대, 대한교수협회</div>
      <div className="self-stretch text-center justify-start text-white text-[64px] font-extrabold font-['Roboto'] leading-[70.40px] tracking-widest">더 나은 미래를 위한<br/>지성의 개척, 미래를 향한 서사</div>
    </div>
    <div className="text-center justify-start text-slate-300 text-lg font-normal font-['Roboto'] leading-[28.80px]">대한민국 여러 대학, 다양한 전공의 교수들이 모였습니다.<br/>대한교수협회는 지성의 힘으로 더 나은 미래를 설계하는 공동체입니다.</div>
    <div className="w-[528px] inline-flex justify-center items-center gap-[29px]">
      <div className="flex-1 p-4 bg-[#b89752] rounded-lg outline outline-1 outline-offset-[-1px] outline-[#846932] flex justify-center items-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#c8a860]">
        <div className="size- px-4 flex justify-center items-center">
          <div className="justify-start text-black text-xl font-bold font-['Roboto'] leading-6 tracking-wide">협회 소개 보기</div>
        </div>
      </div>
      <div className="flex-1 p-4 bg-[#3a485d] rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-600 flex justify-center items-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-[#4b5c77]">
        <div className="size- px-4 flex justify-center items-center">
          <div className="justify-start text-white text-xl font-medium font-['Roboto'] leading-6 tracking-wide">네이버 카페 바로가기</div>
        </div>
      </div>
    </div>
  </div>
  <Image
    width={266}
    height={266}
    alt="Bool sprading light"
    src={"/illustrations/book.png"}
  />


</div>
  );
}
