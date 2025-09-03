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
  editOwnDetails,
  verifyPassword,
  changePassword,
} from "../controllers/UserController.js"
import { validate } from "../middlewares/ValidationMiddleware.js"
import { editUserSchema, passwordSchema } from "../schemas/userSchema.js"

const router = Router()

router.use(authenticateUser)

router.get("/technicians", getTechnicians)
router.get("/users", getUsers)
router.get("/all-technicians", getAllTechnicians)
router.get("/customers", getCustomers)

// FIXED: Use correct schemas for each endpoint
router.patch("/edit", validate(editUserSchema), editOwnDetails)
router.post("/verify-password", verifyPassword)
router.patch("/new-password", validate(passwordSchema), changePassword)

router.patch("/:id", validate(editUserSchema), editUser)
router.delete("/:id", deleteUser)
router.patch("/:id/block", blockUser)
router.patch("/:id/unblock", unblockUser)

export default router
