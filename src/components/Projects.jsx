import React from "react";

const projects = [
  {
    id: 1,
    title: "E-commerce Redesign",
    description: "A modern online store experience with seamless UI/UX and custom checkout flow.",
    image: "/project1.jpg",
  },
  {
    id: 2,
    title: "Startup Landing Page",
    description: "Crafted a responsive landing page for a tech startup to increase sign-ups.",
    image: "/project2.jpg",
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <main className="w-full px-12 flex justify-center py-8 h-screen">
      <div className="flex flex-col justify-center gap-12 w-full">
        {/* Header */}
        <section className="flex justify-between w-full">
          <div className="text-6xl font-medium">Projects</div>
          <div className="max-w-sm w-full text-gray-600">Check out some of our fantastic works and leverage our services for your brand</div>
        </section>

        {/* Project Cards */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded shadow-md overflow-hidden flex flex-col">
                <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6 flex flex-col gap-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
            <button className="mt-4 px-4 py-2 bg-black text-white w-max rounded hover:bg-gray-800 transition">Check out more</button>
          </div>
        </section>
      </div>
    </main>
  );
}
