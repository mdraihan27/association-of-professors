import Image from "next/image";

export function Seventh() {
  return (
    <div className="w-full flex justify-center bg-[#F7F3EC] relative z-30">
      <div className="w-full max-w-[1440px] py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-[75px] flex flex-col items-start gap-10 md:gap-16 lg:gap-20">
        <div className="flex flex-col items-start gap-4 md:gap-8 w-full max-w-[639px]">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 w-full">
            <p className="text-[#000] font-roboto text-3xl sm:text-4xl md:text-[48px] font-extrabold leading-snug md:leading-[1.1em] w-full sm:w-[562px] text-center sm:text-left">
              대한교수협회 × 네이버 카페
            </p>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 overflow-hidden relative "
            >
              <path
                d="M34.5455 17.4059L36.2317 19.1236C36.9457 19.8509 36.9457 21.027 36.2317 21.7465L21.4736 36.7877C20.7596 37.515 19.6051 37.515 18.8987 36.7877L4.13296 21.7465C3.41898 21.0192 3.41898 19.8432 4.13296 19.1236L5.81917 17.4059C6.54074 16.6709 7.71805 16.6864 8.42444 17.4369L17.1441 26.7602V4.52344C17.1441 3.49439 17.9568 2.6665 18.967 2.6665H21.3976C22.4078 2.6665 23.2205 3.49439 23.2205 4.52344V26.7602L31.9402 17.4369C32.6466 16.6786 33.8239 16.6632 34.5455 17.4059Z"
                fill="#02203B"
              />
            </svg>
          </div>
          <p className="text-[#000] font-roboto text-base md:text-xl font-normal leading-relaxed md:leading-[1.8em] w-full">
            대한교수협회 산하 사회복지·심리상담 카페로,<br></br>학생·실무자·일반 시민까지
            함께 질문하고 배우는<br></br>열린 지식 커뮤니티입니다.
          </p>
        </div>
        <div className="flex flex-col items-start gap-8 md:gap-10 w-full">
          <div className="flex flex-col md:flex-row md:flex-wrap items-stretch gap-6 md:gap-4 w-full">
            <div className="flex flex-col justify-between items-center rounded-xl border-3 border-[#000] bg-[#FFF] w-full md:w-[310px] h-90 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_18px_40px_-14px_rgba(0,0,0,0.25)] hover:border-[#0f2f52] hover:bg-[#f9fbff]">
              <div className="flex py-5 px-4 flex-col items-start gap-3 w-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] overflow-hidden relative "
                >
                  <g clipPath="url(#clip0_0_218)">
                    <path
                      d="M10.3001 0.916875L10.7344 2.13713C10.7991 2.31897 10.9013 2.48522 11.0342 2.62512C11.1672 2.76503 11.3281 2.87548 11.5064 2.94934C11.6847 3.0232 11.8766 3.05883 12.0695 3.05393C12.2625 3.04903 12.4523 3.0037 12.6266 2.92088L13.7966 2.36513C14.9689 1.80788 16.1921 3.03112 15.6349 4.20337L15.0791 5.37337C14.9961 5.54769 14.9505 5.73751 14.9455 5.93053C14.9405 6.12356 14.9761 6.31549 15.05 6.49388C15.1239 6.67228 15.2344 6.83316 15.3745 6.96611C15.5145 7.09905 15.6809 7.2011 15.8629 7.26562L17.0831 7.69913C18.3056 8.13412 18.3056 9.86363 17.0831 10.2994L15.8629 10.7336C15.681 10.7984 15.5148 10.9005 15.3749 11.0335C15.235 11.1665 15.1245 11.3273 15.0507 11.5056C14.9768 11.684 14.9412 11.8758 14.9461 12.0688C14.951 12.2617 14.9963 12.4515 15.0791 12.6259L15.6349 13.7959C16.1921 14.9681 14.9689 16.1914 13.7966 15.6341L12.6266 15.0784C12.4523 14.9954 12.2626 14.95 12.0696 14.9449C11.8767 14.9399 11.6848 14.9755 11.5065 15.0493C11.3281 15.1231 11.1672 15.2335 11.0342 15.3734C10.9012 15.5133 10.7991 15.6795 10.7344 15.8614L10.3001 17.0824C9.86513 18.3049 8.13563 18.3049 7.70063 17.0824L7.26638 15.8614C7.20158 15.6796 7.09937 15.5134 6.96635 15.3736C6.83334 15.2338 6.67248 15.1234 6.49415 15.0496C6.31583 14.9758 6.12401 14.9403 5.93109 14.9452C5.73817 14.9502 5.54843 14.9955 5.37413 15.0784L4.20413 15.6334C3.03188 16.1914 1.80863 14.9681 2.36588 13.7959L2.92163 12.6259C3.00471 12.4515 3.05024 12.2615 3.05527 12.0684C3.06031 11.8753 3.02473 11.6832 2.95085 11.5047C2.87697 11.3262 2.76644 11.1652 2.62639 11.0321C2.48635 10.899 2.31992 10.7968 2.13788 10.7321L0.91763 10.2986C-0.30487 9.86363 -0.30487 8.13338 0.91763 7.69838L2.13788 7.26488C2.31992 7.20038 2.4864 7.0984 2.62655 6.96552C2.7667 6.83263 2.8774 6.67182 2.95148 6.49346C3.02557 6.3151 3.06139 6.12318 3.05664 5.93011C3.05188 5.73704 3.00666 5.54712 2.92388 5.37262L2.36738 4.20262C1.81013 3.02962 3.03338 1.80638 4.20638 2.36363L5.37638 2.92013C5.55065 3.00284 5.74032 3.0481 5.93315 3.05299C6.12599 3.05787 6.31771 3.02228 6.49594 2.9485C6.67417 2.87472 6.83496 2.76439 6.96792 2.62464C7.10088 2.48488 7.20306 2.31881 7.26788 2.13713L7.70138 0.916875C8.13488 -0.305625 9.86438 -0.305625 10.2994 0.916875H10.3001Z"
                      fill="#FF884D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_218">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[#000] font-roboto text-xl md:text-2xl font-bold leading-[1.2em] w-fit">
                  활동 1.<br></br>교육 &amp; 멘토링
                </p>
                <p className="text-[#000] font-roboto text-sm md:text-base font-normal leading-[1.8em] w-full">
                  사회복지·심리상담에 관심 있는 학생과 실무자를 대상으로,
                  교수들의 강연과 소규모 멘토링을 통해 진로와 연구 방향을 함께
                  모색합니다.
                </p>
              </div>
              <div className="flex flex-col items-center shrink-0 w-full h-[107px] ">
                <Image
                  src="/illustrations/seventh/image1.png"
                  className="w-full h-full object-cover"
                  alt=""
                  width={314}
                  height={107}
                />
              </div>
            </div>
            <div className="flex flex-col items-center rounded-xl border-3 border-[#000] bg-[#FFF] w-full md:w-[310px] h-90 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_18px_40px_-14px_rgba(0,0,0,0.25)] hover:border-[#0f2f52] hover:bg-[#f9fbff]">
              <div className="flex py-5 px-4 flex-col items-start gap-3 shrink-0 w-full h-65">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="shrink-0 w-[18px] h-[18px] overflow-hidden relative "
                >
                  <path
                    d="M8.88255 4C11.3006 4 13.6197 4.93924 15.3296 6.6111C17.0394 8.28295 18 10.5505 18 12.9148V14.622H0V12.6852C0 10.3817 0.935837 8.17261 2.60164 6.54382C4.26744 4.91504 6.52675 4 8.88255 4V4Z"
                    fill="#02C27F"
                  />
                </svg>
                <p className="text-[#000] font-roboto text-xl md:text-2xl font-bold leading-[1.2em] w-fit">
                  활동 2.<br></br>실무 Q&amp;A &amp; 업종별 상담
                </p>
                <p className="text-[#000] font-roboto text-sm md:text-base font-normal leading-[1.8em] w-full">
                  사회복지기관·상담센터·현장에서 활동하는 교수·박사 및
                  실무자들이, 카페 내 Q&amp;A를 통해 세무·법률·사업·창업 등과
                  관련된 현실적인 고민을 나누고 서로 답하는 구조를 만들어
                  갑니다.
                </p>
              </div>
              <div className="flex flex-col items-center shrink-0 w-full h-[107px] ">
                <Image
                  src="/illustrations/seventh/image2.png"
                  className="w-full h-full object-cover"
                  alt=""
                  width={314}
                  height={150}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between items-between rounded-xl border-3 border-[#000] bg-[#FFF] w-full md:w-[310px] h-90 overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_18px_40px_-14px_rgba(0,0,0,0.25)] hover:border-[#0f2f52] hover:bg-[#f9fbff]">
              <div className="flex py-5 px-4 flex-col items-start gap-3 w-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] overflow-hidden relative "
                >
                  <g clipPath="url(#clip0_0_238)">
                    <path
                      d="M9 0.254883C9 0.254883 8.6247 8.05068 0 9.25488C0 9.25488 7.40385 9.39663 9 18.2549C9 18.2549 9.5085 10.5968 18 9.25488C18 9.25488 9.9315 8.11953 9 0.254883Z"
                      fill="#8C77EC"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_238">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[#000] font-roboto text-xl md:text-2xl font-bold leading-[1.2em] w-fit">
                  활동 3.공공정책 &amp; 사회 기여
                </p>
                <p className="text-[#000] font-roboto text-sm md:text-base font-normal leading-[1.8em] w-full">
                  정부·지자체와의 정책 협력 시스템을 구축해, 교수·박사들의
                  전문성이 공공정책과 사회문제로 이어지도록 합니다.
                </p>
              </div>
              <div className="flex flex-col items-center shrink-0 w-full h-[100px] ">
                <Image
                  src="/illustrations/seventh/image3.png"
                  className="w-full h-full object-cover"
                  alt=""
                  width={314}
                  height={100}
                />
              </div>
            </div>
            <div className="flex flex-col justify-between h-[360px] rounded-xl border-3 border-[#000] bg-[#FFF] w-full md:w-[310px] overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0px_18px_40px_-14px_rgba(0,0,0,0.25)] hover:border-[#0f2f52] hover:bg-[#f9fbff]">
              <div className="flex py-5 px-4 flex-col items-start gap-3 w-full">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[18px] h-[18px] overflow-hidden relative "
                >
                  <g clipPath="url(#clip0_0_248)">
                    <path
                      d="M17.9533 6.92361C17.8355 6.56441 17.5122 6.30928 17.1297 6.27531L11.9344 5.8104L9.88007 1.07161C9.72859 0.724318 9.38361 0.499512 9.00032 0.499512C8.61702 0.499512 8.27204 0.724318 8.12057 1.07242L6.06621 5.8104L0.870105 6.27531C0.488321 6.31009 0.165865 6.56441 0.0473469 6.92361C-0.071171 7.28281 0.0382829 7.6768 0.327093 7.92515L4.25411 11.3193L3.09612 16.3464C3.01139 16.716 3.15696 17.0981 3.46816 17.3198C3.63543 17.4389 3.83113 17.4995 4.02847 17.4995C4.19863 17.4995 4.36741 17.4543 4.51889 17.365L9.00032 14.7254L13.4801 17.365C13.8079 17.5593 14.2211 17.5416 14.5317 17.3198C14.843 17.0974 14.9884 16.7152 14.9037 16.3464L13.7457 11.3193L17.6727 7.92583C17.9615 7.6768 18.0718 7.28349 17.9533 6.92361Z"
                      fill="#FFC107"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_0_248">
                      <rect width="18" height="18" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className="text-[#000] font-roboto text-xl md:text-2xl font-bold leading-[1.2em] w-fit">
                  활동 4.연구·콘텐츠 사업
                </p>
                <p className="text-[#000] font-roboto text-sm md:text-base font-normal leading-[1.8em] w-full">
                  사회복지·심리상담 분야에서 쌓인 연구와 현장 경험을 바탕으로
                  온라인 강의·워크숍·교재 등 교육 콘텐츠를 기획·개발하고,
                  장기적으로는 그 수익을 연구·장학 지원으로 이어지는 선순환
                  구조를 만드는 것을 목표로 합니다.
                </p>
              </div>
              <div className="flex flex-col items-center shrink-0 w-full h-[100px] ">
                <Image
                  src="/illustrations/seventh/image4.png"
                  className="w-full h-full object-cover"
                  alt=""
                  width={314}
                  height={100}
                />
              </div>
            </div>
          </div>
          <button className="cursor-pointer text-nowrap flex py-4 sm:py-6 md:py-8 px-0 justify-center items-center gap-4 sm:gap-5 rounded-xl bg-[#02203B] w-full transition-all duration-200 hover:-translate-y-1 hover:bg-[#0a2f5a] hover:shadow-[0px_18px_38px_-12px_rgba(2,32,59,0.45)] active:translate-y-0 active:shadow-[0px_12px_26px_-14px_rgba(2,32,59,0.40)] active:bg-[#011c35]">
            <p className="text-[#FFF] font-roboto text-lg md:text-[22px] font-semibold leading-[1.2em] w-fit text-center">
              네이버 카페 바로가기
            </p>
            <svg
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-2.5 "
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.992308 3.9962H12.4932L10.2208 1.7072C10.0347 1.51956 9.93023 1.26512 9.93032 0.999849C9.93036 0.868501 9.95608 0.738447 10.006 0.617115C10.0559 0.495783 10.1291 0.385547 10.2213 0.292703C10.3135 0.199858 10.4229 0.126223 10.5433 0.0760006C10.6638 0.0257787 10.7928 -4.63668e-05 10.9232 6.24931e-08C11.1864 9.38307e-05 11.4388 0.105562 11.6249 0.293203L15.5862 4.2852C15.6788 4.3783 15.7522 4.48898 15.8021 4.61085C15.852 4.73273 15.8774 4.86336 15.8769 4.9952C15.8772 5.12671 15.8516 5.25696 15.8017 5.37847C15.7518 5.49998 15.6786 5.61035 15.5862 5.7032L11.6169 9.7032C11.4298 9.88536 11.1791 9.98615 10.919 9.98388C10.6588 9.9816 10.4099 9.87643 10.2259 9.69102C10.0419 9.50561 9.93757 9.2548 9.93531 8.9926C9.93305 8.73041 10.0331 8.4778 10.2138 8.2892L12.4892 5.9962H0.992308C0.729131 5.9962 0.476734 5.89085 0.29064 5.70331C0.104546 5.51577 0 5.26142 0 4.9962C0 4.73099 0.104546 4.47663 0.29064 4.2891C0.476734 4.10156 0.729131 3.9962 0.992308 3.9962Z"
                fill="#00B884"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
