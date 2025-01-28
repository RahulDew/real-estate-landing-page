import Image from "next/image";
import Heading from "../ui/heading";
import {
  IQualities,
  qualities,
  qualitiesHeading,
  qualitiesSectionImage,
} from "@/data/ourQualitiesData";
import { IconBuilding } from "@tabler/icons-react";

const OurQualitiesSection = () => {
  return (
    <section
      id="about"
      className="w-full text-center space-y-10 py-16 px-5 md:px-16"
    >
      <Heading
        alignment="center"
        title={qualitiesHeading.title}
        description={qualitiesHeading.description}
      />

      <div className="flex justify-center items-center gap-5 lg:gap-20 max-md:flex-col-reverse">
        <div className="relative overflow-hidden w-[300px] sm:w-[400px] md:w-[500px] rounded-3xl">
          <Image
            src={qualitiesSectionImage.imgUrl}
            alt="Propdeal Logo"
            priority
            width={100}
            height={150}
            unoptimized={true}
            className="object-cover rounded-3xl w-full
            h-full scale-105 hover:scale-100 duration-300"
          />
        </div>
        <div className="w-4/5 md:w-[380px] lg:w-[490px] space-y-5">
          {qualities.map((quality: IQualities, index) => (
            <div
              key={index}
              className="flex gap-2 justify-start items-start flex-col p-5 rounded-xl duration-300 text-foreground"
            >
              <div className="flex justify-start items-center gap-2">
                <IconBuilding size={35} className="text-primary" />
                <span className="font-semibold text-xl">{quality.name}</span>
              </div>
              <p className="text-left font-light text-foreground opacity-60">
                {quality.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurQualitiesSection;
