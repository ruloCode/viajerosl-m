"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, MapPin, Check, Star } from "lucide-react"
import BookingModal from "./booking-modal"

export default function Packages() {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  const packages = [
    {
      id: 1,
      name: "Escapada a Juanchaco",
      subtitle: "Relax y Naturaleza",
      duration: "3 días / 2 noches",
      price: 450000,
      originalPrice: 550000,
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg?height=250&width=400",
      badge: "Más Popular",
      badgeColor: "bg-orange-500",
      includes: [
        "Transporte desde Buenaventura",
        "Alojamiento en cabaña frente al mar",
        "Todas las comidas",
        "Tour de avistamiento de ballenas incluido",
        "Tour de manglares en lancha",
        "Cata de viche en Museo Vivo",
        "Actividades acuáticas",
        "Guía local especializado",
      ],
      highlights: ["Playa privada", "Avistamiento garantizado", "Gastronomía local"],
    },
    {
      id: 2,
      name: "Aventura en Bahía Málaga",
      subtitle: "Ecoturismo Premium",
      duration: "4 días / 3 noches",
      price: 680000,
      originalPrice: 780000,
      rating: 5.0,
      reviews: 89,
      image: "/placeholder.svg?height=250&width=400",
      badge: "Recomendado",
      badgeColor: "bg-teal-600",
      includes: [
        "Transporte aéreo y marítimo",
        "Hospedaje en ecolodge",
        "Pensión completa",
        "Buceo con snorkel",
        "Caminatas ecológicas",
        "Observación de fauna",
        "Seguro de viaje",
      ],
      highlights: ["Biodiversidad única", "Experiencia premium", "Grupos pequeños"],
    },
    {
      id: 3,
      name: "Inmersión Cultural",
      subtitle: "Turismo Comunitario",
      duration: "5 días / 4 noches",
      price: 520000,
      originalPrice: 620000,
      rating: 4.8,
      reviews: 156,
      image: "/placeholder.svg?height=250&width=400",
      badge: "Auténtico",
      badgeColor: "bg-green-600",
      includes: [
        "Estadía con familias locales",
        "Talleres de artesanías",
        "Clases de cocina tradicional",
        "Participación en festivales",
        "Intercambio cultural",
        "Productos artesanales incluidos",
      ],
      highlights: ["Experiencia auténtica", "Apoyo comunitario", "Intercambio cultural"],
    },
  ]

  const handleBooking = (packageData) => {
    setSelectedPackage(packageData)
    setIsBookingOpen(true)
  }

  return (
    <section id="paquetes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Paquetes Completos de
            <span className="text-brand-turquoise"> Múltiples Días </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experiencias completas de varios días que combinan múltiples tours, alojamiento y todas las comodidades para
            una aventura inolvidable en el Pacífico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card
              key={pkg.id}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
            >
              {/* Imagen y badge */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <Badge className={`absolute top-4 left-4 ${pkg.badgeColor} text-white`}>{pkg.badge}</Badge>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-brand-yellow mr-1" />
                    <span className="font-semibold text-sm">{pkg.rating}</span>
                    <span className="text-gray-500 text-xs ml-1">({pkg.reviews})</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-bold text-gray-900">{pkg.name}</CardTitle>
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                </div>
                <p className="text-teal-600 font-medium">{pkg.subtitle}</p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Precio */}
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-brand-blue">${pkg.price.toLocaleString()}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">
                      ${pkg.originalPrice.toLocaleString()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">Por persona</p>
                </div>

                {/* Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-brand-turquoise/10 text-brand-turquoise px-2 py-1 rounded-full text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Incluye */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Incluye:</h4>
                  <ul className="space-y-1">
                    {pkg.includes.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <Check className="h-4 w-4 text-brand-turquoise mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                    {pkg.includes.length > 4 && (
                      <li className="text-sm text-brand-turquoise font-medium">
                        +{pkg.includes.length - 4} servicios más
                      </li>
                    )}
                  </ul>
                </div>

                {/* Botones */}
                <div className="space-y-2">
                  <Button
                    className="w-full bg-brand-turquoise hover:bg-teal-700 text-white"
                    onClick={() => window.open(`https://wa.me/573215801141?text=¡Hola! Me interesa el paquete "${pkg.name}" por ${pkg.duration}. ¿Podrían darme más información?`, '_blank')}
                  >
                    <Users className="mr-2 h-4 w-4" />
                    Reservar Ahora
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full text-brand-turquoise border-brand-turquoise hover:bg-brand-turquoise/10"
                    onClick={() => window.open(`https://wa.me/573215801141?text=¡Hola! Quisiera conocer más detalles sobre el paquete "${pkg.name}". ¿Podrían ayudarme?`, '_blank')}
                  >
                    <MapPin className="mr-2 h-4 w-4" />
                    Ver Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-16 bg-brand-turquoise/5 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">¿Necesitas algo personalizado?</h3>
            <p className="text-brand-blue mb-6 max-w-2xl mx-auto">
              Creamos experiencias únicas adaptadas a tus necesidades. Grupos familiares, celebraciones especiales,
              viajes corporativos y más.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-brand-turquoise border-brand-turquoise hover:bg-brand-turquoise/10"
              onClick={() => window.open('https://wa.me/573215801141?text=¡Hola! Me gustaría solicitar una cotización personalizada para un viaje al Pacífico colombiano. ¿Podrían ayudarme?', '_blank')}
            >
              Solicitar Cotización Personalizada
            </Button>
          </div>
        </div>
      </div>

      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} packageData={selectedPackage} />
    </section>
  )
}
