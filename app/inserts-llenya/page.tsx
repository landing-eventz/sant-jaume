export const metadata = {
  title: "Inserts de llenya a Osona | Instal·lació d'inserts",
  description:
    "Instal·lació d’inserts de llenya i biomassa a Osona i Catalunya. Solucions eficients i modernes per escalfar la llar.",
};

export default function InsertsLlenya() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Inserts de llenya a Osona
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Instal·lació d’inserts moderns de llenya i biomassa per millorar
          l’eficiència i el confort de la teva llar.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Demanar pressupost
        </a>
      </section>

      {/* SEO CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">

        <h2 className="text-3xl font-bold">
          Què és un insert de llenya?
        </h2>

        <p className="text-gray-700 leading-7">
          Els inserts de llenya són sistemes tancats que milloren el rendiment
          de les xemeneies tradicionals i permeten aprofitar millor la calor.
        </p>

        <p className="text-gray-700 leading-7">
          A més d’augmentar l’eficiència energètica, també redueixen el consum
          de llenya i les emissions.
        </p>

        <h2 className="text-3xl font-bold">
          Avantatges dels inserts moderns
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Major rendiment tèrmic</li>
          <li>Menor consum de llenya</li>
          <li>Millor seguretat</li>
          <li>Dissenys moderns i eficients</li>
        </ul>

        <h2 className="text-3xl font-bold">
          Instal·lació professional
        </h2>

        <p className="text-gray-700 leading-7">
          Realitzem instal·lacions adaptades a cada habitatge garantint un bon
          funcionament, seguretat i eficiència.
        </p>

        <p className="text-gray-700 leading-7">
          També oferim manteniment i escura de xemeneies.
        </p>

        <h2 className="text-3xl font-bold">
          Servei a Osona i Catalunya
        </h2>

        <p className="text-gray-700 leading-7">
          Treballem a Vic, Manlleu, Torelló, Centelles i altres municipis d’Osona.
        </p>

      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold">
          Vols instal·lar un insert?
        </h2>

        <p className="mt-4 text-gray-300">
          Contacta amb nosaltres i t’assessorarem sense compromís.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Contactar ara
        </a>
      </section>

    </main>
  );
}
