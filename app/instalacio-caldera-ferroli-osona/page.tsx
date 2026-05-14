export const metadata = {
  title: "Instal·lació caldera Ferroli a Osona | Cas real de biomassa",
  description:
    "Cas real d’instal·lació de caldera Ferroli a Osona. Fotos abans i després, instal·lació professional i eficient.",
};

export default function InstalacioFerroli() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          Instal·lació real de caldera Ferroli a Osona
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Cas real d’instal·lació de sistema de biomassa amb millora d’eficiència i reducció de consum.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Demanar pressupost
        </a>
      </section>

      {/* CONTEXTO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">
          Situació inicial
        </h2>

        <p className="text-gray-700 leading-7">
          Substitució d’un sistema antic per una caldera de biomassa Ferroli per millorar l’eficiència energètica.
        </p>
      </section>

      {/* ABANS / DESPRÉS */}
      <section className="max-w-6xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold text-center mb-12">
          Abans i després
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-4">
            <h3 className="text-center font-semibold">Abans</h3>
            <img
              src="/ferroli/caldera-ferroli-abans-osona.jpeg"
              className="rounded-2xl w-full"
              alt="Abans"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-center font-semibold">Després</h3>
            <img
              src="/ferroli/caldera-biomassa-ferroli-vic-final.jpeg"
              className="rounded-2xl w-full"
              alt="Després"
            />
          </div>

        </div>

      </section>

      {/* DETALLES */}
      <section className="max-w-5xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold mb-6">
          Detalls tècnics
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Caldera Ferroli biomassa</li>
          <li>Substitució sistema antic</li>
          <li>Optimització consum</li>
          <li>Instal·lació completa</li>
        </ul>

      </section>

      {/* RESULTADOS */}
      <section className="bg-gray-50 py-20 px-6">

        <div className="max-w-5xl mx-auto text-center space-y-6">

          <h2 className="text-3xl font-bold">
            Resultats
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <p className="font-bold text-2xl">↓ Consum</p>
              <p className="text-gray-600">Estalvi energètic</p>
            </div>

            <div>
              <p className="font-bold text-2xl">↑ Eficiència</p>
              <p className="text-gray-600">Millor rendiment</p>
            </div>

            <div>
              <p className="font-bold text-2xl">↑ Confort</p>
              <p className="text-gray-600">Calefacció estable</p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="bg-black text-white text-center py-20 px-6">

        <h2 className="text-3xl font-bold">
          Vols una instal·lació similar?
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

