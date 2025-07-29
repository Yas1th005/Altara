import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section className="flex items-center justify-center relative overflow-hidden bg-black pt-10">
      {/* Main dark background with texture */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Subtle reddish-brown gradient in bottom left */}
      
 
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* About us button */}
          <div className="mb-4">
          <button 
            // variant="outline" 
            className="border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-xs"
            >
            About us
            </button>
          </div>
          
          {/* Main text content */}
          <div className="text-left space-y-4 text-white font-medium">
            {/* <h1 className="text-3xl md:text-3xl font-medium leading-tight">
              Hi, we're Auralis ✨
            </h1> */}
            <div className="text-xl md:text-3xl font-semibold leading-relaxed space-y-2">
              <p>Hi, we're Auralis ✨ We craft cutting edge</p>
              <p>AI solutions to make organizations more</p>
              <p>effective and competitive. We do so with a</p>
              <p>motivated team 🧑🏽‍💻🧑🏽‍💻👩🏽‍💻 of 9 experts</p>
              <p>focused on building world-class solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;