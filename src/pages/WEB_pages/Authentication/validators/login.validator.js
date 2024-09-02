import { z } from "zod"



export const adminLogin = z.object({
        username: z.string().email("Email is required"),
        password: z.string().min(1, "Password is required")
})

export const employeeLogin = z.object({
        username: z.string().email("Email is required"),
        password: z.string().min(1, "Password is required"),
        client_id: z.string().min(1, "Company ID is required")
})

