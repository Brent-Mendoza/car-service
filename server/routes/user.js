import { Router } from "express"
import { authenticateUser } from "../middlewares/AuthMiddleware.js"
import {
  getTechnicians,
  getUsers,
  getAllTechnicians,
  getCustomers,
  editUser,
  blockUser,
  unblockUser,
  deleteUser,
} from "../controllers/UserController.js"
import { validate } from "../middlewares/ValidationMiddleware.js"
import { editUserSchema } from "../schemas/userSchema.js"

const router = Router()

router.use(authenticateUser)

router.get("/technicians", getTechnicians)
router.get("/users", getUsers)
router.get("/all-technicians", getAllTechnicians)
router.get("/customers", getCustomers)
router.patch("/:id", validate(editUserSchema), editUser)
router.patch("/:id/block", blockUser)
router.patch("/:id/unblock", unblockUser)
router.delete("/:id", deleteUser)

export default router
