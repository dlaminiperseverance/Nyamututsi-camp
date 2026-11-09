const wildlife = {
  giraffe: { src: "/Rectangle_33.png", alt: "Giraffe at sunset" },
  impala: { src: "/Rectangle_30.png", alt: "Two impala" },
  zebras: { src: "/Rectangle_31.png", alt: "Two zebras" },
  elephant: { src: "/Rectangle_26.png", alt: "Elephant in dry grass" },
  wildebeest: { src: "/Rectangle_32.png", alt: "Herd of wildebeest" },
  lioness: { src: "/Rectangle_28.png", alt: "Lioness yawning" },
};

function Photo({ photo, className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-gray-300 ${className}`}>
      <img
        src={photo.src}
        alt={photo.alt}
        className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 hover:scale-105"
      />
    </div>
  );
}

function Itineraries() {
  return (
    <section className="w-full bg-white px-5 py-16 text-[#182018] md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-light text-gray-800 md:text-4xl">
          Recent wildlife sightings
        </h1>
        <p className="mt-6 max-w-sm text-xs leading-relaxed text-gray-700">
          Wildlife sightings include elephant, kudu, sable antelope, zebra,
          wildebeest, the rare and endangered roan antelope, buffalo, lion,
          leopard, hyena, and many other wildlife species.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 lg:-mt-14 lg:flex lg:items-end lg:gap-4">
          <Photo
            photo={wildlife.giraffe}
            className="h-48 lg:mb-10 lg:h-[12.6rem] lg:w-48 lg:shrink-0"
          />

          <Photo
            photo={wildlife.impala}
            className="h-48 lg:h-[12.6rem] lg:w-48 lg:shrink-0"
          />

          <Photo
            photo={wildlife.zebras}
            className="h-48 lg:mb-36 lg:h-[9.5rem] lg:w-48 lg:shrink-0"
          />

          <div className="col-span-2 grid grid-cols-2 gap-4 lg:mb-5 lg:flex lg:w-48 lg:shrink-0 lg:flex-col">
            <Photo photo={wildlife.elephant} className="h-48 lg:h-[17rem]" />
            <Photo photo={wildlife.wildebeest} className="h-48 lg:h-[9.7rem]" />
          </div>

          <Photo
            photo={wildlife.lioness}
            className="col-span-2 h-72 lg:col-span-1 lg:h-[24rem] lg:w-48 lg:shrink-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Itineraries;