import Image from "next/image";

export default function HighlightSection() {
  const stats = [
    { title: "3000+", description: "Constructed Units" },
    { title: "30+", description: "Lakh Constructed in Sq.Ft." },
    { title: "25+", description: "Years of Experience" },
    { title: "15+", description: "Projects in Chhattisgarh" },
  ];

  const data = {
    title: "One Of The Leading Real Estate Companies",
    featureImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ctaText: "Explore Properties",
  };

  return (
    <section className="bg-primary py-16 mx-10 rounded-3xl">
      {/* Large Header */}
      <div className="text-center max-w-4xl mx-auto mb-14 text-white">
        <h2 className="text-4xl font-extrabold ">
          One Of The Leading Real Estate Companies
        </h2>
        <p className="mt-4 text-lg font-semibold text-white/75">
          Building homes with harmony, nature, and a touch of luxury for over 25
          years.
        </p>
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
            Wallfort Heights
          </span>
        </div>
        {/* Statistics Section */}
        <div className="absolute -bottom-16 flex flex-wrap gap-5 text-center m-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background w-52 p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-3xl font-extrabold text-primary">
                {stat.title}
              </h3>
              <p className="mt-2 text-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
