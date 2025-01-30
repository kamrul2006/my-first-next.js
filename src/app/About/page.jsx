export default function AboutPage() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold">About Me</h1>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl text-center">
          Hi! I'm Kamrul Islam Apurba, a passionate frontend developer skilled in React, Next.js, and Tailwind CSS. 
          I love crafting beautiful, responsive, and dynamic web applications.
        </p>
        <div className="mt-6">

          <a
            href="/Contact"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            Contact Me
          </a>

          <a
            href="/About/FullAbout"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
          >
            Read the full document
          </a>


        </div>
      </div>
    );
  }
  