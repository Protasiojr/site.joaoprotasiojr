import { Phone, Globe, Users, Box, Video } from 'lucide-react';

export default function Home() {
  return (
    <main className="w-full max-w-[1920px] mx-auto">
      <section className="bg-[linear-gradient(to_bottom,transparent,theme(colors.slate.950)),url('/IMAGEM_DO_SITE.png')] bg-contain bg-center bg-no-repeat w-full h-[480px] flex items-center">
        <div className="text-left text-white max-w-md ml-8">
          <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Site de João Protásio Jr</h1>
          <p className="text-lg mb-8">Desenvolvedor web apaixonado por criar soluções inovadoras.</p>
          <a href="/contact" className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700"><Phone className="inline w-5 h-5 mr-2" />Entre em Contato</a>
        </div>
      </section>
      <section className="py-16 bg-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-600 p-6 rounded-lg shadow-md text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2">Páginas Web</h3>
              <p className="text-gray-300">Desenvolvimento de Páginas Web</p>
            </div>
            <div className="bg-slate-600 p-6 rounded-lg shadow-md text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2">Redes Socias</h3>
              <p className="text-gray-300">Conteudo para redes sociais</p>
            </div>
            <div className="bg-slate-600 p-6 rounded-lg shadow-md text-center">
              <Box className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2">Modelo 3D</h3>
              <p className="text-gray-300">Produtos em 3D para divulgação</p>
            </div>
            <div className="bg-slate-600 p-6 rounded-lg shadow-md text-center">
              <Video className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2">Vídeos</h3>
              <p className="text-gray-300">Edição de vídeo para redes sociais</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
