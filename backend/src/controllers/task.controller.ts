import { Request, Response } from "express";
import { createTaskSchema } from "../schemas/task.schemas";
import { createTask } from "../services/task.service";

export async function createTaskController(req: Request, res: Response) {
    const result = createTaskSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({ 
            message: "Datos inválidos",
            error: result.error.flatten() 
        });
    }

    try {
        const task = await createTask(result.data);
        return res.status(201).json(task);
    } catch (error) {
        console.error("Error al crear la tarea:", error);
        return res.status(500).json({ message: "Error al crear la tarea" });
    }
}