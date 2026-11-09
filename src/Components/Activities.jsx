import { useState } from "react";

const activities = [
  {
    name: "Game drives",
    sources: ["/Rectangle_17.png"],
    alt: "Elephants seen from a safari vehicle",
    text: "Game drives are what gets us up in the morning in the African bush. They are a great avenue for exploring the land in a safe and exciting way.",
    wide: true,
  },
  {
    name: "Walking safari",
    sources: ["/Rectangle_16.png"],
    alt: "Guests on a walking safari watching an elephant",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam purus sit amet luctus venenatis, lectus magna fringilla urna.",
  },
  {
    name: "Bird watching",
    sources: ["/Rectangle_18.png"],
    alt: "Binoculars resting on a bird guidebook",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam purus sit amet luctus venenatis, lectus magna fringilla urna.",
  },
  {
    name: "Canoeing",
    sources: ["/Rectangle_19.png"],
    alt: "Canoeing on the river at sunrise",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam purus sit amet luctus venenatis, lectus magna fringilla urna.",
  },
  {
    name: "Fishing",
    sources: ["/Rectangle_20.png"],
    alt: "Man fishing at the edge of the water",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam purus sit amet luctus venenatis, lectus magna fringilla urna.",
  },
];

function ActivityImage({ sources, alt }) {
  const [index, setIndex] = useState(0);

  return (
    <img
      src={sources[index]}
      alt={alt}
      onError={() =>
        setIndex((current) =>
          current + 1 < sources.length ? current + 1 : current
        )
      }
      className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-110 group-focus-within:scale-110"
    />
  );
}

function Activities() {
  return (
    <>
    

      <section className="w-full bg-white px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-light text-gray-700 md:text-4xl">
            Our activities
          </h1>

          <div className="mt-10 grid grid-cols-2 gap-3 lg:flex lg:gap-3">
            {activities.map((item) => (
              <div
                key={item.name}
                tabIndex={0}
                className={`group relative h-96 cursor-pointer overflow-hidden bg-gray-300 outline-none lg:h-[26rem] ${
                  item.wide ? "col-span-2 lg:flex-[1.25]" : "lg:flex-1"
                }`}
              >
                <ActivityImage sources={item.sources} alt={item.alt} />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent transition-colors duration-500 group-hover:from-black/90 group-hover:via-black/40 group-focus-within:from-black/90 group-focus-within:via-black/40" />

                <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <h2 className="text-sm font-medium">{item.name}</h2>

                  <p className="mt-0 max-h-40 overflow-hidden text-[11px] leading-relaxed text-white/90 opacity-100 transition-all duration-500 ease-out lg:max-h-0 lg:opacity-0 lg:group-hover:mt-2 lg:group-hover:max-h-40 lg:group-hover:opacity-100 lg:group-focus-within:mt-2 lg:group-focus-within:max-h-40 lg:group-focus-within:opacity-100">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Activities;