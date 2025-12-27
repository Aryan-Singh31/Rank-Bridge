import { Link } from "react-router-dom";

const pyqs = [
  { title: "CUET", img: "/images/cuet.webp", link: "/pyqs/cuet" },
  { title: "NIMCET", img: "/images/nimcet.jpeg", link: "/pyqs/nimcet" },
  { title: "JEE", img: "/images/jee-main-2025.webp", link: "/pyqs/jee" },
  { title: "NEET", img: "/images/neet.jpg", link: "/pyqs/neet" },
  { title: "GATE", img: "/images/gateimg.jpg", link: "/pyqs/gate" },
  { title: "UPSC", img: "/images/upsc.jpg", link: "/pyqs/upsc" },
];

const PYQsHome = () => {
  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Previous Year Questions (PYQs)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {pyqs.map((p, i) => (
          <Link key={i} to={p.link}>
            <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:scale-105 transition cursor-pointer">
              <img src={p.img} alt={p.title} className="h-48 w-full object-cover" />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-gray-600 mt-2">
                  Year-wise & subject-wise PYQs
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PYQsHome;
