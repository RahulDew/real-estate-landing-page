import Image from "next/image";
import Link from "next/link";

export default function HighlightSection() {
  
  const data = {
    title: " About Us: Our Story and Vision",
    featureImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    headline:
      "About Wallfort Properties – Pioneering Real Estate Excellence Since 1994",
    content:
      "Established in 1994, Wallfort Properties has grown into one of the largest real estate developers in Chhattisgarh. With 34+ completed projects and 20+ ongoing developments, we have delivered over X sq.ft. of residential and commercial spaces. Our team, led by Chairman Anil Parakh and Directors Pankaj Lahoti and Arpit Parakh, combines decades of expertise with innovative design and sustainable practices. We take pride in our customer-centric approach, ensuring every project meets the highest standards of quality and functionality. From luxury villas to affordable housing, Wallfort Properties is your trusted partner in building a better future.",
    ctaText: "Learn More About Our Journey and Values",
  };

  return (
    <section className="py-16 my-20 mx-10 rounded-3xl">
      {/* Large Header */}
      <div className="text-center max-w-4xl mx-auto mb-14 text-white">
        <h2 className="text-4xl font-extrabold ">{data.title}</h2>
        <h4 className="mt-4 text-lg font-semibold text-white/75">
          {data.headline}
        </h4>
      </div>

      {/* Main Loading Section */}
      <div className="relative bg-background max-w-6xl h-[350px] mx-auto p-6 rounded-2xl shadow-lg mb-12 flex items-center justify-center">
        <Image
          width={500}
          height={350}
          src={data.featureImage}
          alt="Feature"
          className="feature-image w-full h-full object-cover rounded-lg shadow-md"
        />
        <div className="absolute -top-10 w-[300px] bg-background p-5 rounded-lg shadow-lg flex items-center justify-center text-center m-auto">
          <Image
            src="https://assets-netstorage.groww.in/stock-assets/logos2/WallfortFin_54102882444_7773.png"
            alt="logo"
            width={50}
            height={50}
            className="h-20 w-20"
          />
          <span className="text-3xl font-extrabold text-foreground">
            Wallfort Projects
          </span>
        </div>
        {/* Statistics Section */}
        <div className="absolute -bottom-40 w-5/6 flex flex-wrap gap-5 m-auto bg-background p-6 rounded-lg shadow-md text-center text-xl/9 break-words line-clamp-3">
          <p>
            Established in <strong className="text-primary">1994</strong>,
            Wallfort Properties has grown into one of the largest real estate
            developers in Chhattisgarh. With{" "}
            <strong className="text-primary">34+ completed projects</strong> and{" "}
            <strong className="text-primary">20+ ongoing developments</strong>,
            we have delivered over{" "}
            <strong className="text-primary">
              X sq.ft. of residential and commercial spaces.
            </strong>
          </p>
          <p>
            Our team, led by{" "}
            <strong className="text-primary">Chairman Anil Parakh </strong> and{" "}
            <strong className="text-primary">Directors Pankaj Lahoti</strong>{" "}
            and <strong className="text-primary">Arpit Parakh</strong>, combines
            decades of expertise with innovative design and sustainable
            practices. We take pride in our{" "}
            <strong className="text-primary">customer-centric approach</strong>,
            ensuring every project meets the highest standards of quality and
            functionality. From{" "}
            <strong className="text-primary">luxury villas</strong> to{" "}
            <strong className="text-primary">affordable housing</strong>,
            Wallfort Properties is your trusted partner in building a better
            future.,
          </p>
        </div>
        {/* OUR Mission */}
      </div>
      <Link
        href="/about-us"
        className="w-full flex justify-center items-center text-center m-auto text-primary font-semibold text-lg hover:underline cursor-pointer mt-40"
      >
        {data.ctaText}
      </Link>
    </section>
  );
}
