import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to My web page</h1>
          <p className="text-lg mb-6">Showcasing my work, skills, and projects</p>
          <a
            href="#projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            View Projects
          </a>
        </div>
      </section>
    </div>
  );
}
