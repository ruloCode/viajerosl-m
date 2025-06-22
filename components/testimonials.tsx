import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      location: "Bogotá, Colombia",
      rating: 5,
      text: "Increíble experiencia en Juanchaco. La atención de Viajeros L&M fue excepcional desde el primer momento. Ver las ballenas jorobadas fue algo mágico que nunca olvidaré. Definitivamente regresaremos.",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Escapada a Juanchaco",
    },
    {
      name: "Carlos Rodríguez",
      location: "Medellín, Colombia",
      rating: 5,
      text: "El paquete de inmersión cultural superó todas nuestras expectativas. Compartir con las comunidades locales, aprender sobre sus tradiciones y disfrutar de su gastronomía fue una experiencia transformadora.",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Inmersión Cultural",
    },
    {
      name: "Ana Martínez",
      location: "Cali, Colombia",
      rating: 5,
      text: "Bahía Málaga es un paraíso. La organización fue perfecta, el ecolodge espectacular y las actividades de buceo inolvidables. Los guías locales conocen cada rincón y comparten su amor por la región.",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Aventura en Bahía Málaga",
    },
    {
      name: "Luis Herrera",
      location: "Barranquilla, Colombia",
      rating: 5,
      text: "Viajamos en familia y fue perfecto para todos. Los niños disfrutaron muchísimo las actividades acuáticas y nosotros nos relajamos en un entorno natural único. Excelente relación calidad-precio.",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Escapada Familiar",
    },
    {
      name: "Patricia Silva",
      location: "Bucaramanga, Colombia",
      rating: 5,
      text: "Como fotógrafa, quedé fascinada con la biodiversidad del Pacífico. Cada amanecer y atardecer era una postal. El equipo de L&M me llevó a los mejores spots para capturar la esencia de la región.",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Tour Fotográfico",
    },
    {
      name: "Roberto Jiménez",
      location: "Cartagena, Colombia",
      rating: 5,
      text: "Celebramos nuestro aniversario en el Pacífico y fue mágico. La atención personalizada, las cenas románticas frente al mar y los paseos en lancha hicieron de este viaje algo muy especial.",
      image: "/placeholder.svg?height=80&width=80",
      trip: "Escapada Romántica",
    },
  ]

  return (
    <section id="testimonios" className="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Lo que Dicen
            <span className="text-brand-turquoise"> Nuestros Viajeros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 2,000 viajeros han confiado en nosotros para descubrir la magia del Pacífico colombiano. Sus
            experiencias hablan por sí solas.
          </p>
        </div>

        {/* Estadísticas de satisfacción */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-turquoise mb-2">4.9</div>
            <div className="flex justify-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-brand-yellow fill-current" />
              ))}
            </div>
            <p className="text-gray-600">Calificación promedio</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-coral mb-2">98%</div>
            <p className="text-gray-600">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-turquoise mb-2">85%</div>
            <p className="text-gray-600">Clientes que regresan</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-coral mb-2">2000+</div>
            <p className="text-gray-600">Viajeros felices</p>
          </div>
        </div>

        {/* Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                {/* Quote icon */}
                <Quote className="h-8 w-8 text-teal-600 mb-4 opacity-50" />

                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-brand-yellow fill-current" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Trip info */}
                <div className="mb-4">
                  <span className="bg-brand-turquoise/10 text-brand-turquoise px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.trip}
                  </span>
                </div>

                {/* Author info */}
                <div className="flex items-center">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-brand-blue mb-4">¿Listo para crear tu propia historia?</h3>
            <p className="text-brand-blue mb-6">
              Únete a miles de viajeros que han descubierto la magia del Pacífico colombiano con nosotros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-brand-turquoise hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Planear Mi Viaje
              </button>
              <button className="border-2 border-brand-turquoise text-brand-turquoise hover:bg-brand-turquoise/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Ver Más Testimonios
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
