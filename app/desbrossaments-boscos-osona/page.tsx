export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-20 text-center px-6">
        <h1 className="text-4xl font-bold">
          Desbrossaments forestals a Osona
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Treballs de neteja de boscos, finques i camins rurals amb maquinària professional.
        </p>
      </section>

      {/* IMATGES */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-2xl font-bold text-center mb-10">
          Cas real de treball
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* ABANS */}
          <div>
            <h3 className="font-semibold mb-3 text-center">Abans</h3>
            <img
              src="/desbrossaments/desbrossament-bosc-osona-abans.jpg"
              className="rounded-2xl w-full h-80 object-cover"
            />
          </div>

          {/* PROCÉS */}
          <div>
            <h3 className="font-semibold mb-3 text-center">Procés</h3>
            <img
              src="/desbrossaments/desbrossament-bosc-osona-proces.jpg"
              className="rounded-2xl w-full h-80 object-cover"
            />
          </div>

        </div>
      </section>

      {/* VIDEO */}
      <section className="max-w-4xl mx-auto px-6 py-10 text-center">

        <h2 className="text-2xl font-bold mb-6">
          Vídeo del treball
        </h2>

        <video
          controls
          className="w-full max-h-[500px] rounded-2xl shadow-lg"
        >
          <source src="/desbrossaments/desbrossament-forestal-osona-video.mp4" />
        </video>

      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-16 px-6">

        <h2 className="text-2xl font-bold">
          Necessites netejar un terreny?
        </h2>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-6 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Demanar pressupost
        </a>

      </section>

    </main>
  );
}
