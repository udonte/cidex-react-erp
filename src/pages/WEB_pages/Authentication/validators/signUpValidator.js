import { z } from "zod"

export const tenantSignUp = z.object({
        company_name: z.string().min(5, "Organization name must be at least 5 characters long"),
        email: z.string().email("Email is required"),
        referral_code: z.string().optional(),
        password: z.string()
                .min(8, 'Password must be at least 8 characters long')
                .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
                .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
                .regex(/\d/, 'Password must contain at least one number')
                .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')

})
