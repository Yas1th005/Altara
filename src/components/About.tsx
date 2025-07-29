import { Sparkles, Users, Target } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ffb86b]/20 via-[#ff6a3d]/20 to-[#ffb86b]/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow">
            <Sparkles className="h-4 w-4" />
            About us
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                Hi, we're <span className="bg-gradient-to-r from-[#ffb86b] via-[#ff6a3d] to-[#ffb86b] bg-clip-text text-transparent">Auralis</span>
              </h2>
              <p className="text-xl text-white/70 leading-relaxed">
                We craft cutting edge AI solutions to make organizations more effective and competitive.
                We do so with a motivated team of <span className="text-primary font-semibold">9 experts</span> focused
                on building world-class solutions.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 p-6 rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Expert Team</h3>
                <p className="text-white/70">9 dedicated AI specialists working on your success</p>
              </div>
              <div className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 p-6 rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300">
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-white">Results Driven</h3>
                <p className="text-white/70">Focused on delivering measurable business outcomes</p>
              </div>
            </div>
          </div>
          {/* Right side - Team photos */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 p-4 rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300">
                  <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-center mt-2 text-white/60">Team Member</p>
                </div>
                <div className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 p-4 rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300">
                  <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-center mt-2 text-white/60">Team Member</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 p-4 rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300">
                  <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-center mt-2 text-white/60">Team Member</p>
                </div>
                <div className="bg-gradient-to-br from-[#23232b]/80 via-[#18181b]/80 to-[#ff6a3d]/10 p-4 rounded-2xl border border-white/10 hover:shadow-2xl transition-all duration-300">
                  <div className="w-full h-32 bg-muted rounded-lg flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-center mt-2 text-white/60">Team Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;