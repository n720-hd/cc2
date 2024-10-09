"use client";
import Image from "next/image";
import HeroSection from "../../components/hero/page";
import Link from "next/link";

export default function HomePage() {
  const productsPreview = [
    {
      name: "The right business account for every business",
      description:
        "Whether you need a classic business account or a premium business account, we have the right account for your needs and you decide what scope your personal account should have.",
      link: "Learn more",
      image:
        "https://www.commerzbank.de/ms/media/generated/3zD4IsmdXxiLuTDl14lO3H-92f94e598d3727f8adf4997644b1fdab-businesskarten-mit-stoerer-png_301by219_1200.webp",
    },
    {
      name: "Pay securely and flexibly worldwide with credit cards",
      description:
        "The right credit card for everyone. Whether Mastercard, Visa, or American Express - find out which credit card suits you.",
      link: "Learn more",
      image:
        "https://www.commerzbank.de/ms/media/generated/Ps5uIXTI0vBfydbtTN2tT-6dea87cf9043c19b44baf59840742f53-commerzbank-gold-mastercard-travel-stoerer-png_301by219_1200.webp",
    },
    {
      name: "Banking app",
      description:
        "With the banking app, you can manage your finances anytime and anywhere.",
      link: "Learn more",
      image:
        "https://www.commerzbank.de/ms/media/generated/4l7GxoSSI35WW19vaXkjBl-b0954172d72f64efb961cf9f01576133-mobile-banking-app-gro__-png_301by219_1200.webp",
    },
  ];

  const testimonials = [
    {
      name: "John Doe",
      position: "CEO of Tech Solutions",
      feedback:
        "Commerzbank has been instrumental in managing our business finances. Their tailored business account options made it easy for us to find the perfect solution.",
      image: "path/to/john-doe-image.png",
    },
    {
      name: "Jane Smith",
      position: "Freelance Consultant",
      feedback:
        "I've always found Commerzbank's banking app intuitive and secure. It helps me manage my personal and business finances seamlessly from anywhere.",
      image: "path/to/jane-smith-image.png",
    },
    {
      name: "Michael Brown",
      position: "Owner of Global Imports",
      feedback:
        "Their credit card services give me the flexibility and peace of mind I need when conducting international business transactions.",
      image: "path/to/michael-brown-image.png",
    },
  ];

  return (
    <main className="bg-white text-black">
      <div className="min-h-screen bg-gray-100">
        <HeroSection />
      </div>
      <div className="w-full h-full bg-white text-black text-center flex flex-col pt-3">
        <h1 className="text-2xl font-bold pb-4">About Us</h1>
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full h-fit flex flex-col md:flex-row px-4 md:px-20">
            <div className="w-full">
              <h1 className="pb-4 text-xl font-bold">Welcome to Commerzbank</h1>
              <p className="pr-0 md:pr-4 text-base md:text-lg">
              Commerzbank is one of the leading banks in Germany and Europe. With a history spanning over 150 years, we take pride in offering our customers innovative financial solutions and top-notch service. Our goal is to help you achieve your financial objectives—whether in personal finance, entrepreneurship, or investment.
              </p>
            </div>
            <div className="w-full md:w-7/12 h-fit bg-red-50 mt-4 md:mt-0">
              <Image
                src="https://img.fotocommunity.com/commerzbank-tower-c1bbb53d-cd54-4fa2-b82e-db70776c3318.jpg?height=1000"
                width={300}
                height={300}
                alt="ProductsMain"
                className="w-full h-48 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-between h-fit bg-white">
        <div className="w-full h-fit flex justify-center p-4 md:p-10 bg-white">
          <div className="w-full h-[300px] md:h-[500px]">
            <Image
              src="https://www.commerzbank.de/ms/media/generated/4F67jNKbrVfrOEe9TGjyRJ-fe4eebba5ef0e7793b8f23487fc14012-commerzbank_Kostenloses_Girokonto-50-euro-jpg_51-40_16by9_1200.webp"
              width={500}
              height={500}
              alt="ProductsMain"
              className="w-full object-cover"
            />
          </div>
        </div>
        <div className="w-full md:w-6/12 h-fit bg-white pt-4 md:pt-10">
          <h1 className="font-bold text-2xl text-black pb-5">
            Our free checking account
          </h1>
          <p className="max-w-full md:max-w-[70%] mb-10 text-black">
            Use the most important banking services digitally and free of charge
          </p>
          <Link
            href="/products"
            className="py-3 px-6 border rounded-lg text-black font-bold border-black w-full hover:bg-black hover:text-white"
          >
            Learn More!
          </Link>
        </div>
      </div>
      <div className="px-4 md:px-14 py-16 w-full grid grid-cols-1 md:grid-cols-3 gap-5 bg-white">
        {productsPreview.map((item, index) => (
          <div className="card glass w-full rounded-none border-white bg-white text-black" key={index}>
            <figure>
              <Image src={item.image} width={500} height={500} alt={item.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-start">
                <Link
                  href="/products"
                  className="btn bg-white border text-black hover:text-white"
                >
                  Learn now!
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="font-bold w-full justify-center flex text-3xl">
        TESTIMONIAL SECTION
      </h1>
      <div className="px-4 md:px-14 py-16 w-full grid grid-cols-1 md:grid-cols-3 gap-5 bg-white">
        {testimonials.map((itm, index) => (
          <div className="card glass w-full rounded-none border-white bg-white text-black" key={index}>
            <div className="card-body">
              <h2 className="card-title">{itm.name}</h2>
              <h2>{itm.position}</h2>
              <p>{itm.feedback}</p>
              <div className="card-actions justify-start">
                <Link
                  href="/products"
                  className="btn bg-white border text-black hover:text-white"
                >
                  Learn now!
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

    // <main className="bg-white text-black">
    //   <div className="min-h-screen bg-gray-100">
    //     <HeroSection />
    //   </div>
    //   <div className="w-screen h-full bg-white text-black text-center flex flex-col pt-3">
    //     <h1 className="text-2xl font-bold pb-4">About Us</h1>
    //     <div className="flex w-full">
    //       <div className="w-full h-fit flex px-20">
    //         <div className="w-full">
    //         <h1 className="pb-4 text-xl font-bold">Welcome to Commerzbank</h1>
    //         <h1 className="pr-4 text-lg">Commerzbank is one of the leading banks in Germany and Europe. With a history spanning over 150 years, we take pride in offering our customers innovative financial solutions and top-notch service. Our goal is to help you achieve your financial objectives—whether in personal finance, entrepreneurship, or investment.</h1>
    //         </div>
    //         <div className="w-7/12 h-fit bg-red-50">
    //           <Image
    //             src={
    //               "https://img.fotocommunity.com/commerzbank-tower-c1bbb53d-cd54-4fa2-b82e-db70776c3318.jpg?height=1000"
    //             }
    //             width={300}
    //             height={300}
    //             alt="ProductsMain"
    //             className="w-full h-96 object-cover"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex w-full justify-between h-fit bg-white">
    //     <div className="w-full h-fit flex justify-center p-10 bg-white">
    //       <div className="w-full h-[500px]">
    //         <Image
    //           src={
    //             "https://www.commerzbank.de/ms/media/generated/4F67jNKbrVfrOEe9TGjyRJ-fe4eebba5ef0e7793b8f23487fc14012-commerzbank_Kostenloses_Girokonto-50-euro-jpg_51-40_16by9_1200.webp"
    //           }
    //           width={500}
    //           height={500}
    //           alt="ProductsMain"
    //           className="w-full object-cover"
    //         />
    //       </div>
    //     </div>
    //     <div className="w-6/12 h-fit bg-white pt-10">
    //       <h1 className="font-bold text-2xl text-black pb-5">
    //         Our free checking account
    //       </h1>
    //       <h1 className="max-w-[70%] mb-10 text-black">
    //         Use the most important banking services digitally and free of charge
    //       </h1>
    //       <Link
    //         href="/products"
    //         className="py-3 px-6 border rounded-lg text-black font-bold border-black w-full hover:bg-black hover:text-white"
    //       >
    //         Learn More!
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="px-14 py-16 w-full grid grid-cols-3 gap-5 bg-white">
    //     {productsPreview.map((item, index) => {
    //       return (
    //         <div
    //           className="card glass w-full rounded-none border-white bg-white text-black"
    //           key={index}
    //         >
    //           <figure>
    //             <Image src={item.image} width={500} height={500} alt="car!" />
    //           </figure>
    //           <div className="card-body">
    //             <h2 className="card-title">{item.name}</h2>
    //             <p>{item.description}</p>
    //             <div className="card-actions justify-start">
    //               <Link
    //                 href="/products"
    //                 className="btn bg-white border text-black hover:text-white "
    //               >
    //                 Learn now!
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    //   <h1 className="font-bold w-full justify-center flex text-3xl">
    //     TESTIMONIAL SECTION
    //   </h1>
    //   <div className="px-14 py-16 w-full grid grid-cols-3 gap-5 bg-white">
    //     {testimonials.map((itm, index) => {
    //       return (
    //         <div
    //           className="card glass w-full rounded-none border-white bg-white text-black"
    //           key={index}
    //         >
    //           <figure>
    //             {/* <Image
    //                 src={itm.image}
    //                 width={500}
    //                 height={500}
    //                 alt="car!" /> */}
    //           </figure>
    //           <div className="card-body">
    //             <h2 className="card-title">{itm.name}</h2>
    //             <h2>{itm.position}</h2>
    //             <p>{itm.feedback}</p>
    //             <div className="card-actions justify-start">
    //               <Link
    //                 href="/products"
    //                 className="btn bg-white border text-black hover:text-white "
    //               >
    //                 Learn now!
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       );
    //     })}
    //   </div>
    // </main>