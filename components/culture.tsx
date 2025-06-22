import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Music, Utensils, Palette, Heart } from "lucide-react"
import Image from "next/image"

export default function Culture() {
  const culturalAspects = [
    {
      icon: Music,
      title: "Música y Danza",
      description: "Ritmos ancestrales como la chirimía, currulao y marimba que llenan de vida cada celebración.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      icon: Utensils,
      title: "Gastronomía",
      description: "Sabores únicos del mar y la selva: pescado encocado, sancocho de pescado y frutas exóticas.",
      image: "/placeholder.svg?height=250&width=350",
    },
    {
      icon: Palette,
      title: "Artesanías",
      description: "Trabajos en madera, tejidos en werregue y joyería que reflejan la identidad del Pacífico.",
      image: "/placeholder.svg?height=250&width=350",
    },
  ]

  return (
    <section id="cultura" className="py-20 bg-brand-turquoise text-white relative overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-orange-300 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-teal-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Heart className="h-12 w-12 text-brand-coral mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold">
              La Magia de Nuestra
              <span className="text-brand-yellow"> Cultura</span>
            </h2>
          </div>
          <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
            El Pacífico colombiano es mucho más que paisajes espectaculares. Es el hogar de comunidades
            afrodescendientes e indígenas que han preservado tradiciones milenarias, creando una riqueza cultural
            incomparable que te tocará el alma.
          </p>
        </div>

        {/* Sección principal de cultura */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-brand-yellow">Tradiciones que Perduran</h3>
            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
              Cada rincón del Pacífico cuenta una historia. Desde los cantos de trabajo de los pescadores hasta las
              danzas ceremoniales que conectan con los ancestros, aquí la cultura vive y respira en cada momento.
            </p>
            <p className="text-lg text-gray-200 mb-8 leading-relaxed">
              Nuestros viajes te permiten ser parte de esta riqueza cultural, compartiendo con las comunidades locales y
              aprendiendo de sus saberes ancestrales en un intercambio auténtico y respetuoso.
            </p>
            <Button size="lg" className="bg-brand-coral hover:bg-orange-600 text-white">
              Conoce Nuestras Experiencias Culturales
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Cultura del Pacífico colombiano"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg">
              <p className="font-bold text-lg">8 Etnias</p>
              <p className="text-sm">Diferentes culturas</p>
            </div>
          </div>
        </div>

        {/* Aspectos culturales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {culturalAspects.map((aspect, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Image
                    src={aspect.image || "/placeholder.svg"}
                    alt={aspect.title}
                    width={350}
                    height={250}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  <aspect.icon className="h-12 w-12 text-brand-yellow mx-auto" />
                </div>
                <h4 className="text-xl font-bold mb-3">{aspect.title}</h4>
                <p className="text-gray-200 leading-relaxed">{aspect.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cita inspiradora */}
        <div className="text-center mt-16 bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <blockquote className="text-2xl md:text-3xl font-light italic text-brand-yellow mb-4">
            "En el Pacífico, cada ola trae una historia, cada canto lleva un mensaje ancestral, y cada sonrisa comparte
            la calidez de nuestra gente."
          </blockquote>
          <cite className="text-lg text-gray-300">- Sabiduría del Pacífico</cite>
        </div>
      </div>
    </section>
  )
}
