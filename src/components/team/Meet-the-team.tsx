import { teamMembers } from "../../data/team-data";

const MeetTheTeam = () => {
  return (
    <section className="bg-[#F8F8FB] py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-14 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-orange-500">
            Our Smart People
          </span>

          <h2 className="mt-3  text-2xl  text-transparent bg-clip-text bg-gradient-to-r from-[#00193C] to-[#0044A2] font-bold  md:text-4xl">
            Meet The Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.id}>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="md:h-[335px] w-full object-cover transition duration-300 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2C66]/80 via-transparent to-transparent" />

                {/* Role */}
                <span className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                  {member.role}
                </span>
              </div>

              <div className="mt-4">
                <h3 className="md:text-2xl text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00193C] to-[#0044A2]">
                  {member.name}
                </h3>

                <p className="mt-1 md:text-sm text-xs text-gray-600">
                  {member.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
