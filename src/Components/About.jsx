import { Link } from "react-router-dom";

function About() {
  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_1.4fr] lg:gap-16">

        <div className="max-w-full pt-4">
          <p className="mb-6 font-bold uppercase tracking-[0.3em] text-gray-500">
            Our story
          </p>

          <div className="space-y-5 font-light leading-7 text-gray-700">
            <p>
              Nyamatusi Camp is our flagship in terms of its Eco-conscious style. Our Mana Pools safari lodge is set in one of the wildest and most remote parts of Africa, on the banks of the Zambezi, one of the world’s oldest rivers. Embracing comfort, this property embodies sustainable design. Fully solar-powered and built from all-natural materials it encompasses its wilderness location in the most elegant way. Here, your Mana Pools safari plays out against a sweeping riverine landscape, where epic encounters of the giants that roam this land await.
            </p>
            <p>
              Consisting of six luxury tented suites, with uninterrupted views of the river and escarpment beyond, our Mana Pools safari lodge invites a blissful escape to nature. Each romantic guest tent is adorned with soft drapery and is replete with......
            </p>
          </div>

          <Link
            to="/activities"
            className="mt-8 inline-block bg-[#E65A1F] px-7 py-3 font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#d14e19]"
          >
            Enquire now
          </Link>
        </div>

        <div className="grid grid-cols-12 items-start gap-4">
          <div className="col-span-7">
            <div className="h-72 w-full overflow-hidden md:h-80 lg:h-[27rem]">
              <img
                src="/Rectangle_13.png"
                alt="Lion roaring"
                className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          <div className="col-span-5 flex flex-col gap-4">
            <div className="h-40 w-full overflow-hidden md:h-56 lg:h-72">
              <img
                src="/Rectangle_12.png"
                alt="Elephants seen from a safari vehicle"
                className="h-fullw-full object-cover object-center transition duration-700 hover:scale-105"
              />
            </div>

            <div className="h-40 w-full overflow-hidden md:h-48 lg:h-56">
              <img
                src="/Rectangle_14.png"
                alt="Luxury camp deck with seating"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;