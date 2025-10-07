export default function Services() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section>
        <h1 className="text-3xl font-bold mb-6">Serviços</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Desenvolvimento Web</h2>
            <p className="text-gray-600">Criação de sites e aplicações web modernas e responsivas.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Consultoria</h2>
            <p className="text-gray-600">Aconselhamento em tecnologias e melhores práticas de desenvolvimento.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Manutenção</h2>
            <p className="text-gray-600">Suporte e manutenção de aplicações existentes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}