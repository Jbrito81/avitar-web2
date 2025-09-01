import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold mb-3 text-[#2B3B8C]">AVITAR SOLUCIONES INMOBILIARIAS</h1>
        <p className="mb-6 text-lg text-gray-800 max-w-3xl">
          <span className="block text-2xl font-semibold text-gray-900">Bienvenidos a AVITAR</span>
          <span className="block mt-2">Encuentra propiedades en <span className="font-bold text-[#FF6B38]">arriendo</span> y <span className="font-bold text-[#10B981]">venta</span> — seleccionadas para ti.</span>
          <span className="inline-block mt-4 px-3 py-1 text-sm bg-green-50 text-green-800 rounded-full">📲 Contáctanos por WhatsApp</span>
        </p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link href="/arriendos" className="px-8 py-4 text-lg md:text-xl bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">Arriendos</Link>
          <Link href="/ventas" className="px-8 py-4 text-lg md:text-xl bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-colors">Ventas</Link>
          <Link href="/proyectos" className="px-8 py-4 text-lg md:text-xl bg-[#FF6B38] text-white rounded-lg shadow-lg hover:bg-[#e55a2d] transition-colors">Proyectos</Link>
          <Link href="/subsidios" className="px-8 py-4 text-lg md:text-xl bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition-colors">Subsidios</Link>
        </div>
      </main>
      <WhatsAppButton />
    </div>
  )
}