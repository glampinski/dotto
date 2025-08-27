import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t border-[#e0e0e0] py-6 md:py-8 text-center">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between px-4 md:px-12 text-[1rem] md:text-[1.03rem] text-[#5f6368] gap-3 md:gap-0">
        <span>&copy; 2025 dotto. All rights reserved.</span>
        <Link 
          href="#contact" 
          className="text-[#1a73e8] no-underline ml-0 md:ml-4.5 font-medium hover:underline"
        >
          Contact
        </Link>
      </div>
    </footer>
  );
}
