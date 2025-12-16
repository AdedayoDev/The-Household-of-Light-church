import { z } from "zod"

export const profileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(7, "Phone number is required"),
  gender: z.enum(["male", "female", "other"]),
  maritalStatus: z.enum(["single", "married", "divorced", "widowed"]),
})


export type ProfileInput = z.infer<typeof profileSchema>
