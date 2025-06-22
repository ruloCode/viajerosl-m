"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, CreditCard, User } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  packageData: any
}

export default function BookingModal({ isOpen, onClose, packageData }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Información del viaje
    startDate: null,
    endDate: null,
    adults: 2,
    children: 0,

    // Información personal
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    document: "",

    // Información adicional
    specialRequests: "",
    emergencyContact: "",
    emergencyPhone: "",
  })

  const totalPrice = packageData ? packageData.price * formData.adults : 0
  const childrenPrice = packageData ? packageData.price * 0.7 * formData.children : 0
  const finalTotal = totalPrice + childrenPrice

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = () => {
    // Aquí iría la lógica para procesar la reserva
    console.log("Datos de reserva:", formData)
    alert("¡Reserva enviada! Te contactaremos pronto para confirmar los detalles.")
    onClose()
    setStep(1)
  }

  if (!packageData) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Reservar: {packageData.name}</DialogTitle>
        </DialogHeader>

        {/* Indicador de pasos */}
        <div className="flex items-center justify-center mb-6">
          {[1, 2, 3].map((stepNumber) => (
            <div key={stepNumber} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step >= stepNumber ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < 3 && (
                <div className={`w-12 h-1 mx-2 ${step > stepNumber ? "bg-teal-600" : "bg-gray-200"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Paso 1: Información del viaje */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <CalendarIcon className="mr-2 h-5 w-5 text-teal-600" />
              Información del Viaje
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="startDate">Fecha de inicio</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.startDate ? format(formData.startDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.startDate}
                      onSelect={(date) => handleInputChange("startDate", date)}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <Label htmlFor="endDate">Fecha de fin</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start text-left font-normal">
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.endDate ? format(formData.endDate, "PPP", { locale: es }) : "Seleccionar fecha"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={formData.endDate}
                      onSelect={(date) => handleInputChange("endDate", date)}
                      disabled={(date) => date < formData.startDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="adults">Adultos</Label>
                <Select
                  value={formData.adults.toString()}
                  onValueChange={(value) => handleInputChange("adults", Number.parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} adulto{num > 1 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="children">Niños (2-12 años)</Label>
                <Select
                  value={formData.children.toString()}
                  onValueChange={(value) => handleInputChange("children", Number.parseInt(value))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[0, 1, 2, 3, 4].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} niño{num !== 1 ? "s" : ""}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Resumen de precio */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Resumen de Precio</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>
                    {formData.adults} adulto{formData.adults > 1 ? "s" : ""}
                  </span>
                  <span>${totalPrice.toLocaleString()}</span>
                </div>
                {formData.children > 0 && (
                  <div className="flex justify-between">
                    <span>
                      {formData.children} niño{formData.children > 1 ? "s" : ""} (30% desc.)
                    </span>
                    <span>${childrenPrice.toLocaleString()}</span>
                  </div>
                )}
                <div className="border-t pt-1 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${finalTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Paso 2: Información personal */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <User className="mr-2 h-5 w-5 text-teal-600" />
              Información Personal
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Nombres</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  placeholder="Ingresa tus nombres"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Apellidos</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  placeholder="Ingresa tus apellidos"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+57 300 123 4567"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="document">Número de documento</Label>
              <Input
                id="document"
                value={formData.document}
                onChange={(e) => handleInputChange("document", e.target.value)}
                placeholder="Cédula de ciudadanía"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="emergencyContact">Contacto de emergencia</Label>
                <Input
                  id="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                  placeholder="Nombre completo"
                />
              </div>
              <div>
                <Label htmlFor="emergencyPhone">Teléfono de emergencia</Label>
                <Input
                  id="emergencyPhone"
                  value={formData.emergencyPhone}
                  onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
                  placeholder="+57 300 123 4567"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="specialRequests">Solicitudes especiales</Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                placeholder="Alergias alimentarias, necesidades especiales, celebraciones, etc."
                rows={3}
              />
            </div>
          </div>
        )}

        {/* Paso 3: Confirmación y pago */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <CreditCard className="mr-2 h-5 w-5 text-teal-600" />
              Confirmación y Pago
            </h3>

            {/* Resumen de la reserva */}
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-4">Resumen de tu Reserva</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Paquete:</span>
                  <span>{packageData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Fechas:</span>
                  <span>
                    {formData.startDate && formData.endDate
                      ? `${format(formData.startDate, "dd/MM/yyyy")} - ${format(formData.endDate, "dd/MM/yyyy")}`
                      : "Por confirmar"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Viajeros:</span>
                  <span>
                    {formData.adults} adulto{formData.adults > 1 ? "s" : ""}
                    {formData.children > 0 ? `, ${formData.children} niño${formData.children > 1 ? "s" : ""}` : ""}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Contacto:</span>
                  <span>
                    {formData.firstName} {formData.lastName}
                  </span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Total a pagar:</span>
                  <span className="text-teal-600">${finalTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Información de pago */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Proceso de Pago</h4>
              <p className="text-sm text-yellow-700">
                Al confirmar tu reserva, uno de nuestros asesores se contactará contigo en las próximas 2 horas para
                coordinar el pago y finalizar todos los detalles de tu viaje.
              </p>
            </div>

            <div className="text-xs text-gray-500 space-y-1">
              <p>• Al confirmar aceptas nuestros términos y condiciones</p>
              <p>• Puedes cancelar sin costo hasta 48 horas antes del viaje</p>
              <p>• Todos los precios incluyen IVA</p>
            </div>
          </div>
        )}

        {/* Botones de navegación */}
        <div className="flex justify-between pt-6 border-t">
          <Button variant="outline" onClick={step === 1 ? onClose : handlePrevious} className="text-gray-600">
            {step === 1 ? "Cancelar" : "Anterior"}
          </Button>

          {step < 3 ? (
            <Button
              onClick={handleNext}
              className="bg-teal-600 hover:bg-teal-700 text-white"
              disabled={
                (step === 1 && (!formData.startDate || !formData.endDate)) ||
                (step === 2 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone))
              }
            >
              Siguiente
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-teal-600 to-orange-500 hover:from-teal-700 hover:to-orange-600 text-white"
            >
              Confirmar Reserva
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
