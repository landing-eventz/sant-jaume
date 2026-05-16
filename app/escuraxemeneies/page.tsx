export const metadata = {
  title:
    "Escura xemeneies a Osona i Vic | Neteja professional i manteniment",
  description:
    "Servei professional d’escura i neteja de xemeneies a Osona i Vic. Evita incendis, millora el tiratge i assegura el rendiment de la teva instal·lació.",
};

export default function EscuraXemeneies() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* SCHEMA LOCAL SERVICE */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Escura de xemeneies a Osona",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Treballs Forestals Sant Jaume",
              "areaServed": "Osona, Vic, Catalunya",
              "telephone": "+34 621 19 25 82"
            },
            "serviceType": "Neteja de xemeneies",
            "areaServed": "Osona"
          }),
        }}
      />

      {/* HERO */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Escura xemeneies a Osona i Vic
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Servei professional de neteja de xemeneies, calderes i sistemes de calefacció
          a Osona. Evitem incendis, millorem el tiratge i garantim la seguretat de la instal·lació.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block mt-8 bg-green-500 px-8 py-4 rounded-xl font-semibold"
        >
          Demanar escura de xemeneia a Osona
        </a>
      </section>

      {/* CONTINGUT SEO */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">

        <h2 className="text-3xl font-bold">
          Neteja de xemeneies professional a Osona
        </h2>

        <p className="text-gray-700 leading-7">
          La neteja de xemeneies a Osona és essencial per garantir una combustió segura
          i eficient en sistemes de calefacció amb llenya, gasoil o biomassa.
        </p>

        <p className="text-gray-700 leading-7">
          Amb el temps, el sutge s’acumula dins el conducte i pot reduir el tiratge o provocar riscos d’incendi.
        </p>

        <h2 className="text-3xl font-bold">
          Per què és important l’escura de xemeneies?
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Evita incendis dins el conducte</li>
          <li>Millora el rendiment de la calefacció</li>
          <li>Redueix el consum energètic</li>
          <li>Millora la seguretat de la instal·lació</li>
        </ul>

        <h2 className="text-3xl font-bold">
          Quan s’ha de netejar una xemeneia?
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>1 cop l’any en ús habitual</li>
          <li>Abans de la temporada d’hivern</li>
          <li>Després de consum intens de llenya o biomassa</li>
        </ul>

        <h2 className="text-3xl font-bold">
          Problemes d’una xemeneia bruta
        </h2>

        <p className="text-gray-700 leading-7">
          Una xemeneia sense manteniment pot provocar fum dins l’habitatge,
          mala combustió, males olors i fins i tot incendis per acumulació de sutge.
        </p>

        <p className="text-gray-700 leading-7">
          També incrementa el consum de combustible i redueix l’eficiència del sistema.
        </p>

        <h2 className="text-3xl font-bold">
          Servei a Vic i tota la comarca d’Osona
        </h2>

        <p className="text-gray-700 leading-7">
          Oferim servei d’escura de xemeneies a Vic, Manlleu, Torelló, Centelles
          i tota la comarca d’Osona amb intervenció ràpida i professional.
        </p>

      </section>

      {/* CTA FINAL */}
      <section className="bg-black text-white text-center py-20 px-6">
        <h2 className="text-3xl font-bold">
          Neteja professional de xemeneies a Osona
        </h2>

        <p className="mt-4 text-gray-300">
          Contacta ara per pressupost sense compromís.
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
