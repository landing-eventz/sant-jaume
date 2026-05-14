export const metadata = {
  title: "Calderes de biomassa a Vic | Instal·lació i manteniment",
  description:
    "Instal·lació i manteniment de calderes de biomassa a Vic. Sistemes eficients de calefacció amb biomassa i llenya.",
};

export default function CalderesVic() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Calderes de biomassa a Vic
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Instal·lació, manteniment i assessorament de calderes de biomassa a Vic i Osona.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Demanar pressupost
        </a>

      </section>

      {/* CONTINGUT SEO */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">

        <h2 className="text-3xl font-bold">
          Instal·lació de calderes de biomassa a Vic
        </h2>

        <p className="text-gray-700 leading-7">
          Les calderes de biomassa són una alternativa eficient i sostenible
          per escalfar habitatges, masies i negocis a Vic.
        </p>

        <p className="text-gray-700 leading-7">
          Oferim instal·lacions adaptades a cada espai amb sistemes moderns
          de biomassa i llenya.
        </p>

        <h2 className="text-3xl font-bold">
          Servei professional i manteniment
        </h2>

        <p className="text-gray-700 leading-7">
          També realitzem manteniment, revisió de conductes i escura de xemeneies
          per garantir seguretat i eficiència energètica.
        </p>

        <h2 className="text-3xl font-bold">
          Treballem a Vic i Osona
        </h2>

        <p className="text-gray-700 leading-7">
          Donem servei a Vic, Gurb, Calldetenes, Manlleu i altres municipis d’Osona.
        </p>

      </section>

      {/* CTA */}
      <section className="bg-black text-white text-center py-20 px-6">

        <h2 className="text-3xl font-bold">
          Pressupost sense compromís
        </h2>

        <p className="mt-4 text-gray-300">
          Contacta amb nosaltres per instal·lar una caldera de biomassa a Vic.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          WhatsApp
        </a>

      </section>

    </main>
  );
}
