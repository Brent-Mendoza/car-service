import axiosClient from "@/axiosClient"
import { formatCurrency } from "@/lib/formatter"
import { Car, Loader2, Pickaxe, User, XCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "react-toastify"

export default function GenerateQuoteModal({
  quoteModal,
  setQuoteModal,
  fetchBookings,
}) {
  const [loading, setLoading] = useState(false)

  const handleGenerateQuote = async (amount) => {
    setLoading(true)
    try {
      await axiosClient.post(
        `/quotes/${quoteModal.booking.id}/generate`,
        amount
      )
      toast.success("Quote generated successfully!")
      fetchBookings()
      setLoading(false)
      setQuoteModal({ booking: null, open: false })
    } catch (error) {
      toast.error("Something went wrong")
      setLoading(false)
    }
  }
  return (
    <div className="fixed inset-0 h-full w-full flex flex-items bg-black/20 justify-center  z-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 flex-1">
        <div className="w-full bg-white rounded-lg shadow border border-black md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl flex items-center gap-1">
                Details
              </h1>
              <XCircle
                className="cursor-pointer"
                onClick={() => setQuoteModal({ booking: null, open: false })}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold flex items-center gap-1">
                <User />
                Customer:
              </h2>
              <p>Name: {quoteModal.booking.customer.name}</p>
              <p>Email: {quoteModal.booking.customer.email}</p>
              <p>Phone: {quoteModal.booking.customer.phone}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold flex items-center gap-1">
                <Car />
                Car:
              </h2>
              <p>Plate No: {quoteModal.booking.car.plateNo}</p>
              <p>Brand: {quoteModal.booking.car.brand}</p>
              <p>Model: {quoteModal.booking.car.model}</p>
              <p>Year: {quoteModal.booking.car.year}</p>
              <p>Notes: {quoteModal.booking.car.notes}</p>
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-bold flex items-center gap-1">
                <Pickaxe />
                Service:
              </h2>
              <p>Service: {quoteModal.booking.service.name}</p>
              <p>Cost: {formatCurrency(quoteModal.booking.service.cost)}</p>
            </div>
            <div>
              <button
                disabled={loading}
                className="cursor-pointer w-full text-white bg-gray-600 hover:bg-gray-700 rounded-lg px-5 py-2.5 flex items-center justify-center"
                onClick={() =>
                  handleGenerateQuote({
                    amount: quoteModal.booking.service.cost,
                  })
                }
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Generate Quote"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
