import cards from "./data/tenthCards.json";
import { Sync } from "./illustrations/sync";
import { User } from "./illustrations/user";
import { Heart } from "./illustrations/heart";

function Card({ card }) {
  const { cardClass, name, role, body } = card;
  return (
    <div className={cardClass}>
      <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <div className="self-stretch inline-flex justify-start items-center gap-4">
          <div className="size-14 relative bg-[#02203b] rounded-[100px] overflow-hidden flex justify-center items-center">
            <User className="w-6 h-[27px] left-[16px] top-[15px] absolute bg-white" />
          </div>
          <div className="size- pr-[3.84px] pb-px inline-flex flex-col justify-start items-start">
            <div className="justify-center text-[#141414] text-[21px] font-medium font-['Roboto'] leading-[26.40px]">{name}</div>
            <div className="justify-center text-gray-400 text-[17px] font-normal font-['Roboto'] leading-[26px]">{role}</div>
          </div>
        </div>
        <div
          className="self-stretch justify-center text-[#141414] text-xl font-normal font-['Roboto'] leading-[26.40px]"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </div>
      <CardFooter />
    </div>
  );
}

function CardFooter() {
  return (
    <div className="self-stretch flex justify-start items-center gap-3">
       <Sync/>
      <p className=" text-gray-400 text-[15px] font-normal font-['Roboto'] leading-6">36</p>
      
       <Heart/>
    </div>
  );
}

export function Tenth() {
  return (
    <div className="w-[1440px] px-[75px] pt-20 relative bg-white inline-flex flex-col justify-center items-start gap-20">
      <div className="self-stretch flex flex-col justify-start items-center gap-10">
        <div className="self-stretch relative flex flex-col justify-start items-center gap-6">
          <div className="w-[382px] h-6 left-[438px] top-[31.25px] absolute bg-[#b9ddff] " />
          <div className="self-stretch text-center justify-start text-[#02203b] text-5xl font-extrabold font-['Roboto'] leading-[52.80px] relative z-30">
            이제, 지성이 움직일 차례입니다.
          </div>
        </div>
        <div className="text-center justify-start text-black text-xl font-normal font-['Roboto'] leading-9 ">
          우리는 다른 의견을 틀린 것으로 보지 않고,<br></br>서로의 관점을 인정하고 존중하는 것이 더 나은 학회를 만드는 길이라고 믿습니다.
        </div>
      </div>
      <div className="self-stretch inline-flex justify-between items-start overflow-hidden">
        {cards.map((column, columnIndex) => (
          <div key={columnIndex} className="size- inline-flex flex-col justify-start items-start gap-6">
            {column.map((card) => (
              <Card key={`${card.name}-${card.role}`} card={card} />
            ))}
          </div>
        ))}
      </div>
        <div className="w-[1440px] h-[511px] px-[623.20px] pt-[400px] pb-24 left-0 top-[840.25px] absolute bg-linear-360 from-white via-white to-transparent" />

    </div>
  );
}