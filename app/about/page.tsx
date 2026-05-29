// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../../src/components/SiteHeader";
import SiteFooter from "../../src/components/SiteFooter";

const trustCards = [
  {
    title: "GI Marked Kolhapuri Identity",
    tag: "Authenticity",
    text: "Kolhapuri chappals carry Geographical Indication recognition, protecting the traditional origin, craftsmanship, and cultural value of the footwear.",
    image: "/about/catalog-page-03.jpg",
  },
  {
    title: "International Design Exposure",
    tag: "PRADA Training",
    text: "VSKC has received professional training connected with Kolhapuri-inspired sandal design, helping the craft reach a more refined and global presentation.",
    image: "/about/catalog-page-04.jpg",
  },
  {
    title: "Gold & Silver Kolhapuri Chappals",
    tag: "Rare Work",
    text: "Special gold and silver-toned Kolhapuri chappals designed for exhibitions, premium occasions, weddings, and cultural programs.",
    image: "/about/catalog-page-05.jpg",
  },
];

const productTypes = [
  {
    title: "Regular Kapashi",
    use: "Daily wear",
    text: "Traditional, strong, durable, and suitable for everyday use.",
    image: "/about/catalog-page-06.jpg",
  },
  {
    title: "Light Kolhapuri",
    use: "Office & festive use",
    text: "Lightweight, comfortable, attractive, and suitable for regular wear.",
    image: "/about/catalog-page-07.jpg",
  },
  {
    title: "Paper Kapashi",
    use: "Wedding & special occasions",
    text: "Extremely light, premium in look, soft, and made with fine leather work.",
    image: "/about/catalog-page-08.jpg",
  },
  {
    title: "Paper Kapashi Super Duper",
    use: "Royal premium collection",
    text: "A richer premium design with a royal look and occasion-ready finish.",
    image: "/about/catalog-page-09.jpg",
  },
];

const knownPeopleSlides = [
  {
    title: "Official Presentation",
    label: "Government Official",
    text: "A special moment presenting handcrafted Kolhapuri chappals as a symbol of traditional Maharashtra craftsmanship.",
    image: "/about/recognition-02.jpg",
  },
  {
    title: "Institutional Recognition",
    label: "KVIC Connection",
    text: "VSKC’s traditional craft connected with institutions supporting handmade, village, and artisan-based industries.",
    image: "/about/recognition-03.jpg",
  },
  {
    title: "LIDCOM Association",
    label: "Leather Craft Promotion",
    text: "A recognition moment connected with leather craft promotion, artisan skill, and traditional product development.",
    image: "/about/recognition-04.jpg",
  },
  {
    title: "Cultural Presentation",
    label: "Gold Chappal Work",
    text: "Special gold-toned Kolhapuri chappals presented as a rare example of handmade artistic work.",
    image: "/about/recognition-07.jpg",
  },
  {
    title: "Public Representative Visit",
    label: "Craft Appreciation",
    text: "Handcrafted Kolhapuri chappals presented as a traditional product carrying cultural and artisan value.",
    image: "/about/recognition-09.jpg",
  },
];

const awardSlides = [
  {
    title: "Craft Honour",
    label: "Award Moment",
    text: "VSKC’s Kolhapuri craftsmanship recognised as a proud representation of traditional artisan skill.",
    image: "/about/recognition-05.jpg",
  },
  {
    title: "State Foundation Event",
    label: "Maharashtra & Gujarat",
    text: "Recognition at a cultural event celebrating state identity, craft, and regional excellence.",
    image: "/about/recognition-06.jpg",
  },
];

const mediaSlides = [
  {
    title: "Media Recognition",
    label: "Newspaper Feature",
    text: "Press coverage highlighting rare gold Kolhapuri chappals and their attraction at a major artisan event.",
    image: "/about/recognition-01.jpg",
  },
  {
    title: "PRADA Team Training",
    label: "Global Exposure",
    text: "Training and exposure with an international design team, connecting Kolhapuri craft with global design learning.",
    image: "/about/recognition-08.jpg",
  },
  {
    title: "Press Feature",
    label: "Rare Craft Coverage",
    text: "Media coverage of VSKC’s rare gold Kolhapuri work and its public attraction.",
    image: "/about/recognition-10.jpg",
  },
];

const pradaHighlight = {
  title: "Vijay Shinde x PRADA Made in India",
  label: "Global Craft Highlight",
  text: "Vijay Shinde’s Kolhapuri chappal craftsmanship was featured in the PRADA Made in India x Inspired by Kolhapuri Chappals story, highlighting traditional techniques, LIDCOM/LIDKAR artisan work, and premium handmade sandal craft.",
  image: "/about/prada-vskc.jpg",
};

