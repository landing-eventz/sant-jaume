import Link from "next/link";
import WhatsappButton from "@/components/WhatsappButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">

        <h1 className="text-4xl md:text-6xl font-bold max-w-5xl mx-auto">
          Biomassa, llenya i fusta a Osona
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Instal·lació de calderes de biomassa, venda de llenya,
          fusta per construcció, escura de xemeneies i treballs forestals
          a Osona i Catalunya.
        </p>

        <WhatsappButton
          label="Demanar pressupost"
          location="home-hero"
          className="inline-block mt-8 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold"
        />

      </section>

      {/* SERVEIS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Els nostres serveis
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* BIOMASSA */}
          <Link
            href="/calderes-biomassa-osona"
            className="border rounded-2xl p-8 hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold">
              Calderes de biomassa
            </h3>

            <p className="mt-4 text-gray-700">
              Instal·lació i manteniment de sistemes eficients
              de calefacció amb biomassa.
            </p>

          </Link>

          {/* XEMENEIES */}
          <Link
            href="/escuraxemeneies"
            className="border rounded-2xl p-8 hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold">
              Escura de xemeneies
            </h3>

            <p className="mt-4 text-gray-700">
              Neteja professional de xemeneies i conductes de fum.
            </p>

          </Link>

          {/* INSERTS */}
          <Link
            href="/inserts-llenya"
            className="border rounded-2xl p-8 hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold">
              Inserts de llenya
            </h3>

            <p className="mt-4 text-gray-700">
              Solucions modernes i eficients per escalfar la llar.
            </p>

          </Link>

          {/* FORESTAL */}
          <Link
            href="/desbrossaments-boscos-osona"
            className="border rounded-2xl p-8 hover:shadow-xl transition bg-green-50"
          >

            <h3 className="text-2xl font-bold">
              Desbrossaments i treballs forestals
            </h3>

            <p className="mt-4 text-gray-700">
              Neteja de boscos, finques i camins rurals
              amb maquinària professional.
            </p>

            <p className="mt-4 text-green-700 font-semibold">
              Veure cas real →
            </p>

          </Link>

          {/* FUSTA */}
          <Link
            href="/fusta-construccio-osona"
            className="border rounded-2xl p-8 hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold">
              Fusta per construcció
            </h3>

            <p className="mt-4 text-gray-700">
              Bigues, taulers MDF, aglomerats i fusta estructural.
            </p>

          </Link>

          {/* BIGA LAMINADA */}
          <Link
            href="/biga-laminada-osona"
            className="border rounded-2xl p-8 hover:shadow-xl transition"
          >

            <h3 className="text-2xl font-bold">
              Biga laminada
            </h3>

            <p className="mt-4 text-gray-700">
              Bigues laminades per estructures,
              cobertes i rehabilitació.
            </p>

          </Link>

        </div>

      </section>

      {/* SEO */}
      <section className="max-w-5xl mx-auto px-6 pb-20 space-y-8">

        <h2 className="text-3xl font-bold">
          Especialistes en biomassa, llenya i fusta a Osona
        </h2>

        <p className="text-gray-700 leading-7">
          Treballs Forestals Sant Jaume ofereix serveis de biomassa,
          venda de llenya, manteniment forestal, fusta per construcció
          i desbrossaments professionals a Osona i Catalunya.
        </p>

        <p className="text-gray-700 leading-7">
          Treballem a Vic, Manlleu, Torelló, Centelles i altres municipis
          de la comarca amb solucions adaptades per particulars,
          masies, empreses i entorns rurals.
        </p>

        <p className="text-gray-700 leading-7">
          També treballem amb bigues de fusta laminada,
          taulers MDF, aglomerats, biomassa i derivats forestals
          per projectes de construcció i rehabilitació.
        </p>

      </section>

    </main>
  );
}
