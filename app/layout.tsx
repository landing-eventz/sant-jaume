import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Treballs Forestals Sant Jaume | Biomassa i calderes a Osona",
  description:
    "Instal·lació de calderes de biomassa, inserts, escura de xemeneies i serveis forestals a Osona i Catalunya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca">
      <head>
        {/* SEO STRUCTURED DATA - LOCAL BUSINESS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Treballs Forestals Sant Jaume",
              "url": "https://sant-jaume.vercel.app",
              "telephone": "+34 621 19 25 82",
              "areaServed": "Osona, Catalunya",
              "description":
                "Especialistes en calderes de biomassa, inserts de llenya, neteja de xemeneies i serveis forestals a Osona.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Osona",
                "addressRegion": "Catalunya",
                "addressCountry": "ES",
              },
              "serviceType": [
                "Calderes de biomassa",
                "Inserts de llenya",
                "Escura de xemeneies",
                "Desbrossaments forestals",
              ],
              "sameAs": [
                "https://wa.me/34621192582"
              ]
            }),
          }}
        />
      </head>

      <body className="bg-white text-black">

        {/* HEADER */}
        <header className="border-b bg-white sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-6">

            <Link href="/" className="text-2xl font-bold">
              Treballs Forestals Sant Jaume
            </Link>

            <nav className="flex flex-wrap gap-6 text-sm md:text-base font-medium">

              <Link href="/">Inici</Link>

              <Link href="/calderes-biomassa-osona">
                Calderes biomassa
              </Link>

              <Link href="/inserts-llenya">
                Inserts llenya
              </Link>

              <Link href="/escuraxemeneies">
                Escura xemeneies
              </Link>

              <Link href="/vic/calderes-biomassa">
                Vic
              </Link>

            </nav>

          </div>
        </header>

        {/* MAIN */}
        <main>
          {children}
        </main>

        {/* FOOTER */}
        <footer className="bg-black text-white mt-20 border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

            {/* EMPRESA */}
            <div>
              <h3 className="font-bold text-lg">
                Treballs Forestals Sant Jaume
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Especialistes en biomassa, calderes, inserts de llenya,
                manteniment de xemeneies i serveis forestals a Osona.
              </p>

              <p className="mt-4 text-gray-400 text-sm leading-6">
                Servei professional a Vic, Manlleu, Torelló,
                Centelles i altres municipis d’Osona.
              </p>
            </div>

            {/* SERVEIS */}
            <div>
              <h3 className="font-bold text-lg">
                Serveis
              </h3>

              <ul className="mt-4 space-y-3 text-gray-300">

                <li>
                  <Link href="/calderes-biomassa-osona">
                    Instal·lació de calderes de biomassa
                  </Link>
                </li>

                <li>
                  <Link href="/inserts-llenya">
                    Inserts de llenya
                  </Link>
                </li>

                <li>
                  <Link href="/escuraxemeneies">
                    Escura i neteja de xemeneies
                  </Link>
                </li>

                <li>
                  <Link href="/vic/calderes-biomassa">
                    Calderes de biomassa a Vic
                  </Link>
                </li>

              </ul>
            </div>

            {/* CONTACTE */}
            <div>
              <h3 className="font-bold text-lg">
                Contacte
              </h3>

              <div className="mt-4 text-gray-300 leading-7">

                <p>Osona i Catalunya</p>
                <p>Tel: 621 19 25 82</p>
                <p>Pressupostos sense compromís</p>

              </div>

              <a
                href="https://wa.me/34621192582"
                className="inline-block mt-6 bg-green-500 hover:bg-green-400 transition text-black px-6 py-3 rounded-xl font-semibold"
              >
                WhatsApp
              </a>

            </div>

          </div>

          {/* BOTTOM */}
          <div className="border-t border-neutral-800 py-6 px-6 text-center text-sm text-gray-500">
            © 2026 Treballs Forestals Sant Jaume · Biomassa i calefacció a Osona
          </div>

        </footer>

      </body>
    </html>
  );
}
