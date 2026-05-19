import Link from "next/link";

export const metadata = {
  title: "Biga laminada a Osona | Bigues de fusta estructurals",
  description:
    "Bigues laminades de fusta per construcció, rehabilitació i cobertes a Osona. Solucions estructurals resistents i sostenibles.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">

        <h1 className="text-4xl md:text-6xl font-bold max-w-5xl mx-auto">
          Biga laminada a Osona
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Bigues laminades de fusta per estructures,
          rehabilitació, cobertes i construcció sostenible.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold"
        >
          Demanar pressupost
        </a>

      </section>

      {/* CONTINGUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold">
          Bigues laminades per construcció i rehabilitació
        </h2>

        <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">

          <p>
            La biga laminada és una de les solucions més utilitzades
            en estructures de fusta gràcies a la seva resistència
            i estabilitat.
          </p>

          <p>
            Aquest tipus de biga està formada per diferents làmines
            de fusta unides entre si per aconseguir una gran capacitat
            estructural.
          </p>

          <p>
            Les bigues laminades s’utilitzen en rehabilitació
            de masies, cobertes, porxos, interiors i construcció moderna.
          </p>

          <p>
            Treballem a Vic, Manlleu, Torelló, Centelles
            i tota la comarca d’Osona.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <Link
            href="/fusta-construccio-osona"
            className="border rounded-2xl p-8 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-bold">
              Fusta per construcció
            </h3>

            <p className="mt-4 text-gray-700">
              Materials de fusta per obra, reformes i rehabilitació.
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
              Neteja de boscos i manteniment forestal professional.
            </p>
          </Link>

        </div>

        {/* SEO */}
        <section className="mt-20 space-y-6 text-gray-700 leading-8">

          <h2 className="text-3xl font-bold text-black">
            Avantatges de la biga laminada
          </h2>

          <p>
            La fusta laminada ofereix una gran resistència mecànica
            i permet crear estructures més lleugeres i eficients.
          </p>

          <p>
            També destaca pel seu bon comportament tèrmic,
            sostenibilitat i acabat estètic natural.
          </p>

          <p>
            És una solució molt utilitzada en arquitectura moderna,
            rehabilitació rural i construcció amb fusta.
          </p>

        </section>

      </section>

    </main>
  );
}
