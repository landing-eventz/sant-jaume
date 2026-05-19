import Link from "next/link";

export const metadata = {
  title: "Fusta per construcció a Osona | Bigues i taulers",
  description:
    "Venda de fusta per construcció a Osona. Bigues de fusta, taulers MDF, aglomerats i materials per fusteria.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">

        <h1 className="text-4xl md:text-6xl font-bold max-w-5xl mx-auto">
          Fusta per construcció a Osona
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Bigues de fusta, taulers MDF, aglomerats,
          encadellats i materials per construcció i fusteria.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Demanar pressupost
        </a>

      </section>

      {/* CONTINGUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold">
          Especialistes en fusta i biomassa
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">

          <p>
            Treballem amb diferents tipus de fusta per estructures,
            reformes, construcció i projectes de fusteria a Osona.
          </p>

          <p>
            Oferim solucions en bigues laminades, bigues massisses,
            taulers MDF, aglomerats i altres derivats de la fusta.
          </p>

          <p>
            Donem servei a Vic, Manlleu, Torelló,
            Centelles i tota la comarca d’Osona.
          </p>

          <p>
            La fusta és un material natural molt utilitzat
            en construcció gràcies a la seva resistència,
            aïllament i acabat estètic.
          </p>

        </div>

        {/* LINKS INTERNS */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <Link
            href="/calderes-biomassa-osona"
            className="border rounded-2xl p-8 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold">
              Calderes de biomassa
            </h3>

            <p className="mt-4 text-gray-700">
              Sistemes eficients de calefacció amb biomassa.
            </p>
          </Link>

          <Link
            href="/desbrossaments-boscos-osona"
            className="border rounded-2xl p-8 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold">
              Treballs forestals
            </h3>

            <p className="mt-4 text-gray-700">
              Neteja de boscos i manteniment forestal.
            </p>
          </Link>

        </div>

        {/* SEO */}
        <section className="mt-20 space-y-6 text-gray-700 leading-8">

          <h2 className="text-3xl font-bold text-black">
            Materials de fusta per professionals i particulars
          </h2>

          <p>
            La demanda de fusta estructural i derivats de la fusta
            ha crescut en els últims anys gràcies a la construcció sostenible.
          </p>

          <p>
            Treballem amb diferents tipus de fusta com avet,
            castanyer i altres materials adaptats a cada projecte.
          </p>

          <p>
            També oferim serveis relacionats amb biomassa,
            llenya i treballs forestals a Osona i Catalunya.
          </p>

        </section>

      </section>

    </main>
  );
}
