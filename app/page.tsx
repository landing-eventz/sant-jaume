export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="h-[90vh] flex items-center justify-center text-center px-6 bg-black text-white">
        <div className="max-w-4xl">

          <h1 className="text-5xl md:text-6xl font-bold">
            Biomassa, llenya i serveis forestals
          </h1>

          <p className="mt-6 text-xl text-gray-300">
            Venda de llenya i instal·lació d’inserts i calderes de biomassa a Osona i Catalunya
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/34621192582?text=Hola, estic interessat en una caldera o sistema de biomassa. Em podeu fer pressupost?"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold transition"
            >
              WhatsApp
            </a>
          </div>

        </div>
      </section>

      {/* SERVEIS */}
      <section className="max-w-6xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center mb-12">
          Què fem
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold">Llenya</h3>

            <p className="mt-2 text-gray-600">
              Venda de llenya i biomassa per particulars i professionals.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold">Inserts</h3>

            <p className="mt-2 text-gray-600">
              Solucions modernes de llenya i biomassa per a la llar.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold">Calderes</h3>

            <p className="mt-2 text-gray-600">
              Sistemes eficients de calefacció amb biomassa.
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold">Serveis forestals</h3>

            <p className="mt-2 text-gray-600">
              Tala d’arbres, desbrossaments i manteniment forestal.
            </p>
          </div>

        </div>

      </section>

      {/* SOBRE NOSALTRES */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl font-bold mb-8">
          Sobre nosaltres
        </h2>

        <p className="text-lg text-gray-600 leading-8">
          Treballs Forestals Sant Jaume és una empresa d’Osona vinculada al sector forestal i la biomassa.
          Oferim venda de llenya, serveis forestals i solucions de calefacció amb biomassa adaptades a cada client.
        </p>

      </section>

      {/* CONTACTE */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Contacte ràpid
        </h2>

        <p className="text-gray-600 mb-8">
          Escriu-nos i t’assessorem sense compromís.
        </p>

        <a
          href="https://wa.me/34621192582?text=Hola, voldria informació sobre biomassa, llenya o serveis forestals"
          className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-xl font-semibold transition"
        >
          Contactar ara
        </a>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10">
        Treballs Forestals Sant Jaume
      </footer>

    </main>
  );
}
