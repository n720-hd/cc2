import Image from "next/image"
import Link from "next/link"

export  default function ProductsSection(){
    const creditCards = [
            {
                name: "Prepaid credit card: The practical card for recharging",
                price: "39,90 anually",
                img: "https://www.commerzbank.de/ms/media/generated/2dKnu963S1AXIN2meh8fYH-dc1f1760436054261495e9c86b8b5ee3-prepaid-master-tilted-png_622by439_1200.webp"
              },
              {
                name: "The Mastercard Debit from Commerzbank",
                price: "39,90 anually",
                img: "https://www.commerzbank.de/ms/media/generated/1KppW34S7n3xKPb6WXMGyw-ebd28cf5ae9835af95c2d690b6340ec8-debit-master-tilted-png_622by439_1200.webp"
              },
              {
                name: "ClassicKreditkarte: The classic among credit cards",
                price: "39,90 anually",
                img: "https://www.commerzbank.de/ms/media/generated/1j6Hri6hyRPKRbQDkQdjIl-3c909a644ed3ace527452e411e54f7fd-classic_-_tilted_-_one_-_mastercard_-_center-png_622by439_1200.webp"
              }
    ]

    const satisfiedCustomers = [
        {
          id: 1,
          name: "Oliver Davis",
          image: "https://randomuser.me/api/portraits/men/76.jpg",
          testimonial: "I've been a customer of Commerzbank for over 10 years and I've always been impressed with their excellent service and competitive rates."
        },
        {
          id: 2,
          name: "Sophia Patel",
          image: "https://randomuser.me/api/portraits/women/42.jpg",
          testimonial: "I recently opened a business account with Commerzbank and the process was seamless. Their customer support team is always available to help with any questions I have."
        },
        {
          id: 3,
          name: "Alexander Müller",
          image: "https://randomuser.me/api/portraits/men/91.jpg",
          testimonial: "I've been using Commerzbank's online banking platform for years and it's always been easy to use and secure. I highly recommend it to anyone looking for a reliable banking solution."
        }
      ];

    return(
        <main className="text-black bg-white pt-20">
            <div className="w-full h-fit">
                <h1 className="text-center font-bold text-3xl pb-4">Pay securely and flexibly worldwide with credit cards</h1>
                <p className="text-xl text-center font-bold">The right credit cards for everyone,find out which credit card suits you.</p>
            <div className="px-4 md:px-14 py-16 w-full grid grid-cols-1 md:grid-cols-3 gap-5 bg-white">
           {creditCards.map((itm,index) =>{
            return(
        <div className="card glass w-full rounded-none border-white bg-white text-black" key={index}>
                <figure>
                    <Image
                    src={itm.img}
                    width={500}
                    height={500}
                    alt="car!" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{itm.name}</h2>
                    <p>{itm.price}</p>
                    <div className="card-actions justify-start">
                    <Link href='/products' className="btn bg-white border text-black hover:text-white ">Learn now!</Link>
                    </div>
                </div>
                </div>
            )
           })}
        </div>
        </div>
        <h1 className="font-bold w-full justify-center flex text-3xl">
        Our satisfied Customers
        </h1>
        <div className="px-4 md:px-14 py-16 w-full grid grid-cols-1 md:grid-cols-3 gap-5 bg-white">
        {satisfiedCustomers.map((itm, index) => (
          <div className="card glass w-full rounded-none border-white bg-white text-black" key={index}>
            <Image
                    src={itm.image}
                    width={500}
                    height={500}
                    alt="customer" />
            <div className="card-body">
              <h2 className="card-title">{itm.name}</h2>
              <p>{itm.testimonial}</p>
              <div className="card-actions justify-start">
              </div>
            </div>
          </div>
        ))}
      </div>  
    </main>
    )
}