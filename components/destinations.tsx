import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"

export default function Destinations() {
  const destinations = [
    {
      name: "Juanchaco",
      description:
        "Playa paradisíaca con aguas cristalinas y arena negra volcánica. Perfecto para relajarse y disfrutar de la naturaleza.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "2-3 días",
      rating: 4.9,
      highlights: ["Playa virgen", "Avistamiento de ballenas", "Gastronomía local"],
    },
    {
      name: "Bahía Málaga",
      description:
        "Santuario natural donde las ballenas jorobadas llegan a reproducirse. Una experiencia única e inolvidable.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "3-4 días",
      rating: 5.0,
      highlights: ["Ballenas jorobadas", "Biodiversidad marina", "Ecoturismo"],
    },
    {
      name: "Ladrilleros",
      description: "Comunidad afrodescendiente con rica cultura y tradiciones. Ideal para el turismo comunitario.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "2-3 días",
      rating: 4.8,
      highlights: ["Cultura afrocolombiana", "Artesanías", "Música tradicional"],
    },
    {
      name: "Isla Gorgona",
      description:
        "Parque Nacional Natural con increíble biodiversidad marina y terrestre. Paraíso para los amantes del buceo.",
      image: "/placeholder.svg?height=300&width=400",
      duration: "4-5 días",
      rating: 4.9,
      highlights: ["Buceo", "Fauna endémica", "Investigación marina"],
    },
  ]

  return (
    <section id="destinos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Destinos que te
            <span className="text-brand-turquoise"> Enamorarán</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora los rincones más hermosos del Pacífico colombiano, donde la naturaleza y la cultura se encuentran
            para crear experiencias únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Star className="h-4 w-4 text-brand-yellow mr-1" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{destination.name}</h3>
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{destination.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-brand-turquoise/10 text-brand-turquoise px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-brand-turquoise hover:bg-teal-700 text-white">
                  <MapPin className="mr-2 h-4 w-4" />
                  Explorar Destino
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-brand-turquoise border-brand-turquoise hover:bg-teal-50"
          >
            Ver Todos los Destinos
          </Button>
        </div>
      </div>
    </section>
  )
}
