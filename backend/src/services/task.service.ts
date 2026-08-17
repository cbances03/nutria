import {prisma} from "../lib/prisma";

interface CreateTaskData {
    title: string;
    description?: string;
    priority: "LOW" | "MEDIUM" | "HIGH";
    estimated_minutes: number;
    due_date?: string;
}

export async function createTask(data: CreateTaskData) {
    return prisma.task.create({
        data: {
            title: data.title,
            description: data.description,
            priority: data.priority,
            estimated_minutes: data.estimated_minutes,
            due_date: data.due_date ? new Date(data.due_date) : null,
        },
    });
}
