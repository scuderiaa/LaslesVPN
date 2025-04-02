import Person from "../assets/Heroo.svg"

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-5 md:gap-6 text-center md:text-left order-2 md:order-1">
            <div className="mx-auto md:mx-0 max-w-md">
              <h1 className="font-rubik text-3xl sm:text-4xl lg:text-5xl font-medium tracking-wide leading-tight">
                Want anything to be easy with <span className="font-rubik font-bold text-black">LaslesVPN.</span>
              </h1>
            </div>
            
            <div className="mx-auto md:mx-0 max-w-lg">
              <p className="text-[#4F5665] tracking-wide font-medium text-sm sm:text-base leading-relaxed">
                Provide a network for all your needs with ease and fun using <span className="font-bold">LaslesVPN</span> discover interesting features from us.
              </p>
            </div>
            
            <div className="mt-2 md:mt-4">
              <button className="bg-[#F53838] rounded-lg text-center font-rubik font-bold px-8 py-3 text-white shadow-lg shadow-[#F53838]/30 hover:bg-[#e02f2f] transition-all duration-300 cursor-pointer transform hover:-translate-y-1">
                Get Started
              </button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-6 md:mb-0">
            <img 
              src={Person} 
              className="w-4/5 sm:w-3/4 md:w-full max-w-lg object-contain" 
              alt="LaslesVPN Hero illustration" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero