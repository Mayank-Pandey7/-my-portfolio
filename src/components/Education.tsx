const edu = [
  {
    title: "Uttarakhand Technical University",
    position: "B.Tech Computer Science & Engineering",
    date: "2022 - 2026",
    link: "https://uktech.ac.in/",
  },
];

export default function Education() {
  return (
    <div className="mb-16 text-white">
      <h1 className="text-2xl font-bold">
        <span className="text-green-300">&gt;</span> education
      </h1>

      <div className="mt-10">
        {edu.map((ed) => (
          <div key={ed.title} className="mt-10 group">
            <a
              href={ed.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold group-hover:text-green-300"
            >
              {ed.title}
            </a>

            <p className="text-gray-500 text-xs mt-2">
              {ed.position} | {ed.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}