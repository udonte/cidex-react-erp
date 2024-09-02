import { z } from "zod"



export const forgotPassword = z.object({
        email: z.string().email("Enter a valid email address"),
})
