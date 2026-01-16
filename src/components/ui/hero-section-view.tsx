import { Pointer, Star } from "lucide-react";
import Image from "next/image";
import { Marquee } from "./marquee";
import { CompaniesList } from "@/types";

export const HeroSection = () => {
  return (
    <div className="w-full  py-6 mt-20  px-2 ">
      <div className=" w-full gap-6   flex flex-col  justify-start  items-start ">
        <div className="flex flex-col gap-1  mt-4 justify-start items-start">
          <h1 className="font-sans font-bold  text-[24px] md:text-[30px] tracking-tighter leading-8">
            Manage your meetings <br className="block sm:hidden" /> with your
          </h1>
          <p className="bg-blue-100  rounded-[5px] text-[20px]   px-1 py-0.5 font-sans text-base  md:text-[30px] font-bold tracking-tight">
            AI personal assistant
          </p>
        </div>
        <div className="flex gap-2  items-center">
          <button className="font-sans text-[14px] font-semibold border-blue-300 border  px-5 py-2 rounded-lg bg-blue-400 text-white shadow cursor-pointer duration-300 ease-in-out transition-all hover:bg-blue-300 te">
            Get Stated
          </button>
          <button className="flex gap-2 text-[14px] items-center cursor-pointer border rounded-lg px-5 py-2 font-sans font-semibold text-neutral-600 shadow bg-white  border-neutral-100 duration-300 transition-all ease-in-out  hover:text-neutral-400 group">
            {" "}
            <Pointer className="size-3.5 text-neutral-600  group-hover:text-neutral-400 group-hover:-translate-y-0.5 duration-300  ease-in-out transition-all" />{" "}
            Request a demo
          </button>
        </div>
      </div>
      <div className="py-6   w-full mt-2">
        <p className="flex gap-1  tracking-tighter text-[12px]  font-sans items-center text-neutral-500 font-medium">
          <Star className="size-3" />
          Nov 24:ai chat draft events,action items in linear,ui fixes
        </p>
        <div className="mt-2 relative border border-neutral-100 shadow-md w-full rounded-md overflow-hidden flex justify-center items-center">
          <Image
            src={"/images/hero.webp"}
            alt="Hero_Image"
            width={800}
            height={600}
            className="object-contain rounded-md w-full h-auto max-h-[45rem]"
            priority
          />
        </div>
      </div>
      <div className="w-full py-2 mt-2 ">
        <h2 className="text-neutral-500 font-semibold font-sans text-xs ">
          Trusted by teams at
        </h2>
        <div className=" relative w-full  overflow-hidden">
          <Marquee reverse={false}>
            {CompaniesList.map((comp) => (
              <div
                key={comp.name}
                className="flex gap-1 items-center font-sans font-medium text-[16px] px-2 py-0.5 text-neutral-700"
              >
                <span>{comp.icon}</span>
                <p className="italic">{comp.name}</p>
              </div>
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
        <Image
          src={"/images/logos.webp"}
          width={270}
          height={270}
          alt="log"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-2  justify-start items-start ">
        <div className=" w-full flex  justify-start md:leading-[3rem]  text-neutral-800  leading-8 tracking-tighter px-0.5">
          <h1 className=" font-sans text-[26px] sm:text-[30px] lg:text-[40px] font-bold tracking-tight   w-full">
            <span className="text-neutral-500 bg-neutral-500/10 rounded-[6px] p-0.5">
              Within 47 seconds:{" "}
            </span>
            <br className="block sm:hidden" />
            Share summary.
            <p className=" text-start font-sans font-bold text-[26px] sm:text-[30px] lg:text-[40px] tracking-tighter  leading-8 sm:leading-12">
              Keep CRM updated.
              <br className=" block sm:hidden" />
              Plan action items.
              <br className=" block xs:hidden" />
              Schedule next meeting
            </p>
          </h1>
        </div>
        <button className="border mt-1  max-w-[8rem] w-full px-5 py-2.5 font-sans border-blue-400  bg-blue-500 text-white text-[14px] font-medium rounded-md  shadow-[inset_1px_2px_1px_rgba(30,30,30,0.5)_inset_-1px_-2px_-1px_rgba(30,3030,0.5)] hover:bg-blue-400 hover:text-neutral-100   cursor-pointer  transition-transform duration-300 ease-in-out">
          Get started
        </button>{" "}
      </div>
      <div className="w-full py-16 ">
        <div className="flex flex-col gap-2 ">
          <h3 className="font-sans font-semibold text-green-500 text-base">
            Meeting Notes
          </h3>
          <p className="text-neutral-950 font-sans font-bold  text-xl  sm:text-2xl lg:text-4xl  tracking-tight">
            Summarize any meeting, without a bot
          </p>
          <div className="flex  mt-2  items-center">
            <span className="text-neutral-900 font-semibold font-sans text-[18px]">
              Replaces:
            </span>
            <div className="ml-1 flex gap-0.5  items-center  text-neutral-500 text-[14px] font-sans font-medium">
              <Image
                src="/images/fireflies.webp"
                width={18}
                height={18}
                alt="Fireflies"
                className="object-cover grayscale"
              />
              <p>Fireflies</p>
              {","}
              <Image
                src="/images/otter.webp"
                width={18}
                height={18}
                alt="Fireflies"
                className="object-cover grayscale"
              />
              <p>Otter</p>
              {","}
              <Image
                src="/images/fathom.webp"
                width={18}
                height={18}
                alt="Fireflies"
                className="object-cover grayscale"
              />
              <p>Fathom</p>
            </div>
          </div>
        </div>
        <div className=" w-full  py-6 mt-2 ">
          <h2 className="text-neutral-900 font-sans font-semibold text-xl">
            Why Amie ?
          </h2>
          <div className="flex flex-col gap-6 mt-2">
            <p className="text-neutral-500   font-sans text-start text-[15px] leading-normal  font-medium  tracking-tight  ">
              There are 27 meeting notes apps out there. If summaries is all you
              need, any of them will do. Many of them will even be cheaper.
            </p>
            <p className="text-neutral-500  tracking-tight  font-sans  font-medium text-[15px]">
              If you want to use them to become better at your job, you&apos;ll
              need Amie. An app that knows your conversations, should be able to
              take over your busy work.
            </p>
          </div>
        </div>
      </div>
      <div className="border border-r-0 border-l-0 border-b-0 border-t-neutral-100 rounded-md  grid  grid-cols-1 lg:grid-cols-2 gap-2   w-full   ">
        <div className=" w-full py-1.5">
          <div className="flex items-center  justify-between px-2 ">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <div className="  flex items-center ">
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-[4px]"
              >
                <rect width="32" height="32" rx="8" fill="purple" />
                <g>
                  <rect
                    x="14"
                    y="2"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#36C5F0"
                  />
                  <rect
                    x="2"
                    y="14"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#2EB67D"
                  />
                  <rect
                    x="16"
                    y="18"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#ECB22E"
                  />
                  <rect
                    x="18"
                    y="16"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#E01E5A"
                  />
                  <rect
                    x="22"
                    y="2"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#E01E5A"
                  />
                  <rect
                    x="2"
                    y="22"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#36C5F0"
                  />
                  <rect
                    x="14"
                    y="18"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#2EB67D"
                  />
                  <rect
                    x="18"
                    y="14"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#ECB22E"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className=" py-4 ">
            <div className="flex gap-2">
              <div className="rounded-full relative overflow-hidden flex justify-center items-center">
                <Image
                  src="/images/quentin.webp"
                  width={28}
                  height={24}
                  alt="Quentin di"
                  priority
                  className="rounded-full object-contain h-auto "
                />
              </div>
              <div className="flex gap-1 items-center">
                <h1 className="text-neutral-950 font-sans   tracking-tight font-semibold  text-[15px] sm:text-[18px]">
                  Quentin di Silvestro
                </h1>
                {","}
                <span className="text-neutral-500 mt-0.5  font-sans font-semibold text-[12px]">
                  GTM Lead beam.ai
                </span>
              </div>
            </div>
            <p className=" mt-4 text-neutral-500 font-sans text-[14px]  w-full l font-medium  text-start ">
              We use Amie daily, and without it ,we&apos;d be least 50% less
              productive .It helps me to follow-up faster, which directly
              translates into more revenue cloesd.
            </p>
          </div>
        </div>

        <div className=" w-full px-1">
          <div className="flex items-center  justify-between px-2 ">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <div className="  flex items-center ">
              <svg
                viewBox="0 0 32 32"
                width="20"
                height="20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-[4px]"
              >
                <rect width="32" height="32" rx="8" fill="purple" />
                <g>
                  <rect
                    x="14"
                    y="2"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#36C5F0"
                  />
                  <rect
                    x="2"
                    y="14"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#2EB67D"
                  />
                  <rect
                    x="16"
                    y="18"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#ECB22E"
                  />
                  <rect
                    x="18"
                    y="16"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#E01E5A"
                  />
                  <rect
                    x="22"
                    y="2"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#E01E5A"
                  />
                  <rect
                    x="2"
                    y="22"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#36C5F0"
                  />
                  <rect
                    x="14"
                    y="18"
                    width="4"
                    height="12"
                    rx="2"
                    fill="#2EB67D"
                  />
                  <rect
                    x="18"
                    y="14"
                    width="12"
                    height="4"
                    rx="2"
                    fill="#ECB22E"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className=" py-4 ">
            <div className="flex gap-2">
              <div className="overflow-hidden relative rounded-full flex justify-center items-center">
                <Image
                  src="/images/arnaud.webp"
                  width={28}
                  height={24}
                  alt="Arnaud Mun"
                  className="rounded-full object-contain h-auto "
                />
              </div>
              <div className="flex gap-1 items-center w-full ">
                <h1 className="text-neutral-950 font-sans   tracking-tight font-semibold  text-[15px] sm:text-[18px]">
                  Arnaud Mun
                </h1>
                {","}
                <span className="text-neutral-500 mt-0.5  font-sans font-semibold text-[12px]">
                  Co-founder dev-id
                </span>
              </div>
            </div>
            <p className=" mt-4 w-full  text-neutral-500   text-[14px] font-sans font-medium  text-start ">
              Because of Amie we understand our customer&apos;s projects better:
              It summarizes all our meetings and we ask AI questions to speed up
              our workflow. There is not tool better than Amie to save time. And
              that is priceless
            </p>
          </div>
        </div>
      </div>
      <div className=" py-4  mt-6">
        <h1 className="text-[20px]  font-sans font-semibold text-neutral-950">
          Summaries & Actions Items
        </h1>
        <div className="flex  flex-col gap-10 ">
          <p className="mt-1.5 text-neutral-500 font-sans font-medium leading-normal text-[15px]">
            When meetings go undocumented, progress rarely happens. Topics
            resurface week after week. But every conversation should move your
            team forward. AI summaries often miss the mark because they
            don&asop;t understand your business. Ours do, and turn every meeting
            into clear next steps.
          </p>
          <p className="text-neutral-500 font-sans font-medium leading-normal text-[15px]">
            The common problem with AI summaries is that they don&asop;t know
            the context of your meeting and company. We ensure great summaries
            in two ways.
          </p>
        </div>
        <div className="mt-2 relative border border-neutral-100 shadow-md w-full rounded-md overflow-hidden flex justify-center items-center">
          <Image
            src={"/images/notes.webp"}
            alt="Note"
            width={800}
            height={600}
            className="object-contain rounded-md w-full h-auto max-h-[45rem]"
            priority
          />
        </div>
      </div>
    </div>
  );
};
