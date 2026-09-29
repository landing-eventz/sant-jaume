export const metadata = {
  title:
    "Escura xemeneies a Osona i Vic | Neteja de xemeneies de llenya",
  description:
    "Servei d’escura i neteja de xemeneies de llenya a Osona i Vic. Pressupost per neteja, manteniment i revisió de xemeneies.",
};

export default function EscuraXemeneies() {
  return (
    <main className="min-h-screen bg-white text-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Escura i neteja de xemeneies de llenya",
            provider: {
              "@type": "LocalBusiness",
              name: "Treballs Forestals Sant Jaume",
              telephone: "+34 621 19 25 82",
              areaServed: ["Osona", "Vic"],
            },
            serviceType: "Escura i neteja de xemeneies",
            areaServed: ["Osona", "Vic"],
          }),
        }}
      />

      <section className="bg-black px-6 py-24 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">
          Escura xemeneies a Osona i Vic
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
          Servei professional d’escura i neteja de xemeneies de llenya a
          Osona i Vic. Mantenim el conducte net i ajudem a conservar un bon
          tiratge i un funcionament segur de la instal·lació.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="mt-8 inline-block rounded-xl bg-green-500 px-8 py-4 font-semibold text-white"
        >
          Demanar pressupost per WhatsApp
        </a>
      </section>

      <section className="mx-auto max-w-5xl space-y-10 px-6 py-20">
        <h2 className="text-3xl font-bold">
          Escura i neteja de xemeneies de llenya
        </h2>

        <p className="leading-7 text-gray-700">
          Fem escura i neteja de xemeneies de llenya per a habitatges i
          instal·lacions que utilitzen estufes, llars de foc o sistemes de
          calefacció amb llenya.
        </p>

        <p className="leading-7 text-gray-700">
          L’acumulació de sutge i residus dins del conducte pot afectar el
          tiratge i el funcionament de la instal·lació. Una neteja periòdica
          ajuda a mantenir la xemeneia en bones condicions.
        </p>

        <h2 className="text-3xl font-bold">
          Neteja de xemeneies professional
        </h2>

        <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>Escura de xemeneies de llenya</li>
          <li>Neteja del conducte de la xemeneia</li>
          <li>Manteniment de xemeneies</li>
          <li>Revisió visual de l’estat del conducte</li>
          <li>Servei a Osona i Vic</li>
        </ul>

        <h2 className="text-3xl font-bold">
          Escura xemeneies preus
        </h2>

        <p className="leading-7 text-gray-700">
          Si busques escura xemeneies preus, el cost del servei pot variar
          segons el tipus de xemeneia, l’accés al conducte, la instal·lació i
          l’estat de la xemeneia. Contacta amb nosaltres i et preparem un
          pressupost segons les característiques de la instal·lació.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="inline-block rounded-xl bg-green-500 px-8 py-4 font-semibold text-white"
        >
          Consultar preu per WhatsApp
        </a>

        <h2 className="text-3xl font-bold">
          Quan és recomanable netejar una xemeneia?
        </h2>

        <p className="leading-7 text-gray-700">
          La freqüència de neteja depèn de l’ús, del tipus de combustible i
          de les característiques de la instal·lació. En xemeneies de llenya
          d’ús habitual, és convenient fer-ne un manteniment periòdic i
          revisar el conducte abans de la temporada de més ús.
        </p>

        <h2 className="text-3xl font-bold">
          Escura xemeneies a Osona i Vic
        </h2>

        <p className="leading-7 text-gray-700">
          Oferim servei d’escura i neteja de xemeneies a Osona i Vic.
          Si necessites el servei en un altre municipi, consulta’ns la
          disponibilitat.
        </p>

        <h2 className="text-3xl font-bold">
          Demana pressupost per netejar la teva xemeneia
        </h2>

        <p className="leading-7 text-gray-700">
          Si necessites una escura de xemeneia de llenya, posa’t en contacte
          amb nosaltres per WhatsApp i explica’ns quin tipus d’instal·lació
          tens.
        </p>
      </section>

      <section className="bg-black px-6 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">
          Escura xemeneies a Osona i Vic
        </h2>

        <p className="mt-4 text-gray-300">
          Demana pressupost sense compromís.
        </p>

        <a
          href="https://wa.me/34621192582"
          className="mt-8 inline-block rounded-xl bg-green-500 px-8 py-4 font-semibold text-white"
        >
          Contactar per WhatsApp
        </a>
      </section>
    </main>
  );
}
