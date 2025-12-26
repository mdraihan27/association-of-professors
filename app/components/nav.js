import Image from "next/image";

export function Nav() {
  return (
    <div className="w-full flex justify-center bg-[#02203b] cursor-pointer">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-20 py-4 md:py-6 lg:py-10 inline-flex flex-col justify-start items-center md:items-start gap-2.5">
        <Image
          width={188}
          height={34}
          src="/logo.png"
          alt="Logo"
          className="h-[26px] w-auto sm:h-[30px] md:h-[34px]"
        />
      </div>
    </div>
  );
}
