'use client';
import { Carousel, Typography, Button } from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
 
export default function HeroSection() {
  return (
    <Carousel>
      <div className="relative h-full w-full">
        <Image
          src="https://www.commerzbank.de/ms/media/generated/T4Keyc4hSHwwLxxlOktxE-2f2a75549b98082ec4fb739d8e21b9fb-wp-sparen-jpeg_55-44_7by3_1200.webp"
          alt="image 1"
          width={1080}
          height={1080}
          className="h-[1080px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Roy has his future firmly under control!
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Simply invest money on the side with Commerzbanks securities savings plans
            </Typography>
            <div className="flex justify-center gap-2">
              <Link size="lg" href="/products" className="border-spacing-3 py-2 px-2 rounded-full bg-yellow-600 text-black font-bold">
                To our Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src="https://www.commerzbank.de/konzern/wer-wir-sind/uebersicht/zahlen-und-fakten_res_998x564.jpg"
          alt="image 2"
          width={1080}
          height={1080}
          className="h-[1080px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Our Values
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              We stand for integrity, excellence, innovation, and teamwork. These values shape our actions and decisions and ensure that we always act in the best interest of our customers and partners.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link size="lg" href="/about" className="border-spacing-3 py-2 px-2 rounded-full bg-yellow-600 text-black font-bold">
                Find more About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}