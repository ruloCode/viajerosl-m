"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "Destinos", href: "#destinos" },
    { name: "Cultura", href: "#cultura" },
    { name: "Paquetes", href: "#paquetes" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Blog", href: "#blog" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Barra superior de contacto */}
      <div className="bg-brand-turquoise text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+573215801141</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>viajeroslym@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>¡Descubre la magia del Pacífico colombiano!</span>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Viajeros L&M - Agencia de Viajes"
              width={120}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-brand-blue hover:text-brand-turquoise font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="bg-white text-brand-turquoise border-brand-turquoise hover:bg-teal-50"
              onClick={() => window.open('https://wa.me/573215801141?text=¡Hola! Me gustaría cotizar un viaje al Pacífico colombiano. ¿Podrían ayudarme?', '_blank')}
            >
              Cotizar Viaje
            </Button>
            <Button 
              className="bg-brand-coral hover:bg-orange-600 text-white"
              onClick={() => window.open('https://wa.me/573215801141?text=¡Hola! Me interesa reservar un tour al Pacífico colombiano. ¿Podrían ayudarme con información?', '_blank')}
            >
              Reservar Ahora
            </Button>
          </div>

          {/* Menú móvil */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-teal-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full bg-white text-brand-turquoise border-brand-turquoise"
                    onClick={() => window.open('https://wa.me/573215801141?text=¡Hola! Me gustaría cotizar un viaje al Pacífico colombiano. ¿Podrían ayudarme?', '_blank')}
                  >
                    Cotizar Viaje
                  </Button>
                  <Button 
                    className="w-full bg-brand-coral hover:bg-orange-600 text-white"
                    onClick={() => window.open('https://wa.me/573215801141?text=¡Hola! Me interesa reservar un tour al Pacífico colombiano. ¿Podrían ayudarme con información?', '_blank')}
                  >
                    Reservar Ahora
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
