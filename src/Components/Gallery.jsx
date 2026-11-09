const photos = [
  {
    src: "/Rectangle_51.png",
    alt: "Safari jeep",
    className: "col-span-2 md:col-span-6",
  },
  {
    src: "/Rectangle_53.png",
    alt: "Elephants",
    className: "col-span-1 md:col-span-3",
  },
  {
    src: "/Rectangle_54.png",
    alt: "Canoeing",
    className: "col-span-1 md:col-span-3",
  },
  {
    src: "/Rectangle_55.png",
    alt: "Giraffe",
    className: "col-span-1 md:col-span-2",
  },
  {
    src: "/Rectangle_57.png",
    alt: "Sunset tree",
    className: "col-span-1 md:col-span-2",
  },
  {
    src: "/Rectangle_56.png",
    alt: "Paw prints",
    className: "col-span-2 md:col-span-2",
  },
  {
    src: "/Rectangle_52.png",
    alt: "Tent interior",
    className: "col-span-2 md:col-span-6",
  },
];

function Gallery() {
  return (
    <>
      

      <section className="min-h-screen w-full bg-white px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-light text-gray-800 md:text-4xl">
            Our gallery
          </h1>

          <div className="mt-10 grid auto-rows-[11rem] grid-cols-2 gap-3 md:h-[34rem] md:grid-cols-12 md:grid-rows-2">
            {photos.map((photo) => (
              <div
                key={photo.alt}
                className={`group relative overflow-hidden bg-gray-200 ${photo.className}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;