import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold max-w-5xl mx-auto">
          Biomassa, llenya i calderes a Osona
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Instal·lació de calderes de biomassa, inserts, venda de llenya,
          escura de xemeneies i serveis forestals a Osona i Catalunya.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Demanar pressupost
        </a>
      </section>

      {/* SERVEIS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Els nostres serveis
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <Link href="/calderes-biomassa-osona" className="border rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold">Calderes de biomassa</h3>
            <p className="mt-4 text-gray-700">
              Instal·lació i manteniment de sistemes eficients de calefacció amb biomassa.
            </p>
          </Link>

          <Link href="/escuraxemeneies" className="border rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold">Escura de xemeneies</h3>
            <p className="mt-4 text-gray-700">
              Neteja professional de xemeneies i conductes de fum.
            </p>
          </Link>

          <Link href="/inserts-llenya" className="border rounded-2xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-bold">Inserts de llenya</h3>
            <p className="mt-4 text-gray-700">
              Solucions modernes i eficients per escalfar la llar.
            </p>
          </Link>

          {/* 🔥 FIX REAL */}
          <Link
            href="/desbrossaments-boscos-osona"
            className="border rounded-2xl p-8 hover:shadow-xl transition bg-green-50"
          >
            <h3 className="text-2xl font-bold">
              Desbrossaments i treballs forestals
            </h3>

            <p className="mt-4 text-gray-700">
              Neteja de boscos, finques i camins rurals amb maquinària professional.
            </p>

            <p className="mt-4 text-green-700 font-semibold">
              Veure cas real →
            </p>
          </Link>

        </div>
      </section>

      {/* SEO */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-8">

        <h2 className="text-3xl font-bold">
          Especialistes en biomassa i treballs forestals a Osona
        </h2>

        <p className="text-gray-700 leading-7">
          Treballs Forestals Sant Jaume ofereix serveis de biomassa, llenya,
          manteniment forestal i desbrossaments professionals a Osona i Catalunya.
        </p>

        <p className="text-gray-700 leading-7">
          Treballem a Vic, Manlleu, Torelló, Centelles i altres municipis de la comarca.
        </p>

      </section>

    </main>
  );
}
