export default function Footers() {
  return (
    <footer className="bg-[#091a4d] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top copy block arranged to mirror the compact About section in the reference UI. */}
        <div className="max-w-2xl">
          <h4 className="text-base font-semibold">About</h4>
          <p className="mt-4 text-sm leading-7 text-white/80">
            This is Group 7&apos;s Capstone Project for TS Academy. We are a
            team of passionate developers dedicated to exploring the wonders of
            our solar system through data and interactive content.
          </p>
          <p className="mt-3 text-sm leading-7 text-white/80">
            Devs: Abiodun Inaolaji, Chidum Henry Aniche, Oduguwa Olanrewaju Micheal,
            Offiah Victor, Jawando Fawaz, Samuel Akindele, Dan-obinna Seth Covernant
          </p>
        </div>

        <div className="mt-10 h-px w-full bg-white/20" />

        {/* Bottom footer row with credits on the left and the external link aligned right. */}
        <div className="mt-5 flex flex-col gap-4 text-sm text-white/90 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p>&copy;2026 Design by Amaka &amp; Ifeoma A.</p>
            <p className="mt-1">Built by Group 7 (Vibes). All rights reserved.</p>
          </div>

          <a
            href="https://tsacademyonline.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-white transition hover:text-[#b7ccff]"
          >
            TSAcademy
          </a>
        </div>
      </div>
    </footer>
  )
}
