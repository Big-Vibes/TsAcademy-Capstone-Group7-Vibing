export default function Content1() {
  return (
    <>
      <section className="bg-white text-[#12316b]">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-[4.5rem] lg:grid-cols-2 lg:px-10 lg:py-24">
          <div className="flex justify-center lg:justify-start">
            <div className="relative h-[496px] w-full max-w-[484.4649658203125230px] overflow-hidden rounded-[22px] bg-[#0d3f9d] shadow-[0_20px_50px_rgba(5,21,64,0.12)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <iframe
                  src="https://www.youtube.com/embed/libKVRa01L8?si=5e5qUVuqi7Cre8Xi"
                  title="YouTube video player"
                  className="h-full w-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl font-semibold leading-tight text-[#2154bb] lg:text-[2.2rem]">
              How Planetary Data Helps Us Understand Space
            </h2>

            <p className="mt-5 text-sm leading-7 text-[#2a3d63] lg:text-base">
              Planetary science goes beyond images. Comparing{' '}
              <span className="font-semibold text-[#2154bb]">mass</span>,{' '}
              <span className="font-semibold text-[#2154bb]">diameter</span>,{' '}
              <span className="font-semibold text-[#2154bb]">gravity</span>,
              {' '}and{' '}
              <span className="font-semibold text-[#2154bb]">density</span>, we
              gain insight into how planets form, behave, and interact within
              the solar system.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
