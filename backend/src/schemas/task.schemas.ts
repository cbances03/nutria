import { z } from "zod";

export const createTaskSchema = z.object({
    title: z.string().trim().min(1, { message: "El título es obligatorio" }),
    description: z.string().trim().optional(),
    priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
    estimated_minutes: z.number().int().positive({ message: "El tiempo estimado debe ser un número positivo" }),
    due_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional()
});
