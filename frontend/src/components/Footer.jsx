const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">

        {/* ===== Left Section ===== */}
        <div className="md:w-1/3">
          <img
            src="/images/finall.png"
            alt="Rank Bridge"
            className="w-40 mb-4"
          />
          <p className="text-sm leading-relaxed">
            Greater Noida, Uttar Pradesh
          </p>
        </div>

        {/* ===== Center Section ===== */}
        <div className="md:w-1/3 text-center">
          <h4 className="font-bold text-white mb-4">
            STAY CONNECTED
          </h4>

          <div className="flex justify-center gap-5 mb-4">
            <img
              src="/images/instagrame.png"
              alt="Instagram"
              className="w-6 hover:scale-110 transition cursor-pointer"
            />
            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="w-6 hover:scale-110 transition cursor-pointer"
            />
            <img
              src="/images/youtube.png"
              alt="YouTube"
              className="w-6 hover:scale-110 transition cursor-pointer"
            />
            <img
              src="/images/twitter.png"
              alt="Twitter"
              className="w-6 hover:scale-110 transition cursor-pointer"
            />
          </div>
        </div>

        {/* ===== Right Section ===== */}
        <div className="md:w-1/3 text-sm text-center md:text-right">
          © 2022 Rank Bridge <br />
          All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
