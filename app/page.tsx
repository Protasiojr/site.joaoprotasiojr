export default function Home() {
  return (
    <main className="w-full h-screen">
      <section className="bg-[linear-gradient(to_bottom,transparent,theme(colors.slate.950)),url('/IMAGEM_DO_SITE.png')] bg-contain bg-center bg-no-repeat w-full h-full flex items-center">
        <div className="text-left text-white max-w-md ml-8">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Site de João Protásio Jr</h1>
          <p className="text-lg mb-8">Desenvolvedor web apaixonado por criar soluções inovadoras.</p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Entre em Contato</a>
        </div>
      </section>
    </main>
  );
}
