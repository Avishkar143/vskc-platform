// app/checkout/page.tsx
import Link from "next/link";
import SiteHeader from "../../src/components/SiteHeader";
import SiteFooter from "../../src/components/SiteFooter";

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-vskc-white">
      <SiteHeader />

      <main className="flex-grow max-w-5xl mx-auto w-full px-6 py-16">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-vskc-tan font-semibold mb-3">
            Checkout
          </p>
          <h1 className="text-4xl font-serif text-vskc-espresso">
            Delivery Details
          </h1>
          <p className="mt-3 text-vskc-charcoal/70">
            This is a basic checkout page. Payment integration will be added
            later.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          <form className="rounded-lg border border-vskc-sand p-6">
            <div className="grid gap-5">
              <div>
                <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  className="w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                  placeholder="Enter mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-vskc-charcoal mb-2">
                  Address
                </label>
                <textarea
                  className="min-h-28 w-full rounded-md border border-vskc-sand px-4 py-3 outline-none focus:border-vskc-tan"
                  placeholder="House number, street, city, pincode"
                />
              </div>

              <button
                type="button"
                className="rounded-md bg-vskc-espresso px-6 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-vskc-charcoal"
              >
                Place Order
              </button>
            </div>
          </form>

          <div className="rounded-lg border border-vskc-sand bg-vskc-sand/10 p-6">
            <h2 className="font-serif text-2xl text-vskc-espresso">
              Order Summary
            </h2>

            <p className="mt-4 text-sm text-vskc-charcoal/70">
              Your cart items will appear here after we connect the cart system.
            </p>

            <Link
              href="/products"
              className="mt-6 inline-flex text-sm font-medium text-vskc-tan hover:text-vskc-espresso"
            >
              Continue shopping →
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}