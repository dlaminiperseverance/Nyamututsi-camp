import { Link } from "react-router-dom";

const usefulInfo = [
  { name: "Travel information", href: "#" },
  { name: "Safari logistics", href: "#" },
  { name: "Privacy policy", href: "#" },
  { name: "Terms and conditions", href: "#" },
];

const sitemap = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Suggested itineraries", to: "/itineraries" },
  { name: "Gallery", to: "/gallery" },
];

const getInTouch = [
  { name: "Plan your safari", href: "#" },
  { name: "Contact us", href: "#" },
  { name: "Careers", href: "#" },
];

const linkClass = "text-xs text-white/90 transition hover:text-white";
const headingClass = "text-xs font-bold italic text-white";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  return (
    <footer className="w-full bg-[#e8561a] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 md:px-10 lg:grid-cols-[1fr_1fr_1fr_1.6fr] lg:px-14">
        <div>
          <h3 className={headingClass}>Useful information</h3>
          <ul className="mt-5 space-y-3">
            {usefulInfo.map((item) => (
              <li key={item.name}>
                <a href={item.href} className={linkClass}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Sitemap</h3>
          <ul className="mt-5 space-y-3">
            {sitemap.map((item) => (
              <li key={item.name}>
                <Link to={item.to} className={linkClass}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Get in touch</h3>
          <ul className="mt-5 space-y-3">
            {getInTouch.map((item) => (
              <li key={item.name}>
                <a href={item.href} className={linkClass}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>Sign up for our newsletter</h3>
          <form onSubmit={handleSubmit} className="mt-5 flex">
            <input
              type="email"
              required
              placeholder="Email"
              aria-label="Email address"
              className="h-10 min-w-0 flex-1 bg-white px-4 text-xs text-gray-800 outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="h-10 bg-[#2b1d12] px-6 text-xs font-bold italic text-white transition hover:bg-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/60">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-5 py-4 text-[11px] text-white/90">
          <span
            aria-hidden="true"
            className="flex h-4 w-4 items-center justify-center rounded-full border border-white/90 text-[9px] leading-none"
          >
            c
          </span>
          <p>
            Copyright {new Date().getFullYear()} Nyamututsi camp. All rights
            reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;