"use client"

import { Car, Clock, MapPin, Phone, Star, Users, Plane, PawPrint, Waves } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function HomePage() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    dni: "",
    lugarInicio: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmitRegistro = () => {
    const mensaje = `Hola! Soy ${formData.nombre} ${formData.apellido}. Mi teléfono es ${formData.telefono}. DNI: ${formData.dni || "No aplica"}. Mis viajes usuales parten desde ${formData.lugarInicio}. Quisiera recibir información sobre los servicios de CoCo Transporte.`
    const mensajeEncoded = encodeURIComponent(mensaje)
    const whatsappLink = `https://wa.me/541160118606?text=${mensajeEncoded}`
    window.open(whatsappLink, "_blank")
  }

  const whatsappMessage = encodeURIComponent(
    "Hola! Soy [Tu nombre]. Necesito transporte desde _________ hasta _________. Viajaremos [cantidad] personas. Observaciones: [mascotas/bebés/niños/sillita/equipaje]. ¿Disponibilidad y valor?",
  )
  const whatsappLink = `https://wa.me/541160118606?text=${whatsappMessage}`

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-cyan-600" />
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">CoCo Transporte</h1>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-cyan-600 hover:bg-cyan-700">
                <Phone className="h-4 w-4 mr-2" />
                Contactar
              </Button>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Transporte de Pasajeros y Mascotas</h2>
              <p className="text-lg md:text-xl text-gray-600 mb-4">
                Servicio profesional y confiable para vos y tu familia, ¡incluyendo a tus mascotas! Viajá cómodo a
                cualquier destino.
              </p>
              <p className="text-base text-gray-700 mb-8 font-medium">
                🚗 Viajá en un <span className="text-cyan-600 font-bold">Fiat Cronos 2025</span> - Confort, seguridad y
                espacio para toda la familia
              </p>
              <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <PawPrint className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-medium">Pet Friendly</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Plane className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-medium">Aeropuertos</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Waves className="h-5 w-5 text-cyan-600" />
                  <span className="text-sm font-medium">Costa Atlántica</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700 w-full sm:w-auto">
                    Solicitar Viaje
                  </Button>
                </a>
                <Button size="lg" variant="outline">
                  Ver Servicios
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/fiat-cronos-exterior.jpg"
                alt="Fiat Cronos 2025 - Servicio de transporte CoCo"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Car className="h-5 w-5 text-cyan-600" />
                  <span className="font-semibold">Fiat Cronos 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-12 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Costa */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Waves className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Ofertas a la Costa</h3>
              </div>
              <p className="text-lg mb-4 opacity-90">
                Viajes especiales a Mar del Plata, Pinamar, Villa Gesell y toda la Costa Atlántica. ¡Consultá nuestras
                tarifas!
              </p>
              <ul className="space-y-2 opacity-90 mb-4">
                <li>🏖️ Mar del Plata</li>
                <li>🏖️ Pinamar</li>
                <li>🏖️ Villa Gesell</li>
                <li>🏖️ Cariló</li>
              </ul>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Consultar Tarifa
                </Button>
              </a>
            </div>

            {/* Aeropuertos */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Plane className="h-8 w-8" />
                <h3 className="text-2xl font-bold">Traslados a Aeropuertos</h3>
              </div>
              <p className="text-lg mb-4 opacity-90">
                Servicio puerta a puerta hacia todos los aeropuertos. Puntualidad garantizada para que no pierdas tu
                vuelo.
              </p>
              <ul className="space-y-2 opacity-90 mb-4">
                <li>✈️ Ezeiza (EZE)</li>
                <li>✈️ Aeroparque (AEP)</li>
                <li>✈️ Servicio 24/7</li>
                <li>✈️ Seguimiento de vuelos</li>
              </ul>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100">
                  Reservar Ahora
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">Registrate con Nosotros</h3>
            <p className="text-center text-gray-600 mb-12">
              Completa tus datos para recibir información sobre nuestros servicios
            </p>

            <Card>
              <CardContent className="pt-8">
                <form className="space-y-6">
                  {/* Nombre y Apellido */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Nombre</label>
                      <Input
                        type="text"
                        name="nombre"
                        placeholder="Tu nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Apellido</label>
                      <Input
                        type="text"
                        name="apellido"
                        placeholder="Tu apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Número de Teléfono</label>
                    <Input
                      type="tel"
                      name="telefono"
                      placeholder="11 2345-6789"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>

                  {/* DNI */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      DNI (Opcional - Para facturación)
                    </label>
                    <Input
                      type="text"
                      name="dni"
                      placeholder="12.345.678"
                      value={formData.dni}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                    <p className="text-xs text-gray-500 mt-1">Completa solo si necesitas factura</p>
                  </div>

                  {/* Lugar frecuente de inicio */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Lugar Frecuente de Inicio de Viajes
                    </label>
                    <Input
                      type="text"
                      name="lugarInicio"
                      placeholder="Ej: Villa Urquiza, Centro, Barracas"
                      value={formData.lugarInicio}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  </div>

                  {/* Botón Submit */}
                  <Button
                    type="button"
                    onClick={handleSubmitRegistro}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 rounded-lg"
                  >
                    Enviar Registro por WhatsApp
                  </Button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Al registrarte recibirás información sobre nuestros servicios y ofertas especiales
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Corta Distancia */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Corta Distancia</CardTitle>
                <CardDescription>Hasta 50 km</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <img
                    src="/images/city-night.jpg"
                    alt="Transporte urbano de corta distancia"
                    className="rounded-lg w-full h-32 object-cover mb-4"
                  />
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Traslados urbanos</li>
                  <li>• Aeropuerto - Hotel</li>
                  <li>• Compras y diligencias</li>
                  <li>• Con o sin mascotas</li>
                </ul>
                <div className="text-2xl font-bold text-green-600 mb-4">Consultar</div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Solicitar</Button>
              </CardContent>
            </Card>

            {/* Media Distancia */}
            <Card className="hover:shadow-lg transition-shadow border-cyan-200">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-cyan-100 rounded-full w-fit">
                  <Clock className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Media Distancia</CardTitle>
                <CardDescription>50 - 200 km</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <img
                    src="/images/family-transport.jpg"
                    alt="Transporte familiar media distancia"
                    className="rounded-lg w-full h-32 object-cover mb-4"
                  />
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Ciudades cercanas</li>
                  <li>• Eventos especiales</li>
                  <li>• Turismo regional</li>
                  <li>• Viajes familiares</li>
                </ul>
                <div className="text-2xl font-bold text-cyan-600 mb-4">Consultar</div>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Solicitar</Button>
              </CardContent>
            </Card>

            {/* Larga Distancia */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Car className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">Larga Distancia</CardTitle>
                <CardDescription>Más de 200 km</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-4">
                  <img
                    src="/images/highway-sunset.jpg"
                    alt="Viajes de larga distancia"
                    className="rounded-lg w-full h-32 object-cover mb-4"
                  />
                </div>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>• Viajes a la costa</li>
                  <li>• Turismo nacional</li>
                  <li>• Traslados interprovinciales</li>
                  <li>• Viajes especiales</li>
                </ul>
                <div className="text-2xl font-bold text-blue-600 mb-4">Consultar</div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Cotizar</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4">Nuestro Fiat Cronos 2025</h3>
          <p className="text-center text-gray-600 mb-12">Conocé el vehículo en el que viajás con CoCo Transporte</p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/fiat-cronos-exterior.jpg"
                alt="Fiat Cronos 2025 exterior"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg flex items-center">
                  <Car className="h-5 w-5 mr-2" />
                  Fiat Cronos 2025
                </h4>
                <p className="text-white/90 text-sm">Moderno y confiable</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/fiat-cronos-interior.jpg"
                alt="Interior espacioso del Fiat Cronos 2025"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Interior Confortable
                </h4>
                <p className="text-white/90 text-sm">Espacio y comodidad</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/fiat-cronos-trunk.jpg"
                alt="Baúl amplio del Fiat Cronos 2025"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Amplio Baúl
                </h4>
                <p className="text-white/90 text-sm">Espacio para equipaje</p>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8 mt-12">Galería de Servicios</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/pet-friendly.jpg"
                alt="Transporte pet-friendly, viajá con tu mascota"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg flex items-center">
                  <PawPrint className="h-5 w-5 mr-2" />
                  Pet Friendly
                </h4>
                <p className="text-white/90 text-sm">Viajá con tu mascota</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/comfort-interior.jpg"
                alt="Interior cómodo y espacioso"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Máximo Confort
                </h4>
                <p className="text-white/90 text-sm">Vehículos espaciosos</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/coastal-trip.jpg"
                alt="Viajes especiales a la costa"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg flex items-center">
                  <Waves className="h-5 w-5 mr-2" />
                  Viajes a la Costa
                </h4>
                <p className="text-white/90 text-sm">Tarifas especiales</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/business-travel.jpg"
                alt="Transporte ejecutivo y de negocios"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Viajes de Negocios
                </h4>
                <p className="text-white/90 text-sm">Profesional y puntual</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/airport-service.jpg"
                alt="Servicio a aeropuertos 24/7"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg flex items-center">
                  <Plane className="h-5 w-5 mr-2" />
                  Aeropuertos 24/7
                </h4>
                <p className="text-white/90 text-sm">Servicio todo el día</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg">
              <img
                src="/images/safe-drive.jpg"
                alt="Conductores profesionales y seguros"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg flex items-center">
                  <Star className="h-5 w-5 mr-2" />
                  Conductores Expertos
                </h4>
                <p className="text-white/90 text-sm">Seguridad garantizada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-cyan-100 rounded-full w-fit">
                <PawPrint className="h-8 w-8 text-cyan-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Pet Friendly</h4>
              <p className="text-gray-600 text-sm">Tus mascotas viajan seguras y cómodas</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-fit">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Puntualidad</h4>
              <p className="text-gray-600 text-sm">Siempre a tiempo para tu comodidad</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                <Waves className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Ofertas Costa</h4>
              <p className="text-gray-600 text-sm">Tarifas especiales a playas</p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Servicio Completo</h4>
              <p className="text-gray-600 text-sm">Atención personalizada 24/7</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">¿Listo para tu próximo viaje?</h3>
          <p className="text-lg mb-8 opacity-90">
            Contáctanos por WhatsApp y reservá tu viaje. ¡Viajá cómodo con tus seres queridos y mascotas!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="text-lg font-semibold">11 6011-8606</span>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="lg" variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Escribinos por WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Bubble */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 group">
        <div className="relative">
          {/* Bubble with animation */}
          <div className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center cursor-pointer transform hover:scale-110">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </div>

          {/* Tooltip on hover */}
          <div className="absolute bottom-full right-0 mb-3 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            ¿Necesitas un viaje?
            <div className="absolute top-full right-3 border-4 border-transparent border-t-gray-800"></div>
          </div>
        </div>
      </a>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-6 w-6 text-cyan-400" />
                <h4 className="font-bold text-xl">CoCo Transporte</h4>
              </div>
              <p className="text-gray-400 text-sm">
                Transporte de pasajeros y mascotas. Viajes a la costa, aeropuertos y todo el país.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>🐾 Transporte con Mascotas</li>
                <li>✈️ Traslados a Aeropuertos</li>
                <li>🏖️ Viajes a la Costa</li>
                <li>🚗 Corta, Media y Larga Distancia</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📱 WhatsApp: 11 6011-8606</p>
                <p>📧 info@cocotransporte.com</p>
                <p>🕒 Disponible 24/7</p>
                <p>📍 CABA y Zona Sur</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 CoCo Transporte. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
