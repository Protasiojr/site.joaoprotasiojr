export default function Contact() {
  return (
    <main className="container mx-auto px-4 py-16">
      <section>
        <h1 className="text-3xl font-bold mb-6">Contato</h1>
        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Nome</label>
            <input className="w-full px-3 py-2 border rounded-lg" type="text" id="name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded-lg" type="email" id="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Mensagem</label>
            <textarea className="w-full px-3 py-2 border rounded-lg" id="message" rows={4}></textarea>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700" type="submit">Enviar</button>
        </form>
      </section>
    </main>
  );
}