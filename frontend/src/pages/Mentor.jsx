import { useState } from "react";
import { motion } from "framer-motion";

const Mentor = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= NAVBAR ================= */}
      <nav className="bg-emerald-50 shadow-md px-4 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <img
            src="/images/finall.png"
            alt="Logo"
            className="h-14 sm:h-16 md:h-20"
          />

          {/* Hamburger (Mobile) */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 font-bold">
            <input
              type="search"
              placeholder="Search..."
              className="w-[300px] xl:w-[400px] h-10 border-2 rounded px-3"
            />
            <button className="px-4 bg-blue-600 text-white rounded hover:scale-105 transition">
              Search
            </button>

            <a href="/" className="hover:text-blue-600">HOME</a>

            <select
              onChange={(e) => (window.location.href = e.target.value)}
              defaultValue=""
              className="bg-emerald-50 font-bold cursor-pointer"
            >
              <option value="" disabled>COURSE</option>
              <option value="/nimcetcard">NIMCET</option>
              <option value="/jeecard">JEE</option>
              <option value="/neetcard">NEET</option>
              <option value="/gatecard">GATE</option>
              <option value="/upsccard">UPSC</option>
              <option value="/cuetcard">CUET</option>
            </select>

            <a href="/aboutus">ABOUT US</a>

            {user ? (
              <>
                <span>Hello, {user.name}</span>
                <a href="/logout" className="text-red-600">LOGOUT</a>
              </>
            ) : (
              <a href="/login">LOGIN / SIGNUP</a>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 flex flex-col gap-3 font-bold">
            <input
              type="search"
              placeholder="Search..."
              className="w-full h-10 border-2 rounded px-3"
            />
            <button className="bg-blue-600 text-white py-2 rounded">
              Search
            </button>

            <a href="/">HOME</a>

            <select
              onChange={(e) => (window.location.href = e.target.value)}
              defaultValue=""
              className="border p-2 rounded"
            >
              <option value="" disabled>COURSE</option>
              <option value="/nimcetcard">NIMCET</option>
              <option value="/jeecard">JEE</option>
              <option value="/neetcard">NEET</option>
              <option value="/gatecard">GATE</option>
              <option value="/upsccard">UPSC</option>
              <option value="/cuetcard">CUET</option>
            </select>

            <a href="/aboutus">ABOUT US</a>

            {user ? (
              <>
                <span>Hello, {user.name}</span>
                <a href="/logout" className="text-red-600">LOGOUT</a>
              </>
            ) : (
              <a href="/login">LOGIN / SIGNUP</a>
            )}
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white text-center py-20 px-4"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Join Our Mentorship Program
        </h1>
        <p className="text-base sm:text-lg">
          Learn from industry experts and accelerate your growth!
        </p>
      </motion.section>

      {/* ================= ABOUT ================= */}
      <section className="text-center py-14 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          About the Program
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg font-serif">
          Our mentorship program connects aspiring professionals with experienced
          mentors who guide them in their careers. Whether you're a student or a
          working professional, this program helps you gain industry insights and
          practical skills.
        </p>
      </section>

      {/* ================= MENTORS ================= */}
      <section className="py-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Meet Our Mentors
        </h2>

        <div className="flex justify-center gap-6 flex-wrap px-4">
          {[
            {
              img: "/images/mentor1.jpg",
              name: "John Doe",
              role: "Senior Web Developer at Google",
              mail: "John2546@helpcare.com",
            },
            {
              img: "/images/mentor2.jpg",
              name: "Jane Smith",
              role: "UI/UX Designer at Apple",
              mail: "smith859@helpcare.com",
            },
            {
              img: "/images/mentor3.jpg",
              name: "Mark Johnson",
              role: "Full-Stack Engineer at Microsoft",
              mail: "mark256@helpcare.com",
            },
          ].map((m, i) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={i}
              className="w-full sm:w-72 border-2 border-black
                         rounded-lg p-6 shadow-md
                         hover:bg-slate-800 hover:text-white transition"
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-4 font-bold text-lg">{m.name}</h3>
              <p className="font-semibold">{m.role}</p>
              <p className="text-sm mt-1">{m.mail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= APPLY ================= */}
      <section className="bg-sky-400 text-white py-14 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Apply for the Program
        </h2>

        <form
          action="/apply"
          method="POST"
          className="max-w-md w-full mx-auto flex flex-col gap-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="p-3 rounded text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="p-3 rounded text-black"
          />
          <textarea
            name="message"
            placeholder="Why do you want to join?"
            required
            className="p-3 rounded text-black"
          />
          <button className="bg-white text-sky-500 font-bold py-2 rounded hover:scale-105 transition">
            Submit Application
          </button>
        </form>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-zinc-900 text-white px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8">

          <div className="lg:w-1/3 text-center lg:text-left">
            <img src="/images/finall.png" className="w-40 mx-auto lg:mx-0" />
            <p className="mt-4">
              Plot No.34,35 <br />
              Knowledge Park I, Greater Noida <br />
              Uttar Pradesh - 201310
            </p>
          </div>

          <div className="lg:w-1/3 text-center">
            <h3 className="font-bold mb-4">STAY IN TOUCH</h3>
            <div className="flex justify-center gap-4 mb-4">
              <img src="/images/instagrame.png" className="w-8 hover:scale-110" />
              <img src="/images/facebook.png" className="w-8 hover:scale-110" />
              <img src="/images/youtube.png" className="w-8 hover:scale-110" />
              <img src="/images/twitter.png" className="w-8 hover:scale-110" />
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfOpcU8cbbrYQye162CplfwUvbeWzXo95Num8Q_rK-m50QFCA/viewform"
              className="font-bold underline"
            >
              Please Share Your Valuable Feedback Here
            </a>
          </div>

          <div className="lg:w-1/3 text-center lg:text-right">
            <p>
              Contact Us | Privacy Policy | Terms & Conditions <br />
              © 2022 Rank Bridge. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Mentor;
