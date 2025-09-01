import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function SubsidiosPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <a href="/" className="inline-block px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">Inicio</a>
        </div>
        <h1 className="text-4xl font-bold text-[#2B3B8C] mb-8 text-center">
          Subsidios de Vivienda Comfaguajira
        </h1>

        {/* Tabla de Valores 2025 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#2B3B8C] mb-4">
            Valores del Subsidio Familiar de Vivienda - Año 2025
          </h2>
          
          <div className="mb-6">
            <Image
              src="/images/subsidios/valores-subsidio-2025.png"
              alt="Tabla de valores del subsidio familiar de vivienda 2025"
              width={800}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Explicación de la tabla */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-[#2B3B8C] mb-3">Subsidio Urbano</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FF6B38] mr-2">•</span>
                  <span>
                    <strong>Ingresos 0-2 SMMLV:</strong> Subsidio de $42.705.000 (30 SMMLV)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B38] mr-2">•</span>
                  <span>
                    <strong>Ingresos 2-4 SMMLV:</strong> Subsidio de $28.470.000 (20 SMMLV)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B38] mr-2">•</span>
                  <span>
                    <strong>Mejoramiento de Vivienda:</strong> Subsidio de $25.623.000 (18 SMMLV)
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#2B3B8C] mb-3">Subsidio Rural</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#FF6B38] mr-2">•</span>
                  <span>
                    <strong>Adquisición y Construcción:</strong> $99.645.000 (70 SMMLV)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FF6B38] mr-2">•</span>
                  <span>
                    <strong>Mejoramiento de Vivienda:</strong> $31.317.000 (22 SMMLV)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tipos de Vivienda */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-[#2B3B8C] mb-3">Tipos de Vivienda</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Vivienda de Interés Social (VIS)</h4>
                <p>Valor máximo: $192.172.500 (135 SMMLV)</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Vivienda de Interés Prioritario (VIP)</h4>
                <p>Valor máximo: $128.115.000 (90 SMMLV)</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">
              * SMMLV 2025: $1.423.500
            </p>
          </div>
        </div>

        {/* Sección de Destinatarios */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#2B3B8C] mb-4 flex items-center">
            <span className="mr-2 text-[#FF6B38]">✔️</span>
            ¿Quiénes pueden aplicar?
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-[#FF6B38] mt-1 mr-2">✔️</span>
              <span>Familias colombianas de estratos 1, 2 y 3 (prioridad para estratos 1 y 2)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF6B38] mt-1 mr-2">✔️</span>
              <span>Hogares en condición de pobreza o vulnerabilidad</span>
            </li>
          </ul>
        </div>

        {/* Sección de Documentos */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#2B3B8C] mb-4 flex items-center">
            <span className="mr-2 text-[#FF6B38]">📄</span>
            Documentación Requerida
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-[#FF6B38] mt-1 mr-2">✔️</span>
              <span>Fotocopia de cédula de todos los integrantes del hogar</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF6B38] mt-1 mr-2">✔️</span>
              <span>Certificado de ingresos y declaración de renta (si aplica)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF6B38] mt-1 mr-2">✔️</span>
              <span>Certificado de estratificación</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF6B38] mt-1 mr-2">✔️</span>
              <span>Registro civil de conformación del hogar</span>
            </li>
          </ul>
        </div>

        {/* Tipos de Subsidio */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#2B3B8C] mb-3">Vivienda Nueva</h3>
            <p className="text-gray-600">Para adquisición o construcción de vivienda nueva.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#2B3B8C] mb-3">Mejoramiento</h3>
            <p className="text-gray-600">Para reparación o ampliación de vivienda existente.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-[#2B3B8C] mb-3">Arrendamiento</h3>
            <p className="text-gray-600">Apoyo para familias en situación de desplazamiento o vulnerabilidad.</p>
          </div>
        </div>

        {/* Restricciones */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-[#2B3B8C] mb-4 flex items-center">
            <span className="mr-2 text-[#FF6B38]">ℹ️</span>
            Restricciones Importantes
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-[#FF6B38] mt-1 mr-2">✔️</span>
              <span>No haber recibido antes un subsidio de vivienda estatal</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF6B38] mt-1 mr-2">✔️</span>
              <span>Cumplir con los topes de ingresos establecidos por el gobierno</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#FF6B38] mt-1 mr-2">✔️</span>
              <span>No ser propietario de otra vivienda en Colombia</span>
            </li>
          </ul>
        </div>

        {/* Proceso de Postulación */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-[#2B3B8C] mb-4">Proceso de Postulación</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2B3B8C] text-white rounded-full flex items-center justify-center mx-auto mb-3">1</div>
              <h3 className="font-semibold mb-2">Inscripción</h3>
              <p className="text-gray-600">A través de la página de Comfaguajira o en sus oficinas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2B3B8C] text-white rounded-full flex items-center justify-center mx-auto mb-3">2</div>
              <h3 className="font-semibold mb-2">Verificación</h3>
              <p className="text-gray-600">Evaluación socioeconómica y validación de documentos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2B3B8C] text-white rounded-full flex items-center justify-center mx-auto mb-3">3</div>
              <h3 className="font-semibold mb-2">Asignación</h3>
              <p className="text-gray-600">Priorización según puntaje Sisbén IV u otros criterios</p>
            </div>
          </div>
        </div>
      </div>
      <WhatsAppButton />
    </div>
  );
}
