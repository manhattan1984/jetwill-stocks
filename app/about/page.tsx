import Image from "next/image";
import React from "react";
import Divider from "../(components)/Divider";
import Footer from "../(components)/Footer";
import DataCenter from "../../public/datacenter.jpeg";
import Power from "../../public/power.jpeg";
import Security from "../../public/security.jpeg";
import Team from "../../public/team.jpeg";
// import Cool from "../../public/cooling.mp4";
// import Server from "../../public/server.mp4";
import { BiBuilding, BiPowerOff } from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { WiSnowflakeCold } from "react-icons/wi";
import { GoServer } from "react-icons/go";

const dataItems = [
  {
    icon: <BiBuilding className="text-blue-700" />,
    name: "Data Center Location",
    body: "Our Mining Data Centers are located in Kazakhstan",
    image: <Image className="w-full" alt="data center" src={DataCenter} />,
  },
  {
    icon: <BiPowerOff className="text-blue-700" />,
    name: "Power System",
    body: "We use Hydropower & Wind power,  0.05 $/kWh",
    image: <Image className="w-full" alt="data center" src={Power} />,
  },
  {
    icon: <GoServer className="text-blue-700" />,
    name: "Data Center Hardware",
    body: "The newest ASIC miner, GPU rigs are Ready to mine.",
    image: (
      <video className="w-full" autoPlay={true} controls>
        <source src="https://pcyleqdmisqoflgzpytc.supabase.co/storage/v1/object/public/content/server.mp4" />
      </video>
    ),
  },
  {
    icon: <WiSnowflakeCold className="text-blue-700 text-2xl" />,
    name: "Cooling System",
    body: "Air cooling system and Water cooling system keeping temperature: 20-24°C.",
    image: (
      <video className="w-full" autoPlay={true} controls={true}>
        <source src="https://pcyleqdmisqoflgzpytc.supabase.co/storage/v1/object/public/content/cooling.mp4" />
      </video>
    ),
  },
  {
    icon: <GoServer className="text-blue-700" />,
    name: "Security/Fire Protection",
    body: "24/7 on-site guards, intrusion detection systems, IP-DVR cameras",
    image: <Image className="w-full" alt="data center" src={Security} />,
  },
  {
    icon: <AiOutlineTeam className="text-blue-700" />,
    name: "Our Team",
    body: "Our mining team come from in blockchain industry and IT engineers.",
    image: <Image className="w-full" alt="data center" src={Team} />,
  },
];

// @ts-ignore
const DataCenterItem = ({ icon, name, body, image }) => {
  return (
    <div className="my-4 basis-1/4">
      <div className="w-11/12 mx-auto">
        <div className="flex gap-2 items-center text-xl">
          {icon}
          <p className="">{name}</p>
        </div>
        <p className="mb-2">{body}</p>
      </div>
      {image}
    </div>
  );
};

const page = () => {
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-3xl my-4">About Us</p>
      <Divider />

      <p className="my-8">
        Welcome to our stock broker website, where we believe that smart
        investments, expert advice, and tailored portfolios are the keys to
        achieving your financial goals and securing your future.
        <br />
        Our team of experienced professionals is committed to providing you with
        the highest level of service and expertise, whether you are a seasoned
        investor or just starting out. We understand that every investor is
        unique, with different goals, risk tolerances, and investment horizons.
        That's why we take the time to get to know you, understand your needs
        and preferences, and develop a personalized investment strategy that is
        right for you.
        <br />
        We believe in transparency and accountability, and we are committed to
        providing you with clear and concise information about your investments,
        including performance, fees, and risk. We also believe in education, and
        we strive to keep you informed and empowered with the latest market
        insights and investment trends.
        <br />
        At our stock broker website, we are dedicated to helping you achieve
        your financial goals and build a secure future for yourself and your
        loved ones. Contact us today to learn more about how we can help you
        succeed in the stock market.
      </p>
    </div>
  );
};

export default page;
