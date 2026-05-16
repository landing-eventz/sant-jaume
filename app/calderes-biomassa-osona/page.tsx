export const metadata = {
  title:
    "Calderes de biomassa a Osona i Vic | Instal·lació professional i manteniment",
  description:
    "Instal·lació de calderes de biomassa a Osona i Vic. Solucions eficients amb llenya i pellet per a habitatges, masies i negocis. Pressupost sense compromís.",
};

export default function CalderesBiomassa() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* SCHEMA LOCAL (PAGE LEVEL BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Instal·lació de calderes de biomassa a Osona",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Treballs Forestals Sant Jaume",
              "areaServed": "Osona, Vic, Catalunya",
              "telephone": "+34 621 19 25 82"
            },
            "serviceType": "Calderes de biomassa",
            "areaServed": "Osona"
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Instal·lació de calderes de biomassa a Osona i Vic
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Instal·lació, manteniment i assessorament de calderes de biomassa i sistemes
          de calefacció eficients per a habitatges, masies i empreses a Osona.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Demanar pressupost a Osona
        </a>
      </section>

      {/* CONTENT SEO */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">

        <h2 className="text-3xl font-bold">
          Instal·lació professional de calderes de biomassa
        </h2>

        <p className="text-gray-700 leading-7">
          Realitzem instal·lacions de calderes de biomassa a Osona i Vic amb solucions
          adaptades a cada habitatge, masia o negoci.
        </p>

        <p className="text-gray-700 leading-7">
          Treballem amb sistemes eficients de calefacció amb llenya i pellet per reduir
          el consum energètic i millorar el rendiment tèrmic.
        </p>

        <h2 className="text-3xl font-bold">
          Avantatges de les calderes de biomassa a Osona
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Estalvi energètic important a llarg termini</li>
          <li>Energia renovable i sostenible</li>
          <li>Ideal per masies i cases rurals d’Osona</li>
          <li>Reducció de costos de calefacció</li>
          <li>Alta eficiència en climes freds com Vic</li>
        </ul>

        {/* PROVA SOCIAL / AUTORITAT */}
        <section className="py-10 space-y-4">
          <h2 className="text-3xl font-bold">
            Instal·lacions reals a Osona
          </h2>

          <p className="text-gray-700 leading-7">
            Hem realitzat instal·lacions de calderes de biomassa Ferroli i altres sistemes
            de calefacció a Vic i tota la comarca d’Osona amb resultats eficients.
          </p>

          <a
            href="/instalacio-caldera-ferroli-osona"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition"
          >
            Veure instal·lació real →
          </a>
        </section>

        <h2 className="text-3xl font-bold">
          Manteniment i seguretat de calderes de biomassa
        </h2>

        <p className="text-gray-700 leading-7">
          Oferim manteniment complet per garantir el rendiment òptim de la instal·lació,
          evitar acumulació de sutge i allargar la vida útil del sistema.
        </p>

        <p className="text-gray-700 leading-7">
          També realitzem neteja de xemeneies i revisió de sistemes de combustió.
        </p>

        {/* ZONA LOCAL */}
        <h2 className="text-3xl font-bold">
          Servei a Vic i tota la comarca d’Osona
        </h2>

        <p className="text-gray-700 leading-7">
          Treballem a Vic, Manlleu, Torelló, Centelles i tota la comarca d’Osona,
          oferint instal·lació i manteniment professional de calderes de biomassa.
        </p>

      </section>

      {/* CTA FINAL */}
      <section className="bg-black text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold">
          Demana pressupost per la teva caldera de biomassa a Osona
        </h2>

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
