"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin, Send } from "lucide-react"

export default function Footer() {
  const destinations = ["Juanchaco", "Bahía Málaga", "Ladrilleros", "Isla Gorgona", "Nuquí", "El Valle"]

  const services = [
    "Paquetes Turísticos",
    "Tours Personalizados",
    "Turismo Comunitario",
    "Ecoturismo",
    "Avistamiento de Ballenas",
    "Buceo y Snorkel",
  ]

  const company = ["Sobre Nosotros", "Nuestro Equipo", "Testimonios", "Blog", "Trabaja con Nosotros", "Sostenibilidad"]

  const legal = ["Términos y Condiciones", "Política de Privacidad", "Política de Cancelación", "Preguntas Frecuentes"]

  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      {/* Sección principal del footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Información de la empresa */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo.png"
                alt="Viajeros L&M"
                width={150}
                height={75}
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Somos especialistas en turismo del Pacífico colombiano. Creamos experiencias únicas que conectan a
              nuestros viajeros con la naturaleza, la cultura y las tradiciones de esta región mágica.
            </p>

            {/* Información de contacto */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-brand-turquoise mr-3" />
                <span>+573215801141</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-brand-turquoise mr-3" />
                <span>viajeroslym@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-brand-turquoise mr-3 mt-1" />
                <span>
                  Calle 15 #8-45, Buenaventura
                  <br />
                  Valle del Cauca, Colombia
                </span>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="flex space-x-4">
              <Link href="#" className="bg-brand-turquoise hover:bg-teal-700 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="bg-brand-turquoise hover:bg-teal-700 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="bg-brand-turquoise hover:bg-teal-700 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="bg-brand-turquoise hover:bg-teal-700 p-2 rounded-full transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          {/* Destinos */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-coral">Destinos</h3>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination}>
                  <Link href="#" className="text-gray-300 hover:text-brand-turquoise transition-colors">
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-coral">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-300 hover:text-brand-turquoise transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-brand-coral">Empresa</h3>
            <ul className="space-y-2 mb-6">
              {company.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-300 hover:text-brand-turquoise transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3 text-brand-turquoise">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-3">Recibe ofertas especiales y noticias del Pacífico</p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Tu email"
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 rounded-r-none focus:border-teal-400"
                />
                <Button className="bg-brand-turquoise hover:bg-teal-700 rounded-l-none">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de certificaciones y reconocimientos */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-2 text-brand-turquoise">Certificaciones</h4>
              <p className="text-gray-400 text-sm">
                Registro Nacional de Turismo • Certificación en Turismo Sostenible
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2 text-brand-coral">Reconocimientos</h4>
              <p className="text-gray-400 text-sm">Mejor Agencia de Ecoturismo 2023 • Premio Excelencia TripAdvisor</p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold mb-2 text-brand-turquoise">Aliados</h4>
              <p className="text-gray-400 text-sm">Parques Nacionales • Comunidades Locales • ANATO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Viajeros L&M. Todos los derechos reservados.
            </div>
            <div className="flex flex-wrap gap-6">
              {legal.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-gray-400 hover:text-brand-turquoise text-sm transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg"
          aria-label="Contactar por WhatsApp"
          onClick={() => window.open('https://wa.me/573215801141?text=¡Hola! Me gustaría información sobre los tours al Pacífico colombiano.', '_blank')}
        >
          <Phone className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  )
}
