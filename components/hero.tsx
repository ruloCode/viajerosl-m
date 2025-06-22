"use client"

import { Button } from "@/components/ui/button"
import { Play, MapPin, Users, Calendar } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-video-bg {
            transform: scale(2) translateY(-10%);
          }
        }
        @media (orientation: portrait) and (max-width: 768px) {
          .mobile-video-bg {
            transform: scale(2.5) translateY(-5%);
          }
        }
      `}</style>
      {/* Video de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/AdJ8bIyYxnc?si=jvFep7DT58IPrWnE&autoplay=1&mute=1&loop=1&playlist=AdJ8bIyYxnc&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&start=6"
            title="Pacífico Colombiano Background"
            className="absolute inset-0 w-full h-full object-cover scale-150 md:scale-125 blur-sm mobile-video-bg"
            style={{
              minWidth: '100%',
              minHeight: '100%',
              width: '200%',
              height: '200%',
              left: '-50%',
              top: '-50%'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
          />
        </div>
        <div className="absolute inset-0 bg-black/70 md:bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80 md:from-black/20 md:via-black/50 md:to-black/70"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            Descubre la
            <span className="text-brand-turquoise drop-shadow-lg"> Magia del Pacífico </span>
            Colombiano
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto drop-shadow-lg font-medium">
            Vive experiencias únicas en Juanchaco, Bahía Málaga y los destinos más espectaculares del Pacífico. Cultura,
            naturaleza y aventura te esperan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-brand-coral hover:bg-orange-600 text-white px-8 py-4 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Reservar Ahora
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 border-white text-white hover:bg-white/20 px-8 py-4 text-lg"
              onClick={() => setShowVideo(true)}
            >
              <Play className="mr-2 h-5 w-5" />
              Ver Video del Pacífico
            </Button>
          </div>

          {/* Estadísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-8 w-8 text-brand-turquoise mr-2 drop-shadow-lg" />
                <span className="text-3xl font-bold drop-shadow-lg">15+</span>
              </div>
              <p className="text-gray-100 font-medium">Destinos Únicos</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8 text-brand-coral mr-2 drop-shadow-lg" />
                <span className="text-3xl font-bold drop-shadow-lg">2000+</span>
              </div>
              <p className="text-gray-100 font-medium">Viajeros Felices</p>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-8 w-8 text-brand-turquoise mr-2 drop-shadow-lg" />
                <span className="text-3xl font-bold drop-shadow-lg">8</span>
              </div>
              <p className="text-gray-100 font-medium">Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal del video */}
      {showVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setShowVideo(false)}
        >
          <div className="relative w-full max-w-4xl mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
            >
              ✕ Cerrar
            </button>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src="https://www.youtube.com/embed/AdJ8bIyYxnc?si=jvFep7DT58IPrWnE&autoplay=1&start=6"
                title="Pacífico Colombiano - Viajeros L&M"
                className="absolute inset-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Indicador de scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}
