import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { name: "About", path: "/about" },
  { name: "Activities", path: "/activities" },
  { name: "Itineraries", path: "/itineraries" },
  { name: "Reviews", path: "/reviews" },
  { name: "Gallery", path: "/gallery" },
];

const socials = [
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zM17.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z",
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z",
  },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === "/";

  if (!isHome) {
    return null;
  }

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 w-full overflow-x-hidden bg-transparent text-white">
        <nav className="relative flex items-center justify-between border-b border-white/30 px-6 py-6 md:px-12">
          <Link
            to="/"
            className="text-base font-normal tracking-[0.2em] text-red-600 md:text-lg"
          >
            Nyamatusi
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition duration-300 hover:text-red-500 ${
                      isActive ? "text-red-500" : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col items-end gap-1.5"
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              <span className="h-0.5 w-7 rounded-full bg-white" />
              <span className="h-0.5 w-5 rounded-full bg-white" />
              <span className="h-0.5 w-3 rounded-full bg-white" />
            </button>
          </div>

          {menuOpen && (
            <div className="absolute left-0 top-full flex w-full flex-col gap-6 border-t border-white/20 bg-[#182018]/90 p-8 backdrop-blur-sm md:hidden">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-widest transition hover:text-red-500 ${
                      isActive ? "text-red-500" : "text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}
        </nav>
      </header>

      <section
        className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-x-hidden bg-[#182018] bg-cover bg-center bg-no-repeat px-7 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/Zebra_Banner.png')",
        }}
      >
        <h1 className="-translate-y-10 text-center font-serif text-5xl font-light tracking-wide md:-translate-y-14 md:text-7xl lg:text-8xl">
          Indulge in
        </h1>

        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col gap-6 md:flex">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              aria-label={item.name}
              className="transition duration-300 hover:text-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d={item.icon} />
              </svg>
            </a>
          ))}
        </div>

        <Link
          to="/about"
          aria-label="Go to About page"
          className="absolute bottom-10 flex h-12 w-12 items-center justify-center transition duration-300 hover:translate-y-2"
        >
          <span className="h-5 w-5 rotate-45 border-b-2 border-r-2 border-white" />
        </Link>
      </section>
    </>
  );
}

export default Header;