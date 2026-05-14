export const metadata = {
  title: "Calderes de biomassa a Osona | Instal·lació i manteniment",
  description:
    "Instal·lació, manteniment i assessorament de calderes de biomassa a Osona i Catalunya. Solucions eficients de calefacció amb biomassa i llenya.",
};

export default function CalderesBiomassa() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Calderes de biomassa a Osona
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Instal·lació i manteniment de calderes de biomassa, llenya i sistemes
          eficients de calefacció per habitatges, masies i negocis.
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
          Instal·lació de calderes de biomassa
        </h2>

        <p className="text-gray-700 leading-7">
          Les calderes de biomassa permeten reduir el consum energètic i aprofitar
          combustibles naturals com la llenya o el pellet.
        </p>

        <p className="text-gray-700 leading-7">
          Oferim assessorament i instal·lació professional adaptada a cada tipus
          d’habitatge o negoci.
        </p>

        <h2 className="text-3xl font-bold">
          Avantatges de la biomassa
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Menor consum energètic</li>
          <li>Calefacció eficient i sostenible</li>
          <li>Aprofitament de recursos forestals locals</li>
          <li>Reducció de costos a llarg termini</li>
        </ul>

        {/* 🔥 NUEVO BLOQUE SEO / AUTORIDAD */}
        <section className="py-10 space-y-4">

          <h2 className="text-3xl font-bold">
            Projectes reals d’instal·lació
          </h2>

          <p className="text-gray-700 leading-7">
            Hem realitzat instal·lacions reals de calderes de biomassa Ferroli a Osona amb resultats d’eficiència demostrats.
          </p>

          <a
            href="/instalacio-caldera-ferroli-osona"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition"
          >
            Veure instal·lació real →
          </a>

        </section>

        <h2 className="text-3xl font-bold">
          Manteniment i seguretat
        </h2>

        <p className="text-gray-700 leading-7">
          El manteniment correcte és essencial per garantir un bon rendiment,
          evitar acumulació de sutge i allargar la vida útil de la instal·lació.
        </p>

        <p className="text-gray-700 leading-7">
          També realitzem neteja de xemeneies i revisió de conductes de fum.
        </p>

        {/* ABANS / DESPRÉS */}
        <section className="max-w-6xl mx-auto py-20">

          <h2 className="text-3xl font-bold text-center mb-12">
            Instal·lació real de caldera Ferroli a Osona
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">Abans</h3>
              <img
                src="/ferroli/caldera-ferroli-abans-osona.jpeg"
                className="rounded-2xl w-full object-cover"
                alt="Abans instal·lació"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-center">Després</h3>
              <img
                src="/ferroli/caldera-biomassa-ferroli-vic-final.jpeg"
                className="rounded-2xl w-full object-cover"
                alt="Després instal·lació"
              />
            </div>

          </div>

        </section>

        <h2 className="text-3xl font-bold">
          Servei a Osona i Catalunya
        </h2>

        <p className="text-gray-700 leading-7">
          Treballem a Vic, Manlleu, Torelló, Centelles i tota la comarca d’Osona.
        </p>

      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold">
          Pressupost sense compromís
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