const catalogGallery = [
  {
    title: "Traditional Collection",
    image: "/about/catalog-page-10.jpg",
  },
  {
    title: "Royal & Premium Designs",
    image: "/about/catalog-page-11.jpg",
  },
  {
    title: "Awards & Moments",
    image: "/about/catalog-page-12.jpg",
  },
  {
    title: "Public Recognition",
    image: "/about/catalog-page-13.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-vskc-white">
      <SiteHeader />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-vskc-sand px-6 py-24">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(196,139,75,0.16),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(69,38,30,0.10),transparent_35%)]" />

          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-vskc-tan">
              About VSKC
            </p>

            <h1 className="mt-6 font-serif text-5xl leading-tight text-vskc-espresso md:text-7xl">
              A living heritage of Kolhapuri craftsmanship.
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-vskc-charcoal/75">
              Vijay Shinde Kolhapuri Chappal represents traditional handmade
              Kolhapuri footwear, rare gold and silver chappal work, artisan
              recognition, GI identity, and global design exposure. The brand
              carries forward the cultural pride of Kolhapur with a modern
              shopping experience.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="rounded-full bg-vskc-espresso px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-vskc-charcoal"
              >
                Explore Products
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-vskc-sand px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-vskc-charcoal transition hover:border-vskc-tan hover:text-vskc-tan"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-vskc-sand bg-white shadow-sm">
              <Image
                src="/about/catalog-page-02.jpg"
                alt="VSKC heritage and brand story"
                width={900}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-vskc-tan">
                Since 1960
              </p>

              <h2 className="mt-4 font-serif text-4xl text-vskc-espresso md:text-5xl">
                Tradition shaped by hand, carried forward with pride.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-vskc-charcoal/75">
                <p>
                  Kolhapuri chappals are known for strong leather, traditional
                  design, natural finish, and detailed handmade work. Every pair
                  reflects the skill of artisans through cutting, shaping,
                  stitching, finishing, and polishing.
                </p>

                <p>
                  VSKC preserves this identity while presenting the craft with
                  premium product photography, digital shopping, and a modern
                  brand experience suitable for both website and future mobile
                  app.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-vskc-sand p-5">
                  <p className="font-serif text-3xl text-vskc-espresso">1960</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-vskc-charcoal/60">
                    Tradition
                  </p>
                </div>

                <div className="rounded-2xl border border-vskc-sand p-5">
                  <p className="font-serif text-3xl text-vskc-espresso">GI</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-vskc-charcoal/60">
                    Authenticity
                  </p>
                </div>

                <div className="rounded-2xl border border-vskc-sand p-5">
                  <p className="font-serif text-3xl text-vskc-espresso">
                    Rare
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-vskc-charcoal/60">
                    Gold Work
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRADA highlight */}
        <section className="bg-vskc-espresso px-6 py-24 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-vskc-tan">
                {pradaHighlight.label}
              </p>

              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                {pradaHighlight.title}
              </h2>

              <p className="mt-6 text-base leading-8 text-white/70">
                {pradaHighlight.text}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-serif text-3xl text-white">PRADA</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
                    Made in India
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-serif text-3xl text-white">LIDCOM</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
                    Artisan Work
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="font-serif text-3xl text-white">VSKC</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
                    Kolhapuri Craft
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-white/10">
                <Image
                  src={pradaHighlight.image}
                  alt={pradaHighlight.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trust horizontal scroll */}
        <section className="bg-vskc-sand/20 px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-vskc-tan">
                  Trust & Craft
                </p>

                <h2 className="mt-4 font-serif text-4xl text-vskc-espresso md:text-5xl">
                  GI, training, and rare Kolhapuri work.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-6 text-vskc-charcoal/60">
                Scroll horizontally to explore important highlights from the
                VSKC catalog.
              </p>
            </div>

            <div className="-mx-6 flex snap-x gap-6 overflow-x-auto px-6 pb-6">
              {trustCards.map((card) => (
                <article
                  key={card.title}
                  className="min-w-[82%] snap-start overflow-hidden rounded-[2rem] border border-vskc-sand bg-vskc-white shadow-sm sm:min-w-[440px]"
                >
                  <div className="relative aspect-square bg-white">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover"
                      sizes="440px"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vskc-tan">
                      {card.tag}
                    </p>

                    <h3 className="mt-3 font-serif text-2xl text-vskc-espresso">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-vskc-charcoal/70">
                      {card.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Product types */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-vskc-tan">
                Chappal Varieties
              </p>

              <h2 className="mt-4 font-serif text-4xl text-vskc-espresso md:text-5xl">
                Different designs for daily wear, festivals, weddings, and
                premium occasions.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {productTypes.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[2rem] border border-vskc-sand bg-white shadow-sm transition hover:border-vskc-tan"
                >
                  <div className="relative aspect-square bg-vskc-sand/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className="p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vskc-tan">
                      {item.use}
                    </p>

                    <h3 className="mt-3 font-serif text-3xl text-vskc-espresso">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-vskc-charcoal/70">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition sections */}
        <section className="bg-vskc-espresso px-6 py-24 text-white">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-vskc-tan">
                Recognition
              </p>

              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                Known people, awards, media coverage, and rare Kolhapuri work.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/65">
                VSKC’s journey includes official visits, institutional
                appreciation, public recognition, newspaper features, rare gold
                chappal work, and global design exposure.
              </p>
            </div>

            {/* Well-known people stack */}
            <div className="mb-16">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vskc-tan">
                    Official Visits
                  </p>
                  <h3 className="mt-2 font-serif text-3xl text-white">
                    Well-known people & official appreciation
                  </h3>
                </div>

                <p className="hidden text-sm text-white/50 md:block">
                  Scroll horizontally →
                </p>
              </div>

              <div className="-mx-6 flex snap-x gap-6 overflow-x-auto px-6 pb-6">
                {knownPeopleSlides.map((item) => (
                  <article
                    key={item.image}
                    className="min-w-[86%] snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-sm backdrop-blur sm:min-w-[430px]"
                  >
                    <div className="relative aspect-[4/5] bg-white/10">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="430px"
                      />
                    </div>

                    <div className="p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vskc-tan">
                        {item.label}
                      </p>

                      <h4 className="mt-3 font-serif text-2xl text-white">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Awards stack */}
            <div className="mb-16">
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vskc-tan">
                    Awards
                  </p>
                  <h3 className="mt-2 font-serif text-3xl text-white">
                    Awards & public recognition
                  </h3>
                </div>

                <p className="hidden text-sm text-white/50 md:block">
                  Scroll horizontally →
                </p>
              </div>

              <div className="-mx-6 flex snap-x gap-6 overflow-x-auto px-6 pb-6">
                {awardSlides.map((item) => (
                  <article
                    key={item.image}
                    className="min-w-[86%] snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-sm backdrop-blur sm:min-w-[520px]"
                  >
                    <div className="relative aspect-[4/3] bg-white/10">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="520px"
                      />
                    </div>

                    <div className="p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vskc-tan">
                        {item.label}
                      </p>

                      <h4 className="mt-3 font-serif text-2xl text-white">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Media and rare work stack */}
            <div>
              <div className="mb-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vskc-tan">
                    Media & Rare Work
                  </p>
                  <h3 className="mt-2 font-serif text-3xl text-white">
                    Newspaper features, PRADA training & rare gold chappals
                  </h3>
                </div>

                <p className="hidden text-sm text-white/50 md:block">
                  Scroll horizontally →
                </p>
              </div>

              <div className="-mx-6 flex snap-x gap-6 overflow-x-auto px-6 pb-6">
                {mediaSlides.map((item) => (
                  <article
                    key={item.image}
                    className="min-w-[86%] snap-start overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-sm backdrop-blur sm:min-w-[520px]"
                  >
                    <div className="relative aspect-[4/3] bg-white/10">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="520px"
                      />
                    </div>

                    <div className="p-7">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-vskc-tan">
                        {item.label}
                      </p>

                      <h4 className="mt-3 font-serif text-2xl text-white">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-white/65">
                        {item.text}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Catalog gallery */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-vskc-tan">
                Catalog Gallery
              </p>

              <h2 className="mt-4 font-serif text-4xl text-vskc-espresso md:text-5xl">
                Traditional products, premium designs, and recognition moments.
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {catalogGallery.map((item) => (
                <article
                  key={item.image}
                  className="overflow-hidden rounded-[2rem] border border-vskc-sand bg-white p-3 shadow-sm"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={900}
                    height={900}
                    className="h-auto w-full rounded-[1.5rem] object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-serif text-2xl text-vskc-espresso">
                      {item.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="px-6 pb-24">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-vskc-sand bg-vskc-sand/10 p-8 md:p-12">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-vskc-tan">
                  Visit / Contact
                </p>

                <h2 className="mt-4 font-serif text-3xl text-vskc-espresso md:text-4xl">
                  Vijay Shinde Kolhapuri Chappal
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-vskc-charcoal/75">
                  Address: S862, Tn No. 25 A Ward, Survey Nagar, Kalamba Road,
                  Kolhapur 416012
                </p>

                <p className="mt-2 text-sm leading-7 text-vskc-charcoal/75">
                  Contact: +91 7798693652
                </p>
              </div>

              <Link
                href="/contact"
                className="rounded-full bg-vskc-espresso px-7 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-vskc-charcoal"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}