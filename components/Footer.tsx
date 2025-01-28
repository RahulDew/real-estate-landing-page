import React from "react";
import { FooterData } from "@/data/footerData";
import Image from "next/image";
import Link from "next/link";
import {
  IconDirectionSign,
  IconMail,
  IconMapPin,
  IconPhoneCall,
} from "@tabler/icons-react";
import CalScheduler from "./CalSheduler";

const Footer = () => {
  const { footerLogoData, impLinks, socialIcons } = FooterData;
  return (
    <footer className="relative w-full h-[60vh] py-5 rounded-t-3xl bg-primary text-white">
      <div className="flex justify-start sm:justify-around max-lg:flex-col my-5 px-10 md:px-16">
        {/* company about */}
        <div className="max-w-[300px] lg:w-[300px] max-lg:my-10 max-lg:mx-auto space-y-5 flex justify-center items-center lg:justify-start lg:items-start flex-col">
          <div className="flex justify-center items-center gap-3">
            <Image
              src={footerLogoData.logo}
              alt=""
              priority
              width={35}
              height={35}
              className="w-[40px] md:w-[80px] invert grayscale"
            />
            <p className={`text-3xl font-extrabold`}>
              {footerLogoData.logoText}
            </p>
          </div>
          <p className="text-md text-center lg:text-left">
            {footerLogoData.textData}
          </p>
          {/* Social media links */}
          <ul className="flex gap-2 items-center">
            {socialIcons.map((value, index) => (
              <Link
                key={index}
                href={value.link}
                className="flex justify-center items-center w-10 h-10 border-2 rounded-full border-white"
              >
                {value.icon}
              </Link>
            ))}
          </ul>

          {/* <EmailInput isButton={false} /> */}
        </div>
        {/* importent links */}
        <div className="flex justify-around col-row-span-2 max-lg:flex-wrap gap-10 lg:gap-10 xl:gap-24 text-white">
          <div className="flex flex-col gap-5">
            <h4 className="text-lg font-semibold">IMPORTENT LINKS</h4>
            <ul className="flex flex-col gap-2">
              {impLinks.map((value, index) => (
                <Link
                  href={value.link}
                  key={index}
                  className="text-md font-normal hover:underline duration-300 flex gap-2 items-center cursor pointer"
                >
                  <IconDirectionSign size={20} className="text-white" />
                  <p>{value.name}</p>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        {/* Contect */}
        <div className="flex flex-col gap-5 ">
          <h4 className="text-lg font-semibold">Connect with Us</h4>
          <div className="flex flex-col gap-4">
            <div className="flex gap-2 items-center border-b border-white pb-2">
              <IconPhoneCall size={30} className="text-white" />
              <span className="text-xl font-semibold">+91 1234567890</span>
            </div>
            <div className="flex gap-2 items-center border-b border-white pb-2">
              <IconMapPin size={30} className="text-white" />
              <span className="text-xl font-semibold">
                123, Wallfort Heights, Raipur
              </span>
            </div>
            <div className="flex gap-2 items-center border-b border-white pb-2">
              <IconMail size={30} className="text-white" />
              <span className="text-xl font-semibold">
                wallfortheights@email.com
              </span>
            </div>
            <span className="text-center">or</span>
            <CalScheduler
              label={"Let'c Connect"}
              className="border-2 rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className=" absolute bottom-0 w-full text-center text-sm opacity-60 my-5">
        Copyright &copy; {FooterData.createdBy}
      </div>
    </footer>
  );
};

export default Footer;
