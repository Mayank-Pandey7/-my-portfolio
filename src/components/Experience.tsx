import { RiArrowRightUpLine } from "@remixicon/react";

const experience = [
  {
    title: "Octanet Services Pvt. Ltd.",
    position: "Web Development Intern",
    date: "(sep 2024 - oct 2024)",
    description:
      "Worked on responsive web interfaces using HTML and CSS, focusing on clean design, usability, and cross-device compatibility. Gained practical experience in frontend development and modern web design principles.",
  },
];

export default function Experience() {
  return (
    <div className="text-white mb-16">
      <h1 className="text-2xl font-bold text-white mb-8">
        <span className="text-green-300">&gt;</span> work
      </h1>
      <div className="grid grid-cols-1 gap-2">
        {experience.map((exp) => (
          <a
            key={exp.title}
            href={exp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block -mx-6 p-6 hover:bg-zinc-900/50 hover:border-green-300/30 transition-all duration-300 group cursor-pointer"
          >
            <div className="absolute top-5 right-5 text-gray-500 group-hover:text-green-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              <RiArrowRightUpLine size={20} />
            </div>

            <div className="flex flex-col gap-1">
              <h2 className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300">
                {exp.title}
              </h2>
              <p className="text-gray-500 text-xs font-mono">
                {exp.position} <span className="mx-1 text-zinc-700">|</span>{" "}
                {exp.date}
              </p>
            </div>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed max-w-[95%]">
              {exp.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}
