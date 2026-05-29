// app/contact/page.tsx
import SiteHeader from "../../src/components/SiteHeader";
import SiteFooter from "../../src/components/SiteFooter";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-vskc-white">
      <SiteHeader />

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-20">
        <p className="text-xs uppercase tracking-[0.25em] text-vskc-tan font-semibold mb-3">
          Contact
        </p>

        <h1 className="text-4xl md:text-5xl font-serif text-vskc-espresso">
          Get in touch
        </h1>

        <p className="mt-4 max-w-2xl text-vskc-charcoal/70">
          For orders, collaborations, or product queries, contact us through the
          form below.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <form className="rounded-lg border border-vskc-sand p-6">
            <div className="grid gap-5">
              <div>
                <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                  Message
                </label>
                <textarea
                  className="min-h-32 w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                  placeholder="Write your message"
                />
              </div>

              <button
                type="button"
                className="rounded-md bg-vskc-espresso px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vskc-charcoal"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="rounded-lg border border-vskc-sand bg-vskc-sand/10 p-6">
            <h2 className="font-serif text-2xl text-vskc-espresso">
              VSKC Support
            </h2>

            <div className="mt-5 space-y-4 text-sm text-vskc-charcoal/70">
              <p>
                <span className="font-medium text-vskc-charcoal">Location:</span>{" "}
                Kolhapur, Maharashtra
              </p>

              <p>
                <span className="font-medium text-vskc-charcoal">Email:</span>{" "}
                support@vskc.in
              </p>

              <p>
                <span className="font-medium text-vskc-charcoal">Hours:</span>{" "}
                Monday to Saturday, 10 AM to 7 PM
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}