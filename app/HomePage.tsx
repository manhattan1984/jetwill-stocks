"use client";
import Image from "next/image";
import { IoMdCreate } from "react-icons/io";
import { TbHandFinger } from "react-icons/tb";
import {
  BsCashCoin,
  BsFillPieChartFill,
  BsCurrencyBitcoin,
  BsFillPlugFill,
  BsGraphUp,
  BsFillPhoneFill,
} from "react-icons/bs";
import { BiChip } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import {
  AiTwotoneSecurityScan,
  AiOutlinePoweroff,
  AiOutlineStock,
  AiOutlineMonitor,
} from "react-icons/ai";

import { useRouter } from "next/navigation";
import { TypeAnimation } from "react-type-animation";
import Plans, { PlanType } from "./(components)/Plans";
import { toast, Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Reviews from "./(components)/Reviews";
import FAQ from "./(components)/FAQ";
import Link from "next/link";
import { GoPerson, GoVerified } from "react-icons/go";
import { GrUserExpert } from "react-icons/gr";
import { MdManageAccounts } from "react-icons/md";

const features = [
  {
    icon: <GoPerson className="text-2xl" />,
    title: "Personalized",
    body: "Personalized investment strategies tailored to your financial goals and risk tolerance.",
  },
  {
    icon: <GoVerified className="text-2xl" />,
    title: "Expert Advice",
    body: "Access to expert advice and analysis from experienced professionals.",
  },
  {
    icon: <MdManageAccounts className="text-2xl text-white" />,
    title: "Easy Account Management",
    body: "Convenient online account management, including real-time updates on your portfolio performance.",
  },
  {
    icon: <AiOutlineStock className="text-2xl" />,
    title: "Efficient Trading",
    body: "Efficient trading and execution of orders, with access to a wide range of securities and financial products.",
  },
  {
    icon: <BsCurrencyBitcoin className="text-2xl" />,
    title: "Daily Payout",
    body: "The investments starts after confirmed payment. First payouts within 24 hours. Afterward, the payouts continue daily.",
  },
  {
    icon: <AiTwotoneSecurityScan className="text-2xl" />,
    title: "Security",
    body: "Secure and reliable technology infrastructure to protect your sensitive financial information and ensure the safety of your investments.",
  },
  {
    icon: <AiOutlineMonitor className="text-2xl" />,
    title: "Monitoring",
    body: "We monitor your investments and provide regular updates on performance. This can help you make informed decisions about when to buy, sell, or hold your investments.",
  },
  {
    icon: <BsGraphUp className="text-2xl" />,
    title: "Competitive Pricing",
    body: "Competitive pricing and fees, with transparent and easy-to-understand billing and payment options.",
  },
  {
    icon: <BsFillPieChartFill className="text-2xl" />,
    title: "Diversification",
    body: " We help you diversify your investment portfolio, which can reduce risk and increase returns. We provide access to a wide range of investment options, including stocks, bonds, mutual funds, and ETFs.",
  },
];

// @ts-ignore
const Feature = ({ icon, title, body }) => (
  <div className="flex gap-2 basis-1/4">
    <div className="h-full">{icon}</div>
    <div className="">
      <p className="text-2xl">{title}</p>
      <p className="text-sm text-gray-100">{body}</p>
    </div>
  </div>
);

const coins = ["options", 2000, "stocks", 2000, "futures", 2000];

const countries = [
  "Canada",
  "USA",
  "England",
  "Spain",
  "South Africa",
  "India",
  "Dubai",
  "Russia",
  "Persia",
  "Australia",
];

const min = 50;
const max = 10_000;

function randomAmount() {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function Home({ plans }: { plans: PlanType[] }) {
  const router = useRouter();
  const signUp = () => {
    router.push("/signup");
  };

  useEffect(() => {
    // const interval = setInterval(() => {
    //   const country = countries[Math.floor(Math.random() * countries.length)];
    //   toast(`Someone from ${country} just invested $${randomAmount()}`);
    // }, 10000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <Toaster />
      {/* <div className="bg-neutral-900 text-white flex flex-col gap-2 mt-2 p-4">
        <div className="flex justify-between">
          <p className="text-xl">Trusted Site</p>
        </div>
        <div className="">
          <p className="text-3xl">Earn your visitors' trust</p>
          <p className="text-gray-300">
            Address the security and trust concerns that cost you sales and
            convert more customers at every stage of the buyer's journey with
            TrustedSite's earned certification program.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Link href="/certification" className="p-2 w-full bg-blue-600 text-center">
            Get Certified
          </Link>
          <button className="p-2 w-full bg-neutral-700">watch the video</button>
        </div>
      </div> */}

      <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] text-white">
        <div className="backdrop-brightness-50 p-4 flex flex-col lg:flex-row gap-2">
          <div className="p-4">
            <p className="text-5xl uppercase">
              start trading
              <span>
                <TypeAnimation
                  sequence={coins}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "3rem" }}
                />
              </span>
              today!
            </p>
            {/* <p className="text-3xl my-4">
              Welcome to Jetwill Stocks - Your Partner in Wealth Creation
            </p> */}
            <p className="text-md mt-2">
              At Jetwill Stocks, we believe that every individual has the
              potential to create wealth through smart investments. As your
              trusted partner, we provide you with the tools, resources and
              expertise to make informed investment decisions and achieve your
              financial goals.
            </p>
            <button
              onClick={signUp}
              className="rounded bg-blue-600 p-3 uppercase my-4"
            >
              start trading
            </button>
          </div>
          <div className="flex w-full">
            <Image
              height={0}
              width={0}
              sizes="100%"
              className="h-30 w-1/2 lg:h-auto lg:w-1/2"
              alt="android"
              src="/google.png"
            />

            <Image
              height={0}
              width={0}
              sizes="100%"
              className="h-30 w-1/2 lg:h-auto lg:w-1/2"
              alt="android"
              src="/apple.png"
            />
          </div>
        </div>
      </div>
      {/* How It Works */}
      <div className="bg-gray-50 p-4 py-8 text-center">
        <div className="">
          <p className="text-2xl tracking-widest w-2/3 mx-auto text-gray-400 font-light">
            Three steps to getting started
          </p>
          <p className="text-3xl uppercase my-4">how it works</p>
          <div className="h-[1px] bg-blue-400 w-1/12 mx-auto"></div>
          <p className="my-4 text-gray-400 text-sm">
            Whether you're a seasoned investor or just starting out, we offer a
            range of investment options to suit your needs. From stocks and
            mutual funds to bonds and ETFs, we help you build a diverse
            portfolio that delivers steady returns over time.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center md:justify-between">
          <div className="p-4 rounded bg-white w-full mx-auto">
            <IoMdCreate className="text-4xl text-blue-700 mb-4 w-full" />
            <p className="text-xl capitalize">register account</p>
          </div>
          <div className="p-4 rounded bg-white w-full">
            <TbHandFinger className="text-4xl text-blue-700 mb-4 w-full" />
            <p className="text-xl capitalize">choose your plan</p>
          </div>
          <div className="p-4 rounded bg-white w-full">
            <BsCashCoin className="text-4xl text-blue-700 mb-4 w-full" />
            <p className="text-xl capitalize">receive payout everyday</p>
          </div>
        </div>
      </div>
      {/* Space Ship */}
      <div className="bg-neutral-900 h-[100vh] flex flex-col items-center justify-center w-ful gap-4 text-white p-2 py-4 text-center">
        <p className="text-2xl font-bold">Jetwill Stocks</p>
        {/* <div className="flex justify-center items-center">
          <iframe
            className=""
            src="https://embed.lottiefiles.com/animation/79966"
          ></iframe>
        </div> */}
        {/* <p className="text-4xl text-blue-400 font-bold uppercase">
          Awesome Facts
        </p> */}
        <p className="text-neutral-100">
          Our team of experienced brokers and analysts work tirelessly to keep
          you informed about market trends, investment opportunities and
          potential risks. We believe that transparency and communication are
          key to building long-term relationships with our clients.
        </p>

        <div className="flex flex-col gap-4 md:flex-row items-center justify-center text-center">
          <div className="">
            <p className="text-4xl font-bold text-blue-400 mb-1 mt-3">1,322</p>
            <p>Happy Clients</p>
          </div>
          <div className="">
            <p className="text-4xl font-bold text-blue-400 mb-1 mt-3">
              513,532
            </p>
            <p>Payouts</p>
          </div>
          <div className="">
            <p className="text-4xl font-bold text-blue-400 mb-1 mt-3">70+</p>
            <p>Countries</p>
          </div>
        </div>
      </div>
      <div className="bg-neutral-100 h-full">{/* <Calculator /> */}</div>
      <div className="w-full mb-8 bg-neutral-900 text-white py-8">
        <p className="mb-8 text-md uppercase text-center px-4">
          So why trust your money with anyone else? Join the thousands of
          investors who have chosen Jetwill Stocks as their partner in wealth
          creation. Open an account today and start investing in your future.
        </p>
        <div className="flex flex-col md:flex-row md:flex-wrap gap-4 w-4/5 mx-auto justify-center">
          {/* Code Here */}
          {features.map((feature, index) => (
            <Feature {...feature} key={index} />
          ))}
        </div>
      </div>

      {/* Plans */}
      <div className="my-4">
        <div className="text-center">
          <p className="font-medium text-2xl my-2 capitalize">
            choose an investment plan
          </p>
        </div>

        <Plans plans={plans} />
      </div>

      <Reviews />

      {/* Contact Form */}
      {/* <div className="bg-neutral-800">
        <div className="w-11/12 mx-auto">
          <p className="text-white text-3xl py-4">Let's talk about your idea</p>

          <div className="flex flex-col gap-2">
            <input
              className="border rounded p-4"
              type="text"
              placeholder="Name"
            />
            <input
              className="border rounded p-4"
              type="text"
              placeholder="Email"
            />
            <textarea className="border rounded p-4" placeholder="Message" />
          </div>
          <button className="bg-blue-400 p-4 text-white uppercase rounded my-4">
            send message
          </button>
        </div>
      </div> */}
    </main>
  );
}
