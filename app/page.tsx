
import WhatsappButton from "@/components/WhatsappButton";

const forestServices = [
  {
    title: "Desbrossaments",
    description:
      "Neteja i desbrossament de terrenys, finques i zones forestals.",
  },
  {
    title: "Tala i aprofitament forestal",
    description:
      "Tala d'arbres i treballs d'aprofitament forestal adaptats a cada terreny.",
  },
  {
    title: "Manteniment de finques",
    description:
      "Manteniment i conservació de finques rústiques i forestals.",
  },
  {
    title: "Poda i tala d'arbres",
    description:
      "Treballs de poda i tala segons les necessitats de cada espai.",
  },
  {
    title: "Neteja de parcel·les",
    description:
      "Neteja de parcel·les i recuperació de terrenys amb vegetació.",
  },
  {
    title: "Manteniment de camins",
    description:
      "Neteja i manteniment de camins rurals i forestals.",
  },
  {
    title: "Franges de prevenció d'incendis",
    description:
      "Manteniment de franges de protecció i gestió de la vegetació.",
  },
  {
    title: "Trituració de restes vegetals",
    description:
      "Trituració de restes forestals i vegetals generades durant els treballs.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* PORTADA */}
      <section className="bg-[#183d2b] text-white px-6 py-24 md:py-32">
        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[0.25em] text-sm text-green-200 font-semibold">
            Sant Jaume · Osona · Catalunya
          </p>

          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight max-w-5xl mx-auto">
            Treballs Forestals Sant Jaume
          </h1>

          <p className="mt-6 text-2xl md:text-3xl font-medium text-green-100">
            Quatre generacions d'experiència forestal
          </p>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Som una empresa familiar vinculada al món forestal.
            Oferim serveis de desbrossament, tala, manteniment
            de finques i gestió d'espais forestals.
          </p>

          <p className="mt-4 text-base text-green-100 font-medium">
            Arrelats a Osona. Treballem arreu de Catalunya.
          </p>

          <WhatsappButton
            label="Demana pressupost"
            location="home-hero"
            className="inline-block mt-10 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold text-white"
          />

        </div>
      </section>

      {/* SERVEIS FORESTALS */}
      <section
        id="serveis-forestals"
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="text-center max-w-3xl mx-auto mb-14">

          <p className="text-green-700 uppercase tracking-widest text-sm font-semibold">
            Què fem
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Serveis forestals
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed">
            Treballem en finques, boscos, parcel·les i camins.
            Estudiem cada projecte per oferir una solució
            adaptada a les necessitats del terreny.
          </p>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {forestServices.map((service) => (
            <div
              key={service.title}
              className="border border-gray-200 rounded-2xl p-7 hover:border-green-700 hover:shadow-lg transition"
            >
              <div className="w-10 h-1 bg-green-700 rounded-full mb-5" />

              <h3 className="text-xl font-bold">
                {service.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>

        <div className="text-center mt-12">
          <WhatsappButton
            label="Consulta el teu projecte"
            location="forest-services"
            className="inline-block bg-[#183d2b] hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold transition"
          />
        </div>
      </section>

      {/* HISTÒRIA */}
      <section
        id="historia"
        className="bg-gray-50 px-6 py-20"
      >
        <div className="max-w-5xl mx-auto text-center">

          <p className="text-green-700 uppercase tracking-widest text-sm font-semibold">
            La nostra història
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Quatre generacions vinculades al bosc
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            La nostra història familiar està lligada al món forestal
            des de fa quatre generacions. Hem crescut coneixent
            l'ofici, el territori i la feina al bosc.
            Aquesta experiència forma part de la nostra manera
            de treballar cada dia.
          </p>

        </div>
      </section>

      {/* ÀREA DE SERVEI */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">

        <p className="text-green-700 uppercase tracking-widest text-sm font-semibold">
          On treballem
        </p>

        <h2 className="mt-3 text-3xl md:text-4xl font-bold">
          D'Osona a tot Catalunya
        </h2>

        <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          Som d'Osona i coneixem el territori, però també ens
          desplacem arreu de Catalunya per dur a terme treballs
          forestals en finques, boscos, parcel·les i camins.
        </p>

      </section>

      {/* CONTACTE */}
      <section
        id="contacte"
        className="bg-[#183d2b] text-white px-6 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl md:text-4xl font-bold">
            Necessites un treball forestal?
          </h2>

          <p className="mt-5 text-lg text-gray-200 leading-relaxed">
            Explica'ns què necessites i parlarem del teu projecte.
            Treballem a Osona i arreu de Catalunya.
          </p>

          <WhatsappButton
            label="Contacta amb nosaltres per WhatsApp"
            location="home-footer"
            className="inline-block mt-8 bg-green-500 hover:bg-green-600 transition px-8 py-4 rounded-xl font-semibold text-white"
          />

        </div>
      </section>

    </main>
  );
}
