import cards from "./data/tenthCards.json";
import { Sync } from "./illustrations/sync";
import { User } from "./illustrations/user";
import { Heart } from "./illustrations/heart";

function Card({ card }) {
  const { cardClass, name, role, body } = card;
  return (
    <div className="w-full flex justify-center md:justify-start">
      <div
        className={`${cardClass} relative transition-all duration-200 hover:-translate-y-2 hover:shadow-[0px_24px_60px_-20px_rgba(0,0,0,0.35)] hover:bg-white hover:outline-[#02203b] hover:scale-[1.01] hover:z-[100]`}
      >
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
        <div className="self-stretch inline-flex justify-start items-center gap-4">
          <div className="size-14 relative bg-[#02203b] rounded-[100px] overflow-hidden flex justify-center items-center">
            <User className="w-6 h-[27px] left-[16px] top-[15px] absolute bg-white" />
          </div>
            <div className="size- pr-[3.84px] pb-px inline-flex flex-col justify-start items-start">
              <div className="justify-center text-[#141414] text-lg md:text-[21px] font-medium font-['Roboto'] leading-[26.40px]">
                {name}
              </div>
              <div className="justify-center text-gray-400 text-sm md:text-[17px] font-normal font-['Roboto'] leading-[26px]">
                {role}
              </div>
          </div>
        </div>
        <div
          className="self-stretch justify-center text-[#141414] text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-[26.40px]"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        </div>
        <CardFooter />
      </div>
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
    <div className="w-full flex justify-center relative bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] px-4 sm:px-6 md:px-[75px] pt-12 md:pt-16 lg:pt-20 pb-12 md:pb-16 lg:pb-20 flex flex-col justify-center items-center gap-10 md:gap-16 lg:gap-20 relative">
        <div className="w-full flex flex-col justify-start items-center gap-6 md:gap-8">
          <div className="relative flex flex-col justify-start items-center gap-4 md:gap-6 w-full max-w-[820px]">
            <div className="w-[220px] sm:w-[300px] md:w-[382px] h-6 bg-[#b9ddff] absolute top-1/2 -translate-y-1/2" />
            <div className="w-full text-center text-[#02203b] text-3xl sm:text-4xl md:text-5xl font-extrabold font-['Roboto'] leading-snug md:leading-[52.80px] relative z-10">
            지성이 움직일 차례입니다.
            </div>
          </div>
          <div className="w-full max-w-[720px] text-center text-black text-base md:text-xl font-normal font-['Roboto'] leading-relaxed md:leading-9">
            우리는 다른 의견을 틀린 것으로 보지 않고,
            <br></br>
            서로의 관점을 인정하고 존중하는 것이 더 나은 학회를 만드는 길이라고 믿습니다.
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-start gap-6 md:gap-4 lg:gap-6 overflow-visible">
          {cards.map((column, columnIndex) => {
            let columnClass =
              "w-full md:w-auto flex flex-col justify-start items-stretch gap-6";

            if (columnIndex === 1) {
              // Second column: hide on mobile, show from md (tablet) upwards
              columnClass += " hidden md:flex";
            } else if (columnIndex >= 2) {
              // Third and fourth columns: show only on large screens (desktop)
              columnClass += " hidden lg:flex";
            }

            return (
              <div key={columnIndex} className={columnClass}>
                {column.map((card, cardIndex) => {
                  const wrapperClass =
                    columnIndex === 0 && cardIndex === 1
                      ? "hidden md:block" // hide second card of first column on mobile
                      : "block";

                  return (
                    <div
                      key={`${card.name}-${card.role}`}
                      className={wrapperClass}
                    >
                      <Card card={card} />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[260px] sm:h-[340px] lg:h-[430px] bg-gradient-to-t from-white via-white/95 to-transparent" />
      </div>
    </div>
  );
}