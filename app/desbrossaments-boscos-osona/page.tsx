export const metadata = {
  title:
    "Desbrossaments forestals a Osona i Vic | Neteja de boscos i finques",
  description:
    "Serveis de desbrossament forestal a Osona i Vic. Neteja de boscos, finques i camins rurals amb maquinària professional. Pressupost sense compromís.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* SCHEMA LOCAL SERVICE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Desbrossaments forestals a Osona i Vic",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Treballs Forestals Sant Jaume",
              "areaServed": "Osona, Vic, Catalunya",
              "telephone": "+34 621 19 25 82"
            },
            "serviceType": "Desbrossament forestal",
            "areaServed": "Osona"
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-black text-white py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Desbrossaments forestals a Osona i Vic
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
          Realitzem desbrossament de boscos, finques i camins rurals a Osona
          amb maquinària professional per garantir seguretat i neteja del terreny.
        </p>
      </section>

      {/* CONTINGUT SEO */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">

        <h2 className="text-3xl font-bold">
          Servei de desbrossament forestal a Osona
        </h2>

        <p className="text-gray-700 leading-7">
          El desbrossament forestal és essencial per mantenir els terrenys nets,
          reduir el risc d’incendis i millorar l’accessibilitat en zones rurals d’Osona i Vic.
        </p>

        <p className="text-gray-700 leading-7">
          Treballem amb maquinària professional per eliminar vegetació, matolls
          i residus forestals de manera eficient i segura.
        </p>

        <h2 className="text-3xl font-bold">
          Quan cal fer un desbrossament?
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Abans de la temporada d’estiu (prevenció d’incendis)</li>
          <li>Terrenys abandonats o amb vegetació excessiva</li>
          <li>Camins rurals bloquejats</li>
          <li>Finques agrícoles o forestals</li>
        </ul>

        <h2 className="text-3xl font-bold">
          Avantatges del desbrossament professional
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Reducció del risc d’incendis forestals</li>
          <li>Millora de l’accessibilitat del terreny</li>
          <li>Preparació per ús agrícola o forestal</li>
          <li>Manteniment de finques i propietats</li>
        </ul>

        <h2 className="text-3xl font-bold">
          Treballs reals a Osona
        </h2>

        <p className="text-gray-700 leading-7">
          Hem realitzat desbrossaments de boscos i finques a Vic, Manlleu, Torelló
          i tota la comarca d’Osona amb resultats professionals i segurs.
        </p>

      </section>

      {/* IMATGES */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-2xl font-bold text-center mb-10">
          Cas real de treball a Osona
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <h3 className="font-semibold mb-3 text-center">Abans</h3>
            <img
              src="/desbrossaments/desbrossament-bosc-osona-abans.jpg"
              className="rounded-2xl w-full h-80 object-cover"
              alt="Bosc abans desbrossament Osona"
            />
          </div>

          <div>
            <h3 className="font-semibold mb-3 text-center">Procés</h3>
            <img
              src="/desbrossaments/desbrossament-bosc-osona-proces.jpg"
              className="rounded-2xl w-full h-80 object-cover"
              alt="Procés desbrossament Osona"
            />
          </div>

        </div>
      </section>

      {/* VIDEO */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">

        <h2 className="text-2xl font-bold mb-6">
          Treball de desbrossament forestal
        </h2>

        <video
          controls
          className="w-full max-h-[500px] rounded-2xl shadow-lg"
        >
          <source src="/desbrossaments/desbrossament-forestal-osona-video.mp4" />
        </video>

      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-20 px-6">

        <h2 className="text-3xl font-bold">
          Necessites desbrossar un terreny a Osona?
        </h2>

        <p className="mt-4 text-gray-300">
          Demana pressupost sense compromís i resposta ràpida.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Demanar pressupost
        </a>

      </section>

    </main>
  );
}
