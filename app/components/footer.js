export function Footer() {
  return (
    <div className="w-full flex justify-center bg-black rounded-tl-[32px] rounded-tr-[32px]">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[75px] py-6 md:py-10 flex flex-col justify-start items-stretch gap-4 md:gap-6">
        <div className="w-full flex flex-col justify-start items-stretch gap-3">
          <div className="w-full flex flex-col md:flex-row justify-between md:items-end gap-3">
            <img className="cursor-pointer w-[120px] sm:w-[140px] md:w-auto" src="/logo.png" />
            <div className="text-white text-xs sm:text-sm font-normal font-['Roboto'] leading-[22px] md:leading-[25.20px] md:text-right">
              회장 : 성무진
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-4">
            <div className="w-full md:max-w-[290px] text-white text-xs sm:text-sm font-normal font-['Roboto'] leading-[22px] md:leading-[25.20px]">
              경기도 수원시 권선구 호매실로 104번길 245-76
            </div>
            <a
              href="mailto:ssk1237@naver.com"
              className="text-white text-xs sm:text-sm font-normal font-['Helvetica'] leading-[22px] md:leading-[25.20px] cursor-pointer hover:underline md:text-right"
            >
              ssk1237@naver.com
            </a>
          </div>
        </div>
        <div className="w-full h-0 outline outline-1 outline-offset-[-0.50px] outline-white/40" />
        <div className="w-full text-center text-white text-xs sm:text-sm font-normal font-['Helvetica'] leading-[22px] md:leading-[25.20px]">
          © 대한교수협회 | 모든 권리 보유
        </div>
      </div>
    </div>
  );
}
