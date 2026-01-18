import Image from "next/image"
import ContactFormButton from "./contact-form-button"

export default function Hero() {
  return (
    <section id="hero" className="card my-8 relative overflow-hidden shadow-md">
      <div className="p-8 md:p-10 lg:p-12 flex flex-col md:flex-row items-start">
        {/* Text content - takes full width on mobile */}
        <div className="w-full md:w-3/5 z-10">
          <h1 className="text-black dark:text-white text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            Smart Automation Solutions
            <span className="block text-[#71717a] dark:text-[#71717a]">Built with AI</span>
          </h1>
          <p className="my-6 text-sm md:text-base max-w-md text-gray-700 dark:text-gray-300">
            I design automation and web solutions that streamline operations and drive growth

          </p>
          <div className="flex flex-wrap items-center gap-4">
            <ContactFormButton />
            <a href="#services" className="btn-secondary text-black dark:text-white">
              Learn more
            </a>
          </div>
        </div>

        {/* Profile Image - hidden on mobile, visible on md and up */}
        <div className="hidden md:flex md:w-2/5 md:absolute md:right-12 md:top-0 md:bottom-0 items-center justify-center">
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-[#71717A]/20 p-2 bg-gradient-to-tr from-[#71717A]/10 to-transparent">
            <div className="w-full h-full rounded-full overflow-hidden relative shadow-2xl">
              <Image
                src="/hero-profile.png"
                alt="Lester Borillo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
