import Image from "next/image";
import Link from "next/link";

export default function page() {
  const commerzbankHistory = [
    {
      year: 1870,
      event:
        "Commerzbank founded in Hamburg by merchants and bankers, focusing on international trade finance.",
    },
    {
      year: 1897,
      event:
        "First international branch opened in London, marking global expansion.",
    },
    {
      year: 1920,
      event:
        "Becomes one of the largest banks in Germany by merging with other institutions.",
    },
    {
      year: 1940,
      event:
        "During World War II, Commerzbank's assets were seized and operations disrupted.",
    },
    {
      year: 1958,
      event:
        "After the war, the bank is reestablished as three regional institutions, which merged back together.",
    },
    {
      year: 1970,
      event:
        "Global expansion continues with operations in major world financial centers.",
    },
    {
      year: 1990,
      event:
        "Reintegration of branches in East Germany following the reunification.",
    },
    {
      year: 2009,
      event:
        "Acquisition of Dresdner Bank, reinforcing its position as a major banking group.",
    },
    {
      year: 2012,
      event:
        "Commerzbank focuses on sustainability and corporate responsibility initiatives.",
    },
    {
      year: 2020,
      event:
        "Commerzbank celebrates 150 years of history, with a focus on digitalization and transformation.",
    },
  ];

  const services = [
    {
      title: "Private Customers",
      description:
        "Experience the benefits of a digitalized bank with personal advice. We work with you to determine your individual financial opportunities.",
      icon: "👤",
    },
    {
      title: "Business Customers",
      description:
        "Whether you're starting a business or planning succession, we assist you at every phase.",
      icon: "✏️",
    },
    {
      title: "Wealth Management",
      description:
        "Get support with personalized strategies and individual guidance.",
      icon: "💎",
    },
    {
      title: "Corporate Clients",
      description: "Modern and innovative solutions for your business needs.",
      icon: "📊",
    },
  ];

  return (
    <main className="bg-white text-black">
      <div className="relative w-full h-[60vh]">
        <Image
          src={
            "https://www.commerzbank.de/konzern/wer-wir-sind/uebersicht/wer_wir_sind_res_1444x813.jpg"
          }
          width={300}
          height={300}
          className="absolute top-0 left-0 w-full h-[60vh] object-cover z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-white text-center pb-40 bg-black/20">
          <h1 className="text-5xl font-bold">Who we are</h1>
          <p className="text-xl mt-4">
            For its customers, Commerzbank combines the advantages of a
            digitalized bank with personal advice, consistent customer focus,
            and sustainability.
          </p>
        </div>
      </div>
      <div className="w-full h-fit px-20 mt-10 pb-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          Our Mission and Values
        </h1>
        <p className="content-center items-center justify-center text-xl text-center">
          We use our core competencies and digitalization to provide more
          innovative and faster solutions for our customers. We provide the
          right products and industry knowledge, always keeping an eye on the
          constantly changing market. The corporate values ​form the basis of
          our corporate culture. They show that we are aware of our corporate
          responsibility and are guided by traditional values. They shape the
          way we deal with each other and our behavior towards internal and
          external customers and society. We are the bank at our customers'
          side. Your success is our business.
        </p>
      </div>
      <section className="bg-[#0e3c4a] text-white py-16 px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold">30 percent...</h2>
          <p className="text-xl mt-4">
            ... of German foreign trade runs through the books of Commerzbank.
          </p>
          <p className="text-lg mt-4">
            We are the leading partner for medium-sized businesses in Germany.
            We are represented in 40 countries in the corporate customer
            business.
          </p>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Customers</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2 px-5 lg:px-28">
          {services.map((service, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 shadow-lg bg-white"
            >
              <div className="text-4xl text-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-center mb-4">{service.description}</p>
              <div className="text-center">
                <Link href="#" className="text-blue-500 font-bold">
                  Learn More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="container mx-auto pt-32">
        <h1 className="text-4xl font-bold text-center mb-8">
          Commerzbank History
        </h1>
        <p className="content-center items-center justify-center text-xl text-center">
          The more than 150-year history of Commerzbank is like a magnifying
          glass that shows many aspects of Germany&apos;s economic and political
          development. How did the bank develop? What does its logo mean? What
          were the names of the board spokespersons? Answers to these and many
          other questions that go beyond the bank can be found in the extensive,
          scientifically prepared documents in our historical archive. The
          archive is available to journalists and historians on request.
        </p>
      </div>
      <div className="w-full h-fit mt-10 bg-cyan-300">
        <Image
          src={
            "https://www.commerzbank.de/konzern/wer-wir-sind/geschichte/bilder/geschichte_berlin_hauptverwaltung_1937_res_1204x903.png"
          }
          width={300}
          height={300}
          className="w-full h-[70vh] object-cover"
        />
      </div>
      <div className="w-full h-fit px-20 mt-10">
        {commerzbankHistory.map((item, index) => {
          return (
            <>
              <div
                className="w-full h-fit flex-row gap-10 font-bold flex items-center md:px-20 border-y"
                key={index}
              >
                <div className="w-fit py-10">
                  <h1>{item.year}</h1>
                </div>
                <div className="w-full flex text-justify">
                  <h1>{item.event}</h1>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </main>
  );
}


    // <main className="bg-white text-black">
    //   {/* Hero Section */}
    //   <div className="relative w-full h-[60vh] sm:h-[70vh]">
    //     <Image
    //       src="https://www.commerzbank.de/konzern/wer-wir-sind/uebersicht/wer_wir_sind_res_1444x813.jpg"
    //       layout="responsive"
    //       width={1444}
    //       height={813}
    //       objectFit="cover"
    //       className="absolute top-0 left-0 w-full h-[60vh] sm:h-[70vh] object-cover"
    //     />
    //     <div className="absolute w-full z-10 flex flex-col items-center justify-end h-[813px] text-white text-center pb-10 bg-black/30 px-4">
    //       <h1 className="text-4xl sm:text-5xl font-bold">Who we are</h1>
    //       <p className="text-lg sm:text-xl mt-4">
    //         Commerzbank combines digitalization with personal advice and sustainability.
    //       </p>
    //     </div>
    //   </div>

    //   {/* Mission Section */}
    //   <div className="w-full px-5 sm:px-10 lg:px-20 mt-10 pb-10 text-center">
    //     <h1 className="text-3xl sm:text-4xl font-bold mb-6">Our Mission and Values</h1>
    //     <p className="text-lg sm:text-xl">
    //       We provide innovative solutions for our customers, with core competencies in digitalization and a focus on sustainability.
    //     </p>
    //   </div>

    //   {/* Percentage Section */}
    //   <section className="bg-[#0e3c4a] text-white py-16 px-4 sm:px-8 text-center">
    //     <h2 className="text-3xl sm:text-4xl font-bold">30 percent...</h2>
    //     <p className="text-lg sm:text-xl mt-4">... of German foreign trade runs through Commerzbank.</p>
    //     <p className="text-sm sm:text-lg mt-4">
    //       We are the leading partner for medium-sized businesses in Germany, represented in 40 countries.
    //     </p>
    //   </section>

    //   {/* Customers Section */}
    //   <section className="py-10 bg-gray-100">
    //     <h2 className="text-3xl font-bold text-center mb-8">Our Customers</h2>
    //     <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 px-5 lg:px-28">
    //       {services.map((service, index) => (
    //         <div key={index} className="border rounded-lg p-6 shadow-lg bg-white">
    //           <div className="text-4xl text-center mb-4">{service.icon}</div>
    //           <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
    //           <p className="text-center mb-4">{service.description}</p>
    //           <div className="text-center">
    //             <Link href="#" className="text-blue-500 font-bold">Learn More &rarr;</Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </section>

    //   {/* History Section */}
    //   <div className="container mx-auto pt-16 sm:pt-32 px-5 sm:px-10 lg:px-20">
    //     <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Commerzbank History</h1>
    //     <p className="text-lg sm:text-xl text-center">
    //       Commerzbank's 150-year history is a mirror of Germany's economic and political development.
    //     </p>
    //   </div>

    //   {/* History Image */}
    //   <div className="w-full h-[40vh] sm:h-[60vh] mt-10">
    //     <Image
    //       src="https://www.commerzbank.de/konzern/wer-wir-sind/geschichte/bilder/geschichte_berlin_hauptverwaltung_1937_res_1204x903.png"
    //       layout="responsive"
    //       width={1204}
    //       height={903}
    //       objectFit="cover"
    //       className="w-full h-full object-cover"
    //     />
    //   </div>

    //   {/* Timeline */}
    //   <div className="w-full h-fit px-5 sm:px-10 lg:px-20 mt-10">
    //     {commerzbankHistory.map((item, index) => (
    //       <div key={index} className="w-full flex flex-col sm:flex-row gap-6 font-bold items-center px-5 py-10 border-y">
    //         <div className="w-fit">
    //           <h1 className="text-xl sm:text-2xl">{item.year}</h1>
    //         </div>
    //         <div className="w-full">
    //           <p className="text-justify">{item.event}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </main>
    
    