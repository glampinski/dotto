import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-12">
      <section className="flex flex-col md:flex-row items-center justify-between py-20 md:py-32 gap-12 md:gap-16">
        <div className="flex-1 max-w-[500px]">
          <h1 className="text-[2.8rem] md:text-[3.5rem] font-bold mb-6 tracking-[-1px] leading-[1.1] text-gray-900">
            Empowering<br />
            Your Data<br />
            Journey
          </h1>
          <p className="text-[1.1rem] md:text-[1.25rem] text-gray-600 mb-8 leading-[1.6] max-w-[400px]">
            dotto is your trusted partner for advanced data solutions, from nano to big data. 
            We help you monitor, analyze, and optimize your resources for a sustainable future.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-[#1a73e8] text-white font-medium text-[1rem] md:text-[1.1rem] py-[14px] px-[32px] rounded-[8px] no-underline shadow-[0_2px_8px_rgba(26,115,232,0.3)] transition-all duration-200 hover:bg-[#1765c1] hover:shadow-[0_4px_12px_rgba(26,115,232,0.4)]"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/images/Dotto_nano_inside.png"
            alt="Dotto Device"
            width={600}
            height={400}
            className="w-full max-w-[500px] md:max-w-[600px] h-auto object-contain"
          />
        </div>
      </section>
    </div>
  );
}
