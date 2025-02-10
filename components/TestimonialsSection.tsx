import { cn } from "@/lib/utils";
import { Marquee } from "./ui/Marquee";
import Heading from "./ui/heading";
import { testimonialsHeading, reviews } from "@/data/TestimonialsData";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  occupation,
  testimonial,
}: {
  img: string;
  name: string;
  occupation: string;
  testimonial: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border-2 p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-primary/[.05]",
        // dark styles
        "dark:border-backgroundSecondary dark:bg-gray-50/[.10] dark:hover:bg-primary/[.15] hover:border-primary duration-300"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="relative w-8 h-8 rounded-full">
          <img
            className="object-cover rounded-full w-full
            h-full"
            width="32"
            height="32"
            alt=""
            src={img}
          />
        </div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{occupation}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{testimonial}</blockquote>
    </figure>
  );
};

export function TestimonialSection() {
  return (
    <section>
      <Heading alignment="center" {...testimonialsHeading} />
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  md:shadow-xl">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.id} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
      </div>
    </section>
  );
}
