import { FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="bg-[#2B3138]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 
                        grid grid-cols-1 md:grid-cols-3 gap-8 
                        items-center text-center md:text-left">

          <div className="flex justify-center md:justify-start items-center gap-3">
            <FaEnvelope className="text-2xl text-white shrink-0" />
            <h1 className="text-sm text-gray-300">
              Get exclusive tech deals & offers in your inbox
            </h1>
          </div>

          <div className="text-white">
            <h1 className="text-sm font-medium mb-4">
              EXPERIENCE THE electronic MOBILE APP
            </h1>

            <div className="flex justify-center md:justify-start gap-3 flex-wrap">
              <button className="flex items-center gap-2 bg-black px-4 py-2 rounded-full hover:scale-105 transition">
                <img src="playstore.png" className="w-5 h-5" />
                <span className="text-sm">Google Play</span>
              </button>

              <button className="flex items-center gap-2 bg-black px-4 py-2 rounded-full hover:scale-105 transition">
                <img src="appstore.png" className="w-5 h-5" />
                <span className="text-sm">App Store</span>
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start items-start gap-3 text-gray-300">
            <img src="/Helpline.png" className="w-7 h-7 shrink-0" />
            <p className="text-xs leading-relaxed">
              NEED HELP? CALL US AT
              <br />
              <span className="font-medium text-white">
                +91 12345 67890
              </span>
              <br />
              (Mon–Sun, 8 AM – 10 PM)
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#3A4047]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-white text-sm">
            <section>
              <h5 className="mb-1 text-2xl font-extralight font-serif mx-2">allthings</h5>
              <p className="font-extralight">Who are we?</p>
              <p className="font-extralight">Careers</p>
              <p className="font-extralight">Authenticity</p>
              <p className="font-extralight">Press</p>
              <p className="font-extralight">Testimonials</p>
              <p className="font-extralight">allthings CSR</p>
              <p className="font-extralight">Sustainability</p>
              <p className="font-extralight">Responsible Disclosure</p>
              <p className="font-extralight">Investor Relations</p>
              <p className="font-extralight">Link to Smart ODR</p>
            </section>
            <section>
              <h5 className="mb-2 font-light">Help</h5>
              <p className="font-extralight">Contact Us</p>
              <p className="font-extralight">FAQs</p>
              <p className="font-extralight">Store Locator</p>
              <p className="font-extralight">Cancellation & Return</p>
              <p className="font-extralight">Shipping & Delivery</p>
              <p className="font-extralight">Sell on allthings</p>
            </section>
            <section>
              <h5 className="mb-2 font-light">Inspirational</h5>
              <p className="font-extralight">chrome Book</p>
              <p className="font-extralight">Games Board</p>
              <p className="font-extralight">Buying Guides</p>
            </section>
            <section>
              <h5 className="mb-2 font-light">Quick Links</h5>
              <p className="font-extralight">Offer Zone</p>
              <p className="font-extralight">New Launches</p>
              <p className="font-extralight">Gaming</p>
              <p className="font-extralight">accesories</p>
              <p className="font-extralight">ryzen Pro</p>
              <p className="font-extralight">Sitemap</p>
            </section>
            <section>
              <h5 className="mb-2 font-light">Top Categories</h5>
              <p className="font-extralight">Gaming</p>
              <p className="font-extralight">Mouse</p>
              <p className="font-extralight">GPU</p>
              <p className="font-extralight">CPU</p>
              <p className="font-extralight">Accessories</p>
              <p className="font-extralight">Desktops</p>
              <p className="font-extralight">HeatSinks</p>
              <p className="font-extralight">Speakers</p>
              <p className="font-extralight">RAMs</p>
              <p className="font-extralight">RGB</p>
            </section>
          </div>
        </div>
      </section>
      {/*brand trust*/}
      <section className="bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 
                        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg"
              className="w-10 h-10"
              alt="Free Shipping"
            />
            <div>
              
              <h2 className="text-xs text-white font-semibold">Free Shipping</h2>
              <p className="text-xs text-white">On Orders Above ₹299</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg"
              className="w-10 h-10"
              alt="Easy Returns"
            />
            <div>
              <h2 className="text-xs text-white font-semibold">Easy Returns</h2>
              <p className="text-xs text-white">15-Day Return Policy</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg"
              className="w-10 h-10"
              alt="Authenticity"
            />
            <div>
              <h2 className="text-xs text-white font-semibold">100% Authentic</h2>
              <p className="text-xs text-white">Products Sourced Directly</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg"
              className="w-10 h-10"
              alt="Brands"
            />
            <div>
              <h2 className="text-xs text-white font-semibold">Popular Brands</h2>
              <p className="text-xs text-white">1.2 Lakh+ Products</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="max-w-7xl mx-auto px-8 py-1 grid flex-col md:flex-row justify-between gap-2">
          <h2 className="text-white text-sm md:text-base">
            Show us Some Love ❤ on social media
          </h2>
          <div className="flex w-fit h-fit social_media_imgs border rounded-full hover:scale-[0.9] my-2">
            <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-instagram-filled.svg" alt="Instagram" />
            <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-facebook-filled.svg" alt="Facebook" />
            <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-youtube-filled.svg" alt="YouTube" />
            <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-twitter-filled.svg" alt="Twitter" />
            <img src="https://images-static.naikaa.com/media/wysiwyg/2021/icons/ic_social-pinterest-filled.svg" alt="Pinterest" />
          </div>
        </div>
      </section>

      <section className="bg-[#e80071]">
        <div className="max-w-7xl mx-auto px-6 py-2 text-white text-sm grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
          <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Shipping Policy</span>
            <span className="hover:text-white cursor-pointer">Cancellation Policy</span>
          <p className="col-span-full text-xs mt-1">
            © 2025 AllThings E-Retail Limited Rights Reserved
          </p>
        </div>
      </section>

      <footer className="bg-black">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-400 text-left">
          <p>Popular Product Links</p>
          <p className="mt-1 leading-relaxed">
            Smartphones, Laptops, Wireless Earbuds, Bluetooth Speakers, Smart Watches, Gaming Consoles, Power Banks,
            Mobile Accessories, Headphones, Tablets, DSLR Cameras, Action Cameras, Laptop Bags, Mechanical Keyboards,
            Wireless Mouse, External Hard Drives, SSD Storage, USB Flash Drives, WiFi Routers, Smart Home Devices,
            LED Smart TVs, Android TV Boxes, Soundbars, Home Theatre Systems, Streaming Devices,
            Air Conditioners, Refrigerators, Washing Machines, Microwave Ovens, Electric Kettles,
            Vacuum Cleaners, Air Purifiers, Smart Lights, Security Cameras, Video Doorbells,
            Apple iPhone, Samsung Galaxy, OnePlus, Xiaomi, Realme, Sony, JBL, Bose, Logitech,
            Fast Chargers, Type-C Cables, HDMI Cables, Monitor Screens, Gaming Controllers,
            Inverters, UPS Systems, Computer Components, Graphics Cards, Processors, Motherboards,
            Office Electronics, Printers, Scanners, Webcams, Routers, Smart Plugs, and Wearable Tech.
          </p>
        </div>
      </footer>
    </>
  );
}
