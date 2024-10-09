// components/Footer.js
import Link from 'next/link';
import commerzlogoblank from "@/public/images/commerzlogoblank.png"
import Image from 'next/image';
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaXing } from "react-icons/fa";





export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 flex bottom-0">
      <div className="container mx-auto px-4">
        {/* Contact Area */}
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold mb-2">Available for you 24/7</h4>
          <div className="flex justify-center items-center flex-col">
            <div className='grid grid-cols-2 gap-10'>
           <div>
           <a 
              href="https://filialsuche.commerzbank.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 text-black px-4 py-2 rounded-full w-20 h-20 flex items-center justify-center hover:bg-yellow-600 transition duration-300"
            >
              <IoLocationOutline className='w-6 h-6'/>
            </a>
            <p className='font-bold'>Branches</p>
           </div>
           <div>
            <button 
              type="button"
              className="bg-yellow-500 text-black px-4 py-2 rounded-full w-20 h-20 flex items-center justify-center hover:bg-yellow-600 transition duration-300"
            >
              <IoMailOutline className='w-6 h-6' />
            </button>
            <p className='font-bold'>Contacts</p>
           </div>
            </div>
          </div>
        </div>

        {/* Brand Area */}
        <div className="flex justify-between items-center border-t border-gray-700 pt-4">
          <Link href="/" aria-label="Startseite">
            <Image
              src={commerzlogoblank}
              width={240}
              height={80}
              alt="Commerzbank Logo"
            />
          </Link>
          <p className="text-l font-bold">The Bank on your Side</p>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center space-x-4 mt-6">
          <Link href="/hinweise/agb">Terms & Conditions</Link>
          <Link href="/hinweise/rechtliche-hinweise">Legal Notice</Link>
          <Link href="/hinweise/impressum">Imprint</Link>
          <Link href="#uc-corner-modal-show">Consent setting</Link>
          <Link href="https://www.commerzbank.de/konzern" passHref>
            <p target="_blank" rel="noopener noreferrer">Corporation</p>
          </Link>
          <Link href="https://www.commerzbank.de/konzern/karriere" passHref>
            <p target="_blank" rel="noopener noreferrer">Career</p>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://www.facebook.com/commerzbank" passHref>
            <p target="_blank" rel="noopener noreferrer"><RiFacebookBoxFill /></p>
          </Link>
          <Link href="https://www.instagram.com/commerzbank" passHref>
            <p target="_blank" rel="noopener noreferrer"><FaInstagram /></p>
          </Link>
          <Link href="https://www.youtube.com/c/CommerzbankAG" passHref>
            <p target="_blank" rel="noopener noreferrer"><FaYoutube/></p>
          </Link>
          <Link href="https://www.linkedin.com/company/commerzbank-ag/" passHref>
            <p target="_blank" rel="noopener noreferrer"><FaLinkedin /></p>
          </Link>
          <Link href="https://www.xing.com/pages/commerzbank" passHref>
            <p target="_blank" rel="noopener noreferrer"><FaXing /></p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
{/* <main className='w-full'>
    <footer className='upper-footer'>

    </footer>
    <footer className="bg-base-100 text-white lower-footer">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <ul className="flex space-x-4">
            <li>
              <Link href="/home">
                <h1>Home</h1>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com/commerzbank" target="_blank" rel="noopener noreferrer">
              <RiFacebookBoxFill />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/commerzbank" target="_blank" rel="noopener noreferrer">
              <FaTwitterSquare />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/commerzbank" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/commerzbank/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
              </a>
            </li>
            <li>
              <a href="https://www.xing.com/pages/commerzbank/" target="_blank" rel="noopener noreferrer">
              <FaXing />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p>&copy; {new Date().getFullYear()} Commerzbank. All rights reserved.</p>
        </div>
      </div>
    </footer>
</main> */}