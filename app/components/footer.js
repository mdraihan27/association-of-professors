export function Footer() {
  return (
    <div className="w-[1440px] px-[75px] py-10 bg-black rounded-tl-[32px] rounded-tr-[32px] inline-flex flex-col justify-start items-start gap-6">
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch inline-flex justify-between items-end">
          <img className="cursor-pointer" src="/logo.png" />{" "}
          <div className="justify-start text-white text-sm font-normal font-['Roboto'] leading-[25.20px]">
            회장 : 성무진
          </div>
        </div>
        <div className="w-[1290px] h-[33.68px] inline-flex justify-between items-center">
          <div className="w-[290px] justify-start text-white text-sm font-normal font-['Roboto'] leading-[25.20px]">
            경기도 수원시 권선구 호매실로 104번길 245-76
          </div>
          <a
            href="mailto:ssk1237@naver.com"
            className="justify-start text-white text-sm font-normal font-['Helvetica'] leading-[25.20px] cursor-pointer hover:underline"
          >
            ssk1237@naver.com
          </a>
        </div>
      </div>
      <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-white/40"></div>
      <div className="self-stretch text-center justify-start text-white text-sm font-normal font-['Helvetica'] leading-[25.20px]">
        © 대한교수협회 | 모든 권리 보유
      </div>
    </div>
  );
}
