import { prisma } from "../server.js"
export async function createBook(req, res) {
  try {
    const { carId, serviceId, scheduledAt, technicianId } = req.body
    const userId = req.user.userId // from auth middleware

    // fetch service to check if customer can pick technician
    const service = await prisma.service.findUnique({
      where: { id: serviceId },
    })
    if (!service) {
      return res.status(404).json({ error: "Service not found" })
    }

    // if customer tried to assign tech but not allowed
    if (!service.allowCustomerTechChoice && technicianId) {
      return res
        .status(400)
        .json({ error: "Technician cannot be chosen for this service" })
    }

    // create booking
    const booking = await prisma.booking.create({
      data: {
        customerId: userId,
        carId,
        serviceId,
        scheduledAt: new Date(scheduledAt),
        technicianId: service.allowCustomerTechChoice ? technicianId : null,
      },
      include: {
        car: true,
        service: true,
        technician: true,
      },
    })

    res.json(booking)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: "Something went wrong" })
  }
}
