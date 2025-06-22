import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react"
import Image from "next/image"

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Mejor época para avistar ballenas en el Pacífico colombiano",
      excerpt:
        "Descubre cuándo es el momento perfecto para presenciar el espectáculo natural más impresionante del Pacífico: la llegada de las ballenas jorobadas.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Fauna Marina",
      date: "15 de Marzo, 2024",
      readTime: "5 min",
      views: 1250,
      featured: true,
    },
    {
      id: 2,
      title: "Gastronomía del Pacífico: Sabores que conquistan",
      excerpt:
        "Un recorrido por los platos más representativos de la región, desde el pescado encocado hasta las frutas exóticas que solo encontrarás aquí.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Gastronomía",
      date: "10 de Marzo, 2024",
      readTime: "7 min",
      views: 890,
      featured: false,
    },
    {
      id: 3,
      title: "Tradiciones ancestrales: La música del Pacífico",
      excerpt:
        "Conoce los ritmos tradicionales como la chirimía y el currulao, expresiones culturales que mantienen viva la identidad de las comunidades afrodescendientes.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Cultura",
      date: "5 de Marzo, 2024",
      readTime: "6 min",
      views: 720,
      featured: false,
    },
    {
      id: 4,
      title: "Ecoturismo responsable en Bahía Málaga",
      excerpt:
        "Aprende cómo disfrutar de la naturaleza de manera sostenible y contribuir a la conservación de este ecosistema único.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Ecoturismo",
      date: "28 de Febrero, 2024",
      readTime: "8 min",
      views: 650,
      featured: false,
    },
    {
      id: 5,
      title: "Guía completa para tu primera visita a Juanchaco",
      excerpt:
        "Todo lo que necesitas saber para planificar tu viaje a este paraíso del Pacífico: qué llevar, qué esperar y cómo aprovechar al máximo tu estadía.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Guías de Viaje",
      date: "20 de Febrero, 2024",
      readTime: "10 min",
      views: 1100,
      featured: false,
    },
    {
      id: 6,
      title: "Artesanías del Pacífico: Arte que cuenta historias",
      excerpt:
        "Descubre el trabajo artesanal de las comunidades locales, desde los tejidos en werregue hasta las tallas en madera que reflejan la cosmovisión del Pacífico.",
      image: "/placeholder.svg?height=250&width=400",
      category: "Artesanías",
      date: "15 de Febrero, 2024",
      readTime: "5 min",
      views: 480,
      featured: false,
    },
  ]

  const categories = ["Todos", "Fauna Marina", "Gastronomía", "Cultura", "Ecoturismo", "Guías de Viaje", "Artesanías"]

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-blue mb-4">
            Descubre el
            <span className="text-brand-turquoise"> Pacífico </span>a Través de Nuestro Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias, consejos y secretos del Pacífico colombiano. Mantente informado sobre los mejores destinos,
            tradiciones culturales y experiencias únicas que te esperan.
          </p>
        </div>

        {/* Filtros de categorías */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="bg-white text-brand-blue border-brand-turquoise hover:bg-brand-turquoise/10 hover:text-brand-turquoise hover:border-brand-turquoise"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Post destacado */}
        {blogPosts
          .filter((post) => post.featured)
          .map((post) => (
            <Card key={post.id} className="mb-12 overflow-hidden shadow-xl border-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-brand-coral text-white">Destacado</Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="text-brand-turquoise border-brand-turquoise">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <Button className="bg-brand-turquoise hover:bg-teal-700 text-white">
                      Leer Artículo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views.toLocaleString()} vistas
                    </div>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}

        {/* Posts regulares */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts
            .filter((post) => !post.featured)
            .map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">{post.category}</Badge>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-teal-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-brand-turquoise border-brand-turquoise hover:bg-brand-turquoise/10"
                    >
                      Leer Más
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      {post.views}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Newsletter subscription */}
        <div className="mt-16 bg-brand-turquoise rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Mantente Conectado con el Pacífico</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe las últimas noticias, consejos de viaje y ofertas especiales
            directamente en tu correo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-white text-brand-turquoise hover:bg-gray-100 px-6 py-3">Suscribirse</Button>
          </div>
        </div>

        {/* Ver más artículos */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="bg-white text-brand-turquoise border-brand-turquoise hover:bg-brand-turquoise/10"
          >
            Ver Todos los Artículos
          </Button>
        </div>
      </div>
    </section>
  )
}
