"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Waves,
  Bird,
  Mountain,
  Sparkles,
  Users,
  MapPin,
  Clock,
  Info,
  SailboatIcon as Kayak,
  TelescopeIcon as Binoculars,
  TreePine,
  Wine,
  Bug,
  Phone,
} from "lucide-react"

export default function BahiaMalagaTours() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const tours = [
    {
      id: 1,
      name: "Tour Manglares en Lancha a Remo",
      price: 50000,
      description:
        "Explora los manglares de Bahía Málaga en una experiencia tranquila y ecológica. Observa la biodiversidad única de este ecosistema.",
      duration: "3-4 horas",
      difficulty: "Fácil",
      category: "Ecoturismo",
      icon: Waves,
      highlights: ["Ecosistema de manglar", "Fauna local", "Experiencia relajante"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: "Tour Manglares en Kayak",
      price: 70000,
      description:
        "Aventura activa remando por los canales de manglar. Perfecta para los amantes del deporte y la naturaleza.",
      duration: "4-5 horas",
      difficulty: "Moderada",
      category: "Aventura",
      icon: Kayak,
      highlights: ["Ejercicio y naturaleza", "Canales secretos", "Fotografía única"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: "Tour Avistamiento de Plancton Luminoso",
      price: 45000,
      description:
        "Experiencia nocturna mágica observando el fenómeno natural de bioluminiscencia en las aguas del Pacífico.",
      duration: "2-3 horas",
      difficulty: "Fácil",
      category: "Nocturno",
      icon: Sparkles,
      highlights: ["Fenómeno natural único", "Tour nocturno", "Experiencia mágica"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      name: "Tour 2 Cascadas + 2 Playas",
      price: 110000,
      description:
        "Tour completo visitando cascadas La Sierpe y Tres Marías, más las playas Ostional/Juan de Dios y Chucheros.",
      duration: "8-10 horas",
      difficulty: "Moderada",
      category: "Completo",
      icon: Mountain,
      highlights: ["4 destinos en 1 día", "Cascadas y playas", "Tour completo"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 5,
      name: "Tour Avistamiento de Aves",
      price: 60000,
      description: "Descubre la increíble diversidad de aves del Pacífico con guías especializados en ornitología.",
      duration: "4-6 horas",
      difficulty: "Fácil",
      category: "Fauna",
      icon: Bird,
      highlights: ["Más de 50 especies", "Guías especializados", "Binoculares incluidos"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 6,
      name: "Tour Avistamiento de Ballenas",
      price: 90000,
      description:
        "Experiencia única observando ballenas jorobadas en su hábitat natural durante la temporada de reproducción.",
      duration: "4-5 horas",
      difficulty: "Fácil",
      category: "Fauna",
      icon: Waves,
      highlights: ["Ballenas jorobadas", "Temporada jul-nov", "Experiencia única"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 7,
      name: "Tour Avistamiento de Ballenas y Aves",
      price: 110000,
      description: "Combinación perfecta para los amantes de la fauna marina y terrestre. Dos experiencias en una.",
      duration: "6-8 horas",
      difficulty: "Fácil",
      category: "Fauna",
      icon: Binoculars,
      highlights: ["Ballenas y aves", "Tour combinado", "Máximo avistamiento"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 8,
      name: "Clases de Surf Individual",
      price: 120000,
      description: "Aprende a surfear con instructor personalizado en las mejores olas del Pacífico colombiano.",
      duration: "2-3 horas",
      difficulty: "Principiante",
      category: "Deportes",
      icon: Waves,
      highlights: ["Instructor personal", "Equipo incluido", "Todos los niveles"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 9,
      name: "Clases de Surf Grupal",
      price: 100000,
      description: "Clases de surf en grupo para compartir la experiencia con otros aventureros.",
      duration: "2-3 horas",
      difficulty: "Principiante",
      category: "Deportes",
      icon: Users,
      highlights: ["Clases grupales", "Ambiente divertido", "Equipo incluido"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 10,
      name: "Avistamiento de Arañas y Ranas Venenosas",
      price: 80000,
      description: "Tour especializado para observar la fauna más exótica del bosque tropical húmedo.",
      duration: "3-4 horas",
      difficulty: "Moderada",
      category: "Fauna",
      icon: Bug,
      highlights: ["Fauna exótica", "Guía especializado", "Seguridad garantizada"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 11,
      name: "Caminata Ecológica Bosque Los Acantilados",
      price: 55000,
      description: "Senderismo por uno de los bosques más conservados de la región con vistas espectaculares.",
      duration: "4-5 horas",
      difficulty: "Moderada",
      category: "Ecoturismo",
      icon: TreePine,
      highlights: ["Bosque primario", "Vistas panorámicas", "Flora endémica"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 12,
      name: "Cata de Viche - 10 Bebidas",
      price: 30000,
      description: "Degustación cultural de viche, la bebida tradicional del Pacífico, en el Museo Vivo.",
      duration: "1-2 horas",
      difficulty: "Fácil",
      category: "Cultural",
      icon: Wine,
      highlights: ["10 variedades", "Experiencia cultural", "Museo Vivo"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 13,
      name: "Cata de Viche - 24 Bebidas",
      price: 50000,
      description: "Experiencia completa de degustación con 24 variedades de viche y explicación cultural detallada.",
      duration: "2-3 horas",
      difficulty: "Fácil",
      category: "Cultural",
      icon: Wine,
      highlights: ["24 variedades", "Experiencia premium", "Historia y cultura"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const categories = ["Todos", "Ecoturismo", "Aventura", "Fauna", "Deportes", "Cultural", "Nocturno", "Completo"]

  const filteredTours =
    selectedCategory === "Todos" ? tours : tours.filter((tour) => tour.category === selectedCategory)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return "bg-green-100 text-green-700"
      case "Moderada":
        return "bg-yellow-100 text-yellow-700"
      case "Principiante":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Tours Especializados en
            <span className="text-brand-turquoise"> Bahía Málaga</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Descubre la biodiversidad única de Bahía Málaga con nuestros tours especializados. Cada experiencia está
            diseñada para conectarte con la naturaleza y la cultura del Pacífico.
          </p>

          {/* Información importante */}
          <div className="bg-brand-yellow/10 border border-brand-yellow/30 rounded-lg p-6 max-w-4xl mx-auto">
            <div className="flex items-start">
              <Info className="h-6 w-6 text-brand-coral mr-3 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-brand-coral mb-2">Información Importante</h3>
                <ul className="text-brand-blue space-y-1 text-sm">
                  <li>
                    • <strong>Precios por persona</strong> - No incluyen traslados desde Ladrilleros o La Barra
                  </li>
                  <li>
                    • <strong>Punto de partida:</strong> Muelle de Juanchaco
                  </li>
                  <li>
                    • <strong>Reservas:</strong> Se recomienda reservar con 24 horas de anticipación
                  </li>
                  <li>
                    • <strong>Temporada de ballenas:</strong> Julio a Noviembre (mejor época)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-brand-turquoise text-white hover:bg-teal-700"
                  : "bg-white text-brand-blue border-brand-turquoise hover:bg-brand-turquoise/10 hover:text-brand-turquoise hover:border-brand-turquoise"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Grid de tours */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTours.map((tour) => {
            const IconComponent = tour.icon
            return (
              <Card
                key={tour.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg bg-white"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.name}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className={`absolute top-3 left-3 ${getDifficultyColor(tour.difficulty)}`}>
                    {tour.difficulty}
                  </Badge>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-5 w-5 text-brand-turquoise" />
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-brand-turquoise border-brand-turquoise text-xs">
                      {tour.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {tour.duration}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition-colors">
                    {tour.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tour.description}</p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {tour.highlights.map((highlight, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Precio */}
                  <div className="mb-4">
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-brand-turquoise">${tour.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 ml-1">por persona</span>
                    </div>
                  </div>

                  {/* Botones */}
                  <div className="space-y-2">
                    <Button className="w-full bg-brand-turquoise hover:bg-teal-700 text-white text-sm">
                      <MapPin className="mr-2 h-4 w-4" />
                      Reservar Tour
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-brand-turquoise border-brand-turquoise hover:bg-brand-turquoise/10 text-sm"
                    >
                      Más Información
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Información adicional */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center bg-white rounded-lg p-6 shadow-lg">
            <MapPin className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Punto de Encuentro</h3>
            <p className="text-gray-600">Muelle de Juanchaco - Todos los tours inician aquí</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-lg">
            <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Horarios Flexibles</h3>
            <p className="text-gray-600">Tours disponibles según condiciones climáticas y mareas</p>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-lg">
            <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Grupos Pequeños</h3>
            <p className="text-gray-600">Máximo 8 personas por tour para mejor experiencia</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-brand-turquoise rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">¿Listo para tu Aventura en Bahía Málaga?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Contacta con nuestros expertos para personalizar tu experiencia y crear el itinerario perfecto según tus
              intereses y tiempo disponible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-brand-turquoise hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                <MapPin className="mr-2 h-5 w-5" />
                Ver Ubicación
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
