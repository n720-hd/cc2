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



    return(
        <main className="text-black bg-white pt-20">
            <div className="w-full h-fit">
                <h1 className="text-center font-bold text-3xl pb-4">Pay securely and flexibly worldwide with credit cards</h1>
                <p className="text-xl text-center font-bold">The right credit cards for everyone,find out which credit card suits you.</p>
            <div className="px-14 py-16 w-full grid grid-cols-3 gap-5 bg-white">
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
            
        </main>
    )
}