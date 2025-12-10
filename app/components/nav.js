import Image from "next/image";
export function Nav() {
  return (
    <div className="w-[1440px] px-20 py-10 bg-[#02203b] inline-flex flex-col justify-start items-start gap-2.5">
      <Image
      width={"188"}
      height={"34"}
      src={"/logo.png"}
      alt="Logo"
      />
    </div>
  );
}
