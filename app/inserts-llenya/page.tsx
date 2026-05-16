export const metadata = {
  title:
    "Inserts de llenya a Osona i Vic | Instal·lació professional i eficiència",
  description:
    "Instal·lació d’inserts de llenya i biomassa a Osona i Vic. Millora el rendiment de la teva llar amb sistemes eficients, segurs i moderns.",
};

export default function InsertsLlenya() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* SCHEMA LOCAL SERVICE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Instal·lació d'inserts de llenya a Osona i Vic",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Treballs Forestals Sant Jaume",
              "areaServed": "Osona, Vic, Catalunya",
              "telephone": "+34 621 19 25 82"
            },
            "serviceType": "Inserts de llenya i biomassa",
            "areaServed": "Osona"
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Instal·lació d’inserts de llenya a Osona i Vic
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Instal·lem inserts moderns de llenya i biomassa a Osona per millorar
          l’eficiència energètica, reduir el consum i augmentar el confort de la llar.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Demanar pressupost d’insert a Osona
        </a>
      </section>

      {/* CONTINGUT SEO */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">

        <h2 className="text-3xl font-bold">
          Què és un insert de llenya i per què instal·lar-lo?
        </h2>

        <p className="text-gray-700 leading-7">
          Els inserts de llenya són sistemes tancats que permeten aprofitar millor la calor
          de la combustió, millorant l’eficiència de les xemeneies tradicionals a Osona i Vic.
        </p>

        <p className="text-gray-700 leading-7">
          Són una solució ideal per a habitatges, masies i cases rurals que volen millorar
          el confort tèrmic amb un consum més reduït de llenya.
        </p>

        <h2 className="text-3xl font-bold">
          Avantatges dels inserts de llenya a Osona
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Major rendiment energètic</li>
          <li>Reducció del consum de llenya</li>
          <li>Millora de la seguretat de la llar</li>
          <li>Escalfament més ràpid i eficient</li>
          <li>Ideal per climes freds com Vic i Osona</li>
        </ul>

        <h2 className="text-3xl font-bold">
          Instal·lació professional d’inserts
        </h2>

        <p className="text-gray-700 leading-7">
          Realitzem instal·lacions adaptades a cada tipus d’habitatge, garantint
          un funcionament segur, eficient i durador.
        </p>

        <p className="text-gray-700 leading-7">
          També oferim assessorament tècnic, manteniment i neteja de xemeneies associades.
        </p>

        <h2 className="text-3xl font-bold">
          Servei a Vic i tota la comarca d’Osona
        </h2>

        <p className="text-gray-700 leading-7">
          Treballem a Vic, Manlleu, Torelló, Centelles i tota la comarca d’Osona,
          oferint instal·lació d’inserts de llenya amb servei professional.
        </p>

      </section>

      {/* CTA FINAL */}
      <section className="bg-black text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold">
          Instal·la el teu insert de llenya a Osona
        </h2>

        <p className="mt-4 text-gray-300">
          Contacta amb nosaltres i t’assessorarem sense compromís.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Contactar per WhatsApp
        </a>
      </section>

    </main>
  );
}
