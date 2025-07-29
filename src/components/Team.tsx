import { User } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Daniel Foster",
      role: "CEO",
      avatar: "DF",
      hasPhoto: true
    },
    {
      name: "Ethan Walker", 
      role: "Sales",
      avatar: "EW",
      hasPhoto: true
    },
    {
      name: "Liam Parker",
      role: "Developer",
      avatar: "LP",
      hasPhoto: false
    },
    {
      name: "Emily Carter",
      role: "CCO", 
      avatar: "EC",
      hasPhoto: false
    },
    {
      name: "Sophia Scott",
      role: "Marketing",
      avatar: "SS", 
      hasPhoto: false
    },
    {
      name: "Lucas Gray",
      role: "Developer",
      avatar: "LG",
      hasPhoto: false
    },
    {
      name: "Michael Thornton",
      role: "CTO",
      avatar: "MT",
      hasPhoto: false
    },
    {
      name: "Olivia Hayes",
      role: "Design",
      avatar: "OH",
      hasPhoto: false
    },
    {
      name: "Ryan Cooper",
      role: "Developer",
      avatar: "RC",
      hasPhoto: true
    }
  ];

  return (
    <section id="team" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-left mb-16">
            <button 
            // variant="outline" 
            className="mb-4 border border-gray-100/10 rounded-[10px] py-1 px-2 bg-gradient-to-r from-orange-300 from-20% to-white bg-clip-text text-transparent hover:bg-white/10 text-sm"
            >
            Team
            </button>
          <h2 className="text-4xl md:text-7xl font-medium mb-6 text-white tracking-tight">Meet the team</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors duration-200"
            >
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                {member.hasPhoto ? (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">{member.avatar}</span>
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                    <User className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
              
              {/* Name and Role */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-white text-base truncate">
                  {member.name}
                </div>
                <div className="mt-1">
                  <span className="inline-block border border-orange-500 rounded-[6px] py-1 px-2 text-xs text-orange-500 bg-transparent">
                    {member.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 