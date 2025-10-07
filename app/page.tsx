'use client';

import { Phone, Globe, Users, Box, Video } from 'lucide-react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export default function Home() {
  const dataDots = {
    labels: ['Blender', 'Inkscape', 'Gimp', 'ComfyUI', 'DAZ', '5D Render'],
    datasets: [{
      label: 'Value',
      data: [95, 89, 80, 75, 71, 87],
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
      borderColor: '#fbbf24',
      pointBackgroundColor: '#fbbf24',
      pointRadius: 5,
    }],
  };

  const dataGridFilled = {
    labels: ['HTML', 'CSS', 'Javascript', 'Tailwind', 'Typescript', 'MySQL'],
    datasets: [{
      label: 'Value',
      data: [97, 88, 96, 79, 93, 78],
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
      borderColor: '#fbbf24',
      fill: true,
    }],
  };

  const dataGridCircle = {
    labels: ['Imagens', 'Vídeos', 'Áudio', 'IA', 'Rede Social', 'Designer'],
    datasets: [{
      label: 'Value',
      data: [86, 91, 82, 98, 79, 95],
      backgroundColor: 'rgba(251, 191, 36, 0.1)',
      borderColor: '#fbbf24',
      fill: true,
    }],
  };

  const optionsDots = {
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      },
      tooltip: {
        titleColor: 'white',
        bodyColor: 'white'
      }
    },
    scales: {
      r: {
        ticks: {
          color: 'white'
        },
        pointLabels: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255,255,255,0.1)',
          circular: false,
        },
        angleLines: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
    },
  };

  const optionsGridFilled = {
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      },
      tooltip: {
        titleColor: 'white',
        bodyColor: 'white'
      }
    },
    scales: {
      r: {
        ticks: {
          color: 'white'
        },
        pointLabels: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255,255,255,0.1)',
          circular: false,
        },
        angleLines: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
    },
  };

  const optionsGridCircle = {
    plugins: {
      legend: {
        labels: {
          color: 'white'
        }
      },
      tooltip: {
        titleColor: 'white',
        bodyColor: 'white'
      }
    },
    scales: {
      r: {
        ticks: {
          color: 'white'
        },
        pointLabels: {
          color: 'white'
        },
        grid: {
          color: 'rgba(255,255,255,0.1)',
          circular: true,
        },
        angleLines: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
    },
  };
  return (
    <main className="w-full max-w-[1920px] mx-auto">
      <section className="bg-[linear-gradient(to_bottom,transparent,theme(colors.slate.950)),url('/IMAGEM_DO_SITE.png')] bg-cover bg-center bg-no-repeat min-h-screen flex items-center">
        <div className="text-left text-white max-w-md mx-4 md:ml-8">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">Bem-vindo ao Site de João Protásio Jr</h1>
          <p className="text-base md:text-lg mb-8">Desenvolvedor web apaixonado por criar soluções inovadoras.</p>
          <a href="https://wa.me/5561998297054" target="_blank" className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700"><Phone className="inline w-5 h-5 mr-2" />Entre em Contato</a>
        </div>
      </section>
      <section className="py-16 bg-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-12">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-600 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-slate-800 transition-all duration-300 text-center">
              <Globe className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Páginas Web</h3>
              <p className="text-gray-300">Desenvolvimento de Páginas Web</p>
            </div>
            <div className="bg-slate-600 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-slate-800 transition-all duration-300 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Redes Socias</h3>
              <p className="text-gray-300">Conteudo para redes sociais</p>
            </div>
            <div className="bg-slate-600 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-slate-800 transition-all duration-300 text-center">
              <Box className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Modelo 3D</h3>
              <p className="text-gray-300">Produtos em 3D para divulgação</p>
            </div>
            <div className="bg-slate-600 p-6 rounded-lg shadow-md hover:shadow-lg hover:bg-slate-800 transition-all duration-300 text-center">
              <Video className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-200">Vídeos</h3>
              <p className="text-gray-300">Edição de vídeo para redes sociais</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-200 mb-12">Ferramentas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-600 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Designer</h3>
              <Radar data={dataDots} options={optionsDots} />
            </div>
            <div className="bg-slate-600 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Dev Web</h3>
              <Radar data={dataGridFilled} options={optionsGridFilled} />
            </div>
            <div className="bg-slate-600 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-200">Social Mídia</h3>
              <Radar data={dataGridCircle} options={optionsGridCircle} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
