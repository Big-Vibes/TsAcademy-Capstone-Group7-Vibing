export default function Content4() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 py-10  sm:px-8 lg:px-14 lg:py-14">
        {/* Intro copy styled to match the clean, left-aligned heading block in the reference UI. */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[#2154bb]">
            Have Questions About Planetary Science?
          </h2>
          <p className="mt-3 text-sm leading-7 text-[#44597c] sm:text-base">
            Interested in learning more about space, astronomy, or how
            planetary data is collected and analyzed? Reach out and we&apos;ll
            get back to you.
          </p>
        </div>

        {/* Two-column form grid for the moderate arrangement shown in the screenshot. */}
        <form className="mt-10" action="" method="post">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#243b63]"
              >
                Full Name<span className="text-[#ef4444]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Full name"
                required
                className="mt-2 h-12 w-full rounded-lg border border-[#d8e1f0] px-4 text-sm text-[#1f2f4f] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#2154bb] focus:ring-2 focus:ring-[#2154bb]/10"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#243b63]"
              >
                Email<span className="text-[#ef4444]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                required
                className="mt-2 h-12 w-full rounded-lg border border-[#d8e1f0] px-4 text-sm text-[#1f2f4f] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#2154bb] focus:ring-2 focus:ring-[#2154bb]/10"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-[#243b63]"
              >
                Phone Number<span className="text-[#ef4444]">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Please enter a valid phone number."
                required
                className="mt-2 h-12 w-full rounded-lg border border-[#d8e1f0] px-4 text-sm text-[#1f2f4f] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#2154bb] focus:ring-2 focus:ring-[#2154bb]/10"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-sm font-medium text-[#243b63]"
              >
                Message<span className="text-[#ef4444]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                maxLength={100}
                required
                className="mt-2 h-24 w-full resize-none rounded-lg border border-[#d8e1f0] px-4 py-3 text-sm text-[#1f2f4f] outline-none transition placeholder:text-[#9aa7bb] focus:border-[#2154bb] focus:ring-2 focus:ring-[#2154bb]/10"
              />
              <p className="mt-2 text-xs text-[#7f8da3]">100 characters</p>
            </div>
          </div>

          <button
            type="submit"
            className="mt-10 inline-flex min-w-[12rem] items-center justify-center rounded-lg bg-[#2154bb] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1b4aa8]"
          >
            Submit
            <span className="ml-2 text-base leading-none">›</span>
          </button>
        </form>
      </div>
    </section>
  )
}