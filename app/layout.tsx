
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import WhatsappButton from "@/components/WhatsappButton";

export const metadata = {
  metadataBase: new URL("https://sant-jaume.com"),

  title: "Treballs Forestals Sant Jaume | Osona i Catalunya",

  description:
    "Empresa familiar de treballs forestals a Osona i Catalunya. Desbrossaments, tala i aprofitament forestal, manteniment de finques, camins i prevenció d'incendis.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Treballs Forestals Sant Jaume",
    description:
      "Quatre generacions d'experiència forestal. Treballs forestals a Osona i arreu de Catalunya.",
    url: "https://sant-jaume.com",
    siteName: "Treballs Forestals Sant Jaume",
    locale: "ca_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ca">
      <head>

        {/* GOOGLE ANALYTICS */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-D5430BP6SK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-D5430BP6SK');
          `}
        </Script>

        {/* DADES ESTRUCTURADES: TREBALLS FORESTALS */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Treballs Forestals Sant Jaume",
              url: "https://sant-jaume.com",
              telephone: "+34 621 19 25 82",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Catalunya",
              },
              description:
                "Empresa familiar de treballs forestals amb quatre generacions d'experiència. Desbrossaments, tala, manteniment de finques, camins i gestió forestal.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Osona",
                addressRegion: "Catalunya",
                addressCountry: "ES",
              },
              serviceType: [
                "Desbrossaments",
                "Tala i aprofitament forestal",
                "Manteniment de finques",
                "Poda i tala d'arbres",
                "Neteja de parcel·les",
                "Manteniment de camins",
                "Franges de prevenció d'incendis",
                "Trituració de restes vegetals",
              ],
              sameAs: [
                "https://wa.me/34621192582",
              ],
            }),
          }}
        />

      </head>

      <body className="bg-white text-gray-900">

        {/* CAPÇALERA */}
        <header className="border-b border-gray-200 bg-white sticky top-0 z-50">

          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-5">

            <Link
              href="/"
              className="text-xl md:text-2xl font-bold text-[#183d2b]"
            >
              Treballs Forestals Sant Jaume
            </Link>

            <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm md:text-base font-medium">

              <Link href="/" className="hover:text-green-700 transition">
                Inici
              </Link>

              <Link
                href="/#serveis-forestals"
                className="hover:text-green-700 transition"
              >
                Serveis forestals
              </Link>

              <Link
                href="/#historia"
                className="hover:text-green-700 transition"
              >
                La nostra història
              </Link>

              <Link
                href="/#contacte"
                className="hover:text-green-700 transition"
              >
                Contacte
              </Link>

              <span className="hidden md:inline text-gray-300">|</span>

              <Link
                href="/escuraxemeneies"
                className="text-green-800 hover:text-green-600 transition font-semibold"
              >
                Escura xemeneies
              </Link>

            </nav>

          </div>

        </header>

        {/* CONTINGUT */}
        {children}

        {/* FOOTER */}
        <footer className="bg-[#111a14] text-white mt-0">

          <div className="max-w-6xl mx-auto px-6 py-14 grid sm:grid-cols-2 md:grid-cols-3 gap-10">

            {/* EMPRESA */}
            <div>

              <h3 className="font-bold text-lg">
                Treballs Forestals Sant Jaume
              </h3>

              <p className="mt-4 text-gray-300 leading-7">
                Empresa familiar amb quatre generacions
                d'experiència forestal.
              </p>

              <p className="mt-4 text-gray-400 text-sm leading-6">
                Arrelats a Osona. Treballem arreu de Catalunya.
              </p>

            </div>

            {/* SERVEIS FORESTALS */}
            <div>

              <h3 className="font-bold text-lg">
                Treballs forestals
              </h3>

              <ul className="mt-4 space-y-3 text-gray-300 text-sm">

                <li>
                  <Link href="/#serveis-forestals" className="hover:text-white">
                    Desbrossaments
                  </Link>
                </li>

                <li>
                  <Link href="/#serveis-forestals" className="hover:text-white">
                    Tala i aprofitament forestal
                  </Link>
                </li>

                <li>
                  <Link href="/#serveis-forestals" className="hover:text-white">
                    Manteniment de finques i camins
                  </Link>
                </li>

                <li>
                  <Link href="/#serveis-forestals" className="hover:text-white">
                    Prevenció d'incendis
                  </Link>
                </li>

              </ul>

            </div>

            {/* ALTRES SERVEIS */}
            <div>

              <h3 className="font-bold text-lg">
                Altres serveis
              </h3>

              <ul className="mt-4 space-y-3 text-gray-300 text-sm">

                <li>
                  <Link href="/escuraxemeneies" className="hover:text-white">
                    Escura de xemeneies
                  </Link>
                </li>

                <li>
                  <Link href="/calderes-biomassa-osona" className="hover:text-white">
                    Calderes de biomassa
                  </Link>
                </li>

                <li>
                  <Link href="/inserts-llenya" className="hover:text-white">
                    Inserts de llenya
                  </Link>
                </li>

                <li>
                  <Link href="/fusta-construccio-osona" className="hover:text-white">
                    Fusta per a construcció
                  </Link>
                </li>

                <li>
                  <Link href="/biga-laminada-osona" className="hover:text-white">
                    Bigues laminades
                  </Link>
                </li>

                <li>
                  <Link href="/vic/calderes-biomassa" className="hover:text-white">
                    Calderes de biomassa a Vic
                  </Link>
                </li>

              </ul>

            </div>

          </div>

          {/* CONTACTE I COPYRIGHT */}
          <div className="border-t border-neutral-700">

            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

              <div className="text-center md:text-left text-gray-300 text-sm leading-7">

                <p>Osona i Catalunya</p>
                <p>Telèfon: 621 19 25 82</p>
                <p>Pressupostos sense compromís</p>

              </div>

              <WhatsappButton
                label="Contacta per WhatsApp"
                location="footer"
                className="inline-block bg-green-500 hover:bg-green-600 transition text-white px-6 py-3 rounded-xl font-semibold"
              />

            </div>

            <div className="border-t border-neutral-800 py-6 px-6 text-center text-sm text-gray-400">
              © {new Date().getFullYear()} Treballs Forestals Sant Jaume
            </div>

          </div>

        </footer>

      </body>
    </html>
  );
}
