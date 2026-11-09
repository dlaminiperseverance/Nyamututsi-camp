const sidePhotos = [
  {
    name: "Jacob Stone",
    image: "/Rectangle_45.png",
    alt: "Jacob Stone relaxing with a drink",
  },
  {
    name: "Brown family",
    image: "/Rectangle_46.png",
    alt: "The Brown family together",
  },
];

const review = {
  name: "Gemma Johnson",
  avatar: "/Rectangle_60.png",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.",
};

function PhotoCard({ photo }) {
  return (
    <div className="relative h-96 overflow-hidden bg-orange-200 lg:h-full">
      <img
        src={photo.image}
        alt={photo.alt}
        className="absolute inset-0 h-full w-full object-cover object-center grayscale"
      />
      <div className="absolute inset-0 bg-[#e2673c] opacity-60 mix-blend-multiply" />
      <div className="absolute inset-0 bg-orange-300/20" />
      <p className="absolute bottom-3 right-4 text-xs italic text-white">
        {photo.name}
      </p>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="min-h-screen w-full bg-white px-5 py-16 text-[#182018] md:px-10 lg:px-14">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-light text-gray-800 md:text-4xl">
          Testimonials
        </h1>

        <div className="mt-10 grid gap-5 lg:h-[30rem] lg:grid-cols-[1fr_1.4fr_1fr]">
          <PhotoCard photo={sidePhotos[0]} />

          <div className="flex flex-col items-center justify-center border border-red-300 bg-white px-8 py-12 text-center">
            <img
              src={review.avatar}
              alt={review.name}
              className="h-20 w-20 rounded-full bg-gray-200 object-cover"
            />

            <p className="mt-8 max-w-xs text-xs leading-relaxed text-gray-700">
              “ {review.text} ”
            </p>

            <span className="mt-6 block h-px w-14 bg-orange-500" />

            <p className="mt-4 text-xs font-bold italic text-gray-800">
              {review.name}
            </p>
          </div>

          <PhotoCard photo={sidePhotos[1]} />
        </div>
      </div>
    </section>
  );
}

export default Testimonials;